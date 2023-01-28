const popup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const formElement = document.querySelector('.popup__container')  // находим форму в DOM
const nameInput = formElement.querySelector('.popup__field_type_name'); //поля формы в DOM
const jobInput = formElement.querySelector('.popup__field_type_job'); 

// ---------------------------------------------------------------------------
// Открытие и закрытие попапа
// ---------------------------------------------------------------------------
function openPopup () {
    popup.classList.add('popup_opened');

    nameInput.value = profileName.textContent; //поля формы со значением в профиле
    jobInput.value = profileJob.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened');
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
editProfileButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 
