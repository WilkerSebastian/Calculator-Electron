const $ = require("jquery")

function load() {

    for (let index = 1; index <= 100; index++) {

        $(`.w-win-${index}`).css("width", `${(index / 100) * window.innerWidth}px`)
        $(`.h-win-${index}`).css("height", `${(index / 100) * window.innerHeight}px`)

    }

    $("main").css("display", "block")

}

load()