
document.addEventListener("DOMContentLoaded" , function(){

    document.getElementById("showloginform").addEventListener("click" , function(){
        var loginform = document.getElementById("loginForm");
     if(loginform.style.display === "none"){
        loginform.style.display = "block";
    
     }
     else{
        loginform.style.display = "none";
     }
    });
    
    document.getElementById("loginFormElement").addEventListener("submit" , function(event){
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check credentials (This is a simple example, replace it with your actual validation logic)
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
    console.log("Name: " + username);
    console.log("Password: " + password);
    });
    });
    
    
    

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
            
    // Get input values
    var location = document.getElementById('location').value;
    var checkIn = document.getElementById('checkIn').value;
    var checkOut = document.getElementById('checkOut').value;
    var guest = document.getElementById('guest').value;

   //print the values
    console.log("Location: " + location);
    console.log("Check In: " + checkIn);
    console.log("Check Out: " + checkOut);
    console.log("Guest: " + guest);

   
}

    