
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}
// === Modo oscuro/claro con preferencia del sistema + persistencia ===
(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const media = window.matchMedia('(prefers-color-scheme: dark)');
  
    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      try { localStorage.setItem('theme', theme); } catch {}
      if (toggle) toggle.setAttribute('aria-pressed', theme === 'dark');
    }
  
    function initTheme() {
      let saved = null;
      try { saved = localStorage.getItem('theme'); } catch {}
      if (saved === 'dark' || saved === 'light') {
        applyTheme(saved);
      } else {
        applyTheme(media.matches ? 'dark' : 'light');
      }
    }
  
    initTheme();
  
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }
  
    // Si el usuario NO guardó preferencia, sigue los cambios del SO
    media.addEventListener('change', (e) => {
      let saved = null;
      try { saved = localStorage.getItem('theme'); } catch {}
      if (!saved) applyTheme(e.matches ? 'dark' : 'light');
    });
  })();
  