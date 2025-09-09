// Global Variables
let cart = [];
let products = [];
let filteredProducts = [];
let currentFilter = 'all';
let currentSort = 'default';
let currentView = 'grid';
let searchQuery = '';

// Filter state
let activeFilters = {
    categories: ['all'],
    priceRange: { min: 0, max: 200 },
    sizes: [],
    brands: [],
    colors: [],
    ratings: []
};

// Enhanced Sample Product Data
const sampleProducts = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "men",
        price: 29.99,
        originalPrice: 34.99,
        description: "Comfortable cotton t-shirt perfect for everyday wear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Blue"],
        brand: "Tann Mann",
        rating: 4.5,
        reviews: 128,
        badge: "New",
        dateAdded: new Date('2024-01-15'),
        popularity: 85
    },
    {
        id: 2,
        name: "Elegant Summer Dress",
        category: "women",
        price: 79.99,
        originalPrice: 99.99,
        description: "Beautiful floral dress perfect for summer occasions",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Pink", "Blue", "Yellow"],
        brand: "Urban Threads",
        rating: 4.8,
        reviews: 95,
        badge: "Sale",
        dateAdded: new Date('2024-01-10'),
        popularity: 92
    },
    {
        id: 3,
        name: "Kids Superhero Hoodie",
        category: "kids",
        price: 39.99,
        originalPrice: 39.99,
        description: "Fun and cozy hoodie with superhero design",
        sizes: ["4T", "5T", "6T", "7T"],
        colors: ["Red", "Blue", "Black"],
        brand: "Trendy Fashion",
        rating: 4.6,
        reviews: 67,
        badge: "Popular",
        dateAdded: new Date('2024-01-20'),
        popularity: 88
    },
    {
        id: 4,
        name: "Denim Jacket",
        category: "men",
        price: 89.99,
        originalPrice: 89.99,
        description: "Classic denim jacket with modern fit",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Blue", "Black"],
        brand: "Classic Wear",
        rating: 4.3,
        reviews: 156,
        badge: "",
        dateAdded: new Date('2024-01-05'),
        popularity: 76
    },
    {
        id: 5,
        name: "Yoga Leggings",
        category: "women",
        price: 49.99,
        originalPrice: 49.99,
        description: "High-performance leggings for yoga and fitness",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Pink"],
        brand: "Tann Mann",
        rating: 4.7,
        reviews: 203,
        badge: "New",
        dateAdded: new Date('2024-01-18'),
        popularity: 94
    },
    {
        id: 6,
        name: "Kids Rainbow Tutu",
        category: "kids",
        price: 24.99,
        originalPrice: 24.99,
        description: "Colorful tutu skirt perfect for dress-up and parties",
        sizes: ["2T", "3T", "4T", "5T"],
        colors: ["Pink", "Yellow", "Green"],
        brand: "Trendy Fashion",
        rating: 4.4,
        reviews: 89,
        badge: "",
        dateAdded: new Date('2024-01-12'),
        popularity: 71
    },
    {
        id: 7,
        name: "Business Shirt",
        category: "men",
        price: 59.99,
        originalPrice: 59.99,
        description: "Professional dress shirt for business occasions",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Blue", "Gray"],
        brand: "Classic Wear",
        rating: 4.2,
        reviews: 134,
        badge: "",
        dateAdded: new Date('2024-01-08'),
        popularity: 68
    },
    {
        id: 8,
        name: "Casual Blazer",
        category: "women",
        price: 99.99,
        originalPrice: 129.99,
        description: "Versatile blazer perfect for work or casual outings",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Blue"],
        brand: "Urban Threads",
        rating: 4.6,
        reviews: 78,
        badge: "Sale",
        dateAdded: new Date('2024-01-14'),
        popularity: 82
    },
    {
        id: 9,
        name: "Kids Dinosaur Pajamas",
        category: "kids",
        price: 34.99,
        originalPrice: 34.99,
        description: "Soft and comfortable pajama set with dinosaur print",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        colors: ["Green", "Blue", "Gray"],
        brand: "Trendy Fashion",
        rating: 4.5,
        reviews: 112,
        badge: "Popular",
        dateAdded: new Date('2024-01-16'),
        popularity: 87
    },
    {
        id: 10,
        name: "Athletic Shorts",
        category: "men",
        price: 34.99,
        originalPrice: 34.99,
        description: "Lightweight shorts perfect for workouts and sports",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Blue"],
        brand: "Tann Mann",
        rating: 4.4,
        reviews: 91,
        badge: "",
        dateAdded: new Date('2024-01-22'),
        popularity: 79
    },
    {
        id: 11,
        name: "Floral Maxi Dress",
        category: "women",
        price: 89.99,
        originalPrice: 109.99,
        description: "Elegant maxi dress with beautiful floral pattern",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Pink", "Blue", "White"],
        brand: "Urban Threads",
        rating: 4.7,
        reviews: 145,
        badge: "Sale",
        dateAdded: new Date('2024-01-11'),
        popularity: 90
    },
    {
        id: 12,
        name: "Kids Winter Coat",
        category: "kids",
        price: 69.99,
        originalPrice: 69.99,
        description: "Warm and cozy winter coat for cold weather",
        sizes: ["4T", "5T", "6T", "7T", "8T"],
        colors: ["Red", "Blue", "Black"],
        brand: "Classic Wear",
        rating: 4.6,
        reviews: 73,
        badge: "New",
        dateAdded: new Date('2024-01-25'),
        popularity: 85
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    products = [...sampleProducts];
    filteredProducts = [...products];
    updateCartCount();
    initializeEventListeners();
    applyAllFilters();
});

