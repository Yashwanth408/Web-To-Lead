let captchaChecked = false;

function onSubmitHandler(event) {

  if(captchaChecked){
    let element = document.querySelector("#lead-date");
    let hiddenDate = document.querySelector(".hidden-date");
    let formattedDate = new Date(element.value).toLocaleDateString("en-IN");
    hiddenDate.value = formattedDate;
  }
  else {
    alert('Please complete the recaptcha!')
    event.preventDefault();  
  }

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

function captchaSuccess(){
    captchaChecked = true;
}