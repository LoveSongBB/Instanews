

$(function () {
    console.log("Welcome to Instanews!");
}); 


// Get data from the api and put in on our site

// 118 lines ~~
// show loading animationnn 
//  "watch" the value change in the list - send request to API from
//  from list menu


// parse data - append to dom 
// show .fail
// .always remove loading animation 


// menu - select menu - load animation - load boxes - menu is still
// there, select menu - remove boxes - load animation - load boxes


// sections... - empty value (home page)
// logo top left whem boxes are there
//  <form> <p> Choose a section:</p> <select><option><value>

$(function(){
 $('|#ID').on('change', function() {
    const yeet = $(this).val();
//    console.log(yeet) 
//return if value is empty
//show loader
// clear stories
// make request to ajax
// method get

$.ajax({
    method: 'GET'
    url: ''
    dataType:'json'
}.done(function(data){

    // append info
    //. fail
    //. always 
});

});
});
// http ~~ v2/{section}.json
// ' + section + '.json?api-key=', (put in URL section)