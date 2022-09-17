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
  jawaban.textContent = `Waktu yang diperlukan adalah ${Math.floor(
    jam
  )} Jam : ${Math.floor(menit)} Menit : ${Math.floor(detik)} Detik`;
}

button.addEventListener("click", () => {
  if (input1.value === "" || input2.value === "") {
    alert("salah satu form masih kosong");
    // jawaban.textContent = "form masih kosong";
  } else {
    if (select.value == validasi.mb) {
      // untuk bagian MB
      let aksi = parseFloat(input2.value) / (parseFloat(input1.value) / 8);
      konversiDetik(aksi);
    } else if (select.value == validasi.gb) {
      // untuk bagian GB
      let aksi =
        (parseFloat(input2.value) * 1024) / (parseFloat(input1.value) / 8);
      konversiDetik(aksi);
    } else {
      console.log("error");
    }
  }
});


// {
//   /**
//    * Disable right-click of mouse, F12 key, and save key combinations on page
//    */
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       e.preventDefault();
//     },
//     false
//   );
//   document.addEventListener(
//     "keydown",
//     function (e) {
//       //document.onkeydown = function(e) {
//       // "I" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//         disabledEvent(e);
//       }
//       // "J" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//         disabledEvent(e);
//       }
//       // "S" key + macOS
//       if (
//         e.keyCode == 83 &&
//         (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
//       ) {
//         disabledEvent(e);
//       }
//       // "U" key
//       if (e.ctrlKey && e.keyCode == 85) {
//         disabledEvent(e);
//       }
//       // "F12" key
//       if (event.keyCode == 123) {
//         disabledEvent(e);
//       }
//       // "C" key
//       if (e.ctrlKey && event.keyCode == 67) {
//         disabledEvent(e);
//       }
//     },
//     false
//   );
//   function disabledEvent(e) {
//     if (e.stopPropagation) {
//       e.stopPropagation();
//     } else if (window.event) {
//       window.event.cancelBubble = true;
//     }
//     e.preventDefault();
//     return false;
//   }
// }
