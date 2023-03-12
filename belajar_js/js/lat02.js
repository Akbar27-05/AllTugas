// document.querySelector("#paragraf").innerHTML = "Saya Belajar Javascript"

// document.querySelector("#content").innerHTML = "<h1> Makan Soto </h1>"

let tanggal = 21;
let bulan = 1;
let hasil = "salah";

if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
    hasil = "tanggal/bulan benar";
    if (bulan == 1) {
        hasil = "aquarius";
        if (tanggal >= 1 && tanggal < 20) {
            hasil = "capricorn";
        }

    }
    if (bulan == 2) {
        hasil = "pisces";
        if (tanggal >= 1 && tanggal < 19) {
            hasil = "aquarius";
        }

    }
    if (bulan == 3) {
        if (tanggal >= 1 && tanggal < 21) {
            hasil = "pisces";
        }else{
            hasil = "aries";
        }
    }
    if (bulan == 4) {
        if (tanggal >= 1 && tanggal < 20) {
            hasil = "aries";
        }else{
            hasil = "taurus";
        }
    }
    if (bulan == 5) {
        if (tanggal >= 1 && tanggal < 21) {
            hasil = "taurus";
        }else{
            hasil = "gemini";
        }
    }
    if (bulan == 6) {
        if (tanggal >= 1 && tanggal < 21) {
            hasil = "gemini";
        }else{
            hasil = "cancer";
        }
    }
    if (bulan == 7) {
        if (tanggal >= 1 && tanggal < 23) {
            hasil = "cancer";
        }else{
            hasil = "leo";
        }
    }
    if (bulan == 8) {
        if (tanggal >= 1 && tanggal < 23) {
            hasil = "leo";
        }else{
            hasil = "virgo";
        }
    }
    if (bulan == 9) {
        if (tanggal >= 1 && tanggal < 23) {
            hasil = "virgo";
        }else{
            hasil = "libra";
        }
    }
    if (bulan == 10) {
        if (tanggal >= 1 && tanggal < 23) {
            hasil = "libra";
        }else{
            hasil = "scorpio";
        }
    }
    if (bulan == 11) {
        if (tanggal >= 1 && tanggal < 22) {
            hasil = "scorpio";
        }else{
            hasil = "sagittarius";
        }
    }
    if (bulan == 12) {
        if (tanggal >= 1 && tanggal < 22) {
            hasil = "sagittarius";
        }else{
            hasil = "aquarius";
        }
    }
}
console.log(hasil);

document.querySelector("#paragraf").innerHTML = '<h1>'+hasil+'</h1>';
