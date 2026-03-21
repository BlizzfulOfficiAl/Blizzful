# 📘 ИНСТРУКЦИЯ: Как добавлять проекты на сайт

## 📁 Структура папок

```
blizzful-site/
├── index.html          ← Главная страница
├── styles.css          ← Стили (дизайн)
├── script.js           ← Скрипты (анимации)
└── projects/           ← СЮДА кладёшь файлы проектов
    ├── calculator.zip
    ├── game.zip
    └── ...
```

---

## ➕ Как добавить новый проект

### Шаг 1: Найди секцию проектов в HTML

Открой файл **`index.html`** и найди строку **~140** (секция `<section id="projects">`).

Там ты увидишь карточки проектов вроде этой:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-calculator"></i>
    </div>
    <h3>Консольный калькулятор</h3>
    <p>Описание проекта...</p>
    <div class="project-tags">
        <span class="tag">C#</span>
        <span class="tag">Console</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/Arseniy4734" target="_blank" class="project-link">
            <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="project-link download-link" data-project="calculator">
            <i class="fas fa-download"></i> Скачать
        </a>
    </div>
</div>
```

### Шаг 2: Положи файл проекта в папку `projects/`

Например: `projects/calculator.zip`

### Шаг 3: Измени ссылку на скачивание

В карточке проекта найди строку:

```html
<a href="#" class="project-link download-link" data-project="calculator">
```

И замени `#` на путь к файлу:

```html
<a href="projects/calculator.zip" class="project-link download-link" data-project="calculator">
```

---

## 🎨 Как изменить иконку проекта

В строке `<i class="fas fa-calculator"></i>` меняй класс на другой:

| Иконка | Класс |
|--------|-------|
| 🎮 Игра | `fa-gamepad` |
| 🤖 Бот | `fa-robot` |
| 📱 Приложение | `fa-mobile-alt` |
| 🌐 Сайт | `fa-globe` |
| 💾 Утилита | `fa-tools` |
| 📊 Данные | `fa-chart-bar` |
| 🔒 Безопасность | `fa-shield-alt` |
| ⏰ Таймер | `fa-clock` |
| 📝 Заметки | `fa-sticky-note` |
| 🎨 Дизайн | `fa-palette` |

Полный список: https://fontawesome.com/icons

---

## ✏️ Как отредактировать текст

Просто меняй текст внутри тегов:

- `<h3>Название проекта</h3>` — название
- `<p>Описание...</p>` — описание
- `<span class="tag">C#</span>` — теги технологий

---

## 🚀 Как добавить ЦЕЛУЮ НОВУЮ карточку

Скопируй весь блок `<div class="project-card">...</div>` и вставь его после последней карточки (перед закрывающим `</div>` сетки проектов).

Пример:

```html
<!-- НОВАЯ КАРТОЧКА -->
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-rocket"></i>
    </div>
    <h3>Мой новый проект</h3>
    <p>Крутое описание того, что делает проект.</p>
    <div class="project-tags">
        <span class="tag">C#</span>
        <span class="tag">WPF</span>
        <span class="tag">New</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/Arseniy4734" target="_blank" class="project-link">
            <i class="fab fa-github"></i> GitHub
        </a>
        <a href="projects/new-project.zip" class="project-link download-link">
            <i class="fas fa-download"></i> Скачать
        </a>
    </div>
</div>
```

---

## 💡 Советы

1. **Называй файлы просто:** `calculator.zip`, `todo-app.zip` (без пробелов и кириллицы)
2. **Проверяй пути:** Если файл в папке `projects/`, ссылка должна быть `projects/filename.zip`
3. **Тестируй:** После изменений открой `index.html` в браузере и проверь, что всё работает

---

## 📝 Быстрая шпаргалка

| Что менять | Где (строка) | Что писать |
|------------|--------------|------------|
| Проекты | ~140-230 | Копируй карточку, меняй текст |
| Скачать | В карточке `href="#"` | `href="projects/file.zip"` |
| Навыки | ~250-330 | Меняй проценты `data-progress="40"` |
| Контакты | ~370-395 | Твои ссылки на соцсети |

---

**Удачи в разработке! 🚀**

Если что-то не получается — пиши, разберёмся!
