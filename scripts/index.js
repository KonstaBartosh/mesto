// Переменные профиля
const popup = document.querySelector('.popup');
const popupTypeProfile = document.querySelector('.popup_type_profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const formElement = document.querySelector('.popup__container')  // находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__field_type_name'); //поле формы в DOM
const jobInput = formElement.querySelector('.popup__field_type_job'); //поле формы в DOM
const buttonCloseProfileForm = document.querySelector('.popup__close-button_type_profile');

// Переменные для добавления новой карточки
const popupAddNewCard = document.querySelector('.popup_type_add');
const buttonAddNewPlace = document.querySelector('.profile__button');
const newCardForm = document.querySelector('.popup__fields_type_add');
const newCardTitleInput = newCardForm.querySelector('.popup__field_type_title-card');
const newCardLinkInput = newCardForm.querySelector('.popup__field_type_link');
const buttonCloseNewPlace = document.querySelector('.popup__close-button_type_add');

// Переменные для клика по карточке / картинки во весь экран
const popupWithImage = document.querySelector('.popup_type_image');
const buttonCloseImage = document.querySelector('.popup__close-button_type_image');
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
buttonEditProfile.addEventListener('click', () => {
    openPopup(popupTypeProfile);
    nameInput.value = profileName.textContent; //поля формы со значением в профиле
    jobInput.value = profileJob.textContent; //поля формы со значением в профиле
});

buttonCloseProfileForm.addEventListener('click', () => {
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
    const buttonLike = cardElement.querySelector('.card__like');
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle('card__like_active');
    });

    // Увеличение - уменьшение картинки по клику
    const imageCardButton = cardElement.querySelector('.card__image');
    
    imageCardButton.addEventListener('click', () => {  
        openPopup(popupWithImage);
        popupPicture.src = link;              
        popupPicture.alt = name;             
        popupImageTitle.textContent = name;
    });
    
    buttonCloseImage.addEventListener('click', () => {
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

buttonAddNewPlace.addEventListener('click', () => {
    openPopup(popupAddNewCard);
});

buttonCloseNewPlace.addEventListener('click', () => {
    closePopup(popupAddNewCard);
});

// ---------------------------------------------------------------------------
// Слушатели
// ---------------------------------------------------------------------------
formElement.addEventListener('submit', handleFormSubmit);
newCardForm.addEventListener('submit', addNewCard);
