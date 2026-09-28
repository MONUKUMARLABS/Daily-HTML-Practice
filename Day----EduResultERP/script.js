document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuBtn && mainNav) {

        menuBtn.addEventListener("click", function () {

            mainNav.classList.toggle("open");

            const icon = menuBtn.querySelector("i");

            if (mainNav.classList.contains("open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });


        // Mobile menu link click ke baad menu close
        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 850) {

                    mainNav.classList.remove("open");

                    const icon = menuBtn.querySelector("i");

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    // =====================================================
    // ACTIVE NAVIGATION
    // =====================================================

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks =
        document.querySelectorAll(".main-nav a[href^='#']");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 130;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    // =====================================================
    // HEADER SCROLL EFFECT
    // =====================================================

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();


    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerHeight =
                    header ? header.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    // =====================================================
    // REVEAL ANIMATION
    // =====================================================

    const revealElements =
        document.querySelectorAll(
            ".feature-card, .pricing-card, .portal-card, .policy-card, .about-stat"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    // =====================================================
    // PREVENT EMPTY # LINKS
    // =====================================================

    document.querySelectorAll(
        'a[href="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
            }
        );

    });

});