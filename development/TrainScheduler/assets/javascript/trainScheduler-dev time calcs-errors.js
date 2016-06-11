// Steps to complete:
/*
1. Create Firebase link
2. Create button for adding new trains - then update the html + update the database
3. Create a way to retrieve trains from the train database.
4. Create a way to calculate the months worked. Using difference between start and current time. Then use moment.js formatting to set difference in months.
5. Calculate Total billed

*/
// 1. Link to Firebase
var trainData = new Firebase("https://trainscheduler.firebaseio.com/");

// 2. Button for adding trains
$("#addTrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var trainFreq = $("#freqInput").val().trim();

	// Creates local "temporary" object for holding train data
	var newTrain = {
		name:  trainName,
		dest: trainDest,
		start: trainStart,
		freq: trainFreq
	}

	// Uploads train data to the database
	trainData.push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.start);
	console.log(newTrain.freq)

	// Alert
	alert("train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().name;
	var trainDest = childSnapshot.val().dest;
	var trainStart = childSnapshot.val().start;
	var trainFreq = childSnapshot.val().freq;

	// train Info
	console.log(trainName);
	console.log(trainDest);
	console.log(trainStart);
	console.log(trainFreq);

	// Prettify the train start
		// var trainStartPretty = moment.unix(trainStart).format("MM/DD/YY");

	// Calculate the months worked using hardconre math
	// To calculate the months worked
		// var trainMonths = moment().diff(moment.unix(trainStart, 'X'), "months");
		// console.log(trainMonths);

	// Determine current time
	// If current time is after train start time, then calculate next train Arrival Time and Minutes Away
	// If current time is negative or train start time is after current time, then next Arrival Time is the Start Time

	//var currTime = moment(new Time (randomDate));
	// moment(convertedDate).toNow();

	console.log(moment(trainStart).toNow());
	console.log(moment(convertedDate).diff( moment(), "minutes"));
	console.log(moment(convertedDate).diff( moment(), "minutes"));

	// Calculate the total billed freq
		// var trainBilled = trainMonths * trainFreq;
		// console.log(trainBilled);

	// Calculate the time when Next train Arrives
	var trainNextArr
	//	if (results[i].rating == "r" || results[i].rating == "pg-13")
              // {

              // }

	// Calculate the time remaining until Next train Arrives
	var trainMinsAway

	// Add each train's data into the table
	//$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainStartPretty + "</td><td>" + TrainMonths + "</td><td>" + trainFreq + "</td><td>");
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + trainNextArr + "</td><td>" + trainMinsAway + "</td><td>");

});

	


// Example Time Math
// -----------------------------------------------------------------------------
// Assume train start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case



