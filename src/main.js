import Vue from 'vue';
import Demo0 from './demo0.js';
import Demo1 from './demo1.js';
import Demo2 from './demo2.js';
import Demo3 from './demo3.js';

new Vue({
    render(h) {
        return <Demo0 />;
    },
}).$mount(document.querySelector('#demo0'));

new Vue({
    render(h) {
        return <Demo1 />;
    },
}).$mount(document.querySelector('#demo1'));

new Vue({
    render(h) {
        return <Demo2 innerText={'Yes, I am Demo2 Text'} />;
    },
}).$mount(document.querySelector('#demo2'));

new Vue({
    render(h) {
        return <Demo3 innerText={'Hey demo3, What is HOC?'} />;
    },
}).$mount(document.querySelector('#demo3'));