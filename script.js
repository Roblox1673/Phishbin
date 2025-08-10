const form = document.getElementById('dataForm');
const input = document.getElementById('dataInput');
const dataList = document.getElementById('dataList');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if(text) {
    addData(text);
    input.value = '';
  }
});

function addData(text) {
  const li = document.createElement('li');
  li.textContent = text;
  dataList.appendChild(li);
}
