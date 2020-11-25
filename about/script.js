
document.addEventListener("DOMContentLoaded", function(e) {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  console.log("script");
  console.log(coll);
  console.log(coll.length);
  for (i = 0; i < coll.length; i++) {
    console.log("collapse detected");
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
})