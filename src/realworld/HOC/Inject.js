import Vue from 'vue';
import Component from 'vue-class-component';

// 高阶组件 用于向一个组件注入其他组件
const Inject = (
    InjectedIcon, 
    iconProps, 
    InjectedButon, 
    buttonProps) => (WrappedComponent) =>
    @Component
    class InjectController extends WrappedComponent {

        render() {
            const vnode = WrappedComponent
                .options
                .render
                .call(this, this.$createElement);
            const children = vnode.children;

            vnode
                .children
                .splice(0, 0, <InjectedIcon { ...{ props: iconProps } } />);
            vnode
                .children
                .push(<InjectedButon { ...{ props: buttonProps } } />);

            return vnode;
        }
    }

export default Inject;
