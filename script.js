// Общие функции для платформы Юнию

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить общую инициализацию здесь
});

// Функция для форматирования даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Функция для получения уровня по опыту
function getLevel(experience) {
    return Math.floor(experience / 100) + 1;
}

// Функция для получения опыта до следующего уровня
function getExperienceToNextLevel(experience) {
    return 100 - (experience % 100);
}

// Функция для получения процента прогресса до следующего уровня
function getLevelProgress(experience) {
    return (experience % 100) / 100 * 100;
}

// Функция для получения текста сложности
function getDifficultyText(difficulty) {
    const texts = {
        easy: 'Легкая',
        medium: 'Средняя',
        hard: 'Сложная'
    };
    return texts[difficulty] || difficulty;
}

// Функция для получения класса сложности
function getDifficultyClass(difficulty) {
    return `difficulty-${difficulty}`;
}

// Функция для получения опыта за задачу
function getTaskExperience(task) {
    if (task.experience) {
        return task.experience;
    }
    const experienceMap = {
        easy: 10,
        medium: 25,
        hard: 50
    };
    return experienceMap[task.difficulty] || 10;
}

// Функция для проверки, решена ли задача пользователем
function isTaskSolved(taskId, userId) {
    return appData.solutions.some(
        s => s.taskId === taskId && 
        s.userId === userId && 
        s.status === 'approved'
    );
}

// Функция для получения статистики пользователя
function getUserStats(userId) {
    const userSolutions = appData.solutions.filter(
        s => s.userId === userId && s.status === 'approved'
    );
    
    const totalExperience = userSolutions.reduce((sum, s) => {
        const task = appData.tasks.find(t => t.id === s.taskId);
        return sum + getTaskExperience(task || {});
    }, 0);
    
    return {
        solvedCount: userSolutions.length,
        totalExperience: totalExperience,
        level: getLevel(totalExperience),
        progress: getLevelProgress(totalExperience)
    };
}

// Функция для получения решенных задач пользователя
function getUserSolvedTasks(userId) {
    const solvedSolutions = appData.solutions.filter(
        s => s.userId === userId && s.status === 'approved'
    );
    
    return solvedSolutions.map(s => {
        const task = appData.tasks.find(t => t.id === s.taskId);
        return {
            ...task,
            solution: s
        };
    }).filter(t => t.id);
}

// Функция для получения задач работодателя
function getEmployerTasks(employerId) {
    return appData.tasks.filter(t => t.employerId === employerId);
}

// Функция для получения вакансий работодателя
function getEmployerVacancies(employerId) {
    return appData.vacancies.filter(v => v.employerId === employerId);
}

// Функция для получения откликов на вакансию
function getVacancyApplications(vacancyId) {
    // В реальном приложении это было бы отдельной таблицей
    // Здесь возвращаем пустой массив для примера
    return [];
}

// Функция для подсчета статистики платформы
function getPlatformStats() {
    return {
        totalTasks: appData.tasks.length,
        activeTasks: appData.tasks.filter(t => t.status === 'active').length,
        totalUsers: appData.users.length,
        totalVacancies: appData.vacancies.length,
        openVacancies: appData.vacancies.filter(v => v.status === 'open').length,
        totalSolutions: appData.solutions.length,
        approvedSolutions: appData.solutions.filter(s => s.status === 'approved').length
    };
}

