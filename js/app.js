// Menu - hamburguer
document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  const icon = toggler.querySelector('.navbar-icon i');

  toggler.addEventListener('click', () => {
    setTimeout(() => {
      const expanded = toggler.getAttribute('aria-expanded') === 'true';
      icon.className = expanded ? 'fas fa-times' : 'fas fa-bars';
    }, 100);
  });
});


// Lista - card gatinhos
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("cat-list");

  fetch('./data/db.json')
    .then(res => res.json())
    .then(gatinhos => {
      gatinhos.forEach(gato => {
        container.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <img src="${gato.imagem}" class="card-img-top" alt="Gato ${gato.nome}">
              <div class="card-body">
                <h5 class="card-title">${gato.nome}</h5>
                <p class="card-text">${gato.idade} | ${gato.descricao}</p>
                <a href="#contact" class="btn btn-primary">Quero Adotar</a>
              </div>
            </div>
          </div>`;
      });
    })
    .catch(err => {
      container.innerHTML = '<p class="text-danger">Erro ao carregar gatinhos.</p>';
      console.error(err);
    });
});


// envio do email - contatos
if (window.emailjs) {
  emailjs.init("zYB6K7SG5XW6epgiZ");

  const form = document.getElementById('formContato');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs.sendForm('service_uvmu7f4', 'template_pxbnrrj', this)
        .then(() => {
          alert('Email enviado!');
          this.reset();
        })
        .catch(err => alert('Erro: ' + JSON.stringify(err)));
    });
  }
}
