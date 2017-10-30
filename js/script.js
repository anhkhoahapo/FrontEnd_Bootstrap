$(document).ready(function() {
    (function loadIframe(){
        $('.fb-iframe iframe').attr("src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaposoft%2F&tabs=timeline&width=450&height=617&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1369381916511178");
        $('.map-iframe iframe').attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8130201684157!2d105.81927231498011!3d21.000130994130807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac85be3a80f7%3A0x26f3b5f7c126cf4c!2zMjMgVMO0IFbEqW5oIERp4buHbiwgS2jGsMahbmcgVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1507954959752");
    })();


    (function changeNavOnScroll(){
        $(window).on('scroll', navbarToggle);

        let navbar = $('.navbar');
        let animating = 0;
        let prevScroll = 0;

        function navbarToggle(){
            if(animating === 0){
                let st = $(window).scrollTop();

                if (st > 180) {
                    navbar.css({
                        'background-color': 'white',
                        'box-shadow': '0 0 20px 0 grey'
                    });
                    
                    if (st < prevScroll) {
                        animating = 1;
                        navbar.slideDown(400, () => { animating = 0 });
                    } else if (st > prevScroll) {
                        animating = 1;
                        navbar.slideUp(400, () => { animating = 0 });
                    }
                } else {
                    animating = 1;
                    navbar.css({
                        'background-color': 'rgba(0,0,0,0)',
                        'box-shadow': 'none'
                    });
                    
                    navbar.slideDown(200, () => { animating = 0 });
                }

                prevScroll = st;
            }
        }
    })();
});