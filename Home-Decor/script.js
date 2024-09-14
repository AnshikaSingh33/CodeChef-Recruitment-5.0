// Modal Window Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal template
    const modalTemplate = (title, content) => `
        <div class="modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${title}</h2>
                <p>${content}</p>
            </div>
        </div>
    `;

    // Insert modals dynamically for each navbar link
    const sections = {
        'About us': 'We provide our our services in interior design all our the country ',
        'Living Room': 'Explore beautiful living room ideas and inspirations.',
        'Kitchen': 'Check out modern and classic kitchen designs.',
        'Outdoors': 'Find outdoor furniture and decor tips.',
        'Contact': 'Get in touch with us for queries and collaborations.'
    };

    Object.keys(sections).forEach(section => {
        document.body.insertAdjacentHTML('beforeend', modalTemplate(section, sections[section]));
    });

    // Add click event to navbar links
    document.querySelectorAll('nav ul li a').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.querySelectorAll('.modal')[index];
            modal.style.display = 'block';

            // Close modal on clicking close button
            modal.querySelector('.close-btn').onclick = () => {
                modal.style.display = 'none';
            };

            // Close modal on clicking outside the modal content
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        });
    });
});
