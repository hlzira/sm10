const form = document.querySelector('.form');
const nameInput = form.querySelector('.name');
const birthInput = form.querySelector('.birth');

form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();

  // Получаем значения полей формы
  const name = nameInput.value;
  const birth = birthInput.value;

  // Проверяем, что поля заполнены
  if (!name || !birth) {
    console.log('Пожалуйста, заполните все поля');
    document.getElementById('name').style.borderColor = "red";
    document.getElementById('birth').style.borderColor = "red";
    return;
  }
  
  document.getElementById('name').style.borderColor = "rgba(17, 0, 255, 0.726)";
  document.getElementById('birth').style.borderColor = "rgba(17, 0, 255, 0.726)";

  // проверка поля имени на количество символов
  if (name.length < 2) {
    console.log('Имя должно содержать не менее 2 символов');
    document.getElementById('name').style.borderColor = "red";
    return;
  }

  document.getElementById('name').style.borderColor = "rgba(17, 0, 255, 0.726)";

  // Проверяем, что имя содержит только буквы
  if (!isValidName(name)) {
    console.log('Имя может содержать только буквы на латинице и кириллице');
    document.getElementById('name').style.borderColor = "red";
    return;
  }

  document.getElementById('name').style.borderColor = "rgba(17, 0, 255, 0.726)";

  // проверка поля год рождения на количество символов, на 18-летие и существования года
  if (birth.length > 4 || birth.length < 4) {
    console.log('Год рождения должен содержать ровно 4 символа');
    document.getElementById('birth').style.borderColor = "red";
    return;
  } else if (birth >= 2005 & birth <= 2023) {
    console.log('Ошибка! Вам нет 18-ти лет');
    document.getElementById('birth').style.borderColor = "red";
    return;
  } else if (birth > 2023){
    console.log('Такого года еще не существует');
    document.getElementById('birth').style.borderColor = "red";
    return;
  }

  document.getElementById('birth').style.borderColor = "rgba(17, 0, 255, 0.726)";

  // Если всё в порядке, отправляем ссылку
  console.log('Вы успешно прошли форму. Ссылка на сайт клуба: https://club.z-go.ru/');
  // form.submit(evt);
});

function isValidName(name) {
  // Проверка имени регулярным выражением
  const pattern = /^[a-zA-Zа-яА-Я]+$/;
  return pattern.test(name);
}