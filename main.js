    // Loading Page
    $(window).on('load', function() {

    // Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
    });

    // When the user scrolls down 1px from the top of the document, resize the navbar's padding and the logo's font size
    // and when scrolls down 50px from the top, display back to top button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementsByClassName("navbar")[0].style.padding = "5px 10px";
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("back_to_top").style.display = "block";
        }
        } else {
        document.getElementsByClassName("navbar")[0].style.padding = "12px 10px";
        document.getElementById("back_to_top").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }