const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"]);

let newNav = document.getElementsByTagName('a');
Array.from(newNav).forEach((item, index) => {
  newNav[index].textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const ctaText = document.querySelector('.cta-text');
const ctaImg = document.querySelector('#cta-img');


ctaText.querySelector('h1').textContent = siteContent.cta['h1'];
ctaText.querySelector('button').textContent = siteContent.cta['button'];
ctaImg.src = siteContent.cta['img-src'];


const midheadfeatures = document.querySelector('.text-content:nth-child(1) h4');
const midtextfeatures = document.querySelector('.text-content:nth-child(1) p');
const midheadabout = document.querySelector('.text-content:nth-child(2) h4');
const midtextabout = document.querySelector('.text-content:nth-child(2) p');

midheadfeatures.textContent = siteContent['main-content']['features-h4'];
midtextfeatures.textContent = siteContent['main-content']['features-content'];
midheadabout.textContent = siteContent['main-content']['about-h4'];
midtextabout.textContent = siteContent['main-content']['about-content'];

const midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

const midheadservices = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
const midtextservices = document.querySelector('.bottom-content .text-content:nth-child(1) p');
const midheadproduct = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
const midtextproduct = document.querySelector('.bottom-content .text-content:nth-child(2) p');
const midheadvision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
const midtextvision = document.querySelector('.bottom-content .text-content:nth-child(3) p');

midheadservices.textContent = siteContent['main-content']['services-h4'];
midtextservices.textContent = siteContent['main-content']['services-content'];
midheadproduct.textContent = siteContent['main-content']['product-h4'];
midtextproduct.textContent = siteContent['main-content']['product-content'];
midheadvision.textContent = siteContent['main-content']['vision-h4'];
midtextvision.textContent = siteContent['main-content']['vision-content'];

const contactinfo = document.querySelector('.contact');
const contactpone = document.querySelector('.contact .text-content:nth-child(1) p');
const contactptwo = document.querySelector('.contact .text-content:nth-child(2) p');
const contactpthree = document.querySelector('.contact .text-content:nth-child(3) p');

contactinfo.querySelector('h4').textContent = siteContent.contact['contact-h4'];
contactpone.querySelector('p').textContent = siteContent.contact['address'];
contactptwo.querySelector('p').textContent = siteContent.contact['phone'];
contactpthree.querySelector('p').textContent = siteContent.contact['email'];

// const ctaText = document.querySelector('.cta-text');
// const ctaImg = document.querySelector('#cta-img');


// ctaText.querySelector('h1').textContent = siteContent.cta['h1'];