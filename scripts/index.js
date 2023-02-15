const popup = document.querySelector('.popup_type_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupProfileBtn = document.querySelector('.popup__close-button_type_profile');
const closePopupAddBtn = document.querySelector('.popup__close-button_type_add');
const likeButton = document.querySelector('.card__like');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const formElement = document.querySelector('.popup__container')  // находим форму в DOM
const nameInput = formElement.querySelector('.popup__field_type_name'); //поля формы в DOM
const jobInput = formElement.querySelector('.popup__field_type_job'); 
const titleCardInput = formElement.querySelector('.popup__field_type_title-card');
const linkInput = formElement.querySelector('.popup__field_type_link');
const popupAdd = document.querySelector('.popup_type_add');
const addNewPlaceBtn = document.querySelector('.profile__button');
const cardContainer = document.querySelector('.cards'); //находим контейнер с карточками
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
// Открытие и закрытие попапов
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
// Появление карточек из массива данных
// ---------------------------------------------------------------------------
function сardAppend () {    
    initialCards.forEach(function (objectKey) { 
        const cardTemplate = document.querySelector('.card-template').content; //  получаем содержимое карточки
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку
        
        cardElement.querySelector('.card__title').textContent = objectKey.name; // присваиваем значение ключей объекта в массиве
        cardElement.querySelector('.card__image').src = objectKey.link;

        cardElement.querySelector('.card__like').addEventListener('click', function (evt) { // лайк для каждой карточки
            evt.target.classList.toggle('card__like_active');
        });
        // --------------------------------------------------------------------
        // Открытие и закрытие картинки по клику
        // --------------------------------------------------------------------
        const imageCardBtn = cardElement.querySelector('.card__image');
        const closeImageBtn = document.querySelector('.popup__close-button_type_image');
        const popupImage = document.querySelector('.popup_type_image');

        document.querySelector('.popup__image').src = objectKey.link;
        document.querySelector('.popup__figcaption').textContent = objectKey.name;
        
        function openPopupImage () {
            popupImage.classList.toggle('popup_opened');
        }
        
        function closePopupImage () {
            popupImage.classList.remove('popup_opened');
        }
        imageCardBtn.addEventListener('click', openPopupImage);
        closeImageBtn.addEventListener('click', closePopupImage);
        // --------------------------------------------------------------------

        cardContainer.append(cardElement) //пушим клонированную карточку в контейнер html
    });
}
сardAppend();
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
// Добавление карточки через попап
// ---------------------------------------------------------------------------
function handleCardSubmit (evt) {
    evt.preventDefault()

    titleCardInput.textContent = initialCards[0].name;
    linkInput.textContent = initialCards[0].link;

    closePopup();
}
// ---------------------------------------------------------------------------
// Слушатели
// ---------------------------------------------------------------------------
editProfileButton.addEventListener('click', openPopupEdit);
addNewPlaceBtn.addEventListener('click', openPopupAdd);
closePopupProfileBtn.addEventListener('click', closePopup);
closePopupAddBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);