//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika HouseOfgayatri di klik
document.querySelector("#HouseOfgayatri-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Mengganti ikon Feather
feather.replace();

// Menangani klik pada tautan media sosial
document.querySelectorAll(".social-icons a").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const socialName = icon.getAttribute("aria-label");
    alert(`Anda akan diarahkan ke halaman ${socialName}.`);
  });
});
