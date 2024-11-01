const elem = document.getElementById("icon");
alert("Cardoso Projects ativa o nome light do site")
function LightMode() {
  document.body.classList.toggle("light")
  console.log("Clicado")
}

function toggleList() {
  elem.classList.toggle("fa-bars")
  elem.classList.toggle("fa-x")
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}