const main = document.querySelector(".main")
let qrInput = document.querySelector(".input_box")
let generateBtn = document.querySelector(".generate_btn")
let download_btn = document.querySelector(".download_btn")
let qrImg = document.querySelector(".qr-code img");

let previewImg = document.querySelector("qr-code img")

generateBtn.addEventListener("click", () => {
    user_input = qrInput.value.trim();
    // main.classList.add("active");
    if(user_input== "") return;

      generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${user_input}`;
    qrImg.addEventListener("load", () => {
        main.classList.add("active");
        // main.classList.add("change_btn")
    });
let saveUrl = qrImg.src
 creatSavebtn(saveUrl)
});



// code for Downloading the QR code
const creatSavebtn = (saveUrl) =>{
// download_btn.href = qrImg.src
// link.download = 'qrcode';
// download_btn.innerHTML = "sskksk"
// console.log(download_btn.href)
const link = document.createElement('a');
link.id = 'save-link';
link.classList.add("my")
  
link.href = saveUrl;
link.download = 'qrcode';
link.innerHTML = 'Save Image';
document.querySelector("#gen").appendChild(link);
}


// const createSaveBtn = () => {
//     const link = document.createElement('a');
//     link.id = 'save-link';
//     link.classList =
//       'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
//     link.href = qrImg.src;
//     link.download = 'qrcode';
//     link.innerHTML = 'Save Image';
//     document.getElementById('generated').appendChild(link);
//   };

qrInput.addEventListener("input", () => {
    if(qrInput.value.trim() == "") {
        main.classList.remove("change_btn")
        main.classList.remove("active");
    }
});