import Component from 'vue-class-component';

// 反向继承 - 渲染劫持
const CatchError = (errorMessage) => (WrapComponent) => 
    @Component({
        name: WrapComponent .options.name + 'Controller',
    })
    class NewDemo3 extends WrapComponent {
        render() {
            try {
                return WrapComponent.options.render.call(this, this.$createElement);
            } catch (e) {
                return <div style={{ color: 'red' }}>{ errorMessage }{ e.message }</div>
            }
        }
    }

@CatchError('Error')
@Component({
    props: {
        text: String,
    }
})
class Demo3 {
    render() {

        // throw new Error('an error in render');

        return (
            <div class="demo3">{ this.text }</div>
        );
    }
}

export default Demo3;
