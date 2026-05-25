/*
 * Pawparazzi — Premium Pet Services HTML Template
 * Version: 1.0.0
 * Author: PixelGrove
 * License: PixelGrove Standard License — see LICENSE.txt
 */

// ============================================================
// navigation.js
// Handles all interactive navigation behaviour:
//   1. Hamburger menu open/close (mobile)
//   2. Active state highlight when a nav item is clicked
// ============================================================

import { navToggle, navSpanMiddle, navNavigationBar, navNavigationBarLi } from "./utilities.js";


// ---- Hamburger Toggle ----
// On click, toggles CSS classes that animate the 3-bar icon
// into an X and slides the nav menu into view.
navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");         // triggers X animation on the icon
    navSpanMiddle.classList.toggle("hide");       // hides the middle bar to form the X
    navNavigationBar.classList.toggle("show");    // slides the nav links into view
});


// ---- Active Nav Item on Click ----
// When a nav link is clicked, remove 'active' from all siblings
// and add it only to the clicked item.
navNavigationBarLi.forEach(li =>
    li.addEventListener("click", () => {
        // clear active state from every nav item
        Array.from(li.parentElement.children).forEach(sibling =>
            sibling.classList.remove("active")
        );
        // apply active state to the clicked item
        li.classList.add("active");
        // close the mobile drawer on link click
        navToggle.classList.remove("active");
        navSpanMiddle.classList.remove("hide");
        navNavigationBar.classList.remove("show");
    })
);
