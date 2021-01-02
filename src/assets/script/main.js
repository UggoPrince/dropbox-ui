document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sForm');
  document.addEventListener('scroll', () => {
    // eslint-disable-next-line no-console
    if (window.scrollY > 630) {
      form.classList.add('hide');
    } else {
      form.classList.remove('hide');
    }
  });
});
