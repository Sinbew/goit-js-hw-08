import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  const galleryToReturn = `<a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}"/></a>`;

  return galleryToReturn;
});

gallery.insertAdjacentHTML('afterbegin', galleryItem.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
