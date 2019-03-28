"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
// GET homepage
  router.get("/", (req, res) => {
    res.render("index");
    // knex
    //   .select("*")
    //   .from("users")
    //   .then((results) => {
    //     res.json(results);
    // });
  });
  return router;

}

// GET create event page
router.get("/event", (req, res) => {
  res.render("event");
});

// POST create event page
router.post("/event", (req, res) => {
  res.redirect("/event/:event_id/host_confirmation");
});

// GET host_confirmation page
router.get("/event/:event_id/confirmation", (req, res) => {
  res.render("host_confirmation");
});

// GET event_URL page
router.get("/event/:uniqueURL", (req, res) => {
  res.render("event_URL");
});

// POST event_URL page
router.post("/event/:uniqueURL", (req, res) => {
  res.redirect("/event/:uniqueURL/guest_confirmation");
});

// GET guest_confirmation page
router.get("/event/:uniqueURL/guest_confirmation", (req, res) => {
  res.render("guest_confirmation");
});

// GET event_results page
router.get("/event/:uniqueURL/results", (req, res) => {
  res.render("event_results");
});

// GET event_modify page
router.get("/event/:uniqueURL/guest_confirmation/modify", (req, res) => {
  res.render("event_modify");
});

// POST event_modify page
router.post("/event/:event_id/modify", (req, res) => {
  res.redirect("/event/:event_id/guest_confirmation");
});