// Event Listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close cart or mobile filters when clicking overlay
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            // Check if mobile filter sidebar is open
            const mobileFilterSidebar = document.getElementById('mobile-filter-sidebar');
            if (mobileFilterSidebar && mobileFilterSidebar.classList.contains('open')) {
                closeMobileFilters();
            } else {
                toggleCart();
            }
        });
    }

    // Search input enter key support
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==================== SEARCH AND FILTER FUNCTIONS ====================

// Quick Search Toggle Function
function toggleQuickSearch() {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        // On mobile, open the filter sidebar which includes search functionality
        openMobileFilters();
    } else {
        // On desktop, scroll to search and focus
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            // Scroll to products section
            scrollToSection('products');
            
            // Focus on search input after a short delay to ensure smooth scrolling
            setTimeout(() => {
                searchInput.focus();
                searchInput.select();
            }, 500);
        }
    }
}

// Search Functions
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchQuery = searchInput.value.trim();
        applyAllFilters();
    }
}

// Mobile Search Functions
function performMobileSearch() {
    const mobileSearchInput = document.getElementById('mobile-search-input');
    if (mobileSearchInput) {
        searchQuery = mobileSearchInput.value.trim();
        
        // Sync with desktop search input
        const desktopSearchInput = document.getElementById('search-input');
        if (desktopSearchInput) {
            desktopSearchInput.value = searchQuery;
        }
        
        applyAllFilters();
    }
}

function handleMobileSearch(event) {
    if (event.key === 'Enter') {
        performMobileSearch();
    }
}

// Filter Toggle
function toggleFilters() {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        openMobileFilters();
    } else {
        const filtersPanel = document.getElementById('filters-panel');
        const toggleBtn = document.querySelector('.filter-toggle-btn');
        
        if (filtersPanel && toggleBtn) {
            filtersPanel.classList.toggle('open');
            toggleBtn.classList.toggle('active');
        }
    }
}

