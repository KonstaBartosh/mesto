// Открытие и закрытие попапа
// ------------------------------------------------------------------------

let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');


function openPopup () {
    popup.classList.remove('popup');
}
editProfileButton.addEventListener('click', openPopup);


function closePopup () {
    popup.classList.add('popup');
}
closePopupButton.addEventListener('click', closePopup);

