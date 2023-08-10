const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><i class="fa-solid fa-square-check"></i></span> <span class="listItems"> ${taskText}</span>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteButton')) {
    event.target.parentNode.remove();
  }
});
