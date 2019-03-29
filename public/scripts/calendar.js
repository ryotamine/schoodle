$(document).ready(function() { 

  var dateOptions=[];
  flatpickr("#flatpickr", {
    enableTime: true,
    dateFormat: "F, d Y H:i",
    onClose: function(selectedDates, dateStr, instance) {
      console.log(selectedDates[0])
      dateOptions.push(selectedDates[0]);
    },
  });
  console.log(dateOptions);
});