"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // GET create event page
  router.get("/", (req, res) => {
    res.render("event");
  });

  // POST create event page
  router.post("/", (req, res) => {
    res.redirect("/:event_id/host_confirmation");
  });

  // GET host_confirmation page
  router.get("/:event_id/confirmation", (req, res) => {
    res.render("host_confirmation");
  });

  // GET event_URL page
  router.get("/:uniqueURL", (req, res) => {
    res.render("event_URL");
  });

  // POST event_URL page
  router.post("/:uniqueURL", (req, res) => {
    res.redirect("/:uniqueURL/guest_confirmation");
  });

  // GET guest_confirmation page
  router.get("/:uniqueURL/guests_confirmation", (req, res) => {
    res.render("guests_confirmation");
  });

  // GET event_results page
  router.get("/:uniqueURL/results", (req, res) => {
    res.render("event_results");
  });

  // GET event_modify page
  router.get("/:uniqueURL/guest_confirmation/modify", (req, res) => {
    res.render("event_modify");
  });

  // POST event_modify page
  router.post("/:event_id/modify", (req, res) => {
    res.redirect("/:event_id/guest_confirmation");
  });

  // Return router
  return router;

}
