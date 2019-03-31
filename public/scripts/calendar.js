
$(document).ready(function() {

  // pg.insert(knex.select().from('options_date').insert({date_option1: dateChoices.flatpickr1}))
  // pg.insert(knex.select().from('options_date').insert({date_option2: dateChoices.flatpickr2}))
  // pg.insert(knex.select().from('options_date').insert({date_option3: dateChoices.flatpickr3}))

  var dateChoices={};

  flatpickr("#flatpickr", {
    minDate: "today",
    altInput: true,
    altFormat: "D F J, Y at H:i",
    enableTime: true,
    //dateFormat: "Y-m-d-D, H:i",
    onClose: function(selectedDates) {
      var id = ($(this.element).attr('id'));
      dateChoices[id]=(selectedDates[0]);
      Object.values(dateChoices);

      console.log(dateChoices.flatpickr1);
      console.log(dateChoices.flatpickr2);
      console.log(dateChoices.flatpickr3);

      $("#createEvent").click(function() {

      });
    }
  });
});