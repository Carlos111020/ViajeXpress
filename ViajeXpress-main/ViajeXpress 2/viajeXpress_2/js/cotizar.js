// === Validación del formulario de cotización (en tiempo real) ===
(function () {
    const form = document.getElementById('quoteForm');
    if (!form) return;
  
    const toast = document.getElementById('toast');
  
    function showError(input, msg) {
      input.classList.add('is-invalid');
      const small = input.parentElement.querySelector('.error');
      if (small) small.textContent = msg || input.validationMessage;
    }
  
    function clearError(input) {
      input.classList.remove('is-invalid');
      const small = input.parentElement.querySelector('.error');
      if (small) small.textContent = '';
    }
  
    // Validación en tiempo real
    form.addEventListener('input', (e) => {
      const el = e.target;
      if (el.tagName !== 'INPUT') return;
      el.checkValidity() ? clearError(el) : showError(el);
    });
  
    // Submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = [...form.querySelectorAll('input')];
      const invalid = inputs.filter(i => !i.checkValidity());
  
      if (invalid.length) {
        invalid.forEach(i => showError(i));
        invalid[0].focus();
        return;
      }
  
      // Simula envío y muestra toast
      if (toast) {
        toast.hidden = false;
        toast.textContent = 'Solicitud enviada. Te contactaremos pronto.';
        setTimeout(() => (toast.hidden = true), 2500);
      }
  
      form.reset();
    });
  })();
  