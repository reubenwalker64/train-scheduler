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
    // drop , "MM/DD/YYYY").format("X") ???
    var firstTrain = moment($("#firstTrain-input").val().trim(), "MM/DD/YYYY").format("X");
    var frequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      city: destination,
      start: firstTrain,
      frequency: frequency
    // add - dateAdded: firebase.database.ServerValue.TIMESTAMP ???
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
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#firstTrain-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  // childSnapshot correct??? add prevChildKey ???
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
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
  
    //CREATE NEXT ARRIVAL FUNCTION
    
    //CHANGE empStart TO firstTrain ???
    // Prettify the employee start
    var firstTrainPretty = moment.unix(firstTrain).format("MM/DD/YYYY");
  
    // Calculate the NEXT ARRIVAL AND/OR MINUTES AWAY using hardcore math
    // change "months", change "x"???
    var trainArrival = moment().diff(moment(firstTrain, "X"), "months");
    console.log(trainArrival);
  
    // Calculate the total billed rate
    //EDIT THIS TO GET NEXT ARRIVAL OR MINUTES AWAY
    var empBilled = trainArrival * frequency;
    console.log(empBilled);
  
    // Create the new row
    // CONVERT firstTrainPretty TO MINUTES AWAY
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(trainArrival),
      $("<td>").text(firstTrainPretty)
      
      
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  
//CREATE NEXT ARRIVAL FUNCTION

  

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