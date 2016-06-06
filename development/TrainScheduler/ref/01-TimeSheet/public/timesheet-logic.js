// Steps to complete:
/*
1. Create Firebase link
2. Create button for adding new employees - then update the html + update the database
3. Create a way to retrieve employees from the employee database.
4. Create a way to calculate the months worked. Using difference between start and current time. Then use moment.js formatting to set difference in months.
5. Calculate Total billed

*/
// 1. Link to Firebase
var employeeData = new Firebase("https://rcb-employeetracker.firebaseio.com/");

// 2. Button for adding Employees
$("#addEmployeeBtn").on("click", function(){

	// Grabs user input
	var empName = $("#employeeNameInput").val().trim();
	var empRole = $("#roleInput").val().trim();
	var empStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var empRate = $("#rateInput").val().trim();

	// Creates local "temporary" object for holding employee data
	var newEmp = {
		name:  empName,
		role: empRole,
		start: empStart,
		rate: empRate
	}

	// Uploads employee data to the database
	employeeData.push(newEmp);

	// Logs everything to console
	console.log(newEmp.name);
	console.log(newEmp.role);
	console.log(newEmp.start);
	console.log(newEmp.rate)

	// Alert
	alert("Employee successfully added");

	// Clears all of the text-boxes
	$("#employeeNameInput").val("");
	$("#roleInput").val("");
	$("#startInput").val("");
	$("#rateInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
employeeData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var empName = childSnapshot.val().name;
	var empRole = childSnapshot.val().role;
	var empStart = childSnapshot.val().start;
	var empRate = childSnapshot.val().rate;

	// Employee Info
	console.log(empName);
	console.log(empRole);
	console.log(empStart);
	console.log(empRate);

	// Prettify the employee start
	var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
	// Calculate the months worked using hardconre math
	// To calculate the months worked
	var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
	console.log(empMonths);

	// Calculate the total billed rate
	var empBilled = empMonths * empRate;
	console.log(empBilled);

	// Add each train's data into the table
	$("#employeeTable > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" + empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

});


// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case



