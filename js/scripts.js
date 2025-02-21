/*
* JHL
*/

document.addEventListener("DOMContentLoaded", () => {
    const isVisionOS = !!window.navigator.maxTouchPoints && window.navigator.userAgent.includes("Macintosh");

    if (isVisionOS) {
        document.querySelectorAll('.fullscreenTarget').forEach(media => {
            media.addEventListener('click', () => {
                if (media.requestFullscreen) {
                    media.requestFullscreen();
                }
            });
        });
    }
});