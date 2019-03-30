"use strict";

const express = require('express');
const router  = express.Router();

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

  // Generate unique event ID

  // GET create event page
  router.get("/", (req, res) => {
    res.render("event");
  });

  // POST create event page
  router.post("/", (req, res) => {
    var eventID = generateRandomString();
    console.log(req.body.title);
    console.log(req.body.note);
    console.log(req.body.location);
    knex("events").insert({
      title: req.body.title,
      description: req.body.note,
      location: req.body.location,
      uniqueURL: eventID
    }).returning('id')
    .then(function (id) {
      console.log(typeof(id));
      console.log(id[0]);
      knex("options_date").insert([
          {date_option: req.body.date1, event_id: id[0]},
          {date_option: req.body.date2, event_id: id[0]},
          {date_option: req.body.date3, event_id: id[0]}
        ]).then(function (result) {
        res.redirect(`/events/host_confirmation/${eventID}`);
      });
    });
  });

  // Vasily's Route
  // router.post("/", (req, res) => {
  //   let id = generateRandomString()
  //   res.redirect(`/events/host_confirmation/${id}`);
  // });

  // GET host confirmation page
  router.get("/host_confirmation/:eventID", (req, res) => {
    console.log(req.params.eventID);
    let templateVars = { eventID: req.params.eventID };
    res.render("host_confirmation", templateVars);
  });

  // GET event URL page
  router.get("/:event_id", (req, res) => {
    res.render("event_URL", templateVars);
  });

  // POST event URL page
  router.post("/:event_id", (req, res) => {
    res.redirect(`/${eventID}/guest_confirmation`);
  });

  // GET guest confirmation page
  router.get("/:event_id/guest_confirmation", (req, res) => {
    res.render("guests_confirmation", templateVars);
  });

  // GET event modify page
  router.get("/:event_id/guest_confirmation/modify", (req, res) => {
    res.render("event_modify", templateVars);
  });

  // POST event modify page
  router.post("/:event_id/modify", (req, res) => {
    res.redirect(`/${eventID}/guest_confirmation`);
  });

  // GET event results page
  router.get("/:event_id/results", (req, res) => {
    res.render("event_results");
  });

  // POST event URL page when event is declined
  router.get("/event_URL", (req, res) => {
    res.render (`/${eventID}/guest_confirmation`);
  });

  router.get("/:event_id/delete_confirmation", (req, res) => {

    console.log('event_id: ', req.params.event_id);
    res.redirect(`/events/${eventID}/guest_confirmation`);
  });

  // Return router
  return router;

}