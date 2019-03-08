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

        let news = data.results.filter(function(value) {
            return value.multimedia.length;
        });
    
        news = news.slice(0, 12);

        for (let value of news) {
            $(".story").append(
                `<a href=${value.url} target="_blank">
                <li style='background: url(${
                    value.multimedia[4].url
                });background-size:cover;'>
                 <div class=stories-time><p>
                    ${value.abstract}
                    </p>
                    </div>
                    </li>
                    </a>`
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