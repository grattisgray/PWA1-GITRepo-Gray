/*
	Name: Michael Gray
	Date: August 9, 2015
	Assignment: ANALYZE Buggy Search v1
*/

/* Pseudocode for Search Database

Get users input term or terms (strings)

If character length is less than three
	alert the user with this message
	"Your search query is too small, try again."

Else search the database for the term

	by splitting the users input into an array
		check the database for each string of characters
	If no match is found display
		"Try searching for JavaScript. Just an idea
		Display with the proper HTML tags and CSS styles
	Else display the search results
		With proper HTML tags and CSS styles
		Links to each result with the proper titles
		Anchor the url's
 */

// Create privatized scope using a self-executing function //
// Function is used to search site

(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = '';
	
	// Validates search query
	var validate = function(query){//error1-2: logical error corrected, and corrected the spelling of validate
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){
			query = query.trim(1, query.length);//error 3: changed substring to trim
		}
		while(query.charAt(query.length-1) === ""){
			query = query.trim(0, query.length-1);//error 4: changed substring to trim

		
		// Check search length, must have 3 characters
			// String must be three or more characters long
			// If loop checks the length of the user's stringer
		if(query.length < 3){
			// Alert the user with an error message
			alert("Your search query is too small, try again.");// error 5: missing quotation mark
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			// Return the search results to the user
			searchInput.focus();
			return;
		}
		// Search function goes here
		currentSearch(query);//error: corrected search to match variables
    }

	// Finds search matches
		// Function searches for matches to the user's string
	var search = function(query){ //error 6: needed curly bracket to start function
		
		// split the user's search query string into an array
		// create an array using the user's string of characters
		 var queryArray = query.split(" ");//error 7: changed .join to .split to split string.
		
		// array to store matched results from database.js
		// store the matches for the results in an array (taken from the db js file)
		var results = [];

		// loop through each index of db array
		// use a for loop to search each index in the array to find matches
		for(var i=0, j=db.length; i<j; i++){

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			// Database indexes will end with a pipe "|"
			var dbTitleEnd = db[i].indexOf('|');
			var dbItem = db[i].tolowercase().substring(0, dbTitleEnd);//error 8: changed dbitem to dbItem

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			// use a for loop to search through the words and save as lowercase variables
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qItem = queryArray[ii].tolowercase(); //error 9: changed qitem to qItem

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				// Use if loop to find all the matches and display the results
				var compare = dbItem.indexOf(qItem);//error: corrected dbitem and qitem
				if(compare !== -1){
					// push the results to webpage
					results.push(db[i]);
				}


		// Sort all the results by keywords
		results.sort();

		// Check that matches were found, and run output functions
		// Check for matches, and display results
		if(results.length === 0){
			noMatch();
		}else{
			showMatches(results);
		}
	}

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
		// If no results are found display a message to the user with the proper HTML tags and CSS styles
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		// Results will be displayed in the HTML
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
		// Display the results as HTML paragraphs and anchor them with their title and url
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
		// use for loop to gather all the results
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			// using index numbers pull the title's string from the db
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);//error: changed .subString to .substring

			// pull the video url after the title
			// after the title has been pulled, pull the url from the db
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			// display the url as a link
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		}
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
		var query = searchInput.value;
		validqte(query);

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};
}