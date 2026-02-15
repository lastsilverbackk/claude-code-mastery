// 모바일 햄버거 메뉴 토글
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuIcon.setAttribute('d', isOpen
    ? 'M4 6h16M4 12h16M4 18h16'
    : 'M6 18L18 6M6 6l12 12'
  );
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });
});

// 다크모드 토글
const darkToggle = document.getElementById('darkToggle');
const darkToggleMobile = document.getElementById('darkToggleMobile');

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// 저장된 다크모드 설정 불러오기 (기본값: 다크모드)
if (localStorage.getItem('darkMode') !== 'false') {
  document.documentElement.classList.add('dark');
}

darkToggle.addEventListener('click', toggleDarkMode);
darkToggleMobile.addEventListener('click', toggleDarkMode);

// 네비게이션 스크롤 효과
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer - 스크롤 페이드인 애니메이션
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => {
  fadeObserver.observe(el);
});

// 통계 숫자 카운트업 애니메이션
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      let current = 0;
      const duration = 1200;
      const steps = 50;
      const increment = target / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, stepTime);

      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  statObserver.observe(el);
});
