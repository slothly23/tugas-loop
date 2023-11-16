// menampilkan teks "User ke - 1 ... User ke - 100"
for (let user = 1; user < 101; user++) {
    console.log("User ke - ", user);
}

// pengulangan menggunakan FOR LOOP pengulangan 10 kali nilai awal ditambah 2 setiap pengulangan
let jumlah = 0;
for (let ulang = 0; ulang < 10; ulang++) {
    jumlah += 2;
    console.log(jumlah);
}

// FOR LOOP pengecekan nilai ganjil atau genap
for (let count = 0; count <= 20; count++) {
    if (count%2 === 0){
        console.log(count, " adalah bilangan genap")
    } else {
        console.log(count, " adalah bilangan ganjil")
    }
}
