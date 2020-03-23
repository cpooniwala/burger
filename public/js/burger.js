$("#burgerSubmit").on("click", function(event) {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "/api/createburger"
  }).then(function(data) {
    console.log(data);
  });
});
