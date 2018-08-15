
// Using the search function, search using the  searchterm from the FDA database	
function search(){
	$("#effects").html('');
	var key = "7PcXD9iQU905xvCopWU8Nqkiy8GoiEnwpCQkcl5O"
	var searchTerm = document.getElementById("fdaSearch").value

	$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		// shows 15 results before cutting loop
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
            // blanks show up to try another search. 
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            		$("#effects").append(results + " " + "<br>")
				console.log(data.results[i].term)
          }
	    
			}
	   	},
	   type: 'GET'
	});
}