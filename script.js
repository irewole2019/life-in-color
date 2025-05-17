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
            title: "Pain",
            medium: "Acrylic on Canvas",
            year: "2019",
            image: "images/gallery/Pain (No to Violence Against Women).jpg"
        },
        {
            title: "Life first food",
            medium: "Pastel on Paper",
            year: "1991",
            image: "images/gallery/art 1.webp"
        },
        {
            title: "In Isolation",
            medium: "Mixed Media",
            year: "2020",
            image: "images/gallery/Isolation.jpg"
        },
        {
            title: "Her Handwork Feeds the Home",
            medium: "Mixed Media",
            year: "2018",
            image: "images/gallery/Her handiwork feeds the home.jpg"
        },
        {
            title: "Stop the explosion",
            medium: "Fabric on Canvas",
            year: "2012",
            image: "images/gallery/art 4.webp"
        },
        {
            title: "The Icons",
            medium: "Mixed Media",
            year: "2021",
            image: "images/gallery/art 5.webp"
        },
        {
            title: "My Style 1",
            medium: "Acrylic on Canvas",
            year: "2020",
            image: "images/gallery/art 6.jpg"
        },
        {
            title: "My Style 2",
            medium: "Acrylic on Canvas",
            year: "2020",
            image: "images/gallery/art 7.jpg"
        },
        {
            title: "My Style 3",
            medium: "Acrylic on Canvas",
            year: "2020",
            image: "images/gallery/art 8.jpg"
        },
        {
            title: "Don't Stop my Swag",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/Don't Stop my Swag.jpg"
        },
        {
            title: "Ecstasy",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/Ecstasy.jpg"
        },
        {
            title: "Equity",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/Equity.jpg"
        },
        {
            title: "Good environment is good for her",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/Good environment is good for her.jpg"
        },
        {
            title: "Harmony",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/Harmony.jpg"
        },
        {
            title: "Life in colors (Self-portrait)",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/Life in colors (Self-portrait).jpg"
        },
        {
            title: "My Style (Blue, orange and black series)",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/My Style (Blue, orange and black series).jpg"
        },
        {
            title: "My Style Series (Textile)",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/My Style Series (Textile).jpg"
        },
        {
            title: "My Style Series 2",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/My Style Series 2.jpg"
        },
        {
            title: "My style Series (Black, Red and White)",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/My style Series (Black, Red and White).jpg"
        },
        {
            title: "No Brick Walls",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/No Brick Walls.jpg"
        },
        {
            title: "Olaoma",
            medium: "Acrylic on Canvas",
            year: "2023",
            image: "images/gallery/Olaoma.jpg"
        },
        {
            title: "Separated",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/Separated.jpg"
        },
        {
            title: "Separated by circumstances",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/Separated by circumstances.jpg"
        },
        {
            title: "Sound of music",
            medium: "Mixed Media",
            year: "2023",
            image: "images/gallery/Sound of music.jpg"
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