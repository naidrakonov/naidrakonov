// ЗАМЕТКИ ====================================================================================================

const button = document.getElementById('myButton');
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');

button.addEventListener('click', function() {
const userInputValue = userInput.value; // Получаем значение из текстового поля
const trimmedValue = userInputValue.trim(); // Удаляем пробелы в начале и в конце строки
const command = trimmedValue.toLowerCase(); // Преобразуем строку в нижний регистр

// Результат в зависимости от введенной команды
switch (command) {
	case 'привет':
		output.innerHTML = `Привет! Как дела?<br>
				<a href="https://avatars.mds.yandex.net/i?id=d1f4c7fde52111ad110943daa3956d5d_l-5233798-images-thumbs&n=13" target="_blank">Перейти на сайт</a>`;
		break;
	case 'пока':
		output.textContent = 'Пока! Удачи!';
		break;
	case 'как дела':
		output.textContent = 'Все хорошо, спасибо!';
		break;
	default:
		output.textContent = 'Неизвестная команда. Попробуйте снова.';
}

userInput.value = ''; // Очищаем поле ввода после нажатия кнопки
});

// ТЕМНАЯ И СВЕТЛАЯ ТЕМА ====================================================================================================

document.addEventListener('DOMContentLoaded', function() {
	let isOriginalStyle = true;
	let link = document.getElementById('stylesheet')
	const button = document.getElementById('change-stylesheet-btn');

	button.addEventListener('click', function() {
		if (isOriginalStyle) {
			link.href = 'style_dark.css';
		} else {
			link.href = 'style_light.css';
		}

		isOriginalStyle = !isOriginalStyle;
	});
});