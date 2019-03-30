$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  // Copy button function
  $("#copy").click(function() {
    $("#copy-eventID").focus();
    $("#copy-eventID").select();
    document.execCommand("copy");
  });

});


