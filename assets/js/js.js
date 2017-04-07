



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
        var response = YAML.parse(yamlResponse);
        // filter by gender
        //var legislators = response.filter(x => x.bio.gender === 'M');
           
        //filter by state from last term only
        var legislators = response.filter(x => x.terms[x.terms.length - 1].state === stateInput);

        console.log(response);


        legislators.forEach(function(x) {
            $('body').append("<div>" + x.name.official_full + ": " + x.terms[x.terms.length - 1].state + "</div>")
        });

    });

});