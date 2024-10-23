// User Information Storage Application

// Define user information variables
let userName = "John Doe"; // String
let userAge = 30; // Number
let userEmail = "johndoe@example.com"; // String
let isActiveUser = true; // Boolean

// Create an object to store user information
let userInfo = {
    name: userName,
    age: userAge,
    email: userEmail,
    active: isActiveUser
};

// Function to display user information
function displayUserInfo(user) {
    console.log("User Information:");
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("Email: " + user.email);
    console.log("Active User: " + user.active);
}

// Call the function to display user information
displayUserInfo(userInfo);
