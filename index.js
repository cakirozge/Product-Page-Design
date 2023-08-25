let productImg  = document.getElementById("productImg"); //ürün fotoğraflarını kontrol etmek için değişken oluşturdum.
let btn = document.getElementsByClassName("btn"); //btn üzerinden fotoğraf değişimini kontrol etmek için değişken oluşturdum.

btn[0].onclick = function(){             // resmi değiştirmek için fonksiyon oluşturduk. Bu fonksiyon ile btn 0 indisindeki resme her tıklandığında src dosyadan döndürecek.
    productImg.src = "images/images1.png";

    for(bt of btn) {                     // bir for döngüsü oluşturuyorum çünkü ürüne click yapınca değişim olsa da btn de renk değişimi olmuyor. ilk önce sınıf adını kaldırıyorum ardından gelecek olan btn ekliyorum. 
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function(){            
    productImg.src = "images/images2.png";

    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function(){             
    productImg.src = "images/images3.png";

    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}