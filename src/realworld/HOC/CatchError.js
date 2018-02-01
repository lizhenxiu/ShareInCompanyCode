import Vue from 'vue';
import Component from 'vue-class-component';

const CatchError = (errorMessage) => (WrappedComponent) => 
    @Component
    class CatchError extends WrappedComponent {
        render() {
            try {
                return WrappedComponent.options.render.call(this, this.$createElement);
            } catch (e) {
                return (
                    <div style={{ color: 'red' }}>
                        { errorMessage }: { e.message }
                    </div>
                );
            }
        }
    }

export default CatchError;
