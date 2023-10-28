document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addButton = document.getElementById('add');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button>Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = '';

            const deleteButton = listItem.querySelector('button');
            deleteButton.addEventListener('click', deleteTask);
        }
    }

    function deleteTask() {
        const listItem = this.parentNode;
        taskList.removeChild(listItem);
    }
});
