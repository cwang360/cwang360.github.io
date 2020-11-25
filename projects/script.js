var x = window.matchMedia("(max-width: 1050px)");
smallWindow(x); // Call listener function at run time
x.addListener(smallWindow); // Attach listener function on state changes

function openFile(evt, fileName) {
    console.log("click "+ fileName);
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("inner-box");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(fileName).style.display = "block";
    evt.currentTarget.className += " active";


  }

function setup(){
    if(!x.matches){
        document.getElementById("defaultOpen").click();
    }
    
}


function smallWindow(x) {
    console.log(x.matches);
    if (x.matches) { // If media query matches
      // Get all elements with class="tabcontent" and show them
        var tabcontent = document.getElementsByClassName("inner-box");
        console.log(tabcontent.length);
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    } 
  }
  

  