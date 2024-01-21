const progress = document.getElementById("progress");
const form = document.forms.form;
const URL = 'https://students.netoservices.ru/nestjs-backend/upload';

form.addEventListener('submit', (even) => {
      even.preventDefault();
      const xhr = new XMLHttpRequest();

      xhr.open("POST", URL);


      //обработчик для отправки
      xhr.upload.onprogress = function(el) {
         progress.value = el.loaded/el.total
      }

      /*
      xhr.upload.onprogress = function(event) {
        console.log('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
      }
      */

      // Оповещение начала загрузки
      xhr.upload.onloadstart = function () {
       console.log('Начало загрузки')
      }

      xhr.upload.onload = function() {
        console.log("Загрузка заверешна");
        alert( 'Данные полностью загружены на сервер!' );
      }

      xhr.upload.onerror = () => {
        alert( 'Произошла ошибка при загрузке данных на сервер!' );
      }

      const formData = new FormData(form);
      xhr.send(formData);

})
