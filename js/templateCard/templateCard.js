export default function tempalteCard() {
    const card = document.createElement('li');
    const imgBlock = document.createElement('div');
    const img = document.createElement('img');
    const infoBlock = document.createElement('div');
    const category = document.createElement('div');
    const title = document.createElement('div');
    const descr = document.createElement('div');
    const time = document.createElement('div');
    const currentDate = document.createElement('div');
    const button = document.createElement('div');

    card.classList.add('cards__item', 'card');
    imgBlock.classList.add('card__img-block');
    img.classList.add('card__img', 'lazyload');
    infoBlock.classList.add('card__info');
    category.classList.add('card__category');
    title.classList.add('card__tilte');
    descr.classList.add('card__descr');
    time.classList.add('card__time');
    currentDate.classList.add('card__current-date');
    button.classList.add('card__btn');

    time.append(currentDate);
    imgBlock.append(img);
    infoBlock.append(category, title, descr, time, button);
    card.append(imgBlock, infoBlock);

    button.textContent = 'Continue reading';

    return card
}