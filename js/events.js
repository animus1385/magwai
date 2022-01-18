export default function events() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav')
    const rightBlock = document.querySelector('.header__right-block');
   

    burger.addEventListener('click', function () {
        this.classList.toggle('burger--active')
        nav.classList.toggle('header__nav--active')
        if (!document.body.classList.contains('overflow')) {
            document.body.classList.toggle('overflow');
        } else {
            document.body.classList.remove('overflow');
        }
        rightBlock.classList.toggle('header__right-block--active')
    })
   
}