import menuCardTpl from '../templates/menu-card.hbs';
import dishes from './menu.json';

const menu = document.querySelector('.js-menu');
const cardsMarkup = menuCardTpl(dishes);

menu.insertAdjacentHTML('beforeend', cardsMarkup);
