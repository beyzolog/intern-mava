document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Lütfen bir görev girin!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Sil</button>
        <input type="checkbox" onchange="toggleTask(this)">
    `;

    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function toggleTask(checkbox) {
    const li = checkbox.parentElement;
    li.classList.toggle('completed', checkbox.checked);
}
