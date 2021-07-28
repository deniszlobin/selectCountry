let countries = [
  "Австралия",
  "Австрия",
  "Азербайджан",
  "Албания",
  "Алжир",
  "Ангола",
  "Андорра",
  "Антигуа и Барбуда",
  "Антильские острова",
  "Аргентина",
  "Армения",
  "Афганистан",
  "Багамские острова",
  "Бангладеш",
  "Барбадос",
  "Бахрейн",
  "Белиз",
  "Белоруссия",
  "Бельгия",
  "Бенин",
  "Болгария",
  "Боливия",
  "Босния и Герцеговина",
  "Ботсвана",
  "Бразилия",
  "Буркина-Фасо",
  "Бурунди",
  "Бутан",
  "Вануату",
  "Ватикан",
  "Великобритания",
  "Венгрия",
  "Венесуэла",
  "Вьетнам",
  "Габон",
  "Гаити",
  "Гайана",
  "Гамбия",
  "Гана",
  "Гватемала",
  "Гвинея",
  "Гвинея-Бисау",
  "Германия",
  "Голландия",
  "Гондурас",
  "Гонконг",
  "Гренада",
  "Гренландия",
  "Греция",
  "Грузия",
  "Гуам",
  "Дания",
  "Демократическая Республика Конго",
  "Джибути",
  "Доминиканская республика",
  "Египет",
  "Замбия",
  "Западная Сахара",
  "Зимбабве",
  "Израиль",
  "Индия",
  "Индонезия",
  "Иордания",
  "Ирак",
  "Иран",
  "Ирландия",
  "Исландия",
  "Испания",
  "Италия",
  "Йемен",
  "Кабо-Верде",
  "Казахстан",
  "Камбоджа",
  "Камерун",
  "Канада",
  "Катар",
  "Кения",
  "Кипр",
  "Киргизия",
  "Кирибати",
  "Китай",
  "КНДР",
  "Колумбия",
  "Коморские острова",
  "Коста-Рика",
  "Кот-д'Ивуар",
  "Куба",
  "Кувейт",
  "Лаос",
  "Латвия",
  "Лесото",
  "Либерия",
  "Ливан",
  "Ливия",
  "Литва",
  "Лихтенштейн",
  "Люксембург",
  "Маврикий",
  "Мавритания",
  "Мадагаскар",
  "Македония",
  "Малави",
  "Малайзия",
  "Мали",
  "Мальдивы",
  "Мальта",
  "Марокко",
  "Мартиника",
  "Мексика",
  "Микронезия",
  "Мозамбик",
  "Молдавия",
  "Монако",
  "Монголия",
  "Мьянма",
  "Намибия",
  "Непал",
  "Нигер",
  "Нигерия",
  "Никарагуа",
  "Новая Зеландия",
  "Новая Каледония",
  "Норвегия",
  "ОАЭ",
  "Оман",
  "Пакистан",
  "Палестина",
  "Панама",
  "Папуа-Новая Гвинея",
  "Парагвай",
  "Перу",
  "Польша",
  "Португалия",
  "Пуэрто-Рико",
  "Республика Конго",
  "Республика Корея",
  "Россия",
  "Руанда",
  "Румыния",
  "Сальвадор",
  "Сан-Марино",
  "Сан-Томе и Принсипи",
  "Саудовская Аравия",
  "Свазиленд",
  "Сенегал",
  "Сент-Китс и Невис",
  "Сент-Люсия",
  "Сербия",
  "Сингапур",
  "Сирия",
  "Словакия",
  "Словения",
  "Соломоновы острова",
  "Сомали",
  "Судан",
  "Суринам",
  "США",
  "Сьерра-Леоне",
  "Таджикистан",
  "Таиланд",
  "Тайвань",
  "Танзания",
  "Того",
  "Тонга",
  "Тринидад и Тобаго",
  "Тунис",
  "Туркменистан",
  "Турция",
  "Уганда",
  "Узбекистан",
  "Украина",
  "Уругвай",
  "Фиджи",
  "Филиппины",
  "Финляндия",
  "Франция",
  "Французская Гвиана",
  "Хорватия",
  "Центральноафриканская Республика",
  "Чад",
  "Черногория",
  "Чехия",
  "Чили",
  "Швейцария",
  "Швеция",
  "Шри-Ланка",
  "Эквадор",
  "Экваториальная Гвинея",
  "Эритрея",
  "Эстония",
  "Эфиопия",
  "ЮАР",
  "Ямайка",
  "Япония",
];
let input = document.querySelector("#country");
let autocomplete_list = document.querySelector("#autocomplete_list");
let body = document.querySelector("body");
body.addEventListener("click", clickClearOnBody);
input.addEventListener("keyup", list);
function list() {
  let value = input.value;
  if (value == "") {
    autocomplete_list.style.display = "none";
    clear();
  } else {
    clear();
    countries.forEach((element) => {
      let word = element.substring(0, value.length);
      if (value.toLowerCase() == word.toLowerCase()) {
        addDiv(element);
      }
    });
  }
}

function addDiv(elem) {
  let container = document.createElement("div");
  container.setAttribute("class", "list");
  container.innerHTML = elem;
  container.addEventListener("click", resultInsertIntoInput);
  autocomplete_list.appendChild(container);
  autocomplete_list.style.display = "block";
}

function clear() {
  autocomplete_list.innerHTML = "";
}

function clickClearOnBody(event) {
  if (event.target.tagName == "BODY") {
    autocomplete_list.style.display = "none";
    clear();
  }
}

function resultInsertIntoInput(event) {
  let elem = event.target.innerHTML;
  input.value = elem;
  autocomplete_list.style.display = "none";
  clear();
}
