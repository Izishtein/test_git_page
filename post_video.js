// Этот код инициализирует все видеоэлементы на странице, чтобы они могли воспроизводить видео YouTube.
// Функция `videoInit()` принимает в качестве входного параметра селектор и возвращает функцию, которая может использоваться для инициализации всех видеоэлементов на странице, которые соответствуют этому селектору.
// Функция работает следующим образом:
// 1. Сначала она получает список всех видеоэлементов на странице, которые соответствуют селектору.
// 2. Затем она проходит цикл по списку видеоэлементов и вызывает функцию `videoGenerate()` для каждого из них.
const videoInit = (selector) => {
    // Получает список всех видеоэлементов на странице, которые соответствуют селектору.
    const videos = document.querySelectorAll(selector);
  
    // Если есть хотя бы один видеоэлемент, то проходит цикл по списку и вызывает функцию `videoGenerate()` для каждого видеоэлемента.
    if(videos.length > 0) {
      videos.forEach(video => {
        // Вызывает функцию `videoGenerate()` для конкретного видеоэлемента.
        videoGenerate(video);
      });
    }
  
    // Возвращает функцию, которая может использоваться для инициализации всех видеоэлементов на странице, которые соответствуют этому селектору.
    return videoInit;
  };
  
  // Функция `videoGenerate()` принимает в качестве входного параметра видеоэлемент и генерирует элемент iframe, который может использоваться для воспроизведения видео YouTube.
  // Функция работает следующим образом:
  // 1. Сначала она получает идентификатор видео из кнопки видеоэлемента.
  // 2. Затем она создает элемент iframe и устанавливает атрибут source на URL видео YouTube.
  // 3. Наконец, она добавляет элемент iframe в внутренний контейнер видеоэлемента.
  
  const videoGenerate = (video) => {
    // Получает кнопку видеоэлемента.
    const btn = video.querySelector('.video-block_button');
  
    // Получает идентификатор видео из кнопки.
    const videoID = btn.dataset.videoID;
  
    // Создает элемент iframe.
    const iframe = document.createElement('iframe');
  
    // Устанавливает атрибут source на URL видео YouTube.
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1&mute=1`);
  
    // Устанавливает атрибуты allow и allowfullscreen, чтобы разрешить iframe воспроизводиться автоматически и в полноэкранном режиме.
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('class', 'video-block_content');
  
    // Добавляет элемент iframe в внутренний контейнер видеоэлемента.
    const container = video.querySelector('.video-block_inner');
    container.innerHTML = '';
    container.appendChild(iframe);
  };
  
  // Экспортирует функцию `videoInit()` как экспорт по умолчанию.
  // Затем вызывает функцию `videoInit()` с селектором `.video-block`. Это инициализирует все видеоэлементы на странице, которые соответствуют этому селектору.
  
  export default videoInit;
  videoInit('.video-block');
  