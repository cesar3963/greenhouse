const myAjaxRequest = new XMLHttpRequest();
myAjaxRequest.open("GET", "greenhouse.php", true);
myAjaxRequest.onload = NEW_FUNCTION;
myAjaxRequest.send();

function NEW_FUNCTION() {
  if (myAjaxRequest.status === 200) {
    document.getElementById("temps").innerHTML = myAjaxRequest.responseText;
  }
}
