const saveBtn = document.getElementById('save-btn');
const dialog = document.getElementById('save-dialog');
const okBtn = document.getElementById('ok-btn');

// Открытие модального окна
saveBtn.addEventListener('click', () => {
  dialog.showModal(); // использует нативный API dialog
});

// Закрытие по кнопке ОК
okBtn.addEventListener('click', () => {
  dialog.close();
});