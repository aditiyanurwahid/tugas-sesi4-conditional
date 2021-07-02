// Jawaban nomor 1

let jabatan = "CEO";

if (jabatan == "CEO") {
  console.log("jika saya sebagai CEO, maka tugas saya adalah memimpin perusahaan");
} else if (jabatan == "CTO") {
  console.log("jika saya sebagai CTO, maka tugas saya adalah mengembangkan produk perusahaan");
} else if (jabatan == "HR") {
  console.log("jika saya sebagai HR, maka tugas saya adalah melakukan rekrutmen calon pegawai baru");
} else if (jabatan == "PROGRAMMER") {
  console.log("jika saya sebagai PROGRAMMER, maka tugas saya adalah membuat program untuk memecahkan masalah");
} else {
  console.log("saya tidak memiliki tugas");
}

// jawaban nomor 2

let nilaiA = 5;
let nilaiB = 10;

if (nilaiA > nilaiB) {
  console.log("nilai A lebih besar dari nilai B");
} else if (nilaiA < nilaiB) {
  console.log("nilai A lebih kecil dari nilai B");
} else if (nilaiA == nilaiB) {
  console.log("nilai A sama dengan nilai B");
}

// Jawaban nomor 3

let angka = prompt("masukkan angka : \n (contoh: pilih angka 1 sampai 7)");

switch (angka) {
  case "1":
    alert("sekarang adalah hari Minggu");
    break;
  case "2":
    alert("sekarang adalah hari Senin");
    break;
  case "3":
    alert("sekarang adalah hari Selasa");
    break;
  case "4":
    alert("sekarang adalah hari Rabu");
    break;
  case "5":
    alert("sekarang adalah hari Kamis");
    break;
  case "6":
    alert("sekarang adalah hari Jumat");
    break;
  case "7":
    alert("sekarang adalah hari Sabtu");
    break;
  default:
    alert("angka yang anda masukkan salah");
}

// Jawaban nomor 4

let arah = prompt(" silahkan memilih arah : \n (contoh: atas, bawah, kanan, kiri)");

switch (arah) {
  case "atas":
    alert("anda menuju ke Atas");
    break;
  case "bawah":
    alert("anda menuju ke Bawah");
    break;
  case "kanan":
    alert("anda menuju ke Kanan");
    break;
  case "kiri":
    alert("anda menuju ke Kiri");
    break;
  default:
    alert("arah yang anda masukkan salah");
}
