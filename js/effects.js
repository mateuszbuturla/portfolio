window.onload = () => {

    if (window.screen.width < 1000) {
        const t1 = new TimelineMax();

        t1.from("#loadingRing", 4, {
            delay: 0.4,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
        }).to("#loadingRing", 4, {
            delay: 0,
            top: "-100%",
            ease: Expo.easeInOut
        })

        TweenMax.to("#loadingScreen", 4, {
            delay: 4.4,
            top: "-110%",
            ease: Expo.easeInOut
        });

        TweenMax.from("#logo", 3, {
            delay: 5.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#header", 3, {
            delay: 6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#footer", 3, {
            delay: 5.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.staggerFrom("#media ul li", 2, {
            delay: 5.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        }, 0.1);

        TweenMax.from("#line1", 3, {
            delay: 6.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#line2", 3, {
            delay: 6.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#button1", 3, {
            delay: 5.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#button2", 3, {
            delay: 6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });
    }
    else {
        const t1 = new TimelineMax();

        t1.from("#loadingRing", 4, {
            delay: 0.4,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
        }).to("#loadingRing", 4, {
            delay: 0.4,
            x: 160,
            ease: Expo.easeInOut
        })

        TweenMax.to("#loadingScreen", 4, {
            delay: 6.4,
            top: "-110%",
            ease: Expo.easeInOut
        });

        TweenMax.from("#logo", 3, {
            delay: 7.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.staggerFrom("#mainMenu li", 2, {
            delay: 7.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        }, 0.2);

        TweenMax.from("#header", 3, {
            delay: 8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#footer", 3, {
            delay: 7.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.staggerFrom("#media ul li", 2, {
            delay: 7.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        }, 0.1);

        TweenMax.staggerFrom("#projectsContainer .project", 2, {
            delay: 7.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        }, 0.2);

        TweenMax.from("#line1", 3, {
            delay: 8.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#line2", 3, {
            delay: 8.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#button1", 3, {
            delay: 7.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });

        TweenMax.from("#button2", 3, {
            delay: 8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        });
    }
}

window.addEventListener("resize", () => {

    TweenMax.set("#logo", { y: 0 });
    TweenMax.set("#logo", { clearProps: "y" });

    TweenMax.set("#header", { y: 0 });
    TweenMax.set("#header", { clearProps: "y" });

    TweenMax.set("#footer", { y: 0 });
    TweenMax.set("#footer", { clearProps: "y" });

    TweenMax.set("#media ul li", { y: 0 });
    TweenMax.set("#media ul li", { clearProps: "y" });

    TweenMax.set("#mainMenu li", { y: 0 });
    TweenMax.set("#mainMenu li", { clearProps: "y" });

    TweenMax.set("#projectsContainer .project", { y: 0 });
    TweenMax.set("#projectsContainer .project", { clearProps: "y" });

    TweenMax.set("#line1", { y: 0 });
    TweenMax.set("#line1", { clearProps: "y" });

    TweenMax.set("#line2", { y: 0 });
    TweenMax.set("#line2", { clearProps: "y" });

    TweenMax.set("#button1", { y: 0 });
    TweenMax.set("#button1", { clearProps: "y" });

    TweenMax.set("#button2", { y: 0 });
    TweenMax.set("#button2", { clearProps: "y" });
});