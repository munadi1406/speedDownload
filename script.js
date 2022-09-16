const button = document.querySelector(".button");
const select = document.querySelector("#select");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const jawaban = document.querySelector(".hasilnya");
const validasi = {
  mb: "MB",
  gb: "GB",
};

function konversiDetik(e) {
  const y = e % 3600;
  const jam = e / 3600;
  const menit = y / 60;
  const detik = y % 60;
  // console.log(`waktu yang di butuhkan adalah ${Math.floor(jam)} jam , ${Math.floor(menit)} menit , ${Math.floor(detik)} detik`)
  jawaban.textContent = `Waktu yang diperlukan adalah ${Math.floor(jam)} Jam : ${Math.floor(menit)} Menit : ${Math.floor(detik)} Detik`;
}

button.addEventListener("click", () => {
  if (select.value == validasi.mb) {
    // untuk bagian MB
    let aksi = parseFloat(input2.value) / (parseFloat(input1.value) / 8);
    konversiDetik(aksi);
  } else if (select.value == validasi.gb) {
    // untuk bagian GB
    let aksi = (parseFloat(input2.value) * 1024) / (parseFloat(input1.value) / 8);
    konversiDetik(aksi);
  } else {
    console.log("error");
  }
});
