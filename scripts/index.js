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
const popup = document.querySelector('.popup');
// Переменные профиля
const popupTypeProfile = document.querySelector('.popup_type_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const formElement = document.querySelector('.popup__container')  // находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__field_type_name'); //поле формы в DOM
const jobInput = formElement.querySelector('.popup__field_type_job'); //поле формы в DOM
const closePopupProfileBtn = document.querySelector('.popup__close-button_type_profile');

// Переменные для добавления новой карточки
const popupAddNewCard = document.querySelector('.popup_type_add');
const addNewPlaceBtn = document.querySelector('.profile__button');
const newCardForm = document.querySelector('.popup__fields_type_add');
const newCardTitleInput = newCardForm.querySelector('.popup__field_type_title-card');
const newCardLinkInput = newCardForm.querySelector('.popup__field_type_link');
const closeNewPlacePopup = document.querySelector('.popup__close-button_type_add');

// Лайки
const likeButton = document.querySelector('.card__like');

// Переменные для клика по карточке / картинки во весь экран
const popupWithImage = document.querySelector('.popup_type_image');
const closeImageBtn = document.querySelector('.popup__close-button_type_image');
const popupPicture = document.querySelector('.popup__image')
const popupImageTitle = document.querySelector('.popup__figcaption');

const cardTemplate = document.querySelector('.card-template').content; //  получаем содержимое карточки
const cardWrapper = document.querySelector('.cards'); //находим контейнер с карточками

// ---------------------------------------------------------------------------
// Открытие и закрытие попапа
// ---------------------------------------------------------------------------
function openPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

// ---------------------------------------------------------------------------
// Изменение профиля через попап (popup)
// ---------------------------------------------------------------------------
editProfileButton.addEventListener('click', () => {
    openPopup(popupTypeProfile);
    nameInput.value = profileName.textContent; //поля формы со значением в профиле
    jobInput.value = profileJob.textContent; //поля формы со значением в профиле
});

closePopupProfileBtn.addEventListener('click', () => {
    closePopup(popupTypeProfile);
});

function handleFormSubmit (evt) {
    evt.preventDefault()

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupTypeProfile);
}

// ---------------------------------------------------------------------------
// Работа с карточкой
// ---------------------------------------------------------------------------  
function renderCard ( {name, link}) { 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку
    cardElement.querySelector('.card__title').textContent = name; // присваиваем значение ключей объекта в массиве
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__image').src = link;

    // Удаление карточки
    const deleteButton = cardElement.querySelector('.card__trash-icon');
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    })

    // Лайк для карточки
    const likeButton = cardElement.querySelector('.card__like');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like_active');
    });

    // Увеличение - уменьшение картинки по клику
    const imageCardButton = cardElement.querySelector('.card__image');
    
    imageCardButton.addEventListener('click', () => {  
        openPopup(popupWithImage);
        popupPicture.src = link;              
        popupPicture.alt = name;             
        popupImageTitle.textContent = name;
    });
    
    closeImageBtn.addEventListener('click', () => {
        closePopup(popupWithImage);
    });

    return cardElement;
}

// ---------------------------------------------------------------------------
// Появление карточек из массива данных
// ---------------------------------------------------------------------------
function render () {
    initialCards.forEach((object) => {
        cardWrapper.append(renderCard(object));
    });
}
render();

// ---------------------------------------------------------------------------
// Добавление новой карточки пользователем (popup)
// ---------------------------------------------------------------------------
function addNewCard () {
    const cardNewElement = renderCard({
        name: newCardTitleInput.value, 
        link: newCardLinkInput.value
    });
    cardWrapper.prepend(cardNewElement);

    newCardTitleInput.value = '';
    newCardLinkInput.value = '';
    closePopup(popupAddNewCard);
}

addNewPlaceBtn.addEventListener('click', () => {
    openPopup(popupAddNewCard);
});

closeNewPlacePopup.addEventListener('click', () => {
    closePopup(popupAddNewCard);
});

// ---------------------------------------------------------------------------
// Слушатели
// ---------------------------------------------------------------------------
formElement.addEventListener('submit', handleFormSubmit);
newCardForm.addEventListener('submit', addNewCard);
