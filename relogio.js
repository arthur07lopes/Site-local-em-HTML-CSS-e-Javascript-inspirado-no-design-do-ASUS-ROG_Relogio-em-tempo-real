const clock = document.querySelector("#clock");
const dateline = document.querySelector("#current-date");
const rogImage = document.querySelector("#rog-image");
const imageFallBack = document.querySelector(".stage-fallback");

const timeFormat = new Intl.DateTimeFormat("pt-br", {
    hour : "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
});
const dateFormat = new Intl.DateTimeFormat("pt-br", {
    weekday: "long", day: "2-digit", month: "long", year: "numeric"
});

function updateClock() {
    const now = new Date();
    clock.textContent = timeFormat.format(now);
    clock.dateTime = now.toISOString();
    dateline.textContent = dateFormat.format(now);
}

function showImageFallback() {
    rogImage.hidden = true;
    imageFallBack.hidden = false;
}

rogImage.addEventListener("error", showImageFallback);
if (rogImage.complete && rogImage.naturalWidth === 0) showImageFallback();

updateClock();
window.setInterval(updateClock, 1000);
