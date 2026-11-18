document.querySelectorAll("[data-comparison]").forEach((comparison) => {
    const controls = comparison.querySelector(".comparison-controls");
    const slider = controls.querySelector("input");

    function updateComparison() {
        const left = Number(slider.value);
        comparison.style.setProperty("--position", `${left}%`);
        slider.setAttribute("aria-valuetext", `${slider.dataset.left} ${left}%, ${slider.dataset.right} ${100 - left}%`);
    }

    updateComparison();
    slider.addEventListener("input", updateComparison);
    comparison.dataset.ready = "";
    controls.hidden = false;
});

const tracks = document.querySelectorAll("audio");
tracks.forEach((track) => {
    track.addEventListener("play", () => {
        tracks.forEach((playing) => {
            if (playing !== track) {
                playing.pause();
            }
        });
    });
});
