const btn = document.querySelector('.btn');
let filterTag = [];

const mealContainer = document.querySelector('.meal-container');
const tagEls = document.querySelectorAll('.tag');

import {getData} from './getData.js';
import {renderData} from './renderData.js';
import {getFilterTag} from './getFilterTag.js';
import {filterMeal} from './filterMeal.js';

//Put your api key in here
const uri = '';

btn.addEventListener('click', (e) => {
    getData(uri).then(result => {
        renderData(result, mealContainer);
        //If there is any tag
        if(filterTag.length > 0) {
            filterMeal(filterTag);
        }
    })
})


tagEls.forEach(el => {
    el.addEventListener('click', (e) => {
        getFilterTag(el, filterTag);
    })
})

