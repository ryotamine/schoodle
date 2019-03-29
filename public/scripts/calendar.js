$(document).ready(function() { 

  console.log("document ready calendar.js");
  flatpickr("#flatpickr", {
    enableTime: true,
    dateFormat: "F, d Y H:i"
  });
});

