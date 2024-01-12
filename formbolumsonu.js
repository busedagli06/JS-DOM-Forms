// FORMLARLA ÇALIŞMAK
/*
1.Formu Seç
2.Input Bilgisini Ul içerisine Ekle
3.Input İçindeki Bilgiyi Sıfırla
4.Eğer Forma bilgi girilmezse kullanıcıyı uyar
*/



let userFormDOM = document.querySelector('#userForm') // Formu seç
userFormDOM.addEventListener('submit',formHandler) //Formun Submiteventı ekleyip,bu evente formHandler fonksiyonu tanımlama
const alertDOM = document.querySelector('#alert') //dosyadan alert tanımla



function formHandler(event){  // submit'e bağlı fonksiyonu tanımlama
    event.preventDefault() // submit anında sayfanın yenilenmesini engelleme
    const USER_NAME = document.querySelector('#username') // Kulanıcı Adı bilgisini seç
    const SCORE = document.querySelector('#score') // Not Bilgisini seç

    if (USER_NAME.value && SCORE.value){ // Kullanıcı Adı ve Not Bilgisine değer girilmişse
        addItem(USER_NAME.value, SCORE.value) //Girilen Bilgileri addItem fonksiyonuyla listele
        USER_NAME.value = "" // Submit'ten sonra Kullanıcı Adı Bilgisini sıfırla 
        SCORE.value = "" // Submit'ten sonra Not Bilgisini sıfırla
    } else { // forma değer girilmeden submit yapılırsa
        alertDOM.innerHTML = alertFunction( // alert'in içine alertFunction fonksiyonunu çalıştır
            "Başlık Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger"
        )
    }
}
let userListDOM = document.querySelector('#userList') // Dosyadaki liste elemanını çağır
const addItem = (userName, score) =>{ // addItem fonksiyonunu tanımla
    let liDOM = document.createElement('li') // li elementni  oluştur
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>` // li elementini içine yazılacak
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center') // Li elementinin class'ına ekle
    userListDOM.append(liDOM) // Dosyadaki listeye li elementini ekle
}
const alertFunction = (title, message, className="danger") => ` 
    <div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>` // alert olduğunda çalışacak fonksiyonu tanımla