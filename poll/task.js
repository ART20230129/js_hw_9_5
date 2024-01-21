const poolTitle = document.querySelector("#poll__title");
const pollAnswers = document.getElementById("poll__answers");

const URL = 'https://students.netoservices.ru/nestjs-backend/poll';

const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

xhr.addEventListener('readystatechange', (e) => {
        e.preventDefault();
        if (xhr.readyState === xhr.DONE) {
                const dataJson = JSON.parse(xhr.response).data;


                poolTitle.textContent = dataJson.title;//вставляем текст вопроса
                const answers = dataJson.answers;

                //вставляем в HTML кнопки
                for(let el = 0; el <answers.length; el++){
                     let button = document.createElement("button"); //создаем элемент кнопка
                     button.className = "poll__answer"; // присваиваем кнопке класс
                     button.textContent = answers[el]; // заполняем название кнопки
                     pollAnswers.appendChild(button);  //добавляем кнопку в разметку
                }
                
                //обработик реакции при выборе ответа
                const pollAnswer = document.querySelectorAll(".poll__answer")
                //const pollAnswer = Array.from(document.querySelectorAll(".poll__answer"));
               
                // Вариант обработчика
                /*
                pollAnswer.forEach((item) => {                      //перебор кнопок
                        item.addEventListener("click", () => {
                                alert("Спасибо, ваш голос засчитан!")
                        })
                })
                */
               // Вариант обработчика
               /*
                pollAnswer.forEach((elem) => elem.onclick = () => {
                        alert("Спасибо, ваш голос засчитан!")
                })
                */
                pollAnswers.addEventListener("click", (el) =>{
                        if(el.target.className === "poll__answer"){
                                alert("Спасибо, ваш голос засчитан!")
                        }
                        /*
                        if(el.target.tagName === "BUTTON"){
                                alert("Спасибо, ваш голос засчитан!")  
                        }
                        */
                })

                      
        }

})                                                                     

xhr.send();                                                                     

