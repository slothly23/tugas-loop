// TUGAS INTRO

// Console log data diri
console.log ("Nur Inayah")
console.log ("Bima, NTB")
console.log ("05 Agustus 1997")
console.log ("26 tahun")
console.log ("Belum bekerja")
console.log("-------------------------------------------")

// Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1
console.log ("Nur Inayah") //nama
console.log ("Bima, NTB") //asal daerah
console.log ("05 Agustus 1997") //tanggal lahir
console.log ("26 tahun") //umur
console.log ("Belum bekerja") //posisi pekerjaan
console.log("-------------------------------------------")

// Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1. Lalu panggil dan tampilkan dengan menggunakan console log
let nama = "Nur Inayah",
asalDaerah = "Bima, NTB",
tgLahir = "05 Agustus 1997",
umur = 26,
pekerjaan = "Belum bekerja";

console.log("Nama : ", nama)
console.log("Asal daerah : ", asalDaerah)
console.log("Tanggal lahir : ", tgLahir)
console.log("Umur : ", umur, "tahun")
console.log("Posisi pekerjaan : ", pekerjaan)
console.log("-------------------------------------------")

// Operasi matematika
let penjumlahan = 25 + 10;
let perkalian = 100 * 2;
let pembagian = 99 / 2;
let modulus = 99 % 2;

console.log(penjumlahan)
console.log(perkalian)
console.log(pembagian)
console.log(modulus)
console.log("-------------------------------------------")

// TUGAS CONDITIONAL

// Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP
let posisi = "CMO"
if (posisi === "CEO"){
    console.log("CEO adalah pemimpin dan perwakilan perusahaan.")
} 
else if(posisi === "CTO"){
    console.log("CTO atau chief technology officer bertanggung jawab atas produk.")
}
else if (posisi === "CFO"){
  console.log("CFO bertugas membentuk strategi penggalangan dana.")
}
else if  (posisi === "CMO"){
console.log("CMO mbertanggung jawab atas semua aspek pemasaran.")
}
else{
console.log("Maaf posisi yang dimaksuy tidak ditemukan.")
}
console.log("-------------------------------------------")

//Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b
let a = 1
let b = 5
if (a > b){
    console.log(a + " lebih dari " + b)
}
else if (a < b){
    console.log(a + " kurang dari " + b)
}
else if (a == b){
    console.log(a + " sama dengan " + b)
}
console.log("-------------------------------------------")

//Gunakan switch case untuk mengetahui nama hari berdasarkan angka
let angka = 6
switch(angka) {
    case 1: {console.log("Hari Minggu"); break;}
    case 2: {console.log("Hari Senin"); break;}
    case 3: {console.log("Hari Selasa"); break;}
    case 4: {console.log("Hari Rabu"); break;}
    case 5: {console.log("Hari Kamis"); break;}
    case 6: {console.log("Hari Jum'at"); break;}
    case 7: {console.log("Hari Sabtu"); break;}
}
console.log("-------------------------------------------")

// TUGAS LOOPING

// menampilkan teks "User ke - 1 ... User ke - 100"
for (let user = 1; user < 101; user++) {
    console.log("User ke - ", user);
}
console.log("-------------------------------------------")

// pengulangan menggunakan FOR LOOP pengulangan 10 kali nilai awal ditambah 2 setiap pengulangan
let jumlah = 0;
for (let ulang = 0; ulang < 10; ulang++) {
    jumlah += 2;
    console.log(jumlah);
}
console.log("-------------------------------------------")

// FOR LOOP pengecekan nilai ganjil atau genap
for (let count = 0; count <= 20; count++) {
    if (count%2 === 0){
        console.log(count, " adalah bilangan genap")
    } else {
        console.log(count, " adalah bilangan ganjil")
    }
}
console.log("-------------------------------------------")
// buat program kuis