// Mobile Filter Functions
function openMobileFilters() {
    const mobileFilterSidebar = document.getElementById('mobile-filter-sidebar');
    const overlay = document.getElementById('overlay');
    
    if (mobileFilterSidebar && overlay) {
        mobileFilterSidebar.classList.add('open');
        overlay.classList.add('active');
        
        // Prevent body scroll when sidebar is open
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileFilters() {
    const mobileFilterSidebar = document.getElementById('mobile-filter-sidebar');
    const overlay = document.getElementById('overlay');
    
    if (mobileFilterSidebar && overlay) {
        mobileFilterSidebar.classList.remove('open');
        overlay.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

function applyMobileFilters() {
    // Apply all current filters
    applyAllFilters();
    
    // Close the mobile filter sidebar
    closeMobileFilters();
    
    // Scroll to products section to show results
    setTimeout(() => {
        scrollToSection('products');
    }, 300); // Small delay to ensure sidebar closes smoothly
    
    // Show success message
    showSuccessMessage('Filters applied successfully!');
}

// Mobile Price Filter Functions
function updateMobilePriceFilter() {
    const minPrice = document.getElementById('mobile-min-price');
    const maxPrice = document.getElementById('mobile-max-price');
    
    if (minPrice && maxPrice) {
        activeFilters.priceRange.min = minPrice.value ? parseFloat(minPrice.value) : 0;
        activeFilters.priceRange.max = maxPrice.value ? parseFloat(maxPrice.value) : 200;
        
        // Update slider
        const slider = document.getElementById('mobile-price-range');
        const maxPriceLabel = document.getElementById('mobile-max-price-label');
        if (maxPrice.value && slider && maxPriceLabel) {
            slider.value = maxPrice.value;
            maxPriceLabel.textContent = `${maxPrice.value}`;
        }
        
        // Sync with desktop filters
        syncMobileFiltersToDesktop();
    }
}

function updateMobilePriceRange(value) {
    const maxPrice = document.getElementById('mobile-max-price');
    const maxPriceLabel = document.getElementById('mobile-max-price-label');
    
    if (maxPrice && maxPriceLabel) {
        maxPrice.value = value;
        maxPriceLabel.textContent = `${value}`;
        activeFilters.priceRange.max = parseFloat(value);
        
        // Sync with desktop filters
        syncMobileFiltersToDesktop();
    }
}

// Sync mobile filters with desktop filters
function syncMobileFiltersToDesktop() {
    // Sync price range
    const desktopMinPrice = document.getElementById('min-price');
    const desktopMaxPrice = document.getElementById('max-price');
    const desktopPriceRange = document.getElementById('price-range');
    const desktopMaxPriceLabel = document.getElementById('max-price-label');
    
    if (desktopMinPrice) desktopMinPrice.value = activeFilters.priceRange.min || '';
    if (desktopMaxPrice) desktopMaxPrice.value = activeFilters.priceRange.max || '';
    if (desktopPriceRange) desktopPriceRange.value = activeFilters.priceRange.max;
    if (desktopMaxPriceLabel) desktopMaxPriceLabel.textContent = `${activeFilters.priceRange.max}`;
}

// Sync desktop filters with mobile filters
function syncDesktopFiltersToMobile() {
    // Sync price range
    const mobileMinPrice = document.getElementById('mobile-min-price');
    const mobileMaxPrice = document.getElementById('mobile-max-price');
    const mobilePriceRange = document.getElementById('mobile-price-range');
    const mobileMaxPriceLabel = document.getElementById('mobile-max-price-label');
    
    if (mobileMinPrice) mobileMinPrice.value = activeFilters.priceRange.min || '';
    if (mobileMaxPrice) mobileMaxPrice.value = activeFilters.priceRange.max || '';
    if (mobilePriceRange) mobilePriceRange.value = activeFilters.priceRange.max;
    if (mobileMaxPriceLabel) mobileMaxPriceLabel.textContent = `${activeFilters.priceRange.max}`;
    
    // Sync category selection
    const mobileRadios = document.querySelectorAll('input[name="mobile-category"]');
    const selectedCategory = activeFilters.categories.includes('all') ? 'all' : activeFilters.categories[0];
    mobileRadios.forEach(radio => {
        radio.checked = radio.value === selectedCategory;
    });
}

// Mobile Category Filter Function
function updateMobileCategoryFilter() {
    const selectedRadio = document.querySelector('input[name="mobile-category"]:checked');
    if (selectedRadio) {
        const selectedValue = selectedRadio.value;
        
        if (selectedValue === 'all') {
            activeFilters.categories = ['all'];
        } else {
            activeFilters.categories = [selectedValue];
        }
        
        // Sync with desktop filters
        const desktopCheckboxes = document.querySelectorAll('.filters-panel input[type="checkbox"][onchange="updateCategoryFilter()"]');
        desktopCheckboxes.forEach(checkbox => {
            if (selectedValue === 'all') {
                checkbox.checked = checkbox.value === 'all';
            } else {
                checkbox.checked = checkbox.value === selectedValue;
            }
        });
        
        // Update quick filter buttons
        document.querySelectorAll('.quick-filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const targetBtn = document.querySelector(`.quick-filter-btn[onclick*="'${selectedValue}'"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }
}

// Category Filter Functions
function updateCategoryFilter() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][onchange="updateCategoryFilter()"]');
    const allCheckbox = document.querySelector('input[value="all"][onchange="updateCategoryFilter()"]');
    
    activeFilters.categories = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.value !== 'all') {
            activeFilters.categories.push(checkbox.value);
        }
    });
    
    // Handle "All" checkbox logic
    if (allCheckbox && (allCheckbox.checked || activeFilters.categories.length === 0)) {
        activeFilters.categories = ['all'];
        checkboxes.forEach(cb => {
            if (cb.value !== 'all') cb.checked = false;
        });
        allCheckbox.checked = true;
    } else if (allCheckbox) {
        allCheckbox.checked = false;
    }
    
    applyAllFilters();
}

// Price Range Filter
function updatePriceFilter() {
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    
    if (minPrice && maxPrice) {
        activeFilters.priceRange.min = minPrice.value ? parseFloat(minPrice.value) : 0;
        activeFilters.priceRange.max = maxPrice.value ? parseFloat(maxPrice.value) : 200;
        
        // Update slider
        const slider = document.getElementById('price-range');
        const maxPriceLabel = document.getElementById('max-price-label');
        if (maxPrice.value && slider && maxPriceLabel) {
            slider.value = maxPrice.value;
            maxPriceLabel.textContent = `$${maxPrice.value}`;
        }
    }
    
    applyAllFilters();
}

function updatePriceRange(value) {
    const maxPrice = document.getElementById('max-price');
    const maxPriceLabel = document.getElementById('max-price-label');
    
    if (maxPrice && maxPriceLabel) {
        maxPrice.value = value;
        maxPriceLabel.textContent = `$${value}`;
        activeFilters.priceRange.max = parseFloat(value);
        applyAllFilters();
    }
}

// Size Filter
function updateSizeFilter() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][onchange="updateSizeFilter()"]');
    activeFilters.sizes = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            activeFilters.sizes.push(checkbox.value);
        }
    });
    
    applyAllFilters();
}

