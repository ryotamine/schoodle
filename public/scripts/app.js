// Host_Confirmation Page
// Copy Button

$(() => {
  $("#copy").click(function() {
    $("#copy-eventID").focus();
    $("#copy-eventID").select();
    document.execCommand("copy");
  });
});

// Kept for Reference [Not using]
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  // $("#create_event").submit(function(event){
  //   event.preventDefault();

  //   let data = $(this).serialize();

  //   console.log(data);

  //   $.ajax({
  //   method: "POST",
  //   url: "/events",
  //   data: $("#create_event").serialize()
  //   });
  // });


