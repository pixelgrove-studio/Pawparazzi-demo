# Pawparazzi — Pet Website Template

A premium, fully responsive pet services website template built with vanilla HTML, CSS, and JavaScript. Clean code, modular structure, and a warm luxury aesthetic ready to customize and launch.

---

## What's Included

pawparazzi/
├── index.html
├── assets/
│   ├── css/
│   │   ├── animations.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── loader.css
│   │   ├── main.css
│   │   ├── responsive.css
│   │   ├── sections.css
│   │   └── utilities.css
│   ├── images/
│   └── js/
│       ├── loader.js
│       ├── main.js
│       ├── navigation.js
│       ├── observers.js
│       ├── scroll-effects.js
│       └── utilities.js
└── README.md

---

## Getting Started

1. Download and unzip the folder
2. Open `index.html` in your browser — no build tools or dependencies required
3. To edit content, open `index.html` in any code editor (VS Code recommended)
4. Replace placeholder text, images, and links with your own content

---

## Customization Guide

### Colors & Fonts
All global styles live in `assets/css/global.css`. The primary palette and
font stacks are defined at the top of that file as CSS custom properties:

```css
:root {
  --color-primary: /* your gold/brown */;
  --font-heading:  /* script font */;
  --font-body:     /* sans-serif */;
}
```

### Navigation Links
All nav links use smooth anchor scrolling (`href="#section-id"`).
To add new pages, replace the `href="#"` placeholders in the nav and
card CTAs with your page URLs.

### Images
Drop your images into `assets/images/` and update the `src` attributes
in `index.html`. Recommended sizes:
- Hero background: 1920×1080px
- Card images: 600×700px
- Team photos: 400×400px
- About/section images: 800×900px

### Contact Form
The form is included as a UI shell. To make it functional, choose one
of these free options:

**Option 1 — EmailJS** (no backend, 200 emails/month free)
Follow the setup guide: https://www.emailjs.com/docs/tutorial/overview/
Then add their SDK script before the closing `</body>` tag.

**Option 2 — Formspree** (simplest option)
1. Sign up at https://formspree.io
2. Create a form and copy your endpoint ID
3. Update the form tag:
```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 3 — Netlify Forms** (if hosting on Netlify)
Add the `netlify` attribute to the form tag:
```html
<form class="contact-form row" netlify>
```

### Who We Are Panel
The `.menu` section is structured as a static panel by default.
To convert it into a modal/lightbox triggered by a button:
1. Add a trigger button anywhere on the page with `id="open-panel"`
2. In `js/main.js`, add:
```javascript
   document.getElementById('open-panel')
     .addEventListener('click', () => {
       document.querySelector('.menu').classList.toggle('active');
     });
```
3. Style the `.menu.active` state in your CSS as needed.

---

## Hosting (Free Options)

| Platform   | How to deploy                                      |
|------------|----------------------------------------------------|
| Netlify    | Drag and drop the folder at netlify.com/drop       |
| Vercel     | Connect your GitHub repo at vercel.com             |
| GitHub Pages | Push to a repo, enable Pages in repo Settings   |

---

## Browser Support

| Browser        | Support |
|----------------|---------|
| Chrome 90+     | ✅      |
| Firefox 88+    | ✅      |
| Safari 14+     | ✅      |
| Edge 90+       | ✅      |
| IE 11          | ❌      |

---

## Credits

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [FontAwesome 5](https://fontawesome.com)
- Avatar placeholders: [UI Avatars](https://ui-avatars.com)
- Material icons: [Google Material Symbols](https://fonts.google.com/icons)

---

## License

Personal and commercial use permitted under the terms in `LICENSE.txt`.
You may not resell or redistribute this template as a standalone product.