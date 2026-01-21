// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')
       // Add show-icon to show and hide menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Select each button click
    dropdownButton.addEventListener('click', () =>{
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
    // Validate if the media query reaches 1118px
    if(mediaQuery.matches){
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero-master');
    const letters = document.querySelectorAll('.anim-letter');

    // 1. Auto-Stagger Letters
    letters.forEach((char, index) => {
        char.style.animationDelay = `${0.1 + (index * 0.05)}s`;
    });

    // 2. Mouse Tilt Logic
    hero.addEventListener('mousemove', (e) => {
        const xVal = (e.clientX / window.innerWidth - 0.5) * 20; // Tilt range
        const yVal = (e.clientY / window.innerHeight - 0.5) * 10;

        document.documentElement.style.setProperty('--floor-tilt', `${60 + yVal}deg`);
        document.documentElement.style.setProperty('--floor-spin', `${xVal}deg`);
        
        // Parallax title movement
        const title = document.querySelector('.stark-title');
        title.style.transform = `translate(${xVal * -1}px, ${yVal * -1}px)`;
    });
});

document.addEventListener('mousemove', (e) => {
    const hero = document.getElementById('cc-v83-hero-trigger');
    if (!hero) return;

    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    // Perspective Control
    document.documentElement.style.setProperty('--cc-v83-tilt-x', `${60 + (y * 12)}deg`);
    document.documentElement.style.setProperty('--cc-v83-tilt-y', `${x * 15}deg`);

    // Content Parallax
    const content = document.querySelector('.cc-v83-content-box');
    if (content) {
        content.style.transform = `translate(${x * -20}px, ${y * -10}px)`;
    }
});

document.addEventListener('mousemove', (e) => {
    const root = document.getElementById('sup-v91-trigger');
    if (!root) return;

    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    // Perspective Update
    document.documentElement.style.setProperty('--v91-tx', `${60 + (y * 10)}deg`);
    document.documentElement.style.setProperty('--v91-ty', `${x * 12}deg`);

    const layer = document.querySelector('.sup-v91-environment-layer');
    if (layer) layer.style.transform = `rotateX(${60 + (y * 10)}deg) rotateZ(${x * 12}deg)`;
});

// Scroll Reveal Observer
const sup_v91_obs = new IntersectionObserver((ents) => {
    ents.forEach(en => { if (en.isIntersecting) en.target.classList.add('sup-v91-is-visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.sup-v91-sector-block').forEach(b => sup_v91_obs.observe(b));






document.querySelectorAll('.kb-v95-keycap').forEach(key => {
    key.addEventListener('click', () => {
        // Flash Turquoise Electric effect
        key.style.borderColor = 'var(--kb-cyber)';
        key.style.boxShadow = '0 0 20px var(--kb-cyber)';
        
        setTimeout(() => {
            key.style.borderColor = '#e2e8f0';
            key.style.boxShadow = '0 8px 0 var(--kb-key-depth), 0 15px 20px rgba(0,0,0,0.1)';
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const trigger = document.getElementById('open-mob-menu');
    const closer = document.getElementById('close-mob-menu');
    const screen = document.getElementById('mobile-overlay-screen');

    if (trigger && screen) {
        trigger.onclick = function() {
            screen.classList.add('is-active');
            document.body.style.overflow = 'hidden'; // Lock background
        };
    }

    if (closer && screen) {
        closer.onclick = function() {
            screen.classList.remove('is-active');
            document.body.style.overflow = 'auto'; // Unlock background
        };
    }

    // Close on link click
    const mobLinks = document.querySelectorAll('.nb-v102-mobile-links a');
    mobLinks.forEach(link => {
        link.onclick = function() {
            screen.classList.remove('is-active');
            document.body.style.overflow = 'auto';
        };
    });
});

// Function is placed globally so the onclick="" in HTML can always find it
window.toggleNavMenu = function() {
    var drawer = document.getElementById('final-mobile-drawer');
    if (drawer.style.display === 'flex') {
        drawer.style.display = 'none';
    } else {
        drawer.style.display = 'flex';
    }
};

// Auto-close if window is resized
window.onresize = function() {
    if (window.innerWidth > 1024) {
        document.getElementById('final-mobile-drawer').style.display = 'none';
    }
};
document.addEventListener('mousemove', (e) => {
    const hero = document.getElementById('hero-master');
    if (!hero) return;

    // 1. Calculate mouse position -0.5 to 0.5
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    // 2. Apply tilt to the environment plane
    document.documentElement.style.setProperty('--tilt-x', `${60 + (y * 15)}deg`);
    document.documentElement.style.setProperty('--tilt-y', `${x * 25}deg`);

    // 3. Parallax effect for the heading
    const heading = document.querySelector('.tactical-heading');
    if(heading) {
        heading.style.transform = `translate(${x * -40}px, ${y * -20}px)`;
    }
});

// Smooth scroll for the CTA button
document.querySelector('.tech-btn.primary').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#experience-grid').scrollIntoView({ behavior: 'smooth' });
});






// Articles page

const canvas = document.getElementById('particleCanvas10');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
});



