var MD5 = new Hashes.MD5;
$(document).ready(function() {
    $('.page-content').hide();
    var pw = prompt("Please enter your password", "");
    if (MD5.hex(pw) != "508f62705c3dc1f374585f1d713377e7") {
        alert("Wrong password.")
        window.location.replace("http://rpiai.com");
    } else {
        $('.page-content').show();
    }
});
document.getElementById("link_id").addEventListener("click", function () {
  document.getElementById("linkAudio").play();
});