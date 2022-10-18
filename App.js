const main = document.querySelector(".main")
let qrInput = document.querySelector(".input_box")
let generateBtn = document.querySelector(".generate_btn")
let download_btn = document.querySelector(".download_btn")
let qrImg = document.querySelector(".qr-code img");



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
    // console.log("Amarjeet Kumar")
    
    const canvas = document.createElement("canvas");  
    const img_link = document.createElement("a");
    img_link.download = "image.jpg";
    img_link.href = canvas.toDataURL();
    img_link.click();
})




qrInput.addEventListener("input", () => {
    if(qrInput.value.trim() == "") {
        main.classList.remove("change_btn")
        main.classList.remove("active");
    }
});