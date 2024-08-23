let habits = [];

function addHabit() {
    const habitInput = document.getElementById('habit-input');
    const habit = habitInput.value.trim();
    if (habit) {
        habits.push({ name: habit, completed: false });
        habitInput.value = '';
        renderHabits();
    }
}

function toggleHabit(index) {
    habits[index].completed = !habits[index].completed;
    renderHabits();
}

function deleteHabit(index) {
    habits.splice(index, 1);
    renderHabits();
}

function renderHabits() {
    const habitList = document.getElementById('habit-list');
    habitList.innerHTML = '';

    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span style="text-decoration: ${habit.completed ? 'line-through' : 'none'}">
                ${habit.name}
            </span>
            <button onclick="toggleHabit(${index})">${habit.completed ? 'Desmarcar' : 'Completar'}</button>
            <button onclick="deleteHabit(${index})">Eliminar</button>
        `;
        habitList.appendChild(li);
    });

    updateWeeklySummary();
}

function updateWeeklySummary() {
    const completedHabits = habits.filter(habit => habit.completed).length;
    document.getElementById('weekly-summary').textContent = `Completaste ${completedHabits} hábitos esta semana`;
}