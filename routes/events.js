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

// GET

// GET create event page
  router.get("/event", (req, res) => {
    res.render("event");
  });
  
// GET host_confirmation page
  router.get("/event/:event_id/confirmation", (req, res) => {
    res.render("host_confirmation");
  });

// GET event_URL page
  router.get("/event/:uniqueURL", (req, res) => {
    res.render("event_URL")
  });

  // GET guest_confirmation page REVIEW W MENTORS!!!!!!!!!!!!!!!!!!!
    router.get("/event/:uniqueURL/guest_confirmation", (req, res) => {
      res.render("guest_confirmation")
    });

  // GET event_results page
  router.get("/event/:uniqueURL/results", (req, res) => {
    res.render("event_results")
  });

  router.get("/event/:uniqueURL/guest_confirmation/modify", (req, res) => {
    res.render("event_modify")
  });




// POST

// POST create event page
  router.post("/event", (req, res) => {
    res.redirect("/event/:event_id/host_confirmation");
  });

// PUT for poll page (event_URL) REVIEW W MENTOR!!!!!!!!
  router.post("/event/:event_id", (req, res) => {
    res.redirect("/event/:event_id/guest_confirmation");
  });

  router.post("/event/:event_id/modify", (req, res) => {
    res.redirect("/event/:event_id/guest_confirmation");
  });
