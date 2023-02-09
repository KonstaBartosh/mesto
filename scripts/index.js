const popup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const formElement = document.querySelector('.popup__container')  // находим форму в DOM
const nameInput = formElement.querySelector('.popup__field_type_name'); //поля формы в DOM
const jobInput = formElement.querySelector('.popup__field_type_job'); 

const popupAdd = document.querySelector('.popup-add')
const addNewPlaceBtn = document.querySelector('.profile__button');


// let cardContainer = document.querySelector('.card');
// let cardTitle = cardContainer.createElement('p');

const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// ---------------------------------------------------------------------------
// Открытие и закрытие попапа
// ---------------------------------------------------------------------------
function openPopupEdit () {
    popup.classList.add('popup_opened');

    nameInput.value = profileName.textContent; //поля формы со значением в профиле
    jobInput.value = profileJob.textContent;
}

function openPopupAdd () {
    popupAdd.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');
    popupAdd.classList.remove('popup_opened');
}


// ---------------------------------------------------------------------------
// Изменение профиля через попап
// ---------------------------------------------------------------------------
function handleFormSubmit (evt) {
    evt.preventDefault()

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

// ---------------------------------------------------------------------------
// Слушатели
// ---------------------------------------------------------------------------
editProfileButton.addEventListener('click', openPopupEdit);
addNewPlaceBtn.addEventListener('click', openPopupAdd);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 

