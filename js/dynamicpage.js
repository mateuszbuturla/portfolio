const HomePageInEffect = () => {
    TweenMax.from("#header", 3, {
        delay: 0.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from("#line1", 3, {
        delay: 0.6,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from("#line2", 3, {
        delay: 0.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from("#button1", 3, {
        delay: 0.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from("#button2", 3, {
        delay: 0.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
}

const ProjectsInEffect = () => {
    TweenMax.staggerFrom("#projectsContainer .project", 2, {
        delay: 0.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    }, 0.2);
}

const ContactInEffect = () => {
    TweenMax.from("#header", 3, {
        delay: 0.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from("#line1", 3, {
        delay: 0.6,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from("#line2", 3, {
        delay: 0.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
}

const HomePageOutEffect = () => {
    TweenMax.to("#header", 2, {
        delay: 0,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to("#line1", 2, {
        delay: 0.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to("#line2", 2, {
        delay: 0.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to("#button1", 2, {
        delay: 0,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to("#button2", 2, {
        delay: 0.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
}

const ProjectsOutEffect = () => {
    TweenMax.staggerTo("#projectsContainer .project", 2, {
        delay: 0,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    }, 0.1);
}

const ContactOutEffect = () => {
    TweenMax.to("#header", 2, {
        delay: 0,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to("#line1", 2, {
        delay: 0.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to("#line2", 2, {
        delay: 0.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
}

$(function () {

    let oldHash = '';
    let newHash = '';
    const $mainContent = $("#mainContainer")

    $('nav, #headerButtons').delegate("a", "click", function () {
        oldHash = window.location.hash.substring(1);

        if (oldHash === '')
            oldHash = window.location.pathname.substring(1);

        window.location.hash = $(this).attr("href");
        return false;
    });

    $(window).bind('hashchange', function () {
        newHash = window.location.hash.substring(1);

        switch (oldHash) {
            case 'projects.html':
                ProjectsOutEffect();
                break;
            case 'contact.html':
                ContactOutEffect();
                break;
            default:
                HomePageOutEffect();
                break;
        }

        setTimeout(() => {
            if (newHash) {
                $mainContent.load(newHash + " #mainContent", function () {
                    switch (newHash) {
                        case 'index.html':
                            HomePageInEffect();
                            $('#headerButtons').delegate("a", "click", function () {
                                oldHash = window.location.hash.substring(1);

                                if (oldHash === '')
                                    oldHash = window.location.pathname.substring(1);

                                window.location.hash = $(this).attr("href");
                                return false;
                            });
                            break;
                        case 'projects.html':
                            ProjectsInEffect();
                            break;
                        case 'contact.html':
                            ContactInEffect();
                            break;
                    }
                });
            };
        }, 2000)
    });
    $(window).trigger('hashchange');
});