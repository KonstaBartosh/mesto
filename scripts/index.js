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
const popupTypeProfile = document.querySelector('.popup_type_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupProfileBtn = document.querySelector('.popup__close-button_type_profile');
const closeNewPlacePopup = document.querySelector('.popup__close-button_type_add');
const likeButton = document.querySelector('.card__like');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const formElement = document.querySelector('.popup__container')  // находим форму в DOM
const nameInput = formElement.querySelector('.popup__field_type_name'); //поля формы в DOM
const jobInput = formElement.querySelector('.popup__field_type_job'); 
const titleCardInput = formElement.querySelector('.popup__field_type_title-card');
const linkInput = formElement.querySelector('.popup__field_type_link');
const popupWithImage = document.querySelector('.popup_type_image');
const closeImageBtn = document.querySelector('.popup__close-button_type_image');
const popupPicture = document.querySelector('.popup__image')
const popupImageTitle = document.querySelector('.popup__figcaption');

const cardTemplate = document.querySelector('.card-template').content; //  получаем содержимое карточки
const cardWrapper = document.querySelector('.cards'); //находим контейнер с карточками

function renderCard ( {name, link}) { 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку
    cardElement.querySelector('.card__title').textContent = name; // присваиваем значение ключей объекта в массиве
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__image').src = link;

    // лайк для каждой карточки из массива
    const likeButton = cardElement.querySelector('.card__like');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like_active');
    });

    // Открытие - закрытие картинки по клику
    const imageCardButton = cardElement.querySelector('.card__image');
    imageCardButton.addEventListener('click', () => {                 
        popupWithImage.classList.toggle('popup_opened');
        popupPicture.src = link;              
        popupPicture.alt = name;             
        popupImageTitle.textContent = name;
    });
    
    closeImageBtn.addEventListener('click', () => {
        popupWithImage.classList.remove('popup_opened');
    });
    return cardElement;
}

function render () {
    initialCards.forEach((object) => {
        cardWrapper.append(renderCard(object))
    })
}

render();
// ---------------------------------------------------------------------------
// Появление карточек из массива данных
// ---------------------------------------------------------------------------  
// initialCards.forEach( ({name, link}) => { 
//     const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку
//     cardElement.querySelector('.card__title').textContent = name; // присваиваем значение ключей объекта в массиве
//     cardElement.querySelector('.card__image').alt = name;
//     cardElement.querySelector('.card__image').src = link;

//     cardWrapper.append(cardElement); //пушим клонированную карточку в контейнер html
    
//     // лайк для каждой карточки из массива
//     cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
//         evt.target.classList.toggle('card__like_active');
//     });

//     // --------------------------------------------------------------------
//     // Открытие и закрытие картинки по клику (popup) 
//     // --------------------------------------------------------------------
//     const imageCardButton = cardElement.querySelector('.card__image');

//     imageCardButton.addEventListener('click', () => {                 
//         popupWithImage.classList.toggle('popup_opened');
//         popupPicture.src = item.link;              
//         popupPicture.alt = item.name;             
//         popupImageTitle.textContent = item.name;
//     });
    
//     closeImageBtn.addEventListener('click', () => {
//         popupWithImage.classList.remove('popup_opened');
//     });
// });

// ---------------------------------------------------------------------------
// Добавление новой карточки пользователем (popup)
// ---------------------------------------------------------------------------

const popupAddNewCard = document.querySelector('.popup_type_add');
const addNewPlaceBtn = document.querySelector('.profile__button');

const newCardForm = document.querySelector('.popup__fields_type_add');
const newCardTitleInput = newCardForm.querySelector('.popup__field_type_title-card');
const newCardLinkInput = newCardForm.querySelector('.popup__field_type_link');


newCardForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = newCardTitleInput.value
    const link = newCardLinkInput.value
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name; 
    cardElement .querySelector('.card__image').src = link;
    newCardTitleInput.value = '';
    newCardLinkInput.value = '';
    cardWrapper.prepend(cardElement);
    popupAddNewCard.classList.remove('popup_opened');
})

addNewPlaceBtn.addEventListener('click', () => {
    popupAddNewCard.classList.add('popup_opened');
});

closeNewPlacePopup .addEventListener('click', () => {
    popupAddNewCard.classList.remove('popup_opened');
});
// ---------------------------------------------------------------------------
// Изменение профиля через попап
// ---------------------------------------------------------------------------
editProfileButton.addEventListener('click', () => {
    popupTypeProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent; //поля формы со значением в профиле
    jobInput.value = profileJob.textContent; //поля формы со значением в профиле
});

closePopupProfileBtn.addEventListener('click', () => {
    popupTypeProfile.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault()

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupTypeProfile.classList.remove('popup_opened');
}
// ---------------------------------------------------------------------------
// Слушатели
// ---------------------------------------------------------------------------
formElement.addEventListener('submit', handleFormSubmit);