



$("#work-btn").on("click", function(){

var firstNameInput = $("#First-Name-Input").val();
var lastNameInput = $("#Last-Name-Input").val();
var emailInput = $("#Email-Input").val();
var stateInput = $("#State-Input").val();
var zipInput = $("#Zip-Input").val();
console.log(firstNameInput);
console.log(lastNameInput);
console.log(emailInput);
console.log(stateInput);
console.log(zipInput);


$.ajax({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/unitedstates/congress-legislators/master/legislators-current.yaml'
    })
    .done(function(yamlResponse) {
        var response1 = YAML.parse(yamlResponse);
        // filter by gender
        //var legislators = response.filter(x => x.bio.gender === 'M');
           
        //filter by state from last term only
        var legislators = response1.filter(x => x.terms[x.terms.length - 1].state === stateInput);

        console.log(response1);

        $("#newInfoHere").empty();
        $("#newInfoHere").append("<h1> Hi "+firstNameInput+"! here these are the current legislators in your state!</h1>")




        legislators.forEach(function(x) {
            $("#newInfoHere").append("<div>" + x.name.official_full + ": " + x.terms[x.terms.length - 1].state + "</div>")

        });

        $("#newInfoHere").append("<h3> More info on them will be available soon! </h3><br><h3> We will E-mail you at "+emailInput+" when more info becomes available!</h3>");

    });

//atempt 3 with getjson: failed
    // $.getJSON( "https://en.wikipedia.org/w/api.php?action=query&titles=" + "Apple" + "&prop=revisions&rvprop=content", function( response2 ) {
    //     console.log(response2);
    // });

//ajax atempt 2: failed
//     $.ajax({
//   dataType: "json",
//   header: 'Access-Control-Allow-Origin',
//   url: 'https://en.wikipedia.org/w/api.php?action=query&titles=' + "Apple" + '"&prop=revisions&rvprop=content&format=json',
//   data: 'string',
//   success: console.log("Yippie!")
// })
//     .done(function(response2){
//         console.log(response2);
//     });
//ajax atempt 1: failed
    // $.ajax({
    //     dataType: 'json',
    //     type: 'POST',
    //     'Api-User-Agent': "Alex1 ('alexanderkrikunov1@mgail.com')",
    //     method: 'GET',
    //     url: 'https://en.wikipedia.org/w/api.php?action=query&titles=' + "Apple" + '"&prop=revisions&rvprop=content&format=json'
    // })
    // .done(function(response2) {
    //     console.log(response2);
    // });
});