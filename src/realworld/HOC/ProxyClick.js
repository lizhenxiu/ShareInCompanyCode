import Vue from 'vue';
import Component from 'vue-class-component';

// 高阶组件 用于代理点击事件
const ProxyClick = (beforeHandler, afterHandler) => (WrappedComponent) => 
    @Component({ props: { ...WrappedComponent.options.props } })
    class ProxyClickController {

        handleClick(...args) {
            beforeHandler && beforeHandler(...args);

            const { click } = this;
            click && click(...args);

            afterHandler && afterHandler(...args);
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

export default ProxyClick;
