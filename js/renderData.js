import {checkStar} from './checkStar.js';
export function renderData(data, container) {
    container.innerHTML = `${data.recipes.map(el => `
                               <div class="card" score="${Math.floor(el.spoonacularScore / 2 / 10)}" vegan="${el.vegan}" dairyFree="${el.dairyFree}" veryHealthy="${el.veryHealthy}">
                                 ${el.image? `<img src="${el.image}">` : `<img src="https://spoonacular.com/recipeImages/716429-312x231.jpg">`}
                                 <div class="card-info">
                                   <h1>${el.title}</h1>
                                   <small>Please note that some plans may not include all of the fields for the ingredient object. Consult the API page for details and consider upgrading.</small>
                                   <div class="star-container">
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                 </div>
                                 </div>
                               </div>
                          `).join('')}`;
  checkStar()                                                
}
