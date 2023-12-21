const btn_main = document.querySelector(".add_works"); // кнопка для вызова модального окна
const module_window = document.querySelector("#module_window"); // само модальное окно, главный div
const btn_closed = document.querySelector("#closed_modal_window"); // кнопка в модальном окне для закрытия

// открытие модального окна

btn_main.addEventListener("click", () => {
  module_window.classList.add("open");
});

// закрытие модального окна

btn_closed.addEventListener("click", () => {
  module_window.classList.remove("open");
});

// закрыть модальное окно при нажатии Esc

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    module_window.classList.remove("open");
  }
});

// закрыть модальное окно при клике вне окна

// забираем информацию введенную пользователем и закрываем окно;
const nameOfNewWorkMain = document.querySelector("#workTitle");
const descriptionOfNewWorkMain = document.querySelector("#works_description_add");

const btnAddNewWork = document.querySelector(".publishWork");

let nameOfNewWork;
let descriptionOfNewWor;
btnAddNewWork.addEventListener("click", (event) => {
    event.preventDefault();
    nameOfNewWork = nameOfNewWorkMain.value;
    descriptionOfNewWor = descriptionOfNewWorkMain.value;
    if (nameOfNewWork === "" || descriptionOfNewWor === "") {
        alert("Введите название и описание работы!");
        return;
    }
    module_window.classList.remove("open");
    addNewWork(nameOfNewWork, descriptionOfNewWor);
    nameOfNewWorkMain.value = "";
    descriptionOfNewWorkMain.value = "";
})

// создаем новый элемент с работой;

function addNewWork(nameOfNewWork, descriptionOfNewWor) {
    // Копируем текущий див с информацией о работе
    var newWorkDiv = document.querySelector('.works_section').cloneNode(true);

    // Изменяем название новой работы
    newWorkDiv.querySelector('.first_work_title').innerText = nameOfNewWork;
    newWorkDiv.querySelector('.works_description').innerText = descriptionOfNewWor;
    newWorkDiv.querySelector('.counterOfViews').innerText = "1";

    // Добавляем новый див на страницу
    document.querySelector(".main_info_section").appendChild(newWorkDiv);
}


