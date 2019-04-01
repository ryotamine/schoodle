// Link copy button
$(() => {
  $("#copy").click(function() {
    $("#copy-eventID").focus();
    $("#copy-eventID").select();
    document.execCommand("copy");
  });
});