// Brand Filter
function updateBrandFilter() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][onchange="updateBrandFilter()"]');
    activeFilters.brands = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            activeFilters.brands.push(checkbox.value);
        }
    });
    
    applyAllFilters();
}

// Color Filter
function updateColorFilter() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][onchange="updateColorFilter()"]');
    activeFilters.colors = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            activeFilters.colors.push(checkbox.value);
        }
    });
    
    applyAllFilters();
}

// Rating Filter
function updateRatingFilter() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][onchange="updateRatingFilter()"]');
    activeFilters.ratings = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            activeFilters.ratings.push(parseFloat(checkbox.value));
        }
    });
    
    applyAllFilters();
}

// Apply All Filters
function applyAllFilters() {
    let filtered = [...products];
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    // Apply category filter
    if (!activeFilters.categories.includes('all')) {
        filtered = filtered.filter(product =>
            activeFilters.categories.includes(product.category)
        );
    }
    
    // Apply price range filter
    filtered = filtered.filter(product =>
        product.price >= activeFilters.priceRange.min &&
        product.price <= activeFilters.priceRange.max
    );
    
    // Apply size filter
    if (activeFilters.sizes.length > 0) {
        filtered = filtered.filter(product =>
            product.sizes.some(size => activeFilters.sizes.includes(size))
        );
    }
    
    // Apply brand filter
    if (activeFilters.brands.length > 0) {
        filtered = filtered.filter(product =>
            activeFilters.brands.includes(product.brand)
        );
    }
    
    // Apply color filter
    if (activeFilters.colors.length > 0) {
        filtered = filtered.filter(product =>
            product.colors.some(color => activeFilters.colors.includes(color))
        );
    }
    
    // Apply rating filter
    if (activeFilters.ratings.length > 0) {
        const minRating = Math.min(...activeFilters.ratings);
        filtered = filtered.filter(product => product.rating >= minRating);
    }
    
    // Apply sorting
    filtered = applySorting(filtered);
    
    // Update filtered products
    filteredProducts = filtered;
    
    // Display results
    displayFilteredProducts();
    updateResultsCount();
}

