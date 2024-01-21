const loaderImg = document.getElementById("loader");
const items = document.querySelector("#items");
const URL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const xhr = new XMLHttpRequest();
xhr.open('GET', URL);

xhr.addEventListener('readystatechange', (e) => {
        e.preventDefault();
        if(xhr.readyState === xhr.DONE){ // "датчик" успешного получения ответа с сервера
                loaderImg.classList.remove("loader_active"); //отключаем gif-прокрутку
                console.log('Прокрутка загрузки отключена!');
        }

        const dataJsonValute = JSON.parse(xhr.response).response.Valute; //парсим ответ из сервера 
                                                                         //для получения содержимого Valute
     
        for (let i in dataJsonValute) { //вычленяем код валюты, ее стоимость
                const charCode = dataJsonValute[i].CharCode; 
                const value = dataJsonValute[i].Value;
               
                //создаем HTML-код с данными по валюте
                let val = `<div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${value}</div>
                <div class="item__currency">руб.</div>
                </div>`
                items.insertAdjacentHTML('beforeend', val);
        }

})

xhr.send();
