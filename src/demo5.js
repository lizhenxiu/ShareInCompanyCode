import Component from 'vue-class-component';

const properties  = {
    props: {
        click: Function
    }
}

// 属性代理 - 事件劫持
const ClickHandler = (WrappedComponent: VueComponent) => 
    @Component(Object.assign({}, properties))
    class NewDemo4 {
        handleClick(...args) {
            alert('before handle')
            const { click } = this;
            click && click(...args);
            alert('after handle')
        }

        render() {
            const newProps = {
                props: {
                    click: this.handleClick,
                }
            };

            return <WrappedComponent { ...newProps }/>;
        }
    }

@ClickHandler
@Component(Object.assign({}, properties))
class Demo4 {
    render() {
        return (
            <div class="class4" onClick={ this.click }>Click Me</div>
        )
    }
}

export default Demo4;
