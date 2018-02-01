import Vue from 'vue';
import Component from 'vue-class-component';

import Inject from './HOC/Inject.js';
import ProxyClick from './HOC/ProxyClick.js';
import Border from './HOC/Border.js';
import CatchError from './HOC/CatchError.js';

import TextBox from './TextBox.js';
import Button from './Button.js';
import Icon from './Icon.js';

const SearchButton = ProxyClick(
    e => alert('before'), 
    e => alert('after')
)(Button);

export default Inject(
    Icon,
    {
        type: 'search',
    },
    SearchButton,
    {
        text: 'Search',
        click() { alert('searching') },
    },
)(TextBox);


@ProxyClick(
    e => alert('before'), 
    e => alert('after')
)
@Component({
    props: { ...Button.options.props }
})
class NewSearchButton extends Button {
}

const compose = (...fn) => fn.reduce((a, b) => (...args) => a(b(...args)));

const Borders = compose(Border('red'), Border('yellow'), Border('blue'));

@CatchError('发现错误')
@Borders
@Inject(
    Icon,
    {
        type: 'search',
    },
    NewSearchButton,
    {
        text: 'Search',
        click() { alert('searching') },
    },
)
@Component({
    props: {
        placehodler: String,
    }
})
export class Search extends TextBox {
    render() {
        return TextBox.options.render.call(this, this.$createElement);
    }
}
