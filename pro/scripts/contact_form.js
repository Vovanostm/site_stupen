 form_send.addEventListener('click', function() {
     var _name = document.getElementById('form_name').value,
     _family = document.getElementById('form_family').value,
     _e_mail = document.getElementById('form_e-mail').value,
     _form_text = document.getElementById('form_message').value,
     _phone_num = document.getElementById('form_phone').value,
     _middle_name = document.getElementById('form_middle-name').value,
     data = 'work.php?'+'name='+_name+'&family='+_family+'&email='+_e_mail+'&tel='+_phone_num+'&text='+_form_text+'&middle_name='+_middle_name;

     console.log(data);

     // 1. Создаём новый объект XMLHttpRequest
     var form_xhr = new XMLHttpRequest();
     form_xhr.open('GET', data, true);

     // 2. Конфигурируем его: GET-запрос на URL 'phones.json'

     // 3. Отсылаем запрос
     form_xhr.send();

     form_xhr.onreadystatechange = function() {
         if (form_xhr.readyState != 4) return;
         if (form_xhr.status != 200) {
             // 4. Если код ответа сервера не 200, то это ошибка
             // обработать ошибку
             alert(form_xhr.status + ': ' + form_xhr.statusText); // пример вывода: 404: Not Found
         } else {
             // вывести результат
             alert('Отправлено'); // responseText -- текст ответа.
         }

     }
 });
