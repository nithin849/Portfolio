document.addEventListener('DOMContentLoaded', function () {
    // Typing animation
    const typed = new Typed('#element', {
        strings: [
            'want to be Java Developer',
            'want to be Python Programmer',
            'want to be Web Developer',
            'and also Tech Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Resume download - enhanced version with better error handling
// Resume download - simplified and reliable version
const resumeButton = document.getElementById('resumeButton');
if (resumeButton) {
    resumeButton.addEventListener('click', function () {
        try {
            const link = document.createElement('a');
            // Direct download link from Google Drive
            link.href = 'Info.docx.pdf',
            link.target = '_blank'; // Opens in new tab
            link.rel = 'noopener noreferrer';
            link.click();
        } catch (error) {
            console.error('Download error:', error);
            alert('Error downloading resume. Please try again.');
        }
    });
}


    // GitHub redirection
    const githubButton = document.getElementById('githubButton');
    if (githubButton) {
        githubButton.addEventListener('click', function () {
            window.open('https://github.com/nithin849', '_blank');
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.querySelectorAll('#nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header shadow on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcons(currentTheme === 'dark');

        themeToggle.addEventListener('click', function () {
            const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcons(isDark);
        });

        function updateThemeIcons(isDark) {
            const moonIcon = themeToggle.querySelector('.fa-moon');
            const sunIcon = themeToggle.querySelector('.fa-sun');

            if (moonIcon && sunIcon) {
                moonIcon.style.opacity = isDark ? '0' : '1';
                moonIcon.style.transform = isDark ? 'translateX(-20px)' : 'translateX(0)';
                sunIcon.style.opacity = isDark ? '1' : '0';
                sunIcon.style.transform = isDark ? 'translateX(0)' : 'translateX(20px)';
            }
        }
    }
});