// Sorting Functions
function sortProducts(sortBy) {
    currentSort = sortBy;
    applyAllFilters();
}

function applySorting(productsToSort) {
    let sorted = [...productsToSort];
    
    switch(currentSort) {
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'popular':
            sorted.sort((a, b) => b.popularity - a.popularity);
            break;
        default:
            // Keep original order
            break;
    }
    
    return sorted;
}

// Display Functions
function displayFilteredProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onclick="clearAllFilters()" style="margin-top: 1rem; padding: 10px 20px; background: #e74c3c; color: white; border: none; border-radius: 25px; cursor: pointer;">Clear All Filters</button>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createEnhancedProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createEnhancedProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);

    const originalPriceHTML = product.originalPrice > product.price 
        ? `<span style="text-decoration: line-through; color: #999; font-size: 0.9rem;">$${product.originalPrice.toFixed(2)}</span>` 
        : '';

    const ratingStars = generateStarRating(product.rating);

    card.innerHTML = `
        <div class="product-image">
            <i class="fas fa-tshirt"></i>
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-brand" style="color: #888; font-size: 0.8rem; margin-bottom: 0.5rem;">${product.brand}</p>
            <p>${product.description}</p>
            <div class="product-rating" style="margin-bottom: 0.5rem;">
                ${ratingStars}
                <span style="color: #666; font-size: 0.8rem; margin-left: 0.5rem;">(${product.reviews})</span>
            </div>
            <div class="product-price">
                $${product.price.toFixed(2)}
                ${originalPriceHTML}
            </div>
            <div class="product-colors" style="margin-bottom: 1rem;">
                ${product.colors.map(color => 
                    `<span class="color-dot" style="display: inline-block; width: 15px; height: 15px; border-radius: 50%; background-color: ${getColorCode(color)}; margin-right: 5px; border: 1px solid #ddd;" title="${color}"></span>`
                ).join('')}
            </div>
            <div class="product-sizes">
                ${product.sizes.map(size => 
                    `<button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>`
                ).join('')}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    return card;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star" style="color: #ffc107;"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt" style="color: #ffc107;"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star" style="color: #ffc107;"></i>';
    }
    
    return starsHTML;
}

function getColorCode(colorName) {
    const colorMap = {
        'Black': '#000000',
        'White': '#FFFFFF',
        'Red': '#FF0000',
        'Blue': '#0000FF',
        'Green': '#008000',
        'Yellow': '#FFFF00',
        'Pink': '#FFC0CB',
        'Gray': '#808080'
    };
    return colorMap[colorName] || '#CCCCCC';
}

// Results Count Update
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    if (!resultsCount) return;
    
    const count = filteredProducts.length;
    const total = products.length;
    
    if (count === total) {
        resultsCount.textContent = `Showing all ${total} products`;
    } else {
        resultsCount.textContent = `Showing ${count} of ${total} products`;
    }
}

// Clear Filters
function clearAllFilters() {
    // Reset filter state
    activeFilters = {
        categories: ['all'],
        priceRange: { min: 0, max: 200 },
        sizes: [],
        brands: [],
        colors: [],
        ratings: []
    };
    
    // Reset search
    searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset sort
    currentSort = 'default';
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.value = 'default';
    }
    
    // Reset all checkboxes
    document.querySelectorAll('.filters-panel input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = checkbox.value === 'all';
    });
    
    // Reset price inputs
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const priceRange = document.getElementById('price-range');
    const maxPriceLabel = document.getElementById('max-price-label');
    
    if (minPriceInput) minPriceInput.value = '';
    if (maxPriceInput) maxPriceInput.value = '';
    if (priceRange) priceRange.value = 200;
    if (maxPriceLabel) maxPriceLabel.textContent = '$200';
    
    // Reset quick filters
    resetQuickFilterButtons();
    
    // Apply filters
    applyAllFilters();
}

// Quick Filter Functions - FIXED VERSION
function filterProducts(category) {
    // Reset all quick filter buttons first
    document.querySelectorAll('.quick-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to the clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // If called programmatically, find the button by category
        const targetBtn = document.querySelector(`.quick-filter-btn[onclick*="'${category}'"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }
    
    // Handle special filters
    if (category === 'sale') {
        // Filter products with sale badge or discounted price
        filteredProducts = products.filter(product => 
            product.badge === 'Sale' || product.originalPrice > product.price
        );
        displayFilteredProducts();
        updateResultsCount();
    } else if (category === 'new') {
        // Filter products with new badge or recent date
        filteredProducts = products.filter(product => 
            product.badge === 'New' || product.badge === 'Popular'
        );
        displayFilteredProducts();
        updateResultsCount();
    } else if (category === 'all') {
        // Reset category filter
        activeFilters.categories = ['all'];
        
        // Update category checkboxes in advanced filters
        document.querySelectorAll('input[type="checkbox"][onchange="updateCategoryFilter()"]').forEach(checkbox => {
            checkbox.checked = checkbox.value === 'all';
        });
        
        applyAllFilters();
    } else {
        // Regular category filter (men, women, kids)
        activeFilters.categories = [category];
        
        // Update category checkboxes in advanced filters
        document.querySelectorAll('input[type="checkbox"][onchange="updateCategoryFilter()"]').forEach(checkbox => {
            checkbox.checked = checkbox.value === category;
        });
        
        applyAllFilters();
    }
}

