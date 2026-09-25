const header = document.getElementById('site-header');
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

function closeMenu() {
    menuButton?.setAttribute('aria-expanded', 'false');
    navMenu?.classList.remove('open');
}

menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(willOpen));
    navMenu.classList.toggle('open', willOpen);
});

navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];

function handleScroll() {
    header?.classList.toggle('scrolled', window.scrollY > 12);
    const current = sections.reduce((active, section) => {
        return window.scrollY >= section.offsetTop - 160 ? section.id : active;
    }, 'home');
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}

handleScroll();
window.addEventListener('scroll', handleScroll, { passive: true });

document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const images = [...carousel.querySelectorAll('.carousel-frame img')];
    const dots = [...carousel.querySelectorAll('[data-index]')];
    const currentLabel = carousel.querySelector('[data-current]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0;
    let timer;

    function show(nextIndex) {
        index = (nextIndex + images.length) % images.length;
        images.forEach((image, imageIndex) => image.classList.toggle('active', imageIndex === index));
        dots.forEach((dot, dotIndex) => {
            const active = dotIndex === index;
            dot.classList.toggle('active', active);
            dot.setAttribute('aria-pressed', String(active));
        });
        currentLabel.textContent = String(index + 1).padStart(2, '0');
    }

    function stop() {
        window.clearInterval(timer);
    }

    function start() {
        stop();
        if (!reducedMotion) timer = window.setInterval(() => show(index + 1), 4500);
    }

    carousel.querySelector('[data-previous]').addEventListener('click', () => {
        show(index - 1);
        start();
    });
    carousel.querySelector('[data-next]').addEventListener('click', () => {
        show(index + 1);
        start();
    });
    dots.forEach(dot => dot.addEventListener('click', () => {
        show(Number(dot.dataset.index));
        start();
    }));
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

    show(0);
    start();
});

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form?.addEventListener('submit', async event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending…';
    formStatus.textContent = '';
    try {
        if (!window.emailjs) throw new Error('Email service unavailable');
        window.emailjs.init({ publicKey: 'CxGRWNGYEUOGNmUy5' });
        await window.emailjs.send('service_m6dneu8', 'template_4fqswrs', {
            from_name: form.elements.name.value,
            from_email: form.elements.email.value,
            subject: form.elements.subject.value,
            message: form.elements.message.value
        });
        form.reset();
        formStatus.textContent = 'Message sent. Thank you.';
    } catch (error) {
        formStatus.textContent = 'Could not send. Please email me directly.';
    } finally {
        button.disabled = false;
        button.textContent = originalText;
    }
});

document.getElementById('year').textContent = new Date().getFullYear();
