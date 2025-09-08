// 다크모드 토글 기능
(function() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.innerHTML = '🌙';
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.setAttribute('aria-label', '다크모드 토글');
  
  // 현재 모드 확인
  const currentMode = localStorage.getItem('darkMode') || 'auto';
  
  function updateTheme(mode) {
    if (mode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkModeToggle.innerHTML = '☀️';
    } else if (mode === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      darkModeToggle.innerHTML = '🌙';
    } else {
      document.documentElement.removeAttribute('data-theme');
      darkModeToggle.innerHTML = '🔄';
    }
  }
  
  // 초기 테마 설정
  updateTheme(currentMode);
  
  // 토글 기능
  darkModeToggle.addEventListener('click', function() {
    let newMode;
    const current = localStorage.getItem('darkMode') || 'auto';
    
    if (current === 'auto') {
      newMode = 'dark';
    } else if (current === 'dark') {
      newMode = 'light';
    } else {
      newMode = 'auto';
    }
    
    localStorage.setItem('darkMode', newMode);
    updateTheme(newMode);
  });
  
  // 헤더에 버튼 추가
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header .wrapper');
    if (header) {
      header.appendChild(darkModeToggle);
    }
  });
})();
