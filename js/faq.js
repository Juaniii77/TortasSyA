document.addEventListener("DOMContentLoaded", function () {
    var preguntas = document.querySelectorAll(".faq-pregunta");

    preguntas.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var item = btn.parentElement;
            var respuesta = item.querySelector(".faq-respuesta");
            var abierta = item.classList.contains("abierta");

            document.querySelectorAll(".faq-item.abierta").forEach(function (openItem) {
                openItem.classList.remove("abierta");
                openItem.querySelector(".faq-respuesta").style.maxHeight = null;
                openItem.querySelector(".faq-pregunta").setAttribute("aria-expanded", "false");
            });

            if (!abierta) {
                item.classList.add("abierta");
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
                btn.setAttribute("aria-expanded", "true");
            }
        });
    });
});
