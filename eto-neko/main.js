'use strict';
const zodiac = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const names = ['ねずみ','うし','とら','うさぎ','たつ','へび','うま','ひつじ','さる','とり','いぬ','いのしし'];
const list = document.getElementById('zodiac-list');
zodiac.forEach((sign,index) => {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.src = `assets/zodiac_${String(index).padStart(2,'0')}.png`;
  image.alt = names[index]; image.width = 512; image.height = 512; image.loading = 'lazy';
  const caption = document.createElement('figcaption'); caption.textContent = sign;
  figure.append(image,caption); list.append(figure);
});
