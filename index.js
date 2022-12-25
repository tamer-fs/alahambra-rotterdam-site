/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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

const facebookBtn = document.getElementById('facebook');
const instagramBtn = document.getElementById('instagram');

facebookBtn.addEventListener('click', function () {
  window.location.href = "https://www.facebook.com/profile.php?id=100083371561019";
})

instagramBtn.addEventListener('click', function () {
  window.location.href = "https://www.instagram.com/alhambrarestaurant_/";
})