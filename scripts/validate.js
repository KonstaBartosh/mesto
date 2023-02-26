// ---------------------------------------------------------------------------
// Валидация форм
// ---------------------------------------------------------------------------

// Функция, которая добавляет классы с ошибкой
function showInputError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // Находим элемент ошибки внутри самой функции
    inputElement.classList.add('popup__field_type_error');
    errorElement.classList.add('popup__field_type_error_message_active');
    errorElement.textContent = errorMessage;
}

// Функция, которая удаляет классы с ошибкой
function hideInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__field_type_error');
    errorElement.classList.remove('popup__field_type_error_message_active');
    errorElement.textContent = '';
}

// Функция, которая проверяет валидность поля
function checkInputValidity (formElement, inputElement) {
    if (inputElement.validity.valid === true) {
        hideInputError(formElement, inputElement);
    } else {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
}

// Слушатель для всех полей
function setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement); // Вызовем toggleButtonState и передадим ей массив полей и кнопку
    

    inputList.forEach((inputElement) => {  // Обойдём все элементы полученной коллекции
        inputElement.addEventListener('input', () => { // каждому полю добавим обработчик события input
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}; 

function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
}

enableValidation();

// Функция принимает массив полей
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit-button_disabled');
    } else {
        buttonElement.classList.remove('popup__submit-button_disabled');
    }
}