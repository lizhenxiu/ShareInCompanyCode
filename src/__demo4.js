import Component from 'vue-class-component';

const properties = {
    props: {
        innerText: String,
    }
};

// 属性代理 - 操作Props
const ProxyProperties = (prefix) => (WrappedComponent) =>  

    @Component(properties)
    class NewDemo4 {
        render() {
            const newProps = {
                innerText: prefix + this.innerText,
            };

            console.info(newProps);

            return (
                <WrappedComponent { ...newProps } />
            );
        }
    }

@Component(properties)
class Demo4s {
    render() {
        return (
            <div class="demo4">{ this.innerText }</div>
        );
    }
}

export default ProxyProperties('Hahaha')(Demo4s);
