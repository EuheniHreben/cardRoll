document.addEventListener('DOMContentLoaded', function () {
  const cardWrappers = document.querySelectorAll('.card-wrapper');
  cardWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function () {
      const card = wrapper.querySelector('.card');
      card.classList.toggle('flipped');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const card = document.querySelector('.card');
  card.addEventListener('mouseenter', () => {
    if (card.classList.contains('auto-rotate')) {
      card.classList.remove('auto-rotate');
    }
  });
});

const colorMusicBtn = document.getElementById('color-music')

colorMusicBtn.addEventListener('click', e => {
  e.preventDefault()
  document.body.classList.toggle('active')
  document.body.classList.contains('active') ? colorMusicBtn.textContent = 'Turn Off colors' : colorMusicBtn.textContent = 'Turn On colors'
})

timerId = setInterval(() => {
  const card = document.querySelector('.card');
  card.classList.toggle('auto-rotate');
}, 30000)


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return `"${quotes[randomIndex]}" Будда Шакьямуни`;
}

document.addEventListener('DOMContentLoaded', () => {
  const backQuote = document.getElementById('quote-text');
  backQuote.style.opacity = 0;
  backQuote.textContent = getRandomQuote();
  setInterval(() => {
    backQuote.textContent = getRandomQuote();
    backQuote.style.opacity = 1;
    
  }, 29000)
});

const quotes = [
  "Не живи в прошлом, не мечтай о будущем, сосредоточься на настоящем.",
  "Ты становишься тем, о чём ты думаешь.",
  "Лучше зажечь одну маленькую свечу, чем проклинать тьму.",
  "Счастье не зависит от внешних обстоятельств, а от того, как мы их воспринимаем.",
  "Тот, кто победил себя, сильнее того, кто победил тысячи других.",
  "Не держитесь за старое, чтобы встретить новое.",
  "Когда ты понимаешь, что ничего не имеешь, ты становишься свободным.",
  "Внутренняя тишина — это главный путь к истинному пониманию.",
  "Как ты воспринимаешь мир, так и мир воспринимает тебя.",
  "Все, что мы есть, это результат наших мыслей.",
  "Смирение — это сила, а гордость — это слабость.",
  "Тот, кто умеет быть терпимым, сможет преодолеть все трудности.",
  "Не важно, как медленно ты движешься, главное — не останавливаться.",
  "Прощение — это не действие для других, а для себя.",
  "Отпусти то, что тебе не нужно, и обрети истинное счастье.",
  "Ум — это всё. Тем, что ты думаешь, ты и становишься.",
  "Мир приходит изнутри. Не ищи его вовне.",
  "Три вещи не могут быть скрыты долго: солнце, луна и истина.",
  "Никто не спасает нас, кроме нас самих. Никто не может и никто не сделает. Мы сами должны идти по этому пути.",
  "Ты теряешь только то, к чему привязан.",
  "Здоровье — величайший дар, удовлетворённость — величайшее богатство, верность — лучшая связь.",
  "Лучше тысячи пустых слов одно слово, которое приносит мир.",
  "Нет пути к счастью: счастье — это и есть путь.",
  "Победа над собой — самая великая победа.",
  "Будь светильником самому себе.",
  "Даже падение — часть пути.",
  "Не существует пути к истине вне тебя самого.",
  "Чистота и нечистота зависят от тебя самого.",
  "Тот, кто завидует другим, не найдёт покоя.",
  "Ненависть не прекращается ненавистью, она прекращается любовью.",
  "Тот, кто понимает природу ума, обретает свободу.",
  "Истинное счастье не зависит от внешних условий.",
  "Пойми, что всё создано твоим умом.",
  "Жизнь дана не для страданий, а для осознания.",
  "Сомнения разделяют людей, вера соединяет их.",
  "Будь терпелив: всё приходит к тем, кто умеет ждать."
];

// const shareData = {
//   title: 'Abmёtka Production',
//   url: 'https://euhenihreben.github.io/cardRoll/',
// }

// const btnUrl = document.querySelector('btnUrl')

// btnUrl.addEventListener('click', async () => {
//   try {
//     await navigator.share(shareData)
//   } catch (err) {
//     console.log(err)
//   }
// })