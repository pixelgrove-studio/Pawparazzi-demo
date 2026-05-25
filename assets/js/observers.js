/*
 * Pawparazzi — Premium Pet Services HTML Template
 * Version: 1.0.0
 * Author: PixelGrove
 * License: PixelGrove Standard License — see LICENSE.txt
 */

// ============================================================
// observers.js
// Uses the IntersectionObserver API to automatically highlight
// the correct nav link as the user scrolls through sections.
//
// How it works:
//   - Observes every <section>, <header>, and <footer>
//   - When one is 55%+ visible in the viewport, it reads its `id`
//   - Finds the matching nav link (href="#id") and marks it active
// ============================================================

import { sections, navNavigationBarLi } from "./utilities.js";


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        // only act on the section that's entering the viewport
        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            // clear active state from all nav items
            navNavigationBarLi.forEach(li => li.classList.remove("active"));

            // find the nav link whose href matches the visible section's id
            const activeLink = document.querySelector(
                `.navigation-bar a[href="#${currentId}"]`
            );

            // add active to the <li> wrapping that link (if found)
            activeLink?.parentElement.classList.add("active");
        }

    });

}, {
    threshold: 0.55  // section must be 55% visible before triggering
});


// Attach the observer to every section, header, and footer
sections.forEach(section => observer.observe(section));