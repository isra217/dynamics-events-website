// Event Data with images linked to event names
const events = [
  {
    id: 1,
    name: "Tech Summit 2026",
    dateTime: "Saturday, June 14 · 7:00 PM – 11:30 PM",
    location: "Innovation Center · 123 Tech Boulevard",
    shortDesc: "Explore the latest in technology, AI, and digital innovation with industry leaders and cutting-edge presentations.",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
    registerLink: "#"
  },
  {
    id: 2,
    name: "Summer Music Festival",
    dateTime: "Friday, June 27 · 5:30 PM – 9:00 PM",
    location: "Riverside Park · 456 Harmony Lane",
    shortDesc: "Experience an unforgettable night of live music featuring top artists across multiple genres under the summer sky.",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    registerLink: "#"
  },
  {
    id: 3,
    name: "Business Networking",
    dateTime: "Sunday, July 6 · 6:00 PM – 8:15 PM",
    location: "Downtown Business Hub · 789 Commerce Street",
    shortDesc: "Connect with industry professionals, entrepreneurs, and business leaders in a relaxed networking environment with cocktails and appetizers.",
    image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800",
    registerLink: "#"
  },
  {
    id: 4,
    name: "Etiquette & Entertaining Workshop",
    dateTime: "Wednesday, July 16 · 10:30 AM – 1:30 PM",
    location: "The Conservatory · 87 Heritage Row",
    shortDesc: "Master the art of gracious hosting, floral styling, and refined conversation in an intimate heritage setting.",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
    registerLink: "#"
  },
  {
    id: 5,
    name: "Cultural Food Festival",
    dateTime: "Saturday, July 26 · 11:00 AM – 7:00 PM",
    location: "Heritage Plaza · 321 Cultural Center Drive",
    shortDesc: "Celebrate diverse cuisines from around the world with live cooking demonstrations, cultural performances, and artisan vendors.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    registerLink: "#"
  },
  {
    id: 6,
    name: "Modern Art Exhibition",
    dateTime: "Friday, April 12 · 10:00 AM – 6:00 PM",
    location: "City Art Gallery · 45 Museum Road",
    shortDesc: "Explore contemporary artworks from emerging and established artists showcasing modern creativity and expression.",
    image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800",
    registerLink: "#"
  }
];

// DOM Elements
const eventsGrid = document.getElementById('eventsGrid');
const searchInput = document.getElementById('searchInput');
const noEventsMsg = document.getElementById('noEventsMsg');

// Function to render event cards
function renderEventCards(filteredEvents) {
  eventsGrid.innerHTML = '';
  
  if (filteredEvents.length === 0) {
    eventsGrid.classList.add('hidden');
    noEventsMsg.classList.remove('hidden');
    return;
  }
  
  eventsGrid.classList.remove('hidden');
  noEventsMsg.classList.add('hidden');
  
  filteredEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    // Image section
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
    
    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.name;
    img.className = 'event-image';
    img.loading = 'lazy';
    
    const imageOverlay = document.createElement('div');
    imageOverlay.className = 'image-overlay';
    
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(imageOverlay);
    
    // Content section
    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';
    
    // Event Name
    const nameEl = document.createElement('h3');
    nameEl.className = 'event-name';
    nameEl.innerText = event.name;
    
    // Date & Time
    const dateWrapper = document.createElement('div');
    dateWrapper.className = 'event-info';
    const dateIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dateIcon.setAttribute('class', 'info-icon');
    dateIcon.setAttribute('fill', 'none');
    dateIcon.setAttribute('stroke', 'currentColor');
    dateIcon.setAttribute('viewBox', '0 0 24 24');
    dateIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>';
    const dateText = document.createElement('span');
    dateText.innerText = event.dateTime;
    dateWrapper.appendChild(dateIcon);
    dateWrapper.appendChild(dateText);
    
    // Location
    const locWrapper = document.createElement('div');
    locWrapper.className = 'event-info';
    const locIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    locIcon.setAttribute('class', 'info-icon');
    locIcon.setAttribute('fill', 'none');
    locIcon.setAttribute('stroke', 'currentColor');
    locIcon.setAttribute('viewBox', '0 0 24 24');
    locIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>';
    const locText = document.createElement('span');
    locText.innerText = event.location;
    locWrapper.appendChild(locIcon);
    locWrapper.appendChild(locText);
    
    // Description
    const descEl = document.createElement('p');
    descEl.className = 'event-description';
    descEl.innerText = event.shortDesc;
    
    // Register Button
    const btnWrapper = document.createElement('div');
    btnWrapper.style.marginTop = 'auto';
    const registerBtn = document.createElement('button');
    registerBtn.className = 'register-btn';
    registerBtn.innerHTML = `Register <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`;
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`✨ Registration for: ${event.name}`);
      // Optional: Add a subtle notification
      registerBtn.style.transform = 'scale(0.98)';
      setTimeout(() => {
        registerBtn.style.transform = '';
      }, 150);
    });
    btnWrapper.appendChild(registerBtn);
    
    // Assemble card
    contentDiv.appendChild(nameEl);
    contentDiv.appendChild(dateWrapper);
    contentDiv.appendChild(locWrapper);
    contentDiv.appendChild(descEl);
    contentDiv.appendChild(btnWrapper);
    
    card.appendChild(imageWrapper);
    card.appendChild(contentDiv);
    eventsGrid.appendChild(card);
  });
}

