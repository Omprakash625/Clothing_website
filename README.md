# Tann Mann - Premium Fashion Store

![Tann Mann Logo](https://img.shields.io/badge/Tann%20Mann-Premium%20Fashion-e74c3c?style=for-the-badge)

A modern, responsive e-commerce website for a premium clothing store featuring advanced search and filtering capabilities, shopping cart functionality, and a seamless checkout process.

## 🌟 Features

### 🛍️ **E-Commerce Functionality**
- **Product Catalog**: Comprehensive product display with categories (Men, Women, Kids)
- **Advanced Search**: Real-time search with text input and quick search button
- **Smart Filtering**: Multi-criteria filtering system including:
  - Category filters
  - Price range slider
  - Size selection
  - Brand filtering
  - Color picker
  - Rating filters
- **Shopping Cart**: Full cart management with add/remove/update quantities
- **Secure Checkout**: Multi-step checkout process with shipping and payment options

### 🎨 **User Interface**
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and visual feedback
- **Grid/List Views**: Toggle between different product display modes
- **Quick Access**: Search button in navigation for easy accessibility

### 🔧 **Technical Features**
- **Local Storage**: Cart persistence across browser sessions
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- **Performance**: Lazy loading, optimized images, and efficient code
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Cross-Browser**: Compatible with all modern browsers

## 🚀 Live Demo

Open `index.html` in your browser to see the website in action!

## 📁 Project Structure

```
Tann_Mann_Website/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Modern JavaScript with DOM manipulation
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Key Sections

### 1. **Header & Navigation**
- Sticky navigation bar
- Quick search button
- Shopping cart icon with item count
- Mobile hamburger menu

### 2. **Hero Section**
- Eye-catching banner with call-to-action
- Gradient overlay design
- Responsive layout

### 3. **Product Categories**
- Interactive category cards
- Hover animations
- Direct filtering links

### 4. **Products Section**
- Advanced search and filter bar
- Product grid with detailed cards
- Quick filter buttons
- Sorting options
- View toggle (Grid/List)

### 5. **About Section**
- Company story and values
- Mission statement
- Visual elements

### 6. **Contact Section**
- Contact information
- Interactive contact form
- Social media links
- Newsletter subscription

### 7. **Footer**
- Site links and information
- Newsletter signup
- Social media integration

## 🛒 Shopping Features

### **Product Cards Include:**
- Product images with badges
- Star ratings and reviews
- Brand information
- Color indicators
- Size selection
- Price display (with sale prices)
- Add to cart functionality

### **Shopping Cart Features:**
- Sidebar cart display
- Quantity management
- Item removal
- Total calculation
- Persistent storage

### **Checkout Process:**
1. **Shipping Information**: Customer details and shipping options
2. **Payment Details**: Credit card and PayPal options
3. **Order Confirmation**: Final review and order placement

## 🔍 Search & Filter System

### **Search Capabilities:**
- Text-based product search
- Search by name, description, or brand
- Real-time filtering
- Quick search button in navigation

### **Advanced Filters:**
- **Categories**: All, Men's, Women's, Kids'
- **Price Range**: Slider and input controls ($0-$200)
- **Sizes**: XS, S, M, L, XL, XXL
- **Brands**: StyleHub, Urban Threads, Classic Wear, Trendy Fashion
- **Colors**: Visual color picker with 8 color options
- **Ratings**: 3+ stars, 4+ stars with visual indicators

### **Quick Filters:**
- All Products
- Men's Clothing
- Women's Clothing
- Kids' Clothing
- Sale Items
- New Arrivals

## 🎨 Design System

### **Color Palette:**
- **Primary**: #e74c3c (Red)
- **Secondary**: #333333 (Dark Gray)
- **Background**: #f8f9fa (Light Gray)
- **Text**: #333333 (Dark Gray)
- **Accent**: #667eea (Blue Gradient)

### **Typography:**
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### **Spacing:**
- Consistent 8px grid system
- Responsive padding and margins
- Proper visual hierarchy

## 📊 Sample Data

The website includes 12 sample products with complete information:
- Product names and descriptions
- Pricing (including sale prices)
- Size availability
- Color options
- Brand information
- Customer ratings and reviews
- Product badges (New, Sale, Popular)

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Explore** the features:
   - Browse products by category
   - Use the search functionality
   - Apply various filters
   - Add items to cart
   - Test the checkout process

## 💡 Usage Tips

### **For Users:**
- Use the quick search button in the navigation for fast access
- Try different filter combinations to find specific products
- Toggle between grid and list views for different browsing experiences
- Items in your cart are saved even if you close the browser

### **For Developers:**
- All JavaScript functions are well-documented
- CSS uses modern techniques (Grid, Flexbox)
- Responsive design follows mobile-first approach
- Code is organized into logical sections

## 🔧 Customization

### **Adding New Products:**
Edit the `sampleProducts` array in `script.js`:

```javascript
{
    id: 13,
    name: "Your Product Name",
    category: "men", // or "women", "kids"
    price: 49.99,
    originalPrice: 59.99,
    description: "Product description",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    brand: "Your Brand",
    rating: 4.5,
    reviews: 100,
    badge: "New", // or "Sale", "Popular", ""
    dateAdded: new Date('2024-01-30'),
    popularity: 90
}
```

### **Styling Changes:**
- Modify CSS variables in `style.css`
- Update color scheme in the `:root` section
- Adjust breakpoints for different responsive behavior

### **Functionality Extensions:**
- Add user authentication
- Integrate with payment gateways
- Connect to a backend database
- Add product reviews system
- Implement wishlist functionality

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized CSS**: Efficient selectors and minimal reflows
- **Local Storage**: Reduces server requests
- **Smooth Animations**: Hardware-accelerated transitions
- **Responsive Images**: Proper sizing for different devices

## 🔒 Security Considerations

- **Input Validation**: Form inputs are validated
- **XSS Prevention**: Proper data sanitization
- **Local Storage**: Sensitive data is not stored locally
- **HTTPS Ready**: Designed for secure connections

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for modern e-commerce experiences.

## 📞 Support

For questions or support, please contact through the website's contact form or create an issue in the repository.

---

**Tann Mann** - Where Fashion Meets Technology 🛍️✨