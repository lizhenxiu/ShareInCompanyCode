import Vue from 'vue';

import Classic from './classic.vue';
import Mixin from './mixin.vue';
import Demo0 from './demo0.js';
import Demo1 from './demo1.js';
import { Demo2, Demo2Extend } from './demo2.js';
import Demo3 from './demo3.js';
import Demo4 from './demo4.js';
import Demo5 from './demo5.js';

new Vue({
    template: '<classic text="Text Content Props" />',
    components: {
        classic: Classic,
    },
}).$mount(document.querySelector('#classic'));

new Vue({
    template: '<mixin />',
    components: {
        mixin: Mixin,
    },
}).$mount(document.querySelector('#mixin'));

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
        return (
            <div>
                <Demo2 text={'Yes, I am Demo2 Text'} />
                <Demo2Extend text="Yes, I am Demo2 Text" />
            </div>
        );
    },
}).$mount(document.querySelector('#demo2'));

new Vue({
    render(h) {
        return <Demo3 text={'Hey demo3, What is HOC?'} />;
    },
}).$mount(document.querySelector('#demo3'));

new Vue({
    render(h) {
        return <Demo4 text={'Operate Props'} />;
    },
}).$mount(document.querySelector('#demo4'));

const name = 'Me';
new Vue({
    render(h) {
        return <Demo5 click={() => alert('Handle Event')} name={name} />;
    },
}).$mount(document.querySelector('#demo5'));
