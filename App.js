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
        main.classList.add("change_btn")
    });

   
 
});

// code for Downloading the QR code

download_btn.addEventListener("click" , ()=>{
    // const canvas = document.createElement("canvas")
    // canvas.src =  qrImg.src
    // document.getElementById("gen").appendChild(canvas)
          var a = document.createElement('a');
        //   a.href = "./image/Project.png" 
        //   a.href = qrImg.src
          a.href = "qrImg.src"
          a.download = "a.png"
        
          document.body.appendChild(a);
          a.click();

          document.body.removeChild(a);
          })



qrInput.addEventListener("input", () => {
    if(qrInput.value.trim() == "") {
        main.classList.remove("change_btn")
        main.classList.remove("active");
    }
});



// var link = document.getElementById("download");
// link.addEventListener("click", setUpDownload);
// function setUpDownload() {
//     // Find the image inside the #qrcode div
//     var image = document.getElementById("qrcode").getElementsByTagName("img");

//     // Get the src attribute of the image, which is the data-encoded QR code
//     var qr = image[0].src;
// // console.log(qr)
//     // Copy that to the download link
//     link.src = qr;
// }