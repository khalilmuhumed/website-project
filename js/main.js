/* =========================================================
   Natiivi JS: Mobiilinavigaation toggle
   - Toimii näin:
     1) Klikkaat "☰ Menu" -nappia
     2) JS lisää/poistaa bodyyn luokan "nav-open"
     3) CSS näyttää/piilottaa .site-nav media queryn sisällä
   ========================================================= */

   const toggleBtn = document.querySelector(".nav-toggle");

   if (toggleBtn) {
     toggleBtn.addEventListener("click", () => {
       document.body.classList.toggle("nav-open");
   
       // aria-expanded kertoo ruudunlukijalle, onko menu auki vai kiinni
       const isOpen = document.body.classList.contains("nav-open");
       toggleBtn.setAttribute("aria-expanded", String(isOpen));
     });
   }
   