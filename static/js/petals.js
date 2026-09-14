function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    petal.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 600);