'use strict';

var form = document.querySelector('.js-form');
var input = document.querySelector('.js-input');
var bookMarks = document.querySelector('.list');
var sourse = document.querySelector('.bookmark-tpl').innerHTML.trim();
var template = Handlebars.compile(sourse);
var urls = [];

function allUrls(mas) {
  var markup = mas.reduce(function (acc, el) {
    return acc += template(el);
  }, '');
  bookMarks.innerHTML = markup;
}

function checkValidUrl(url) {
  var pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  var result = pattern.test(url);
  var isWritted = urls.some(function (el) {
    return el.url === url;
  });

  if (result && !isWritted) {
    fetch("https://api.linkpreview.net/?key=5cd71a29bf3526610f7d14eb637f134f14713b1c85043&q=".concat(url)).then(function (resp) {
      if (resp.ok) return resp.json();
      throw new Error('Error' + resp.statusText);
    }).then(function (data) {
      urls.unshift({
        url: data.url,
        img: data.image
      }), allUrls(urls);
      set();
    }).catch(function (err) {
      return console.log('Error: ' + err);
    });
  } else if (isWritted) {
    return alert("URL already exist!");
  } else {
    return alert("Ivalid URL!");
  }
}

function set() {
  localStorage.setItem("fetchTags", JSON.stringify(urls));
}

function get() {
  var data = localStorage.getItem("fetchTags");
  var mas = JSON.parse(data);

  if (mas !== null) {
    return mas;
  }

  ;
}

function updateLocMas() {
  if (localStorage.getItem('fetchTags')) {
    var mas = JSON.parse(localStorage.getItem('fetchTags'));
    urls = mas;
  }
}

function handleDel(_ref) {
  var target = _ref.target;

  if (target.nodeName === 'BUTTON') {
    console.log(urls);
    urls = urls.filter(function (el) {
      return target.previousElementSibling.innerHTML != el.url;
    });
    allUrls(urls);
    set();
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(input.value);
  checkValidUrl(input.value);
  allUrls(urls);
  set();
});
bookMarks.addEventListener('click', handleDel);
updateLocMas();
allUrls(get());
console.log(urls);