// ---------------------------------------------------------------------------
// Открытие и закрытие попапа
// ---------------------------------------------------------------------------

let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.popup__submit-button');
let profileName = document.querySelector('.profile__info-title');
let profileJob =document.querySelector('.profile__info-subtitle');


function openPopup () {
    popup.classList.add('popup_opened');
}
editProfileButton.addEventListener('click', openPopup);


function closePopup () {
    popup.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);


// ---------------------------------------------------------------------------
// Клик по лайку. В процессе разработки.
// ---------------------------------------------------------------------------
// let likeButton = document.querySelector('.card__like');

// function clickOnLike () {
//     likeButton.classList.add('card__like_active');
// }
// likeButton.addEventListener('click', clickOnLike);


// ---------------------------------------------------------------------------
// Изменение полей профиля через попап
// ---------------------------------------------------------------------------

function addProfile (evt) {
    evt.preventDefault()

    let nameInput = document.querySelector('.popup__name-input');
    let jobInput = document.querySelector('.popup__job-input');

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    nameInput.value = ''; //Обнуление строк после ввода
    jobInput.value = '';
}
submitButton.addEventListener('click', addProfile);


// ---------------------------------------------------------------------------
// Изменение профиля через попап 
// ---------------------------------------------------------------------------
// let formElement =document.querySelector('.popup__container');
// let nameInput = formElement.querySelector('.popup__name-input');
// let jobInput = formElement.querySelector('.popup__job-input');

// function handleFormSubmit (evt) {
//     evt.preventDefault();

// }
