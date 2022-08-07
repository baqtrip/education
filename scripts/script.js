const tabBtns = document.querySelectorAll('.tabs__item')
tabBtns.forEach((b) => {
    b.addEventListener('click', (e) => {
        if (document.querySelector('.tabs__item_active')) {
            document.querySelector('.tabs__item_active').classList.remove('tabs__item_active')
        }
        e.target.classList.add('tabs__item_active')
    })
})