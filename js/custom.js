$(document).ready(function () {
    "use strict";

    /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */

    /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
6. Typing Effect
======================================*/
    // Dynamic Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            fetch(target)
                .then(response => response.text())
                .then(data => {
                    document.querySelector('.content-area').innerHTML = data;
                })
                .catch(err => console.error('Error loading content:', err));
        });
    });

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Filtering Functionality
    document.querySelectorAll('.filter-button').forEach(filter => {
        filter.addEventListener('click', () => {
            const filterCategory = filter.getAttribute('data-filter');
            document.querySelectorAll('.job-item').forEach(item => {
                if (item.classList.contains(filterCategory) || filterCategory === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    
    // 1. Scroll To Top 
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 600) {
            $(".return-to-top").fadeIn();
        } else {
            $(".return-to-top").fadeOut();
        }
    });
    $(".return-to-top").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500
        );
        return false;
    });

    // 2. Smooth Scroll spy

    $(".header-area").sticky({
        topSpacing: 0,
    });

    //=============

    $("li.smooth-menu a").bind("click", function (event) {
        event.preventDefault();
        var anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(anchor.attr("href")).offset().top - 0,
                },
                1200,
                "easeInOutExpo"
            );
    });

    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 0,
    });

    // 3. Progress-bar

    var dataToggleTooTip = $("[data-toggle='tooltip']");
    var progressBar = $(".progress-bar");
    if (progressBar.length) {
        progressBar.appear(function () {
            dataToggleTooTip
                .tooltip({
                    trigger: "manual",
                })
                .tooltip("show");
            progressBar.each(function () {
                var each_bar_width = $(this).attr("aria-valuenow");
                $(this).width(each_bar_width + "%");
            });
        });
    }
    
    // 4. owl carousel

    // i. client (carousel)

    $("#client").owlCarousel({
        items: 7,
        loop: true,
        smartSpeed: 1000,
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            415: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1199: {
                items: 4,
            },
            1200: {
                items: 7,
            },
        },
    });

    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");
    });

    // 5. welcome animation support

    $(window).load(function () {
        $(".header-text h2,.header-text p")
            .removeClass("animated fadeInUp")
            .css({ opacity: "0" });
        $(".header-text a")
            .removeClass("animated fadeInDown")
            .css({ opacity: "0" });
    });

    $(window).load(function () {
        $(".header-text h2,.header-text p")
            .addClass("animated fadeInUp")
            .css({ opacity: "0" });
        $(".header-text a")
            .addClass("animated fadeInDown")
            .css({ opacity: "0" });
    });

    // Parallax Scrolling for About Section
    window.addEventListener('scroll', function () {
        const parallaxBg = document.querySelector('.parallax-bg');
        let offset = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${offset * 0.5}px)`;
    });

    AOS.init();
    
    // 6. Typing Effect

    const textArray = ["Hi,", "I am", "Priyadarshini Sharma."];
    const typingSpeed = 100;
    const delayBetweenWords = 500;
	const typedTextElement = document.getElementById("typed-text");

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[wordIndex].length) {
            typedTextElement.append(textArray[wordIndex].charAt(charIndex));
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            charIndex = 0;
            wordIndex++;
            if (wordIndex < textArray.length) {
                setTimeout(() => {
                    typedTextElement.append(" ");
                    type();
                }, delayBetweenWords);
            }
        }
    }

    type();
});