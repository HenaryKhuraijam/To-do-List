import { addTodo, removeTodo } from './modules/functions.js';

// set up the initial container with zero tasks
document.body.innerHTML = '<div class="main"><header>Todays To Do</header><hr><div class="addInput-container"><input type="text" class="addInput" placeholder="Press enter key to Add to your list..."><div class="addBtn">&#8617;</div></div><hr><div class="todoContainer"><!-- here all the content will be created dinamically  --></div><footer class="clrBtn">Clear all completed</footer></div>';
const container = document.querySelector('.todoContainer');

describe('add function', () => {
  test('should add one task to the container', () => {
    addTodo('Test task 1');
    expect(container.children.length).toBe(1);
  });

  test('the container should contain a task called Test task 2', () => {
    addTodo('Test task 2');
    expect(container.innerHTML).toContain('Test task 2');
  });

  test('should add a third task to the container', () => {
    addTodo('Test task 3');
    const container = document.querySelector('.todoContainer');
    expect(container.children.length).toBe(3);
  });
});
