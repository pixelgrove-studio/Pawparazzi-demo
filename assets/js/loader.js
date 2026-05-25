/*
 * Pawparazzi — Premium Pet Services HTML Template
 * Version: 1.0.0
 * Author: PixelGrove
 * License: PixelGrove Standard License — see LICENSE.txt
 */

// ============================================================
// loader.js
// Handles the full-page loading overlay.
// Fades it out once the page has fully loaded, then removes
// it from the layout and re-enables scrolling on <body>.
// ============================================================

import { loader, body } from "./utilities.js";

export function fadeOutLoader() {
    // Step 1: add CSS class that triggers the fade-out transition
    loader.classList.add("fade-out");

    // Step 2: after the CSS transition completes (600ms),
    // fully hide the loader and unlock page scroll
    setTimeout(() => {
        loader.classList.add("remove");        // visually removes the overlay
        body.classList.remove("stop-scroll"); // re-enables scrolling
    }, 600); // must match the CSS transition-duration on .loader-wrap
}