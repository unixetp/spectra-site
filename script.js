document.addEventListener('DOMContentLoaded', () => {
    const bekrumsButton = document.getElementById('bekrumsButton');
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const bekrumsImage = document.getElementById('bekrumsImage');
    const bekrumsMusic = document.getElementById('bekrumsMusic');
    const glitchTextContainer = document.getElementById('glitchTextContainer');

    const texts = [
        "ты потерян.",
        "ты заблудился.",
        "выхода нет.",
        "это конец.",
        "никто не поможет.",
        "пока."
    ];
    let textIndex = 0;
    let textChangeCount = 0;
    let textInterval;

    bekrumsButton.addEventListener('click', () => {
        fullscreenContainer.classList.remove('hidden');
        fullscreenContainer.classList.add('fullscreen');
        bekrumsMusic.play();

        if (fullscreenContainer.requestFullscreen) {
            fullscreenContainer.requestFullscreen();
        } else if (fullscreenContainer.webkitRequestFullscreen) {
            fullscreenContainer.webkitRequestFullscreen();
        } else if (fullscreenContainer.msRequestFullscreen) {
            fullscreenContainer.msRequestFullscreen();
        }

        const changeTextWithGlitch = () => {
            if (textChangeCount < 6) {
                glitchTextContainer.textContent = texts[textIndex];
                textIndex = (textIndex + 1) % texts.length;
                textChangeCount++;
            } else {
                clearInterval(textInterval);
                setTimeout(() => {
                    window.location.href = 'https://skibidiware.netlify.app/';
                }, 3000);
            }
        };

        textInterval = setInterval(changeTextWithGlitch, 2000);
        changeTextWithGlitch();
    });
});