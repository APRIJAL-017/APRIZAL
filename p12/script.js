// Definisikan spesifikasi produk
const productSpecs = {
    "CBR 250RR": {
        surat: "Lengkap",
        pajak: "Hidup",
        cc: "250cc",
        lainnya: "Warna: Orange Repsol, Transmisi: Manual"
    },
    "CBR 250RR.": {
        surat: "STNK",
        pajak: "Hidup",
        cc: "250cc",
        lainnya: "Warna: Merah Putih, Transmisi: Manual"
    },
    "CBR 250RR,": {
        surat: "STNK",
        pajak: "Hidup",
        cc: "250cc",
        lainnya: "Warna: Merah Hitam, Transmisi: Manual"
    },
    "CBR 250RR..": {
        surat: "STNK",
        pajak: "Hidup",
        cc: "250cc",
        lainnya: "Warna: Putih Biru, Transmisi: Manual"
    }
};

// Fungsi untuk menampilkan spesifikasi produk
function showSpecs(productName) {
    const modal = document.getElementById("spec-modal");
    const specTitle = document.getElementById("spec-title");
    const specDetails = document.getElementById("spec-details");

    const specs = productSpecs[productName];

    specTitle.textContent = `Spesifikasi: ${productName}`;
    specDetails.innerHTML = `
        <li>Surat-Surat: ${specs.surat}</li>
        <li>Pajak: ${specs.pajak}</li>
        <li>CC Mesin: ${specs.cc}</li>
        <li>${specs.lainnya}</li>
    `;

    modal.style.display = "flex";
}

// Fungsi untuk menutup modal spesifikasi
function closeSpecs() {
    document.getElementById("spec-modal").style.display = "none";
}

// Username dan password validasi
const validUsername = "admin";
const validPassword = "12345";

const loginSection = document.getElementById("login-section");
const mainSection = document.getElementById("main-section");

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login berhasil!");
        showMainSection();
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Username atau password salah.";
    }
});

// Cek status login
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        showMainSection();
    } else {
        showLoginSection();
    }
}

function showLoginSection() {
    loginSection.style.display = "block";
    mainSection.style.display = "none";
}

function showMainSection() {
    loginSection.style.display = "none";
    mainSection.style.display = "block";
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Anda telah logout!");
    showLoginSection();
}

// Fungsi untuk menambahkan produk ke keranjang belanja
let cart = [];
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    renderCart();
}

// Fungsi untuk merender keranjang belanja
function renderCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    cartItemsDiv.innerHTML = cart
        .map((item, index) => `<p>${item.name} - Rp${item.price} <button onclick="removeFromCart(${index})">Hapus</button></p>`)
        .join("");

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalDiv.innerHTML = `<p>Total: Rp${totalPrice.toLocaleString()}</p>`;
}

// Fungsi untuk menghapus produk dari keranjang belanja
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Fungsi untuk proses checkout
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong!");
    } else {
        alert("Terima kasih telah berbelanja!");
        cart = [];
        renderCart();
    }
}

checkLoginStatus();
