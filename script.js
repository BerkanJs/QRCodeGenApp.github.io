
let imgBox=document.getElementById("imgBox");
let qeImage=document.getElementById("qrIamge");
let qrText=document.getElementById("qrText");







function generateQR(){

    if (qrText.value.length>0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
        imgBox.classList.add("show-img");

    }

    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");

        },1000) //class ismini 1000 saniyeden sonra tagdan siler
     
    }



}