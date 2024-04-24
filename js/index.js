function subscribeEmail() {
    const email = document.querySelector('input[type="email"]').value;
    // Добавьте логику для обработки подписки на email
    console.log('Email подписан:', email);
}

function openForgotPasswordModal() {
    const loginModal = document.getElementById('loginModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');

    const loginModalInstance = bootstrap.Modal.getInstance(loginModal);
    loginModalInstance.hide();

    const forgotPasswordModalInstance = new bootstrap.Modal(forgotPasswordModal);
    forgotPasswordModalInstance.show();
}


const fogetBtn = document.querySelector(".foget-pass-btn")

// fogetBtn.addEventListener("click", openForgotPasswordModal)


// Paralax
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero-background');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


// AOS.init();
// var rellax = new Rellax('.hero-background');

function animateCounter(counterElement, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        counterElement.textContent = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
            window.requestAnimationFrame(animation);
        }
    }

    window.requestAnimationFrame(animation);
}


function initCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        animateCounter(counter, 0, target, 2000); // Анимация в течение 2000 мс
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initCounters();
                observer.unobserve(entry.target); // Остановить наблюдение после старта анимации
            }
        });
    }, {
        threshold: 0.5 // Запускать анимацию, когда элемент на 50% видим
    });

    // Наблюдение за каждым счетчиком
    document.querySelectorAll('.counter-item').forEach(item => {
        observer.observe(item);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    //   remove arrows

    });
  });