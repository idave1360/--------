document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('todo-form').addEventListener('submit', function(e) {
        e.preventDefault(); // 폼 제출 시 기본 동작(페이지 새로고침) 방지
        const title = document.getElementById('todo-title').value.trim();
        const date = document.getElementById('todo-date').value;
        if (title && date) {
            addTodoItem(title, date);
            document.getElementById('todo-form').reset(); // 폼 내용 초기화
        }
    });
});

function addTodoItem(title, date) {
    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.textContent = `${title} - ${date}`;
    li.appendChild(textSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() { toggleCompleted(li); };
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() { li.remove(); };
    li.appendChild(deleteButton);

    list.appendChild(li);
}

function toggleCompleted(li) {
    li.classList.toggle('completed');
    const button = li.querySelector('button');
    button.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
}
