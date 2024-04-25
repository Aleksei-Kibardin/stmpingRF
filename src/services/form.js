export const submitForm = async (formData, formSubmitted, message) => {
  try {
    const response = await fetch("/mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Преобразуем данные формы в JSON и отправляем на сервер
    });

    // Устанавливаем formSubmitted в true, чтобы показать сообщение об успешной отправке
    formSubmitted = true;
    console.log(formData)
    // Проверяем успешность запроса
    if (!response.ok) {
      message = "Ошибка при отправке формы";
      throw new Error("Ошибка при отправке формы, попробуйте позже");
    } else {
      message = "Заявка успешно отправлена!";
    }
  } catch (error) {
    console.error(error);
    // Обработка ошибки отправки формы
  }
  console.log(message);
  setTimeout(() => {
    formSubmitted = false;
  }, 4000);
  return message
};