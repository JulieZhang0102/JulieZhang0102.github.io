    // Loading Page
    $(window).on('load', function() {

    // Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
    });
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('section').slice(1).each( function(i){
            
            var desired_object = $(this).position().top + 10;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is visible in the window, fade it in*/
            if( bottom_of_window > desired_object ){
                
                $(this).animate({'opacity':'1'},1500);
            
            }  
        });
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