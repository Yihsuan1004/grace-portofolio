
$(document).ready(function () {
    console.log('i am ready')

    $(window).ready(function () {
        $('#loading').hide();
        $('body').removeClass('fixed-top');
        $(this).scrollTop(0);
        ScrollTrigger.refresh();
        console.log('load success');
    });
    
    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl)
    
      triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
      })
    })

    $('.navbar-toggler').click(function(){
        $('.collapse').toggle();
        $('.brand').toggleClass('brand-hide');
        $('.empty-block').toggle();
        $('#navbar_toggle_icon').toggleClass('navbar-toggler-icon-close');
    })

    $('.collapse li').click(function(){
        $('.collapse').removeClass('show');
        $('.brand').removeClass('brand-hide');
        $('.empty-block').hide();
        $('#navbar_toggle_icon').removeClass('navbar-toggler-icon-close');
    });

    $(document).scroll(function () {
        const $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });



    // ------------ Scroll Trigger Setting ------------ 
    let aboutmeTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutme-wrapper",
            start: "top 80%",
            endTrigger: ".exp-wrapper",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    }).from('.aboutme-container', { yPercent: 100, duration: 1, ease: "back" })
        .from('.aboutme-container', { opacity: 0, duration: 0.5 }, 0)


    let mainTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".main-wrapper",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    })
    .from('.main-wrapper .title-content',  { opacity: 0, duration: 2, ease: "linear" })
    .to('.main-wrapper .title-content', { opacity: 1})

    const setProgressValue = () => {
        let options = {
            startAngle: -1.55,
            size: 100,
        }
        $('.circle .bar').circleProgress(options).on('circle-animation-progress',
        function (event, progress, stepValue) { })
        $('#circle_procreate').circleProgress({ 
            value: 0.85,
            fill: { color: "#FFD2D2" }
        });
        $('#circle_photoshop').circleProgress({
             value: 0.85,
             fill: { color: "#FFD2D2" }
         });
        $('#circle_illustrator').circleProgress({ 
            value: 0.85,
            fill:  '#FF5858'
        });
        $('#circle_inDesign').circleProgress({ 
            value: 0.75,
            fill:  '#FF5858'
         });
        $('#circle_figma').circleProgress({ 
            value: 0.75,
            fill: '#899FC9'
         });
        $('#circle_adobexd').circleProgress({ 
            value: 0.60,
            fill: '#899FC9'
         });
    };

    const resetProgressValue = () => {
        $('#circle_procreate, #circle_photoshop,#circle_illustrator,#circle_inDesign,#circle_figma,#circle_adobexd').circleProgress({ value: 0 });
    };

    ScrollTrigger.create({
        trigger: ".skill-wrapper",
        start: "top 50%",
        end: "bottom top",
        onEnter: setProgressValue,
        onEnterBack: setProgressValue,
        onLeave: resetProgressValue,
        onLeaveBack: resetProgressValue,
    })

   

   

 


})