// RENDER
export const render = () => {
  const todoContainer = document.querySelector('.todoContainer');
  const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
  todoArray.sort((a, b) => a.index - b.index);
  todoContainer.innerHTML = '';
  for (let i = 0; i < todoArray.length; i += 1) {
    const html = `
      <div class="task">
        <input type="checkbox" class="Input-checkbox">
        <input type="text" class="input-text" value="${todoArray[i].description}">
        <div class="delete-task-icon">&#x1F5D1;</div>
        <!-- <div class="drag-to-order">&#x22EE;</div> -->
      </div>
      
    `;
    todoContainer.innerHTML += html;
  }
};

// ADD A NEW TASK
export const addTodo = (addTask) => {
  const addTaskInput = document.querySelector('.addInput');
  if (addTask !== '') {
    const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
    todoArray.push({ completed: false, description: addTask });
    for (let i = 1; i <= todoArray.length; i += 1) {
      todoArray[i - 1].index = i;
    }
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
  }
  addTaskInput.value = '';
  render();
};

// DELETE A TASK
export const removeTodo = (index) => {
  const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
  todoArray.splice(index, 1);
  for (let i = 1; i <= todoArray.length; i += 1) {
    todoArray[i - 1].index = i;
  }
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
  render();
};

// EDIT A TASK
export const edit = (index) => {
  const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
  const textInputs = document.querySelectorAll('.input-text');
  textInputs[index].addEventListener('change', () => {
    todoArray[index].description = textInputs[index].value;
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
  });
};
