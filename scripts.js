document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('--bottom-border');
        } else {
            navbar.classList.remove('--bottom-border');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('navbar-menu-id');
    const navbarIcons = document.getElementById('navbar-icons-id');
    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarIcons.classList.toggle('hide');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const portifolioGaleria = document.getElementById('portifolio-galeria-id');
    const portifolioFigma = document.getElementById('portfolio-figma-id');
    const galeriaIcon = document.getElementById('galeria-icon-id');
    const figmaIcon = document.getElementById('figma-icon-id');

    galeriaIcon.addEventListener('click', function() {
        portifolioGaleria.classList.add('portfolio--show');
        portifolioFigma.classList.remove('portfolio--show');
    });

    figmaIcon.addEventListener('click', function() {
        portifolioGaleria.classList.remove('portfolio--show');
        portifolioFigma.classList.add('portfolio--show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('load-more-education');
    const extraInfo = document.getElementsByClassName('extra-education');

    loadButton.addEventListener('click', function() {
        for (element of extraInfo) {
            element.classList.toggle('--hide')
        }
        if (loadButton.innerHTML == "MOSTRAR MAIS") {
            loadButton.innerHTML = "MOSTRAR MENOS"
        }
        else {
            loadButton.innerHTML = "MOSTRAR MAIS"
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('load-more-experience');
    const extraInfo = document.getElementsByClassName('extra-experience');

    loadButton.addEventListener('click', function() {
        for (element of extraInfo) {
            element.classList.toggle('--hide')
        }
        if (loadButton.innerHTML == "MAIS") {
            loadButton.innerHTML = "MENOS"
        }
        else {
            loadButton.innerHTML = "MAIS"
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-id');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

function sendEmail() {
    email_object = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        phone: document.getElementById('form-phone').value,
        message: document.getElementById('form-subject').value,
        subject: document.getElementById('form-message').value,
    };
    
    emailjs.send("service_pablo-marques","template_mreyi5l", email_object)
    
    const form = document.getElementById('form-id')
    form.reset();

    const emailComponent = document.getElementById('email-sent-id')
    emailComponent.classList.add('show')

    setTimeout(function() {
        emailComponent.classList.remove('show');
    }, 4000);
}















