// Примерочные данные для платформы Юнию

const appData = {
    users: [
        {
            id: 1,
            name: 'Иван Петров',
            email: 'ivan@example.com',
            role: 'student',
            level: 5,
            experience: 450,
            avatar: '👤'
        },
        {
            id: 2,
            name: 'Мария Сидорова',
            email: 'maria@example.com',
            role: 'student',
            level: 8,
            experience: 780,
            avatar: '👩'
        },
        {
            id: 3,
            name: 'Алексей Иванов',
            email: 'alex@example.com',
            role: 'student',
            level: 3,
            experience: 250,
            avatar: '👨'
        },
        {
            id: 4,
            name: 'Анна Козлова',
            email: 'anna@example.com',
            role: 'student',
            level: 12,
            experience: 1150,
            avatar: '👩‍💼'
        },
        {
            id: 5,
            name: 'Дмитрий Смирнов',
            email: 'dmitry@example.com',
            role: 'student',
            level: 6,
            experience: 520,
            avatar: '👨‍💻'
        }
    ],

    employers: [
        {
            id: 1,
            name: 'ТехноСофт',
            email: 'hr@technosoft.ru',
            description: 'Ведущая IT-компания в области разработки программного обеспечения'
        },
        {
            id: 2,
            name: 'ДанныеПлюс',
            email: 'info@dataplus.ru',
            description: 'Специализация на анализе данных и машинном обучении'
        },
        {
            id: 3,
            name: 'ВебСтудия',
            email: 'contact@webstudio.ru',
            description: 'Создание современных веб-приложений и мобильных решений'
        }
    ],

    tasks: [
        {
            id: 1,
            title: 'Оптимизация алгоритма поиска',
            description: 'Необходимо оптимизировать алгоритм поиска в базе данных для уменьшения времени выполнения запросов. Текущее время выполнения составляет 2 секунды, требуется снизить до 0.5 секунд.',
            company: 'ТехноСофт',
            employerId: 1,
            difficulty: 'medium',
            experience: 25,
            status: 'active',
            createdAt: '2024-01-15',
            tags: ['Алгоритмы', 'Базы данных', 'Оптимизация']
        },
        {
            id: 2,
            title: 'Создание REST API для мобильного приложения',
            description: 'Разработать REST API для мобильного приложения с поддержкой аутентификации, CRUD операций для пользователей и интеграцией с внешними сервисами.',
            company: 'ВебСтудия',
            employerId: 3,
            difficulty: 'hard',
            experience: 50,
            status: 'active',
            createdAt: '2024-01-20',
            tags: ['API', 'Backend', 'REST']
        },
        {
            id: 3,
            title: 'Анализ данных продаж',
            description: 'Провести анализ данных продаж за последний квартал, выявить тренды и подготовить визуализацию результатов.',
            company: 'ДанныеПлюс',
            employerId: 2,
            difficulty: 'easy',
            experience: 10,
            status: 'active',
            createdAt: '2024-01-18',
            tags: ['Анализ данных', 'Визуализация', 'Excel']
        },
        {
            id: 4,
            title: 'Реализация системы кэширования',
            description: 'Разработать систему кэширования для веб-приложения с использованием Redis. Необходимо реализовать инвалидацию кэша и обработку ошибок.',
            company: 'ТехноСофт',
            employerId: 1,
            difficulty: 'hard',
            experience: 50,
            status: 'active',
            createdAt: '2024-01-22',
            tags: ['Кэширование', 'Redis', 'Backend']
        },
        {
            id: 5,
            title: 'Создание компонента формы обратной связи',
            description: 'Разработать компонент формы обратной связи с валидацией полей, обработкой ошибок и отправкой данных на сервер.',
            company: 'ВебСтудия',
            employerId: 3,
            difficulty: 'easy',
            experience: 10,
            status: 'active',
            createdAt: '2024-01-25',
            tags: ['Frontend', 'React', 'Формы']
        },
        {
            id: 6,
            title: 'Машинное обучение для предсказания цен',
            description: 'Построить модель машинного обучения для предсказания цен на недвижимость на основе исторических данных. Оценить точность модели.',
            company: 'ДанныеПлюс',
            employerId: 2,
            difficulty: 'hard',
            experience: 50,
            status: 'active',
            createdAt: '2024-01-28',
            tags: ['Машинное обучение', 'Python', 'Анализ данных']
        },
        {
            id: 7,
            title: 'Рефакторинг legacy кода',
            description: 'Провести рефакторинг устаревшего кода, улучшить читаемость, добавить тесты и документацию.',
            company: 'ТехноСофт',
            employerId: 1,
            difficulty: 'medium',
            experience: 25,
            status: 'active',
            createdAt: '2024-02-01',
            tags: ['Рефакторинг', 'Тестирование', 'Документация']
        },
        {
            id: 8,
            title: 'Создание дашборда для аналитики',
            description: 'Разработать интерактивный дашборд для отображения ключевых метрик бизнеса с возможностью фильтрации и экспорта данных.',
            company: 'ДанныеПлюс',
            employerId: 2,
            difficulty: 'medium',
            experience: 25,
            status: 'active',
            createdAt: '2024-02-05',
            tags: ['Дашборд', 'Визуализация', 'Аналитика']
        }
    ],

    solutions: [
        {
            id: 1,
            taskId: 1,
            userId: 1,
            status: 'approved',
            completedAt: '2024-01-20',
            feedback: 'Отличное решение! Алгоритм оптимизирован корректно, время выполнения снижено до 0.4 секунд.',
            pinned: true
        },
        {
            id: 2,
            taskId: 3,
            userId: 1,
            status: 'approved',
            completedAt: '2024-01-25',
            feedback: 'Хороший анализ данных, визуализация выполнена качественно.',
            pinned: false
        },
        {
            id: 3,
            taskId: 2,
            userId: 2,
            status: 'approved',
            completedAt: '2024-01-28',
            feedback: 'API реализован правильно, хорошая структура кода.',
            pinned: true
        },
        {
            id: 4,
            taskId: 5,
            userId: 2,
            status: 'approved',
            completedAt: '2024-02-01',
            feedback: 'Компонент работает стабильно, валидация реализована корректно.',
            pinned: false
        },
        {
            id: 5,
            taskId: 4,
            userId: 4,
            status: 'approved',
            completedAt: '2024-02-03',
            feedback: 'Система кэширования работает отлично, учтены все требования.',
            pinned: true
        },
        {
            id: 6,
            taskId: 7,
            userId: 1,
            status: 'pending',
            completedAt: '2024-02-10',
            feedback: null,
            pinned: false
        }
    ],

    vacancies: [
        {
            id: 1,
            title: 'Junior Backend Developer',
            company: 'ТехноСофт',
            employerId: 1,
            description: 'Ищем начинающего backend разработчика для работы над проектами компании. Требуется знание Python, Django, баз данных.',
            salary: '80 000 - 120 000 ₽',
            type: 'office',
            experience: 'Без опыта',
            status: 'open',
            requiredTaskIds: [1, 4],
            tags: ['Python', 'Django', 'Backend'],
            createdAt: '2024-01-15'
        },
        {
            id: 2,
            title: 'Data Analyst',
            company: 'ДанныеПлюс',
            employerId: 2,
            description: 'Требуется аналитик данных для работы с большими объемами информации. Опыт работы с Python, pandas, SQL обязателен.',
            salary: '100 000 - 150 000 ₽',
            type: 'remote',
            experience: '1-2 года',
            status: 'open',
            requiredTaskIds: [3, 8],
            tags: ['Python', 'Анализ данных', 'SQL'],
            createdAt: '2024-01-18'
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'ВебСтудия',
            employerId: 3,
            description: 'Нужен frontend разработчик для создания современных веб-интерфейсов. Знание React, TypeScript, CSS обязательно.',
            salary: '90 000 - 130 000 ₽',
            type: 'hybrid',
            experience: 'Без опыта',
            status: 'open',
            requiredTaskIds: [5],
            tags: ['React', 'TypeScript', 'Frontend'],
            createdAt: '2024-01-20'
        },
        {
            id: 4,
            title: 'ML Engineer',
            company: 'ДанныеПлюс',
            employerId: 2,
            description: 'Ищем специалиста по машинному обучению для разработки и внедрения ML моделей в продакшн.',
            salary: '150 000 - 200 000 ₽',
            type: 'remote',
            experience: '2+ года',
            status: 'open',
            requiredTaskIds: [6],
            tags: ['Машинное обучение', 'Python', 'ML'],
            createdAt: '2024-01-28'
        }
    ],

    achievements: [
        {
            id: 1,
            title: 'Первые шаги',
            description: 'Решите первую задачу',
            icon: '🎯',
            unlocked: true
        },
        {
            id: 2,
            title: 'Новичок',
            description: 'Достигните 5 уровня',
            icon: '⭐',
            unlocked: true
        },
        {
            id: 3,
            title: 'Мастер',
            description: 'Достигните 10 уровня',
            icon: '👑',
            unlocked: false
        },
        {
            id: 4,
            title: 'Легко и просто',
            description: 'Решите 10 легких задач',
            icon: '🌱',
            unlocked: true
        },
        {
            id: 5,
            title: 'Средний уровень',
            description: 'Решите 5 средних задач',
            icon: '📊',
            unlocked: false
        },
        {
            id: 6,
            title: 'Эксперт',
            description: 'Решите 3 сложные задачи',
            icon: '🔥',
            unlocked: false
        },
        {
            id: 7,
            title: 'Неделя продуктивности',
            description: 'Решите 7 задач за неделю',
            icon: '📅',
            unlocked: false
        },
        {
            id: 8,
            title: 'В топе',
            description: 'Попадите в топ-10 лидеров',
            icon: '🏆',
            unlocked: false
        }
    ],

    quests: [
        {
            id: 1,
            type: 'daily',
            title: 'Решить 1 задачу',
            description: 'Решите любую задачу сегодня',
            progress: 0,
            target: 1,
            completed: false
        },
        {
            id: 2,
            type: 'daily',
            title: 'Получить 50 опыта',
            description: 'Заработайте 50 очков опыта за день',
            progress: 25,
            target: 50,
            completed: false
        },
        {
            id: 3,
            type: 'weekly',
            title: 'Решить 5 задач',
            description: 'Решите 5 задач за неделю',
            progress: 2,
            target: 5,
            completed: false
        },
        {
            id: 4,
            type: 'weekly',
            title: 'Получить 200 опыта',
            description: 'Заработайте 200 очков опыта за неделю',
            progress: 75,
            target: 200,
            completed: false
        }
    ]
};

