$(document).ready(function () {
    // Agregar desplazamiento suave a los enlaces del menú de navegación
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800); // Velocidad del desplazamiento en milisegundos
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    $('.project-item').click(function () {
        // Aquí debes agregar la lógica para redirigir a la página de detalle del proyecto.
        // Puedes usar window.location.href = "URL_DEL_PROYECTO" para redirigir.
    });
});

