

$(function () {
    console.log("Welcome to Instanews!");
}); 


$(function () {
    console.log("Project 2!");
});


$(document).ready(function() {
 $("#sections").on("change", function() {
    const section = $(this).val();
    


if (section !== " ") {
    $(".loader img").show();
    $("header").addClass("transform-head");
     getStory(section);

function getStory(section) {
$.ajax({
    method: 'GET',
    url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=HtMSYIqpXwtwQGBCnI7l6BL1ypk4329Z`, 
})

    .done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let potatodata = data.results.filter(function(value) {
            return value.multimedia.length;
        });
    
        potatodata = potatodata.slice(0, 12);

        for (let value of potatodata) {
            $(".story").append(
                `<li style='background: url(${
                    value.multimedia[4].url
                });background-size:cover;'>
                <a href=${value.url}> <div class=stories-time>
                    ${value.abstract}
                    </div>
                    </a>
                    </li>`
            );
        }
    })  

.fail(function() {
     $('ul').empty();
     $('ul').append("<p>CLick harder!</p>")
   });

}
}
});
});   