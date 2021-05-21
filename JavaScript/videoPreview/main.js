const video = document.querySelector("video");

video.addEventListener('mouseover', function() {
    video.play();
});

video.addEventListener('mouseleave', function() {
    video.pause();
});

video.addEventListener('click', function() {
    if (video.muted === false) {
        video.muted = true;
    }
});