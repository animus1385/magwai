import tempalteCard from '../templateCard/templateCard.js';

export default async function loaderCard() {
    const btnApplication = document.querySelector('.cards__btn-block');
    const list = document.querySelector('.cards__list');
    const card = document.querySelectorAll('.card');
        
    async function api() {
        let get = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        let data = await get.json();
        return data
    }
    const date = await api();


    let iter = 0;
    let j = 0;
    btnApplication.addEventListener('click', function () {
        const data = new Date();
        iter = 0;
        for (let i = j || 0; i < date.length; i++) {

            if (iter < 6) {
                j++;
                const card = tempalteCard();
                card.children[1].children[0].textContent = date[i].id;
                card.children[1].children[1].textContent = date[i].title;
                card.children[1].children[2].textContent = date[i].body;
                card.children[1].children[3].children[0].textContent = `Posted by Eugenia, on July ${data.getDay()}, ${data.getFullYear()}`;

                list.append(card)
                iter++;
            }

        }

    })
}