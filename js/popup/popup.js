export default function popup() {
    const btn = document.querySelectorAll('.header__btn-pop');
    const popup = document.querySelector('.popup');
    const btnClose = document.querySelector('.form__close');
    const popupBg = document.querySelector('.popup__bg');

    btn.forEach(e => {
        e.addEventListener('click', function () {
            popup.classList.toggle('popup--active')
            if (!document.body.classList.contains('overflow')) {
                document.body.classList.toggle('overflow');
            } else {
                document.body.classList.remove('overflow');
            }
        })
    })
    function colse() {
        popup.classList.remove('popup--active')
        if (!document.body.classList.contains('overflow')) {
            document.body.classList.toggle('overflow');
        } else {
            document.body.classList.remove('overflow');
        }
    }
    btnClose.addEventListener('click', colse)
    popupBg.addEventListener('click', colse)
}