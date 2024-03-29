// Importando o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criar as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

// Essa é a URL base da API.
const BASE_URL = 'https://akabab.github.io/superhero-api/api';

// A API possui 731 heroínas e heróis cadastrados.
// Porém, para simular um erro na API por não encontrar o id informado,
// coloca-se que a quantidade máxima de ids é superior ao correto.
const MAX_HEROES = 1000;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

// Adicionando o eventListener 'click' no botão
button.addEventListener('click', (event) => {
  // event.preventDefault() para evitar que ele recarregue a página
  event.preventDefault();

  const id = randomId();

  // Fazendo o fetch utilizando a URL e o id gerado pela função
  fetch(`${BASE_URL}/id/${id}.json`)
  // Após o fetch, deve-se extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      // Uma vez extraído, recupera-se as informações que precisamos.
      // No caso, a imagem e o nome
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    // Caso haja erro, trata-se com o .catch()
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas pode-se usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
