/*
 * Pawparazzi — Premium Pet Services HTML Template
 * Version: 1.0.0
 * Author: PixelGrove
 * License: PixelGrove Standard License — see LICENSE.txt
 */

// ============================================================
// scroll-effects.js
// All visual effects that respond to the user's scroll position:
//
//   1. Sticky navbar — fixes the nav bar after scrolling past the hero
//      and swaps the logo to its dark version
//   2. Hero text fade — fades out the hero headline as the user scrolls down
//   3. Dot indicator states — updates the progress dots UI
//      (only active on the "Pawparrazi - Template" page)
// ============================================================

import {
    nav, logoImage, headerSection, headerText
} from "./utilities.js";


export function handleScroll() {


    // ---- 1. Sticky Navbar + Logo Swap ----
    // Once the user scrolls past the hero (minus 75px buffer),
    // pin the navbar and switch to the dark logo.
    if (window.pageYOffset > headerSection.offsetHeight - 75) {
        nav.classList.add("active");
        logoImage.src = "assets/images/Logo_black.png"; // dark version for light backgrounds
    } else {
        nav.classList.remove("active");
        logoImage.src = "assets/images/Logo.png";       // original light version for the hero
    }


    // ---- 2. Hero Text Fade ----
    // Gradually reduces the hero text opacity as the user scrolls.
    // Fully transparent by 400px of scroll. Math.max(0,...) prevents negative values.
    const opacity = Math.max(0, 1 - window.pageYOffset / 400);
    headerText.style.opacity = opacity;


    
}