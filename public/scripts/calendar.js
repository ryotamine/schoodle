// Date and time calendar function
$(document).ready(function() {
  var dateChoices = {};
  flatpickr("#flatpickr", {
    minDate: "today",
    altInput: true,
    altFormat: "D F J, Y at h:i K",
    enableTime: true,
    onClose: function(selectedDates) {
      var id = ($(this.element).attr("id"));
      dateChoices[id] = (selectedDates[0]);
      Object.values(dateChoices);
      console.log(dateChoices);
      $("#createEvent").click(function() {
      });
    }
  });
});