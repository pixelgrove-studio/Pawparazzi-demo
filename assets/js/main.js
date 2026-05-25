/*
 * Pawparazzi — Premium Pet Services HTML Template
 * Version: 1.0.0
 * Author: PixelGrove
 * License: PixelGrove Standard License — see LICENSE.txt
 */

// ============================================================
// main.js
// Entry point — imports all modules and wires up global
// event listeners. Nothing functional lives here; this file
// just bootstraps the app.
// ============================================================

import { links, svgUp } from "./utilities.js";
import { fadeOutLoader } from "./loader.js";
import { handleScroll } from "./scroll-effects.js";

// navigation.js and observers.js are side-effect modules —
// they self-register their own event listeners on import.
import "./navigation.js";
import "./observers.js";


document.addEventListener("DOMContentLoaded", () => {

    // ---- Prevent placeholder link jumps ----
    // Stops any <a href="#"> from jumping to the top of the page
    links.forEach(link =>
        link.addEventListener("click", e => e.preventDefault())
    );


    // ---- Scroll-to-top arrow ----
    svgUp.addEventListener("click", () => {
        window.scroll({ top: 0, behavior: "smooth" });
    });


    // ---- Global event listeners ----
    window.addEventListener("load", fadeOutLoader); // remove loader when page is ready
    window.addEventListener("scroll", handleScroll);  // run scroll effects on every scroll tick
    window.addEventListener("pageshow", handleScroll);  // re-run on back/forward navigation


    // ---- Scroll position management ----
    // Prevents browsers from restoring the previous scroll position
    // on page load, ensuring the user always starts at the top.
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);


    // ---- Copyright year ----
    // Dynamically inserts the current year so it never goes stale.
    document.getElementById("year").innerHTML = new Date().getFullYear();

});