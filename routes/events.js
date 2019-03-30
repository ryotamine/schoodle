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
  var eventID = generateRandomString();
  var templateVars = { eventID };

  // GET create event page
  router.get("/", (req, res) => {
    res.render("event");
  });

  // POST create event page
  router.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/events/host_confirmation");
  });

  // Vasily's Route
  // router.post("/", (req, res) => {
  //   let id = generateRandomString()
  //   res.redirect(`/events/host_confirmation/${id}`);
  // });

  // GET host confirmation page
  router.get("/host_confirmation", (req, res) => {
    // let templateVars = { }
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

  // Return router
  return router;

}