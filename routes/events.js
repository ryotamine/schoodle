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

  // User database
  const users = {};

  // Event URL database
  const eventURL = {};

  // GET create event page
  router.get("/", (req, res) => {
    res.render("event");
  });

  // POST create event page
  router.post("/", (req, res) => {
    res.redirect("/host_confirmation");
  });

  // GET host_confirmation page
  router.get("/host_confirmation", (req, res) => {
    const eventID = generateRandomString();
    let templateVars = { eventID };
    res.render("host_confirmation", templateVars);
  });

  // GET event_URL page
  router.get("/:event_id", (req, res) => {
    res.render("event_URL");
  });

  // POST event_URL page
  router.post("/:event_id", (req, res) => {
    res.redirect(`/${eventID}/guest_confirmation`);
  });

  // GET guest_confirmation page
  router.get("/:event_id/guests_confirmation", (req, res) => {
    res.render("guests_confirmation");
  });

  // GET event_results page
  router.get("/:event_id/results", (req, res) => {
    res.render("event_results");
  });

  // GET event_modify page
  router.get("/:event_id/guest_confirmation/modify", (req, res) => {
    res.render("event_modify");
  });

  // POST event_modify page
  router.post("/:event_id/modify", (req, res) => {
    res.redirect(`/${eventID}/guest_confirmation`);
  });

  // Return router
  return router;

}