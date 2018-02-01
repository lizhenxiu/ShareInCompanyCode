import Component from 'vue-class-component';

const properties  = {
    props: {
        name: String,
        click: Function,
    }
};

// 属性代理 - 事件劫持
const ProxyClick = (WrappedComponent) => 
    @Component({ ...properties })
    class NewDemo5 {
        handleClick(...args) {
            alert('before handle')

            const { click } = this;
            click && click(...args);

            alert('after handle')
        }

        render() {
            const oldProps = this.$props;
            const newProps = {
                props: {
                    ...oldProps,
                    click: this.handleClick,
                }
            };

            return <WrappedComponent { ...newProps } />;
        }
    }

@ProxyClick
@Component({ ...properties })
class Demo5 {
    render() {
        return (
            <div class="demo5" onClick={ this.click }>Click { this.name }</div>
        )
    }
}

export default Demo5;
