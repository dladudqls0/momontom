import {Clock} from './js/clock.js';
import {Greetings} from './js/greetings.js';
import {ToDo} from './js/todo.js';
import {Background} from './js/bg.js'

//img개수
const IMG_NUMBER=8;
//for clock
const clockbox = document.querySelector('.js-clock');
//for greetings
const form = document.querySelector('.js-form'),
    greetings = document.querySelector('.js-greetings');
//for todos
const toDoForm = document.querySelector('.js-toDoForm'),
    toDoList = document.querySelector('.js-toDoList');

class App{
    constructor(){
        window.addEventListener('resize',this.resize.bind(this));
        this.resize();
        new Background(IMG_NUMBER);
        new Clock(clockbox);
        new Greetings(form, greetings);
        new ToDo(toDoForm,toDoList);
    }
    resize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        const html = document.querySelector('html');
        if(this.width<600){
            html.classList.add('mobileFont');
        }
        else{
            html.classList.remove('mobileFont');
        }
    }
}

window.onload = () => { 
    new App();
};

