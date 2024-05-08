// script.js

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
            
    // Get input values
    var location = document.getElementById('location').value;
    var checkIn = document.getElementById('checkIn').value;
    var checkOut = document.getElementById('checkOut').value;
    var guest = document.getElementById('guest').value;

    // Do something with the input values (e.g., send them to a server)
    console.log("Location: " + location);
    console.log("Check In: " + checkIn);
    console.log("Check Out: " + checkOut);
    console.log("Guest: " + guest);

    // You can add further processing here, such as validation or sending data to a server
}

document.addEventListener('DOMContentLoaded', function() {
// Function to update the filter count when a checkbox is clicked
function updateFilterCount() {
    var houseCount = document.querySelectorAll('#house:checked').length;
    var hostelCount = document.querySelectorAll('#hostel:checked').length;
    var flatCount = document.querySelectorAll('#flat:checked').length;
    var villaCount = document.querySelectorAll('#villa:checked').length;
    var suiteCount = document.querySelectorAll('#suite:checked').length;
    var airCount = document.querySelectorAll('#air:checked').length;
    var wifiCount = document.querySelectorAll('#wifi:checked').length;
    var gymCount = document.querySelectorAll('#gym:checked').length;
    var poolCount = document.querySelectorAll('#pool:checked').length;
    var kitchenCount = document.querySelectorAll('#kitchen:checked').length;

    document.getElementById('housecount').textContent = '(' + houseCount + ')';
    document.getElementById('hostelcount').textContent = '(' + hostelCount + ')';
    document.getElementById('flatcount').textContent = '(' + flatCount + ')';
    document.getElementById('villacount').textContent = '(' + villaCount + ')';
    document.getElementById('suitecount').textContent = '(' + suiteCount + ')';
    document.getElementById('aircount').textContent = '(' + airCount + ')';
    document.getElementById('wificount').textContent = '(' + wifiCount + ')';
    document.getElementById('gymcount').textContent = '(' + gymCount + ')';
    document.getElementById('poolcount').textContent = '(' + poolCount + ')';
    document.getElementById('kitchencount').textContent = '(' + kitchenCount + ')';
}

// Attach event listener to checkboxes
var checkboxes = document.querySelectorAll('.filter input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateFilterCount);
});

// Function to handle "View More" link click
document.getElementById('viewMoreLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Add your view more functionality here
    alert('View more functionality clicked!');
});
});


// Function to toggle modal visibility
function toggleModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// When the user clicks the button, open the modal
var btn = document.getElementById("openModalBtn");
btn.onclick = function() {
  toggleModal();
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  toggleModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Function to handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  var formData = new FormData(this); // Get form data
  var bookingDetails = {};
  formData.forEach(function(value, key) {
    bookingDetails[key] = value;
  });
  console.log('Booking Details:', bookingDetails);
  toggleModal(); // Close modal after form submission
});

function submitBookingForm() {
  var formData = new FormData(document.getElementById('bookingForm')); // Get form data
  var bookingDetails = {};
  formData.forEach(function(value, key) {
    bookingDetails[key] = value;
  });
  console.log('Booking Details:', bookingDetails);
  toggleModal(); // Close modal after form submission
}


