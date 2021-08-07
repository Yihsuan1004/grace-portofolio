
$(document).ready(function () {
    console.log('i am ready')

    $(window).ready(function () {
        $('#loading').hide();
        $('body').removeClass('fixed-top');
        $(this).scrollTop(0);
        ScrollTrigger.refresh();
        console.log('load success');
        const observer = lozad(); 
        observer.observe();
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
        $('body').toggleClass('fixed-top')
    })

    $('.collapse li').click(function(){
        $('.collapse').hide();
        $('body').removeClass('fixed-top')
    });

    $(document).scroll(function () {
        const $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        let currentWindowOffset = $(document).scrollTop();
        navbarActive(currentWindowOffset);
    });

    $('.nav-item').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.brand').click(function () {
        $('.nav-item').removeClass('active');
    })

    function navbarActive(offset) {
        const home_offset = $('#home_block').offset().top;
        const aboutme_offset = $('#aboutme_block').offset().top - 30;
        const exp_offset = $('#exp_block').offset().top - 100;
        const skill_offset = $('#skill_block').offset().top - 60;
        const work_offset = $('#work_block').offset().top - 60;
        const anticipation_offset = $('#anticipation_block').offset().top - 60;
        const contact_offset = $('#contact_block').offset().top - 80;
        if (offset < aboutme_offset) {
            $('.nav-item').removeClass('active');
        }
        if (offset > aboutme_offset) {
            $('#aboutme_item').addClass('active');
            $('#aboutme_item').siblings().removeClass('active');
        }
        if (offset > exp_offset) {
            $('#exp_item').addClass('active');
            $('#exp_item').siblings().removeClass('active');
        }
        if (offset > skill_offset) {
            $('#skill_item').addClass('active');
            $('#skill_item').siblings().removeClass('active');
        }
        if (offset > work_offset) {
            $('#work_item').addClass('active');
            $('#work_item').siblings().removeClass('active');
        }
        if (offset >= anticipation_offset) {
            $('#anticipation_item').addClass('active');
            $('#anticipation_item').siblings().removeClass('active');
        }
        if (offset >= contact_offset) {
            $('#contact_item').addClass('active');
            $('#contact_item').siblings().removeClass('active');
        }
    }

    

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
    .from('.main-wrapper .title-content',  { yPercent: 100, duration: 1.5, ease: "back" })
    .from('.main-wrapper .title-content', { opacity: 0, stagger: 0.2, duration: 1 }, 0)

    let atcpTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".anticipation-wrapper",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    })
    .from('.item-content', { xPercent: 100, stagger: 0.3, duration: 2, ease: "power3" })
    .from('.item-content', { opacity: 0, stagger: 0.2, duration: 0.5 }, 0)

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

    let workTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".work-wrapper",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "restart none none reset"
        }
    }).from('.work-wrapper .card', { yPercent: 100, stagger: 0.2, duration: 2, ease: "power3" })
        .from('.work-wrapper .card', { opacity: 0, stagger: 0.2, duration: 0.5 }, 0)

   

 


})