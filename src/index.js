// import './style.css';
import {
  addTodo, render, removeTodo, edit,
} from './modules/functions.js';

// ADD A NEW TASK
const addButton = document.querySelector('.addBtn'); // clicking add button
addButton.addEventListener('click', () => {
  const addTask = document.querySelector('.addInput');
  add(addTask);
});

const addTask = document.querySelector('.addInput'); // typing enter key
addTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const addTask = document.querySelector('.addInput').value;
    add(addTask);
    render();
  }
});

// DELETE A TASK
const todoContainer = document.querySelector('.todoContainer');

todoContainer.addEventListener('click', (event) => {
  const deleteTaskIcon = event.target.closest('.delete-task-icon');
  if (deleteTaskIcon) {
    const deleteTaskIcons = todoContainer.querySelectorAll('.delete-task-icon');
    const index = Array.from(deleteTaskIcons).indexOf(deleteTaskIcon);
    remove(index);
  }
});

// EDIT A TASK
todoContainer.addEventListener('click', (event) => {
  const textInput = event.target.closest('.input-text');
  if (textInput) {
    const textInputs = todoContainer.querySelectorAll('.input-text');
    const index = Array.from(textInputs).indexOf(textInput);
    edit(index);
  }
});

// FIRST RENDER WHEN THE PAGE LOADS
window.onload = render;
