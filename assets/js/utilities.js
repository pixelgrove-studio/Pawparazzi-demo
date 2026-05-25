/*
 * Pawparazzi — Premium Pet Services HTML Template
 * Version: 1.0.0
 * Author: PixelGrove
 * License: PixelGrove Standard License — see LICENSE.txt
 */

// ============================================================
// utilities.js
// Centralized DOM query cache.
// Every other module imports from here instead of calling
// querySelector repeatedly, which keeps things DRY and fast.
// ============================================================

export const body                = document.querySelector("body");
export const loader              = document.querySelector(".loader-wrap");
export const links               = document.querySelectorAll('a[href="#"]');

// --- Navigation ---
export const nav                 = document.querySelector("header nav");
export const navToggle           = document.querySelector("header nav .toggle");
export const navSpanMiddle       = document.querySelector("header nav .toggle .middle");
export const navNavigationBar    = document.querySelector("header nav .navigation-bar");
export const navNavigationBarLi  = document.querySelectorAll("header nav .navigation-bar li");
export const logoImage           = document.querySelector("header nav .logo img");

// --- Sections (used by observer + scroll effects) ---
export const sections            = document.querySelectorAll("section, header, footer");
export const headerText          = document.querySelector("header .text");
export const headerSection       = document.querySelector("header");
export const aboutSection        = document.querySelector(".about-us");
export const cardsSection       = document.querySelector(".cards-section");
// export const whoWeAreSection         = document.querySelector(".who-we-are");
export const fixedImageSection   = document.querySelector(".fixed-image");
export const footerSection       = document.querySelector("footer");

// --- Scroll arrows ---
export const svgDown             = document.querySelector("header .arrow-down");
export const svgUp               = document.querySelector(".copyright .arrow-up");

// --- Misc ---
export const pageTitle           = document.querySelector("title");