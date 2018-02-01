import Vue from 'vue';

import Search, { Search as SearchEg } from './Search.js';

new Vue({
    render(h) {
        return (
            <div>
                <Search />
                <SearchEg />
            </div>
        );
    },
}).$mount(document.querySelector('#realworld'));
