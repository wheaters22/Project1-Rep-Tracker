var queryUrl = "https://www.googleapis.com/civicinfo/v2/elections5";




$("#addGif").on("click", function(e){
	e.preventDefault();
console.log("click");

	$.ajax({
            url: queryUrl,
            method: "GET",
            data: {
            	key: "AIzaSyCwWAipG8Nje7KLxb1DP0d7ONK4gyFuxgo"
            }
        })
			.done(function(response){
				console.log(response);
			});


});