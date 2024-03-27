function onSubmitHandler(event) {
  //event.preventDefault();
  let element = document.querySelector("#lead-date");
  let hiddenDate = document.querySelector(".hidden-date");
  hiddenDate.value = new Date(element.value).toLocaleDateString("en-IN");
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
