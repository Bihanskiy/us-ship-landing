// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import { menuClose } from "./functions.js"

window.onload = function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    document.body.style.overflow = "visible";

    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;

        if (targetElement.classList.contains("menu-close")) {
            menuClose();
        }
    }
}