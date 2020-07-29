import {filterMeal} from './filterMeal.js';

export function getFilterTag(tagEl, filterTag) {
    const tagName = tagEl.getAttribute('data');
    if(tagEl.classList.contains('active')) {
        const arrEl = filterTag.find(el => el === tagName);
        filterTag.splice(filterTag.indexOf(arrEl), 1);
    }else{
        filterTag.push(tagName);
    }
    tagEl.classList.toggle('active');
    if(document.querySelectorAll('.card').length > 0) {
        filterMeal(filterTag);
    }
}