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

