function cekPenerimaan() {
    const namaInput = document.getElementById("nama").value.toLowerCase(); // Mengubah input nama menjadi huruf kecil
    const namaDiterima = [
        "nafis anggen bhaskara",
        "novandra adzra ghassani",
        "sekar anggun lukitasari",
        "muhammad fathurezzi yoga samfirdausi",
        "dzakia dzatil izza",
        "dimas bagja islami sundana",
        "misbahul luqman ashar",
        "atsal fikri ramadhani",
        "adkhilni mudkhola sidqi",
        "sherin eka putri laksono",
        "nimas ayu kencana wungu",
        "ananda adjie octavian rasya",
        "mohammad ikhsan ramadhan"
    ];

    // Memisahkan input nama menjadi dua kata pertama
    const inputKata = namaInput.split(' ').slice(0, 2).join(' ');

    // Memeriksa apakah dua kata pertama dalam input ada dalam daftar nama yang diterima
    if (namaDiterima.includes(inputKata)) {
        window.location.href = "halaman-diterima.html"; // Arahkan ke laman kedua
    } else {
        window.location.href = "halaman-tidak-diterima.html"; // Arahkan ke laman "Tidak Diterima"
    }
}