// Filter events by name
function filterEvents() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let filtered = events;
  if (searchTerm !== "") {
    filtered = events.filter(event => event.name.toLowerCase().includes(searchTerm));
  }
  renderEventCards(filtered);
}

// Initialize with all events
renderEventCards(events);

// Attach search input event
searchInput.addEventListener('input', filterEvents);

// ========== HAMBURGER MENU FUNCTIONALITY ==========
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

function toggleMobileMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.add('visible');
    document.body.style.overflow = 'hidden';
    menuBtn.classList.add('mobile-menu-open');
  } else {
    mobileMenu.classList.remove('visible');
    document.body.style.overflow = '';
    menuBtn.classList.remove('mobile-menu-open');
  }
}

menuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuOpen) toggleMobileMenu();
    
    // Smooth scroll to sections
    if (link.innerText === "Events") {
      document.querySelector('.events-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (link.innerText === "Home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.innerText === "Contact") {
      alert(" hello@dynamicsevents.com\n(555) 123-4789\nWe'd love to hear from you!");
    }
  });
});

// Desktop navigation links
const desktopHome = document.querySelector('.md\\:flex .nav-link:first-child');
const desktopEvents = document.querySelector('.md\\:flex .nav-link:nth-child(2)');
const desktopContact = document.querySelector('.md\\:flex .nav-link:last-child');

if (desktopHome) {
  desktopHome.addEventListener('click', (e) => { 
    e.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  });
}

if (desktopEvents) {
  desktopEvents.addEventListener('click', (e) => { 
    e.preventDefault(); 
    document.querySelector('.events-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  });
}

if (desktopContact) {
  desktopContact.addEventListener('click', (e) => { 
    e.preventDefault(); 
    alert(" hello@dynamicsevents.com\n (555) 123-4789\nWe'd love to hear from you!"); 
  });
}

// Close mobile menu on window resize (if screen becomes desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && menuOpen) {
    toggleMobileMenu();
  }
});

// Optional: Add scroll effect to navbar (transparent to subtle background)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector(".hero-section");
  const heroBg = document.getElementById("heroBg");

  const scrollY = window.scrollY;

  // Navbar background change
  if (scrollY > 50) {
    navbar.style.background = 'rgba(254, 251, 246, 0.95)';
  } else {
    navbar.style.background = 'rgba(254, 251, 246, 0.8)';
  }

  
  const heroHeight = hero.offsetHeight;
  const scrollProgress = Math.min(scrollY / heroHeight, 1);

  
  hero.style.transform = `scale(${1 + scrollProgress * 0.05})`;
 
  if (heroBg) {
    heroBg.style.opacity = 1 - scrollProgress * 0.7;
  }
});

const heroBg = document.getElementById("heroBg");

const heroImages = [
  "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

let index = 0;

function changeHeroImage() {
  heroBg.style.opacity = 0;

  setTimeout(() => {
    heroBg.style.backgroundImage = `url(${heroImages[index]})`;
    heroBg.style.opacity = 1;
    index = (index + 1) % heroImages.length;
  }, 500);
}

// initial load
heroBg.style.backgroundImage = `url(${heroImages[0]})`;
heroBg.style.opacity = 1;

// rotate
setInterval(changeHeroImage, 5000);

const bg1 = document.querySelector(".hero-bg-1");
const bg2 = document.querySelector(".hero-bg-2");

const images = [
  "https://images.pexels.com/photos/2574476/pexels-photo-2574476.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/7648022/pexels-photo-7648022.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/35064539/pexels-photo-35064539.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/13400067/pexels-photo-13400067.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/35442857/pexels-photo-35442857.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/15138850/pexels-photo-15138850.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

let current = 0;
let showingFirst = true;

// initial
bg1.style.backgroundImage = `url(${images[0]})`;
bg1.classList.add("active");

function switchImage() {
  current = (current + 1) % images.length;

  if (showingFirst) {
    bg2.style.backgroundImage = `url(${images[current]})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;

    bg2.classList.add("active");
    bg1.classList.remove("active");
  } else {
    bg1.style.backgroundImage = `url(${images[current]})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;

    bg1.classList.add("active");
    bg2.classList.remove("active");
  }

  showingFirst = !showingFirst;
}

setInterval(switchImage, 5000);