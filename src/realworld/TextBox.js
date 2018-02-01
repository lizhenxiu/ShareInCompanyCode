import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        value: String
    }
})
export default class TextBox extends Vue {
    render() {
        return (
            <div class="textbox">
                <input type="text" value={ this.value } />
            </div>
        );
    }
}

