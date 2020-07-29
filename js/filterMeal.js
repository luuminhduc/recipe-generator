export function filterMeal(filterTags) {
    const cards = document.querySelectorAll('.card');
    let cardTag = [];
    cards.forEach(card => {
        let cardTag = [];
        if(card.getAttribute("vegan") == 'true') {
            cardTag.push('vegan')
        }
        if(card.getAttribute("dairyFree") == 'true') {
            cardTag.push('dairyFree')
        }
        if(card.getAttribute("veryHealthy") == 'true') {
            cardTag.push('veryHealthy')
        }
        const check = filterTags.every(el => cardTag.includes(el));
        if(check == true) {
            card.style.display = 'flex';
        }else{
            card.style.display = 'none';
        }
    })
}