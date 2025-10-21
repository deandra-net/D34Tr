// --- Scroll Fade-In Animation ---

// 1. Select all elements you want to apply the animation to
const animatedElements = document.querySelectorAll('.experience-card1, .experience-card2, .project-card, .contact h2, .contact p, .social-icons');

// 2. Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the element is visible in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove the class to re-animate on scroll up
            // entry.target.classList.remove('show'); 
        }
    });
});

// 3. Add the 'hidden' class to each element initially and start observing them
animatedElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// --- Mobile menu toggle ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
// script.js

// --- Smooth Scroll Animation (Alternatif JavaScript) ---
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // 1. Mencegah perilaku default (lompatan langsung)
        e.preventDefault();

        // 2. Ambil ID tujuan dari atribut href (misal: "#experience")
        const targetId = this.getAttribute('href');

        // 3. Cari elemen tujuan di dokumen
        const targetElement = document.querySelector(targetId);

        // 4. Lakukan scroll halus ke elemen tersebut
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Pilihan: 'start', 'center', 'end'
            });
        }
    });
});
// script.js

// ... (kode untuk fade-in dan smooth scroll tetap di atas) ...


// --- EFEK ANIMASI MENGETIK (BARU) ---
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan DOM sudah termuat sepenuhnya sebelum menjalankan script

    var options = {
        strings: [
            'a cyber security enthusiast.',
            'a content creator.',

            'a Computer Science Student.',
        ],
        typeSpeed: 50,  // Kecepatan mengetik (ms)
        backSpeed: 30,  // Kecepatan menghapus (ms)
        backDelay: 1500, // Waktu tunggu sebelum menghapus (ms)
        startDelay: 500, // Waktu tunggu sebelum mulai (ms)
        loop: true,     // Ulangi animasi
        showCursor: true,
        cursorChar: '|',
    };

    var typed = new Typed('#typed-text', options);
});

// --- Modal Functionality ---
document.addEventListener('DOMContentLoaded', function() {
    // Get all card links with data-modal attribute
    const cardLinks = document.querySelectorAll('.card-link[data-modal]');

    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});

  const heroImage = document.getElementById("hero-image");
  const images = ["aset/hero1.png", "aset/hero2.jpg"];
  let currentIndex = 0;

  function showSlides() {
    // Tambahkan efek glitch
    heroImage.classList.add("glitch");

    // Setelah glitch selesai, ganti gambar
    setTimeout(() => {
      heroImage.classList.remove("glitch");
      currentIndex = (currentIndex + 1) % images.length;
      heroImage.src = images[currentIndex];
    }, 300); // waktu glitch sesuai durasi animasi
  }

  setInterval(showSlides, 1500); // Ganti gambar tiap 1.5 detik
