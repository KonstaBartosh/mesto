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
// Добавление карточки
const popupAddNewCard = document.querySelector('.popup_type_add');
const addNewPlaceBtn = document.querySelector('.profile__button');

//
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
// Попап с картинкой
const popupWithImage = document.querySelector('.popup_type_image');
const closeImageBtn = document.querySelector('.popup__close-button_type_image');
const popupPicture = document.querySelector('.popup__image')
const popupImageTitle = document.querySelector('.popup__figcaption');
//
const cardTemplate = document.querySelector('.card-template').content; //  получаем содержимое карточки
const cardContainer = document.querySelector('.cards'); //находим контейнер с карточками

// ---------------------------------------------------------------------------
// Появление карточек из массива данных TEST!
// ---------------------------------------------------------------------------
// function addCard() {    
    initialCards.forEach(function ({name, link}) { 
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку
        cardElement.querySelector('.card__title').textContent = name; // присваиваем значение ключей объекта в массиве
        cardElement .querySelector('.card__image').alt = name;
        cardElement .querySelector('.card__image').src = link;

        cardContainer.append(cardElement);//пушим клонированную карточку в контейнер html

        cardElement.querySelector('.card__like').addEventListener('click', function (evt) { // лайк для каждой карточки
            evt.target.classList.toggle('card__like_active');
        });
    });

// addCard ();
// --------------------------------------------------------------------
// Добавление новой карточки пользователем (popup #2) TEST!
// --------------------------------------------------------------------
const newCardForm = document.querySelector('.popup__fields_type_add');
const newCardTitleInput = newCardForm.querySelector('.popup__field_type_title-card');
const newCardLinkInput = newCardForm.querySelector('.popup__field_type_link');

newCardForm.addEventListener('submit', function(event) { //WORKS!!!
    event.preventDefault();
    const name = newCardTitleInput.value
    const link = newCardLinkInput.value
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name; 
    cardElement .querySelector('.card__image').src = link;
    newCardTitleInput.value = '';
    newCardLinkInput.value = '';
    cardContainer.prepend(cardElement);
    popupAddNewCard.classList.remove('popup_opened');
})

addNewPlaceBtn.addEventListener('click', () => { //WORKS!!!
    popupAddNewCard.classList.add('popup_opened');
});

closeNewPlacePopup .addEventListener('click', () => { //WORKS!!!
    popupAddNewCard.classList.remove('popup_opened');
});

// ---------------------------------------------------------------------------
// Появление карточек из массива данных WORKS!
// ---------------------------------------------------------------------------
// function addCard () {    
//     initialCards.forEach(function (objectKey) { 
//         const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку

//         cardElement.querySelector('.card__title').textContent = objectKey.name; // присваиваем значение ключей объекта в массиве
//         cardElement .querySelector('.card__image').alt = objectKey.name;
//         cardElement .querySelector('.card__image').src = objectKey.link;

//         // Лайки
//         // --------------------------------------------------------------------
//         cardElement.querySelector('.card__like').addEventListener('click', function (evt) { // лайк для каждой карточки
//             evt.target.classList.toggle('card__like_active');
//         });

//         // --------------------------------------------------------------------
//         // Добавление новой карточки пользователем (popup #2)
//         // --------------------------------------------------------------------
//         const newCardTitleInput = document.querySelector('.popup__field_type_title-card');
//         const newCardLinkInpur = document.querySelector('.popup__field_type_link');

//         addNewPlaceBtn.
//         addEventListener('click', () => {
//             popupAddNewCard.classList.add('popup_opened');
//             newCardTitleInput.textContent = objectKey.name;
//             newCardLinkInpur.src = objectKey.link;
//             console.log(newCardTitleInput); 

//         });
        
//         closeNewPlacePopup
//         .addEventListener('click', () => {
//             popupAddNewCard.classList.remove('popup_opened');
//         });
        
//         // --------------------------------------------------------------------
//         // Открытие и закрытие картинки по клику (popup #3)
//         // --------------------------------------------------------------------
//         function openPopupImage () {    
//             const imageCardButton = cardElement.querySelector('.card__image');

//             imageCardButton                                    
//             .addEventListener('click', () => {                 
//                 popupWithImage.classList.toggle('popup_opened');
//                 popupPicture.src = objectKey.link;              
//                 popupPicture.alt = objectKey.name;             
//                 popupImageTitle.textContent = objectKey.name; 
//             });

//             closeImageBtn.
//             addEventListener('click', () => {
//                 popupWithImage.classList.remove('popup_opened');
//             });
//         }
//         openPopupImage();
//         // --------------------------------------------------------------------
//         cardContainer.append(cardElement) //пушим клонированную карточку в контейнер html
//     });
// }
// addCard();
// ---------------------------------------------------------------------------
// Изменение профиля через попап
// ---------------------------------------------------------------------------
editProfileButton
.addEventListener('click', () => {
    popupTypeProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent; //поля формы со значением в профиле
    jobInput.value = profileJob.textContent; //поля формы со значением в профиле
});

closePopupProfileBtn
.addEventListener('click', () => {
    popupTypeProfile.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault()

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupTypeProfile.classList.remove('popup_opened');
}
formElement.addEventListener('submit', handleFormSubmit);
// ---------------------------------------------------------------------------
// Слушатели
// ---------------------------------------------------------------------------
