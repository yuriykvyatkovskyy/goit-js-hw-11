import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input');
const galleryBox = document.querySelector('.gallery-box');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const searchParams = {
    key: '41752354-d1ac8bee07efd7a3da621dba9',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};

const lightbox = new SimpleLightbox('.gallery a', {
    nav: true,
    captionDelay: 250,
    captionsData: 'alt',
    close: true,
    enableKeyboard: true,
    docClose: true,
});
