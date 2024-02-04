document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <i class="fas fa-check"></i>
                <i class="fas fa-trash"></i>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('fa-trash')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('fa-check')) {
            e.target.parentElement.classList.toggle('checked');
        }
    });
});
