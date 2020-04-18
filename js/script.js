$(function() {
    let header = $("#header");
    let intro = $("#intro");
    
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        let introh = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introh) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        console.log(scrollPos);
    });

    // smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        

        $("body, html").animate({
            scrollTop: elementOffset - 70
        }, 1000);

    });

    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    $("#navToggle").on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });
    
});