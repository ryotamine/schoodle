"use strict";

const express = require("express");
const router  = express.Router();
const moment  = require("moment");

module.exports = (knex) => {

  // Generate string of 16 random alphanumeric characters
  function generateRandomString() {
    let text = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 16; i++) {
      text += str.charAt(Math.floor(Math.random() * str.length));
    }
    return text;
  }

  // GET create event page
  router.get("/", (req, res) => {
    res.render("event");
  });

  // POST create event page
  router.post("/", (req, res) => {
    let eventID = generateRandomString();
    knex("events").insert({
      title: req.body.title,
      description: req.body.note,
      location: req.body.location,
      uniqueURL: eventID
    }).returning("id")
    .then(function(id) {
      knex("options_date").insert([
          { date_option: req.body.date1, event_id: id[0] },
          { date_option: req.body.date2, event_id: id[0] },
          { date_option: req.body.date3, event_id: id[0] }
        ]).then(function (result) {
          res.redirect(`/events/host_confirmation/${eventID}`);
        });
    });
  });

  // GET host confirmation page
  router.get("/host_confirmation/:eventID", (req, res) => {
    let templateVars = { eventID: req.params.eventID };
    res.render("host_confirmation", templateVars);
  });

  // GET event URL page
  router.get("/:event_id", (req, res) => {
    knex.select(["events.id as event_id", "events.title", "events.location", "events.description", "options_date.id as date_id", "options_date.date_option", "options_date.votecount"]).from("events").innerJoin("options_date", "events.id", "=", "options_date.event_id").where("events.uniqueURL", req.params.event_id).orderBy("options_date.date_option", "asc")
      .then(function(result) {
        let title = result[0].title;
        let location = result[0].location;
        let description = result[0].description;
        let date_data = [];
        result.forEach((element) => {
          let date_data_info = {
            date: moment(element.date_option).format("dddd MMMM Do YYYY, h:mma"),
            id: element.date_id,
            votecount: element.votecount
          };
          date_data.push(date_data_info);
        });
        let templateVars = { eventID: req.params.event_id, data: result, title: title, location: location, description: description, date_data: date_data };
        res.render("event_URL", templateVars);
      });
  });

  // POST event URL page
  router.post("/:event_id", (req, res) => {
    res.redirect(`/${req.params.event_id}/guest_confirmation`);
  });

  // GET guest confirmation page
  router.get("/:event_id/guest_confirmation", (req, res) => {
    let templateVars = { eventID: req.params.event_id };
    res.render("guests_confirmation", templateVars);
  });

  //POST guest confirmation page
  router.post("/:event_id/guest_confirmation", (req, res) => {
    let ids = [];

    if (req.body.date1) {
      ids.push(req.body.date1);
    };

    if (req.body.date2) {
      ids.push(req.body.date2);
    };

    if (req.body.date3) {
      ids.push(req.body.date3);
    };

    knex("options_date")
      .whereIn("id", ids)
      .increment("votecount", 1)
      .then(function(result) {
        res.cookie("dateSelected", ids.join(","));
        res.redirect(`/events/${req.params.event_id}/guest_confirmation`);
    });
  });

  // GET event modify page
  router.get("/:event_id/guest_confirmation/modify", (req, res) => {
    let selected_dates = [];
    knex.select(["events.id as event_id", "events.title", "events.location", "events.description", "options_date.id as date_id", "options_date.date_option", "options_date.votecount"]).from("events").innerJoin("options_date", "events.id", "=", "options_date.event_id").where("events.uniqueURL", req.params.event_id).orderBy("options_date.date_option", "asc")
      .then(function(result) {
        let title = result[0].title;
        let location = result[0].location;
        let description = result[0].description;
        let date_data = [];
        if(req.cookies["dateSelected"]) {
          selected_dates = req.cookies["dateSelected"].split(",");
        };

        result.forEach((element) => {
          let date_data_info = {
            date: moment(element.date_option).format("dddd MMMM Do YYYY, h:mma"),
            id: element.date_id,
            votecount: element.votecount,
            is_selected: selected_dates.includes(element.date_id.toString())
          };
          date_data.push(date_data_info);
        });

        let templateVars = { eventID: req.params.event_id, data: result, title: title, location: location, description: description, date_data: date_data };
        res.render("event_modify", templateVars);
      });
  });

  // POST event modify page
  router.post("/:event_id/guest_confirmation/modify", (req, res) => {
    let pre_selected_date = req.cookies["dateSelected"].split(",");
    let new_selected_date = [];

    if (req.body.date1) {
      new_selected_date.push(req.body.date1);
    };

    if (req.body.date2) {
      new_selected_date.push(req.body.date2);
    };

    if (req.body.date3) {
      new_selected_date.push(req.body.date3);
    };

    let increment_options = [];
    let decrement_options = [];

    new_selected_date.forEach((element) => {
      if (!pre_selected_date.includes(element)) {
        increment_options.push(parseInt(element));
      }
    });

    pre_selected_date.forEach((element) => {
      if (!new_selected_date.includes(element)) {
        decrement_options.push(parseInt(element));
      }
    });

    if (increment_options.length > 0 || decrement_options.length > 0) {
      knex("options_date")
        .whereIn("id", increment_options)
        .increment("votecount", 1)
        .then(function(result) {
           knex("options_date")
            .whereIn("id", decrement_options)
            .where("votecount", ">", 0)
            .decrement("votecount", 1)
            .then(function(result) {
              res.cookie("dateSelected", new_selected_date.join(","));
              res.redirect(`/events/${req.params.event_id}/results`);
            });
        });
    } else {
      res.redirect(`/events/${req.params.event_id}/results`);
    };
  });

  // GET event results page
  router.get("/:event_id/results", (req, res) => {
    knex.select(["events.id as event_id", "events.title", "events.location", "events.description", "options_date.id as date_id", "options_date.date_option", "options_date.votecount"]).from("events").innerJoin("options_date", "events.id", "=", "options_date.event_id").where("events.uniqueURL", req.params.event_id).orderBy("options_date.date_option", "asc")
      .then(function(result) {
        let title = result[0].title;
        let location = result[0].location;
        let description = result[0].description;
        let date_data = [];

        result.forEach((element) => {
          let date_data_info = {
            date: moment(element.date_option).format("dddd MMMM Do YYYY, h:mma"),
            id: element.date_id,
            votecount: element.votecount
          }
          date_data.push(date_data_info);
        });

        let templateVars = { eventID: req.params.event_id, data: result, title: title, location: location, description: description, date_data: date_data };
        res.render("event_results", templateVars);
      });
  });

  // POST event results page
  router.post("/:event_id/results", (req, res) => {
    res.redirect(`/events/${req.params.event_id}/results`);
  });

  // DELETE event when guest declines
  router.delete("/:event_id/results", (req, res) => {
    res.redirect(`/events/guest_confirmation`);
  });

  // Return router
  return router;
}
