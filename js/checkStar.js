export function checkStar() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(el => {
        const score = +el.getAttribute('score');
        const starEls = el.querySelectorAll('.fa-star');
        starEls.forEach((star, idx) => {
            if(idx <= score) {
                star.classList.add('on');
            }else{
                star.classList.remove('on');
            }
        })
    })
}