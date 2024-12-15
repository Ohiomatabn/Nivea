import { products } from "./product.js ";
import { testimonies } from "./testimonies.js";

//Rendering Products
let productsHTML ='';
products.forEach((product) =>{ 
productsHTML += `  <div class="col-lg-3 col-sm-6">
    <div class="card border-0 shadow">
      <div
        class="card-body row d-flex justify-content-center align-items-center"
      >
        <div class="col-6">
          <img src="${product.image}" alt="" />
        </div>
        <div class="col-6">
          <h3 class="card-title">${product.name}</h3>
          <div
            class="d-flex justify-content-center align-items-center"
          >
            <p class="col-8">&#8358;${product.price}</p>
            <p class="col-4">
              <a href="#"
                ><img src="SVG/plus.svg" alt="" width="40px"
              /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

document.querySelector('.js-product-row').innerHTML += productsHTML;


//Rendering Testimonies
let testimoniesHTML = '';
testimonies.forEach((testimony) =>{
  testimoniesHTML += `
    <div
      class="col-lg-3 mx-2 d-flex flex-column justify-content-center align-items-center shadow p-3"
    >
      <div class="quote">
        <img src="${testimony.icon}" alt="" width="100px" />
      </div>
      <div class="text-center">
        ${testimony.text}
      </div>
      <div class="img">
        <img
          src="${testimony.image}"
          alt=""
        />
        <h4 class="text-center fs-6 fw-bold">Ohiomata BN</h4>
      </div>
    </div>
  `
});

document.querySelector('.js-testimonies-row').innerHTML += testimoniesHTML;

//Current year in the footer section
let date = new Date;
const year = date.getFullYear();
console.log(year);
document.querySelector('.year').innerHTML = year;