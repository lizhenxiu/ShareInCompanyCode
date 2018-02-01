import Vue from 'vue';
import Component from 'vue-class-component';

const noop = a => a;

@Component({
    props: {
        text: String,
        click: Function,
    }
})
export default class Button extends Vue {
    render() {
        return (
            <button onClick={ this.click || noop }>{ this.text }</button>
        );
    }
}

