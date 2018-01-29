import Component from 'vue-class-component';

// 反向继承 - 渲染劫持
const CatchError = (errorMessage) => (WrapComponent) => 
    @Component
    class CatchError extends WrapComponent {
        render() {
            try {
                return WrapComponent.options.render.call(this, this.$createElement);
            } catch (e) {
                return <div style={{ color: 'red' }}>{ errorMessage }: { e.message }</div>
            }
        }
    }

const Border = (color) => (WrapComponent) => 
    @Component
    class BorderDemo3 extends WrapComponent {
        render() {
            const view = WrapComponent.options.render.call(this, this.$createElement);
            return (
                <div style={{ border: `solid 5px ${color}` }}>{ view }</div>
            );
        }
    }

@CatchError('Error')
@Border('blue')
@Border('pink')
@Component({
    props: {
        text: String,
    }
})
class Demo3 {
    render() {

         throw new Error('an error in render');

        return (
            <div class="demo3">{ this.text }</div>
        );
    }
}

export default Demo3;
