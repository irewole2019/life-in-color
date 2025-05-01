document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gallery items data
    const galleryItems = [
        {
            title: "Nostalgia (Mississippi)",
            medium: "Acrylic on Canvas",
            year: "2024",
            image: "images/gallery/Nosalgia, (Mississippi) acrylic on canvas.jpg"
        },
        {
            title: "There is Sense in Creativity",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/There is Sense in Creativity.png"
        },
        {
            title: "Artwork 9",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 9.JPG"
        },
        {
            title: "Artwork 10",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 10.JPG"
        },
        {
            title: "Artwork 1",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 1.webp"
        },
        {
            title: "Artwork 2",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 2.webp"
        },
        {
            title: "Artwork 3",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 3.webp"
        },
        {
            title: "Artwork 4",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 4.webp"
        },
        {
            title: "Artwork 5",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 5.webp"
        },
        {
            title: "Artwork 6",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 6.jpg"
        },
        {
            title: "Artwork 7",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 7.jpg"
        },
        {
            title: "Artwork 8",
            medium: "Mixed Media",
            year: "2024",
            image: "images/gallery/art 8.jpg"
        }
    ];

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxMedium = document.querySelector('.lightbox-medium');
    const lightboxYear = document.querySelector('.lightbox-year');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevButton = document.querySelector('.lightbox-prev');
    const nextButton = document.querySelector('.lightbox-next');

    let currentIndex = 0;

    function showLightbox(index) {
        const item = galleryItems[index];
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxMedium.textContent = item.medium;
        lightboxYear.textContent = item.year;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        currentIndex = index;
    }

    function hideLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showLightbox(currentIndex);
    }

    // Event listeners
    closeLightbox.addEventListener('click', hideLightbox);
    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('show')) {
            if (e.key === 'Escape') hideLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        }
    });

    // Populate gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <p>${item.medium}, ${item.year}</p>
            </div>
        `;
        galleryItem.addEventListener('click', () => showLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });

    // Souvenir items data
    const souvenirItems = [
        {
            name: "Customized Tote Bag",
            image: "images/souvenirs/tote-bag.jpg"
        },
        {
            name: "Miniature Painting by Dr. Akande",
            image: "images/souvenirs/mini-painting.jpg"
        },
        {
            name: "Art Catalogue",
            image: "images/souvenirs/catalogue.jpg"
        }
    ];

    // Populate souvenirs
    const souvenirGrid = document.querySelector('.souvenir-grid');
    souvenirItems.forEach(item => {
        const souvenirItem = document.createElement('div');
        souvenirItem.className = 'souvenir-item';
        souvenirItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
        `;
        souvenirGrid.appendChild(souvenirItem);
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}); 