import Vue from 'vue';
import Component from 'vue-class-component';

const Border = (color) => (WrappedComponent) => 
    @Component
    class BorderController extends WrappedComponent {
        render() {
            const view = WrappedComponent.options.render.call(this, this.$createElement);
            return (
                <div style={{ border: `solid 5px ${color}` }}>{ view }</div>
            );
        }
    }

export default Border;
