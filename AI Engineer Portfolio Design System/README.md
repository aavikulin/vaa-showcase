# AI Engineer Portfolio

Одна основная версия сайта без UI kit-дубликатов и превью.

## Структура

- `Portfolio.html` — основной entry point
- `styles.css` — стили сайта
- `app.js` — данные и логика рендера
- `page-visibility.config.js` — конфиг видимости страниц

## Видимость страниц

Включение и отключение страниц настраивается в `page-visibility.config.js`.

Пример:

```js
window.PAGE_VISIBILITY_CONFIG = {
  about: true,
  work: false,
  writing: true,
  now: false,
  cv: true,
  contact: true,
};
```

Если для страницы стоит `false`, она:

- не показывается в навигации
- не попадает в список `Page` в tweaks-panel
- не откроется при переключении

Если текущая страница отключена, приложение автоматически переключится на первую доступную страницу.

## Запуск

Откройте `Portfolio.html` напрямую в браузере или поднимите любой статический сервер на папку `AI Engineer Portfolio Design System`.
