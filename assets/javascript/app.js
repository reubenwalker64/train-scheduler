$(document).ready(function(){

    // Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyDhYez0osgtFI1KLfk0-6L0puy9Tglh0pQ",
    authDomain: "bootcamp-65344.firebaseapp.com",
    databaseURL: "https://bootcamp-65344.firebaseio.com",
    projectId: "bootcamp-65344",
    storageBucket: "bootcamp-65344.appspot.com",
    messagingSenderId: "917170828924"
  };
  firebase.initializeApp(config);
  
  
  // Create a variable to reference the database.
  var database = firebase.database();

// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = moment($("#firstTrain-input").val().trim(), "MM/DD/YYYY").format("X");
    var frequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      city: destination,
      start: firstTrain,
      frequency: frequency
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.city);
    console.log(newTrain.start);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#employee-name-input").val("");
    $("#destination-input").val("");
    $("#firstTrain-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().city;
    var firstTrain = childSnapshot.val().start;
    var frequency = childSnapshot.val().frequency;
  
    // Employee Info
    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);
  
    //CHANGE empStart TO firstTrain ???
    // Prettify the employee start
    var firstTrainPretty = moment.unix(firstTrain).format("MM/DD/YYYY");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var empMonths = moment().diff(moment(firstTrain, "X"), "months");
    console.log(empMonths);
  
    // Calculate the total billed rate
    var empBilled = empMonths * frequency;
    console.log(empBilled);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(firstTrainPretty),
      $("<td>").text(empMonths),
      $("<td>").text(frequency),
      $("<td>").text(empBilled)
    );
  
    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  
//ADD FIREBASE CLASS ACTIVITY
/*EDIT BELOW TO MATCH ABOVE WITH TRAIN INFO

// Initial Values
var employeeName = "";
var role = "";
var startDate = 0;
var monthlyRate = "";

// Capture Button Click
$("#submit-bid").on("click", function(event) {
  event.preventDefault();


  // Grabbed values from text boxes
  employeeName = $("#employeeName").val().trim();
  role = $("#role").val().trim();
  startDate = $("#startDate").val().trim();
  monthlyRate = $("#monthlyRate").val().trim();

  console.log(employeeName);
  console.log(role);
  console.log(startDate);
  console.log(monthlyRate);

  // Code for handling the push
  database.ref().push({
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {

  //USE RECENT USER WITH ALL USERS SOLVED EXAMPLE???  YES CHANGE BELOW
  // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().employeeName);
  console.log(childSnapshot.val().role);
  console.log(childSnapshot.val().startName);
  console.log(childSnapshot.val().monthlyRate);
  /*
  //ADD MONTHS WORKED AND TOTAL BILLED???
  console.log(childSnapshot.val().comment);
  console.log(childSnapshot.val().joinDate);

  // full list of items to the well
  $("#full-member-list").append("<div class='well'><span class='member-name'> " +
    childSnapshot.val().name +
    " </span><span class='member-email'> " + childSnapshot.val().email +
    " </span><span class='member-age'> " + childSnapshot.val().age +
    " </span><span class='member-comment'> " + childSnapshot.val().comment +
    " </span></div>");
  /*
  // storing the snapshot.val() in a variable for convenience BELOW RECENT USER WITH PUSH ACTIVITY
  var sv = snapshot.val().employeeName;
  var sv = snapshot.val().role;
  var sv = snapshot.val().startName;
  var sv = snapshot.val().monthlyRate;
  

  // Console.loging the last user's data
  console.log(sv.employeeName);
  console.log(sv.role);
  console.log(sv.startDate);
  console.log(sv.monthlyRate);

  // Change the HTML to reflect
  $("#employeeName").text(sv.employeeName);
  $("#role").text(sv.role);
  $("#startDate").text(sv.startDate);
  $("#monthlyRate").text(sv.monthlyRate);


  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
*/

//bring in MomentJS ???

var randomDate = "02/23/1999";
    var randomFormat = "MM/DD/YYYY";
    var convertedDate = moment(randomDate, randomFormat);

    // Using scripts from moment.js write code below to complete each of the following.
    // Console.log to confirm the code changes you made worked.

    // 1 ...to convert the randomDate into three other date formats
    console.log(convertedDate.format("MM/DD/YY"));
    console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));
    console.log(convertedDate.format("X"));
    console.log("----------------------------------------");

    // 2 ...to determine the time in years, months, days between today and the randomDate
    console.log(convertedDate.toNow());
    console.log(convertedDate.diff(moment(), "years"));
    console.log(convertedDate.diff(moment(), "months"));
    console.log(convertedDate.diff(moment(), "days"));
    console.log("----------------------------------------");

    // 3 ...to determine the number of days between the randomDate and 02/14/2001
    var newDate = moment("02/14/2001", randomFormat);
    console.log(convertedDate.diff(newDate, "days"));

    // 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
    console.log(convertedDate.format("X"));
    console.log("----------------------------------------");

    // 5 ...to determine what day of the week and what week of the year this randomDate falls on.
    console.log(convertedDate.format("DDD"));
    console.log(convertedDate.format("dddd"));

});