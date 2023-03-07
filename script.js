'use strict';

// Пример 1

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
// let elems = document.getElementsByTagName('input');
// let text = document.querySelector('#test')
// for (let i = 0; i < elems.length; i++){
//     elems[i].onblur = funcValue;
// }
// function funcValue(event){
//     text.innerHTML = event.target.value
// }

// Пример 2
// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.
// let elems = document.getElementsByTagName('input');
// for (let i = 0; i < elems.length; i++){
//     elems[i].addEventListener('click', fnc)
// }
// function fnc(event){
//     alert(event.target.value)
//     event.target.removeEventListener('click', fnc)
// }

// Пример 3
// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
// let elems = document.querySelectorAll('p')
// for(let i = 0; i < elems.length; i++){
//     elems[i].addEventListener('click', fnc)
// }

// function fnc(event){
//     let val = +event.target.textContent
//     let result = Math.pow(val, val)
//     event.target.innerHTML = result
//     event.target.removeEventListener('click', fnc)
// }

// Пример 4
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

// let elems = document.querySelectorAll('input');
// for(let i = 0; i < elems.length; i++){
//         elems[i].addEventListener('blur', fnc)
//     }
// function fnc(event){
//     let a = event.target.value.length
//     let b = event.target.dataset.length
//     if(a == b){
//         event.target.style.borderColor = 'green'
//     } else {
//         event.target.style.borderColor = 'red'
//     }
// }