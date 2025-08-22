const addBtn = document.getElementById('text');

const parentList = document.getElementById('btn');

parentList = addEventListener('click', () => {
  const childList = document.createElement('li');
  childList,textContent = 'ボタンをクリックしました';
  addBtn.appendChild(childList)
  addBtn.textContent = "ボタンをクリックしました"
});
