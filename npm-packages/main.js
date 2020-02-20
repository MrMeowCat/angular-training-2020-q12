import axios from 'axios';

axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
  const imageElement = document.querySelector('img');
  imageElement.src = response.data.message;
});

