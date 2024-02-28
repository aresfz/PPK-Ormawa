document.querySelectorAll('.berita-link').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector('#berita-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.budaya-link').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector('#budaya-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });