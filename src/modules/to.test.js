/**
 * @jest-environment jsdom
 */

import arrTasks from './to_class.js';
import addTaskItem from './addTaskItem.js';
import removeTaskItem from './removeTaskItem.js';
import saveLocal from './saveLocal.js';
import { delCompleted } from './renderUI.js';

document.body.innerHTML = `<ul class="ul-tasks" id="ul-tasks"></ul>
<button class="btn-clear" type="button" id="btn-clear">Clear All Completed</button>`;
const todoList = document.getElementById('ul-tasks');
const btnClr = document.getElementById('btn-clear');
btnClr.addEventListener('click', delCompleted);
arrTasks.tasks = [];

describe('test addTaskItem and LocalStorage', () => {
  test('add task to show arrTask.tasks length 1', () => {
    addTaskItem('to check test');
    expect(arrTasks.tasks).toHaveLength(1);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(1);
  });

  test('add task to show arrTask.tasks length 2', () => {
    addTaskItem('to check test2');
    expect(arrTasks.tasks).toHaveLength(2);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(2);
  });
});

describe('test removeTaskItem and LocalStorage', () => {
  test('remove task to show arrTask.tasks length 1', () => {
    removeTaskItem(1);
    expect(arrTasks.tasks).toHaveLength(1);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(1);
  });
  test('remove task to show arrTask.tasks length 0', () => {
    removeTaskItem(1);
    expect(arrTasks.tasks).toHaveLength(0);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(0);
  });
});

describe('test for DOM', () => {
  test('updating item status to show completed', () => {
    addTaskItem('to check test');
    addTaskItem('to check test2');
    const taskStatus = document.getElementById('1');
    const task = document.getElementById('desc-1');
    taskStatus.click();
    expect(task.classList.contains('completed')).toBe(true);
  });

  test('Edit item description to show change desc', () => {
    const task = document.getElementById('desc-1');
    task.value = 'change desc';
    expect(task.value).toBe('change desc');
  });

  test('todoList to have 2 item', () => {
    expect(todoList.childElementCount).toBe(2);
  });

  test('todoList to have 1 item after Removing Completed task', () => {
    btnClr.click();
    expect(todoList.childElementCount).toBe(1);
  });
});
