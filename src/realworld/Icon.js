import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        type: String,
    }
})
export default class Icon extends Vue {
    render() {
        return (
            <i class={ this.type }>假装是个Icon</i>
        );
    }
}