// Function to reset quick filter buttons (called from other functions)
function resetQuickFilterButtons() {
    document.querySelectorAll('.quick-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set "All" as active by default
    const allBtn = document.querySelector('.quick-filter-btn[onclick*="\'all\'"]');
    if (allBtn) {
        allBtn.classList.add('active');
    }
}

// View Toggle Functions
function changeView(viewType) {
    currentView = viewType;
    const productsGrid = document.getElementById('products-grid');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // Update button states
    viewButtons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Update grid class
    if (viewType === 'list' && productsGrid) {
        productsGrid.classList.add('list-view');
    } else if (productsGrid) {
        productsGrid.classList.remove('list-view');
    }
}

// ==================== PRODUCT FUNCTIONS ====================

function selectSize(button, size) {
    // Remove selected class from all size buttons in the same product
    const productCard = button.closest('.product-card');
    const sizeButtons = productCard.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add selected class to clicked button
    button.classList.add('selected');
    button.setAttribute('data-selected-size', size);
}

// ==================== SHOPPING CART FUNCTIONS ====================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get selected size
    const productCard = document.querySelector(`[onclick="addToCart(${productId})"]`).closest('.product-card');
    const selectedSizeBtn = productCard.querySelector('.size-btn.selected');
    
    if (!selectedSizeBtn) {
        alert('Please select a size first!');
        return;
    }

    const selectedSize = selectedSizeBtn.getAttribute('data-selected-size');
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => 
        item.id === productId && item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            size: selectedSize,
            quantity: 1
        });
    }

    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
    showSuccessMessage('Item added to cart!');
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

function updateQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            updateCartCount();
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="fas fa-tshirt"></i>
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Size: ${item.size}</p>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.size}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        
        if (cartSidebar.classList.contains('open')) {
            updateCartDisplay();
        }
    }
}

// ==================== CHECKOUT FUNCTIONS ====================

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    toggleCart(); // Close cart
    openCheckout();
}

function openCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.add('open');
        resetCheckoutSteps();
        updateOrderSummary();
    }
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function resetCheckoutSteps() {
    // Reset to step 1
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    const step1 = document.querySelector('[data-step="1"]');
    if (step1) step1.classList.add('active');
    
    document.querySelectorAll('.checkout-step').forEach(step => step.style.display = 'none');
    const stepElement = document.getElementById('step-1');
    if (stepElement) stepElement.style.display = 'block';
}

function nextStep(stepNumber) {
    // Hide current step
    document.querySelectorAll('.checkout-step').forEach(step => step.style.display = 'none');
    
    // Show next step
    const nextStepElement = document.getElementById(`step-${stepNumber}`);
    if (nextStepElement) nextStepElement.style.display = 'block';
    
    // Update step indicators
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    const activeStep = document.querySelector(`[data-step="${stepNumber}"]`);
    if (activeStep) activeStep.classList.add('active');
    
    if (stepNumber === 3) {
        updateOrderSummary();
    }
}

function prevStep(stepNumber) {
    nextStep(stepNumber);
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    if (!orderSummary) return;

    let total = 0;
    let summaryHTML = '<h5>Order Items:</h5>';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        summaryHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${item.name} (${item.size}) x ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    // Add shipping cost
    const shippingRadio = document.querySelector('input[name="shipping"]:checked');
    let shippingCost = 0;
    if (shippingRadio) {
        switch(shippingRadio.value) {
            case 'express': shippingCost = 9.99; break;
            case 'overnight': shippingCost = 19.99; break;
        }
    }

    summaryHTML += `
        <hr style="margin: 1rem 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Subtotal:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Shipping:</span>
            <span>$${shippingCost.toFixed(2)}</span>
        </div>
        <hr style="margin: 1rem 0;">
        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.1rem;">
            <span>Total:</span>
            <span>$${(total + shippingCost).toFixed(2)}</span>
        </div>
    `;

    orderSummary.innerHTML = summaryHTML;
}

function placeOrder() {
    // Simulate order processing
    showLoadingMessage('Processing your order...');
    
    setTimeout(() => {
        // Clear cart
        cart = [];
        updateCartCount();
        saveCartToStorage();
        
        // Close checkout
        closeCheckout();
        
        // Show success message
        showSuccessMessage('Order placed successfully! You will receive a confirmation email shortly.');
    }, 2000);
}

// ==================== FORM FUNCTIONS ====================

function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    
    // Simulate form submission
    showLoadingMessage('Sending message...');
    
    setTimeout(() => {
        showSuccessMessage(`Thank you ${name}! Your message has been sent successfully. We'll get back to you soon.`);
        event.target.reset();
    }, 1500);
}

function subscribeNewsletter(event) {
    event.preventDefault();
    
    showLoadingMessage('Subscribing...');
    
    setTimeout(() => {
        showSuccessMessage('Successfully subscribed to our newsletter!');
        event.target.reset();
    }, 1000);
}

// ==================== UTILITY FUNCTIONS ====================

function showSuccessMessage(message) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message, .loading-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '100px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.maxWidth = '300px';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function showLoadingMessage(message) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message, .loading-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'loading-message';
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>
            <span>${message}</span>
        </div>
    `;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '100px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.background = '#f8f9fa';
    messageDiv.style.padding = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    messageDiv.style.maxWidth = '300px';
    
    document.body.appendChild(messageDiv);
}

// ==================== LOCAL STORAGE FUNCTIONS ====================

function saveCartToStorage() {
    localStorage.setItem('tannmann_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('tannmann_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Initialize cart from storage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
});

// ==================== PERFORMANCE OPTIMIZATION ====================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
}

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}