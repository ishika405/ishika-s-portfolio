document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".hero-text > *, " +
        "section h2, " +
        ".about-content > *, " +
        ".education-card, " +
        ".skill, " +
        ".project-card, " +
        ".interest-card, " +
        "#contact > p, " +
        ".contact-btn, " +
        "footer p"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    elements.forEach(function (element) {

        element.classList.add("scroll-reveal");

        const parent = element.parentElement;

        if (
            parent.classList.contains("education-container") ||
            parent.classList.contains("projects-container") ||
            parent.classList.contains("skills-container") ||
            parent.classList.contains("interests-container") ||
            parent.classList.contains("contact-links")
        ) {

            const position = Array.from(parent.children)
                .indexOf(element);

            element.style.transitionDelay =
                (position * 0.15) + "s";
        }

        observer.observe(element);

    });

});