'use strict';

const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const bookMarks = document.querySelector('.list');

const sourse = document.querySelector('.bookmark-tpl').innerHTML.trim();
const template = Handlebars.compile(sourse);

let urls = [];

function allUrls(mas) {
  const markup = mas.reduce((acc, el) => (acc += template(el)), '');
  bookMarks.innerHTML =  markup;
}

function checkValidUrl(url) {
  const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  const result = pattern.test(url);
  const isWritted = urls.some( el => el.url === url);
  if(result && !isWritted) {
    
    fetch(`http://api.linkpreview.net/?key=5d186a9733a915fec640a1bd24b0c4ff1f9ab2ebd6493&q=${url}`)
    .then(resp => {
      if(resp.ok) return resp.json();

      throw new Error('Error' + resp.statusText);
    })
    .then(data => 
      { urls.unshift({url: data.url, img: data.image}),
      allUrls(urls);
      set();
    })
    .catch(err => console.log('Error: ' + err));

  }else if (isWritted) {
    return alert(`URL already exist!`);
  }else{
    return alert(`Ivalid URL!`);
  }
}

function set() {
  localStorage.setItem("fetchTags", JSON.stringify(urls));
}

function get() {
  let data = localStorage.getItem("fetchTags");
  const mas = JSON.parse(data);
  if(mas !== null) {
    return mas;
  };
}

function updateLocMas() {
  if(localStorage.getItem('fetchTags')) {
    const mas = JSON.parse(localStorage.getItem('fetchTags'));
    urls = mas;
  }
}

function handleDel({target}) {
  if(target.nodeName === 'BUTTON') {
    console.log(urls)
      urls = urls.filter(el => { return target.previousElementSibling.innerHTML != el.url});
      allUrls(urls);
      set();
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value)
  checkValidUrl(input.value);
  allUrls(urls);
  set();
});

bookMarks.addEventListener('click', handleDel);

updateLocMas()
allUrls(get());
console.log(urls)

