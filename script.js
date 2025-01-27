const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navbarMenu = document.querySelector('.navbar-menu');
    
        hamburgerMenu.addEventListener('click', () => {
            navbarMenu.classList.toggle('active'); 
        });

// for carousel
        const images = document.querySelectorAll('.carousel-image');
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        let currentIndex = 0;
    
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active'); // Remove active class from all images
                if (i === index) {
                    img.classList.add('active'); // Add active class to the current image
                }
            });
        }
    
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; // Wrap around
            showImage(currentIndex);
        });
    
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
            showImage(currentIndex);
        });
    
        // Optional: Auto-rotate the carousel every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 5000);



// for search bar
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById("search");
    
    searchInput.addEventListener('input', function() {
        const highlightedElements = document.querySelectorAll('.highlight');
        highlightedElements.forEach(element => {
            element.classList.remove('highlight');
            element.innerHTML = element.textContent; // Remove the highlight span
        });
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase();
            const elements = document.querySelectorAll('body *:not(script):not(style):not(input):not(nav):not(nav *)');
            let firstHighlightedElement = null;
            
            elements.forEach(element => {
                if (element.children.length === 0 && element.textContent) {
                    const text = element.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        const regex = new RegExp(`(${searchTerm})`, 'gi');
                        element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');
                        if (!firstHighlightedElement) {
                            firstHighlightedElement = element;
                        }
                    } else {
                        element.innerHTML = element.textContent;
                    }
                }
            });

            if (firstHighlightedElement) {
                firstHighlightedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
});