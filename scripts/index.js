// Переменные профиля
const overlay = document.querySelector('.popup_opened')
const popup = document.querySelector('.popup');
const popupTypeProfile = document.querySelector('.popup_type_profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__info-title');
const profileJob =document.querySelector('.profile__info-subtitle');
const popupContainer = document.querySelector('.popup__container')  // находим поля формы в DOM
const buttonCloseProfileForm = document.querySelector('.popup__close-button_type_profile');

// Переменные для добавления новой карточки
const popupAddNewCard = document.querySelector('.popup_type_add');
const buttonAddNewPlace = document.querySelector('.profile__button');
const buttonCloseNewPlace = document.querySelector('.popup__close-button_type_add');

// Переменные для клика по карточке / картинки во весь экран
const popupWithImage = document.querySelector('.popup_type_image');
const buttonCloseImage = document.querySelector('.popup__close-button_type_image');
const popupPicture = document.querySelector('.popup__image')
const popupImageTitle = document.querySelector('.popup__figcaption');
const cardTemplate = document.querySelector('.card-template').content; //  получаем содержимое карточки
const cardWrapper = document.querySelector('.cards'); //находим контейнер с карточками

//forms
const formProfile = document.forms.form__profile; // получение формы
const inputProfileName = formProfile.elements.profile__name; // получение элемента формы
const inputProfileOccupation = formProfile.elements.profile__occupation;
const formAdd = document.forms.form__add;
const inputAddTitle = formAdd.elements.add__title;
const inputAddLink = formAdd.elements.add__link;

// ---------------------------------------------------------------------------
// Открытие и закрытие попапа
// ---------------------------------------------------------------------------
function openPopup (popup) {
    popup.classList.add('popup_opened');
    // Закрытие кликом по overlay
    popup.addEventListener('click', (evt) => {
        if (!evt.target.closest('.overlay')) {
            closePopup(popup);
        }
    })
}


function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

// ---------------------------------------------------------------------------
// Изменение профиля через попап (popup)
// ---------------------------------------------------------------------------
buttonEditProfile.addEventListener('click', () => {
    openPopup(popupTypeProfile);
    inputProfileName.value = profileName.textContent; //поля формы со значением в профиле
    inputProfileOccupation.value = profileJob.textContent; //поля формы со значением в профиле
});

buttonCloseProfileForm.addEventListener('click', () => {
    closePopup(popupTypeProfile);
});

function handleFormSubmit (evt) {
    evt.preventDefault()

    profileName.textContent = inputProfileName.value;
    profileJob.textContent = inputProfileOccupation.value;
    closePopup(popupTypeProfile);
}

// ---------------------------------------------------------------------------
// Работа с карточкой
// ---------------------------------------------------------------------------  
function renderCard ({name, link}) { 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонируем карточку
    cardElement.querySelector('.card__title').textContent = name; // присваиваем значение ключей объекта в массиве
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__image').src = link;

    // Удаление карточки
    const deleteButton = cardElement.querySelector('.card__trash-icon');
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

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
function addNewCard (evt) {
    evt.preventDefault;
    const cardNewElement = renderCard({
        name: inputAddTitle.value, 
        link: inputAddLink.value
    });
    cardWrapper.prepend(cardNewElement);

    formAdd.reset();
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
popupContainer.addEventListener('submit', handleFormSubmit);
formAdd.addEventListener('submit', addNewCard);
