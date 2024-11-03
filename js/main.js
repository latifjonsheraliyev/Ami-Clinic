const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});


document.getElementById( 'step__progressbar--line' ).value = 60;

// при нажатии на кнопку=текст запускается воспроизведение аудио
// условие, которое проверяет, играет ли аудио. Если аудио не играет, то запускается воспроизведение, иначе аудио ставится на паузу.

const audioButton = document.getElementById("audioButton");
const audioPlayer = document.getElementById("audioPlayer");

audioButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

const audioButton1 = document.getElementById("audioButton1");
const audioPlayer1 = document.getElementById("audioPlayer1");

audioButton1.addEventListener("click", () => {
  if (audioPlayer1.paused) {
    audioPlayer1.play();
  } else {
    audioPlayer1.pause();
  }
});

// кнопка вверх
// кнопка взята с сайта https://atuin.ru/blog/knopka-vverx-i-varianty-ee-oformleniya/ вариант 2

$("body").append('<div class="upbtn"></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".upbtn").css({
      transform: "scale(1)",
    });
  } else {
    $(".upbtn").css({
      transform: "scale(0)",
    });
  }
});
$(".upbtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// расчет
// изменение стилей кнопок

const CalculationBtn = document.querySelectorAll(".calculation__form--opt-btn");

for (var i = 0; i < CalculationBtn.length; i++) {
  CalculationBtn[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (var j = 0; j < CalculationBtn.length; j++) {
      CalculationBtn[j].classList.remove("calculation__form--opt-btn-active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("calculation__form--opt-btn-active");
  });
}

// врачи
// изменение стилей кнопок

// разобраться почему не добавляется класс к 6 кнопке и дальше

const doctorsBtn = document.querySelectorAll(".doctors__tabs--btn");

for (var i = 0; i < CalculationBtn.length; i++) {
  doctorsBtn[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (var j = 0; j < doctorsBtn.length; j++) {
      doctorsBtn[j].classList.remove("doctors__tabs--btn-active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("doctors__tabs--btn-active");
  });
}

// отзывы, истории
// изменение стилей кнопок

const storiesBtn = document.querySelectorAll(".tabs__btn");

for (var i = 0; i < storiesBtn.length; i++) {
  storiesBtn[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (var j = 0; j < storiesBtn.length; j++) {
      storiesBtn[j].classList.remove("tabs__btn--active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("tabs__btn--active");
  });
}

// выпадающее меню

// разобраться почему остается открытым меню при нажатии на раскрытие соседнего
// объединить раскрытие меню и поворот стрелки, так же поворот работает только на первом пункте меню нужно исправить

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function headerDropdown() {
  document.getElementById("headerDropdown").classList.toggle("show");
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches(".menu__list--link1")) {
      let dropdowns = document.getElementsByClassName("header__dropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }
}
// поворот стрелки
document.querySelector(".arrow__img").addEventListener("click", function () {
  this.classList.toggle("rotate-180");
});

function headerDropdown2() {
  document.getElementById("headerDropdown2").classList.toggle("show2");
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches(".menu__list--link2")) {
      let dropdowns = document.getElementsByClassName("header__dropdown2");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show2")) {
          openDropdown.classList.remove("show2");
        }
      }
    }
  }
}

