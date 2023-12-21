let globalData = null;

async function fetchData() {
    const apiUrl = "../data/data.json";

    try {
        const response = await fetch(apiUrl);

        const data = await response.json();
        globalData = data; // сохраняем полученные данные в глобальной переменной
        console.log(globalData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// async function fetchData() {
//     const response = await fetch("../data/data.json");
//     const data = await response.json();
//     globalData = data;
// }


window.onload = fetchData(); // вызов запроса сразу после загрузки страницы

const btn_enter = document.querySelector("#btn-enter");
const btn_create_account = document.querySelector("#btn-create-account");
const btn_registration = document.querySelector("#registration");
const btn_back = document.querySelector("#btn-back");

btn_create_account.addEventListener("click", showRegisterForm); // регистрация

btn_registration.addEventListener("click", register);

btn_back.addEventListener("click", showLoginForm);

// показать форму регистрации скрыть вход
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}
// показать форму входа скрыть регистрацию
function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
// обработка регистрации
function register() {
    alert('Регистрация выполнена!');
}

const enterAccount = document.querySelector(".openAccount");

enterAccount.addEventListener("click", (event) => {
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;
    if (login === "") {
        event.preventDefault();
        alert("Введите логин!");
        return;
    }

    if (password === "") {
        event.preventDefault();
        alert("Введите пароль!");
        return;
    }

    for (let i = 0; i < globalData.length; i++) {
        if ((globalData[i].login === login) && (globalData[i].password === password)) {
            alert("SuccesFull");
            console.log(globalData[i]);
            return;
        }
    }

    alert("Неправильный логин или пароль");
    event.preventDefault();
    return;
})
