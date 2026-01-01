// كتابة النص بشكل متتابع (typing effect)
document.addEventListener('DOMContentLoaded', function () {
  const text = "Front-End & WordPress Developer";
  let i = 0;

  function write() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(write, 100);
    }
  }
  write();
});

// زر الرجوع للأعلى
let goTopBtn = document.getElementById("goTop");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// أنيميشن عند التمرير
const hiddenElements = document.querySelectorAll('.hidden');
function checkScroll() {
  const windowHeight = window.innerHeight;
  hiddenElements.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}
checkScroll();
window.addEventListener('scroll', checkScroll);

// التحكم بالفيديو عند التمرير
const video = document.getElementById('video');
const homeSection = document.querySelector('.home');
window.addEventListener('scroll', function () {
  if (window.scrollY > homeSection.offsetHeight * 0.6) {
    video.pause();
  } else {
    video.play();
  }
});

// أنيميشن الشعار (anime.js)
const logo = document.querySelector('.logo.js');
anime({
  targets: '.logo.js',
  scale: [
    { value: 1.2, duration: 800, easing: 'easeInOutSine' },
    { value: 1, duration: 1000, easing: 'easeOutElastic(1, .5)' }
  ],
  loop: true,
  loopDelay: 1000,
});

// إظهار الأقسام تدريجياً
document.querySelectorAll('section, .large.centered.row, .medium.row').forEach((section, index) => {
  section.classList.add('hidden');
  setTimeout(() => section.classList.add('show'), 300 * index);
});

// دالة مساعدة للأنيميشن
function animate(selector, properties) {
  anime(Object.assign({ targets: document.querySelectorAll(selector) }, properties));
}

// تطبيق بعض التأثيرات
animate('.square', {
  translateX: '17rem',
  delay: anime.stagger(300),
  easing: 'easeInOutQuad'
});

animate('.row:nth-child(3) .square', {
  scale: [1, .5, 1],
  duration: 1000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

// أنيميشينات أخرى
const anim3 = anime({ targets: '#box3', duration: 1000, loop: true });
const anim4 = anime({ targets: '#box4', duration: 1000, scale: [1, .5, 1], easing: 'easeInSine', autoplay: true, borderRadius: ['10%', '50%'], delay: 1000 });
const anim5 = anime({ targets: '#box5', borderRadius: ['10%', '50%'], duration: 1000, delay: 2000, scale: [1, .5, 1], easing: 'easeInSine', autoplay: true });
const anim6 = anime({ targets: '#box6', borderRadius: ['10%', '50%'], duration: 1000, delay: 3000, scale: [1, .5, 1], easing: 'easeInSine', autoplay: true });

// تشغيل anim3 عند الضغط
document.getElementById('box3').addEventListener('click', () => anim3.play());

// ScrollSpy (Bootstrap)
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
if (firstScrollSpyEl) {
  firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
    // do something...
  });
}



// // كتابة النص بشكل متتابع (typing effect)
// document.addEventListener('DOMContentLoaded', function () {
//   // كتابة النص بشكل متتابع (typing effect)
//   const text = "Front-End Developer";
//   let i = 0;

//   function write() {
//     if (i < text.length) {
//       document.getElementById("typing").innerHTML += text.charAt(i);
//       i++;
//       // بدء الكتابة بعد ثانية واحدة
//       setTimeout(write, 100);

//     }
//   }

//   write();
// });




// let goTopBtn = document.getElementById("goTop");

//     // إظهار أو إخفاء الزر حسب السكول
//     window.onscroll = function() {
//       if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         goTopBtn.style.display = "block";
//       } else {
//         goTopBtn.style.display = "none";
//       }
//     };

//     // لما نضغط الزر يرجع للأعلى بسلاسة
//     function scrollToTop() {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }


//   // تفعيل الأنيميشن عند التمرير
//   const hiddenElements = document.querySelectorAll('.hidden');

//   function checkScroll() {
//     const windowHeight = window.innerHeight;

//     hiddenElements.forEach(el => {
//       const elementTop = el.getBoundingClientRect().top;

//       if (elementTop < windowHeight - 100) {
//         el.classList.add('show');
//       }
//     });
//   }

//   // تحقق من ظهور العناصر عند تحميل الصفحة أول مرة
//   checkScroll();

//   // تحقق من ظهور العناصر عند التمرير
//   window.addEventListener('scroll', checkScroll);

//   // التحكم بالفيديو عند التمرير
//   const video = document.getElementById('video');
//   const homeSection = document.querySelector('.home');

//   window.addEventListener('scroll', function () {
//     const homeSectionHeight = homeSection.offsetHeight;

//     // عندما يمر المستخدم عن قسم الفيديو
//     if (window.scrollY > homeSectionHeight * 0.6) {
//       // إيقاف الفيديو
//       video.pause();
//     } else {
//       // إعادة تشغيل الفيديو إذا عاد المستخدم لأعلى
//       video.play();
//     }
//   });


//   // كود anime.js للشعار
//   const logo = document.querySelector('.logo.js');
//   const rotateButton = document.getElementById('rotateButton');
//   let rotations = 0;

//   // أنيميشن التكبير والتصغير
//   anime({
//     targets: '.logo.js',
//     scale: [
//       { value: 1.2, duration: 800, easing: 'easeInOutSine' },
//       { value: 1, duration: 1000, easing: 'easeOutElastic(1, .5)' }
//     ],
//     loop: true,
//     loopDelay: 1000,
//   });

//   // // تدوير الشعار عند النقر على الزر
//   // rotateButton.addEventListener('click', function() {
//   //   rotations++;
//   //   rotateButton.textContent = `التدويرات: ${rotations}`;

