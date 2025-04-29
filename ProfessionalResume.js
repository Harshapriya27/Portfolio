      // Navigation functionality
        document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sections and links
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).classList.add('active');
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Mobile menu toggle
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('myResumeAction').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
    
        const action = confirm("Do you want to open the resume page to print? Press OK to proceed.");
        if (action) {
            // Navigate to another resume page
            window.open('style.html', '_blank');
        }
        // No action on cancel, so no else block here
    });
    
    