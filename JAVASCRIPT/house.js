
    // Function to toggle navigation bar
    function togglebtn() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    // Function to check availability
    function checkAvailability() {
        var checkinDate = document.getElementById('checkInDate').value;
        var checkoutDate = document.getElementById('checkOutDate').value;
        var guestcount = document.getElementById('guestCount').value;

        // You can perform further actions here, such as checking availability with a server-side API
        // For now, let's just display the inputs in the console
        console.log("Check-in Date:", checkinDate);
        console.log("Check-out Date:", checkoutDate);
        console.log("Guest Count:", guestcount);
    }
