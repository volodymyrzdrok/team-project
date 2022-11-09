(() => {
    let slideIndex = 1;

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('[data-gallery="item"]');
        let dots = document.querySelectorAll('[data-gallery="marker"]');

        if (n > slides.length) { slideIndex = 1 }
        else if (n < 1) { slideIndex = slides.length }
        else { slideIndex = n; }

        for (i = 1; i <= slides.length; i++) {
            slides[i - 1].classList.remove('visible');
            dots[i - 1].classList.remove('visible');
        }

        slides[slideIndex - 1].classList.add("visible");
        dots[slideIndex - 1].classList.add("visible");
    }

    document.querySelector('[data-gallery="prev"]').addEventListener("click", () => plusSlides(-1));
    document.querySelector('[data-gallery="next"]').addEventListener("click", () => plusSlides(1));

    const markers = document.querySelectorAll('[data-gallery="marker"]');

    for (i = 0; i < markers.length; i++) {

        markers[i].addEventListener("click", function (i) {
            showSlides(i + 1)
        }.bind(this, i));
    }

    showSlides(1);
})();
