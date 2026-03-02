const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' })

    })
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', (e) => {
    let currentScroll = window.scrollY;
    sections.forEach(section => {

        const currentTop = section.offsetTop;
        const currentHeight = section.offsetHeight;
        const currentId = section.getAttribute('id');

        if (currentScroll >= currentTop - 200 && currentScroll < currentTop + currentHeight - 200) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // MOVE THESE LINES INSIDE THE IF BLOCK
            const activeLink = document.querySelector(`nav a[href="#${currentId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

    });
});


const skillsHeading = document.querySelector('.skill h4');
const skillsList = document.querySelector('.skill ul');

skillsHeading.addEventListener('click', () => {
    skillsHeading.classList.toggle('collapsed');
    skillsList.classList.toggle('collapsed');
});

