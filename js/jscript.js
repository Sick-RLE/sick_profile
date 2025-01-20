document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        darkModeToggle.checked = savedTheme === 'dark';
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const experienceTimeline = document.getElementById('timeline');
    const experiencesData = [];

    experiencesData.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.classList.add('timeline-item');
        expElement.innerHTML = `
            <h3>${exp.title}</h3>
            <p>${exp.company} | ${exp.period}</p>
            <p>${exp.description}</p>
        `;
        experienceTimeline.appendChild(expElement);
    });

    const educationTimeline = document.getElementById('education').querySelector('.timeline');
    const educationData = [
        {
            institution: "University of the Cordilleras",
            location: "Governor Pack Road, Baguio City",
            program: "STEM | BIST(Web Development)",
            details: [
                "Specializing in Web Development",
                "STEM Program",
                "Expected Graduation: 2024-2025"
            ]
        }
    ];

    educationData.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.classList.add('timeline-item');
        eduElement.innerHTML = `
            <div class="timeline-content">
                <h3>${edu.institution}</h3>
                <p class="location">${edu.location}</p>
                <p class="program">${edu.program}</p>
                <ul class="details">
                    ${edu.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        educationTimeline.appendChild(eduElement);
    });

    const skillsContainer = document.querySelector('.skills-container');
    const skills = [
        { name: 'HTML5', percentage: 60 },
        { name: 'CSS3', percentage: 60 },
        { name: 'JavaScript', percentage: 20 },
        { name: 'Python', percentage: 50 },
        { name: 'Git', percentage: 50 },
        { name: 'Responsive Design', percentage: 40 },
        { name: 'React', percentage: 0 },
        { name: 'Node.js', percentage: 0 }
    ];

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill-item');
        skillElement.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.percentage}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    const projectsContainer = document.getElementById('projects-container');
    const projectsData = [
        {
            title: 'Tribute Page',
            description: 'A responsive tribute page showcasing a notable person',
            link: 'https://sick-rle.github.io/Tribute-Page/',
            technologies: ['HTML', 'CSS']
        },
        {
            title: 'Survey Form',
            description: 'Interactive survey form with form validation',
            link: 'https://sick-rle.github.io/Survey-Form/',
            technologies: ['HTML', 'CSS']
        },
        {
            title: 'Project Landing Page',
            description: 'Modern and responsive landing page design',
            link: 'https://sick-rle.github.io/Project-Landing-Page/',
            technologies: ['HTML', 'CSS']
        },
        {
            title: 'Exercise CSS',
            description: 'CSS styling and layout exercises',
            link: 'https://sick-rle.github.io/Exercise-CSS/',
            technologies: ['HTML', 'CSS']
        },
        {
            title: 'Technical Document Page',
            description: 'Comprehensive technical documentation page',
            link: 'https://sick-rle.github.io/Technical-Document-Page/',
            technologies: ['HTML', 'CSS']
        },
        {
            title: 'Personal Portfolio Page',
            description: 'Responsive personal portfolio showcasing web development skills',
            link: 'https://sick-rle.github.io/Personal-Portfolio-Page/',
            technologies: ['HTML', 'CSS']
        }
    ];

    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" class="project-link">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
});