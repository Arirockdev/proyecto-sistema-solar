import planets from "./data.js";


const doc = document;
const main = doc.querySelector('.main');
const container = doc.querySelector('.container');
const select = doc.querySelector('#select');
const btn = doc.querySelector('.btn');
const divError= doc.createElement('div');
const divImg = doc.createElement('div');
const divText = doc.createElement('div');
container.classList.add('container');
divImg.classList.add('div-img');
divText.classList.add('div-text');






const getInput = () => {
  let input = doc.querySelector('#input').value;
  input = Number(input);
  
  if(input === Number(input)){
    for(let data in planets){
      if(data === select.value){
        divError.style.display = 'none';
        divImg.innerHTML = `<img src="${planets[select.value].img}" alt="imagen del planeta ${planets[select.value]}">`;
        divText.innerHTML = `<p>El peso del objeto en el planeta <span class="parrafo-span"> ${select.value.toUpperCase()}</span></p>
                              <p class="peso">${(input * planets[select.value].gravity).toFixed(2)}N</p>`;
     }else if(select.value === 'luna'){
      divImg.innerHTML = `<img src="${planets[select.value].img}" alt="imagen de la ${planets[select.value]}">`;
        divText.innerHTML = `<p>El peso del objeto en la <span class="parrafo-span"> ${select.value.toUpperCase()}</span></p>
                              <p class="peso">${(input * planets[select.value].gravity).toFixed(2)}N</p>`; 
      break;
      }
    }

    container.appendChild(divImg);
    container.appendChild(divText);
    
  } else{
    
    divError.innerHTML =  `Debe ingresar un valor numerico`;    
    divError.classList.add('valor-error');
    divError.classList.add('parrafo-error');
    divError.classList.add('parrafo');
    main.insertAdjacentHTML('beforeend', divError)
  }
}


const emptyInput = () => {
  let input = doc.querySelector('#input').value;
  if(input === null || input.length === 0 || /^\s+$/.test(input)){
    divError.innerHTML =  `Debe ingresar la masa del objeto`;    
    divError.classList.add('valor-error');
    divError.classList.add('parrafo-error');
    divError.classList.add('parrafo');
  }else {
    getInput();
  }  

    main.insertAdjacentElement('afterend', divError);
}
 
btn.addEventListener('click', emptyInput);