//   //   anime({
//   //     targets: logo,
//   //     rotate: 360 * rotations,
//   //     duration: 1800,
//   //     easing: 'easeInOutQuart'
//   //   });
//   // });



//   // // جعل الشعار قابل للسحب
//   // let isDragging = false;
//   // let startX, startY, initialX, initialY;

//   // logo.addEventListener('mousedown', function (e) {
//   //   isDragging = true;
//   //   startX = e.clientX;
//   //   startY = e.clientY;
//   //   initialX = logo.offsetLeft;
//   //   initialY = logo.offsetTop;
//   //   logo.style.cursor = 'grabbing';
//   //   logo.style.position = 'relative';
//   // });

//   document.addEventListener('mousemove', function (e) {
//     if (isDragging) {
//       const dx = e.clientX - startX;
//       const dy = e.clientY - startY;

//       logo.style.left = `${initialX + dx}px`;
//       logo.style.top = `${initialY + dy}px`;
//     }
//   });

//   document.addEventListener('mouseup', function () {
//     isDragging = false;
//     logo.style.cursor = 'grab';

//     // تأثير ارتداد عند التحرير
//     anime({
//       targets: logo,
//       translateX: 0,
//       translateY: 0,
//       duration: 800,
//       easing: 'spring(1, 80, 10, 0)'
//     });
//   });

//   // جعل الشعار متجاوباً للنقر على الهواتف
//   logo.addEventListener('touchstart', function (e) {
//     e.preventDefault();
//     startX = e.touches[0].clientX;
//     startY = e.touches[0].clientY;
//     initialX = logo.offsetLeft;
//     initialY = logo.offsetTop;
//     logo.style.position = 'relative';
//   });

//   logo.addEventListener('touchmove', function (e) {
//     if (!isDragging) return;
//     e.preventDefault();
//     const dx = e.touches[0].clientX - startX;
//     const dy = e.touches[0].clientY - startY;

//     logo.style.left = `${initialX + dx}px`;
//     logo.style.top = `${initialY + dy}px`;
//   });

//   logo.addEventListener('touchend', function () {
//     isDragging = false;

//     // تأثير ارتداد عند التحرير
//     anime({
//       targets: logo,
//       translateX: 0,
//       translateY: 0,
//       duration: 800,
//       easing: 'spring(1, 80, 10, 0)'
//     });
//   });

//   // إضافة class hidden لجميع الأقسام عند التحميل
//   document.querySelectorAll('section, .large.centered.row, .medium.row').forEach((section, index) => {
//     section.classList.add('hidden');
//     // تأخير إظهار الأقسام تدريجياً
//     setTimeout(() => {
//       section.classList.add('show');
//     }, 300 * index);
//   });




// // دالة لتبسيط استخدام anime.js
// function animate(selector, properties) {
//   // إذا كان selector عنصر DOM، استخدمه مباشرة
//   if (typeof selector === 'object' && selector !== null) {
//     anime(Object.assign({ targets: selector }, properties));
//   }
//   // إذا كان selector مجموعة عناصر
//   else if (typeof selector === 'object' && selector.length !== undefined) {
//     anime(Object.assign({ targets: selector }, properties));
//   }
//   // إذا كان selector نصًا (محدد CSS)
//   else {
//     anime(Object.assign({ targets: document.querySelectorAll(selector) }, properties));
//   }
// }

// // إضافة class hidden لجميع الأقسام عند التحميل
// document.querySelectorAll('section, .large.centered.row, .medium.row').forEach((section, index) => {
//   section.classList.add('hidden');
//   // تأخير إظهار الأقسام تدريجياً
//   setTimeout(() => {
//     section.classList.add('show');
//   }, 300 * index);
// });

// // تطبيق بعض التأثيرات على العناصر
// animate('.square', {
//   translateX: '17rem',
//   delay: anime.stagger(300),
//   easing: 'easeInOutQuad'
// });

// animate('.row:nth-child(3) .square', {
//   scale: [1, .5, 1],
//   duration: 1000,
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutSine'
// });



// const anim3 = anime({
//   targets: '#box3',
//   duration: 1000,
//   loop: true,

// });


// const anim4 = anime({
//   targets: '#box4',
//   duration: 1000,
//   scale: [1, .5, 1],
//   easing: 'easeInSine',
//   autoplay: true,
//   borderRadius: ['10%', '50%'],
//   delay: 1000,
// });

// const anim5 = anime({
//   targets: '#box5',
//   borderRadius: ['10%', '50%'],
//   duration: 1000,
//   delay: 2000,
//   scale: [1, .5, 1],
//   easing: 'easeInSine',
//   autoplay: true
// });

// const anim6 = anime({
//   targets: '#box6',
//   borderRadius: ['10%', '50%'],
//   duration: 1000,
//   delay: 3000,
//   scale: [1, .5, 1],
//   easing: 'easeInSine',
//   autoplay: true
// });

// // إضافة مستمعي الأحداث للعناصر
// document.getElementById('box3').addEventListener('click', function () {
//   anim3.play();

// });

// var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
// firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
//   // do something...
// })



// // let goTopBtn = document.getElementById("goTop");

// // // إظهار أو إخفاء الزر حسب التمرير
// // window.addEventListener("scroll", function () {
// //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
// //     goTopBtn.style.display = "block";
// //   } else {
// //     goTopBtn.style.display = "none";
// //   }
// // });

// // // دالة الرجوع للأعلى
// // function scrollToTop() {
// //   window.scrollTo({
// //     top: 0,
// //     behavior: "smooth"
// //   });
// // }


// document.addEventListener("DOMContentLoaded", () => {
//   const navToggle = document.getElementById("navToggle");
//   const navMenu = document.getElementById("navMenu");

//   navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("show");
//   });
// });


function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function toggleMenu() {
  document.getElementById("navbar-example2").classList.toggle("active");
}
