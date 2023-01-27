// ---------------------------------------------------------------------------
// Открытие и закрытие попапа
// ---------------------------------------------------------------------------

let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');

function openPopup () {
    popup.classList.add('popup_opened');
}
editProfileButton.addEventListener('click', openPopup);


function closePopup () {
    popup.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);


// ---------------------------------------------------------------------------
// Изменение профиля через попап
// ---------------------------------------------------------------------------
let profileName = document.querySelector('.profile__info-title');
let profileJob =document.querySelector('.profile__info-subtitle');

let formElement = document.querySelector('.popup__container')  // находим форму в DOM

let nameInput = formElement.querySelector('.popup__name-input'); //поля формы в DOM
let jobInput = formElement.querySelector('.popup__job-input'); //поля формы в DOM

nameInput.value = profileName.textContent; //поля формы со значением в профиле
jobInput.value = profileJob.textContent;

function handleFormSubmit (evt) {
    evt.preventDefault()

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}
formElement.addEventListener('submit', handleFormSubmit); 
