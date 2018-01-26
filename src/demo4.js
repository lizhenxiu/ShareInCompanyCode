import Component from 'vue-class-component';

const properties = {
    props: {
        innerText: String,
    }
};

// 属性代理 - 操作Props
const ProxyProperties = (prefix) => (WrappedComponent) =>  
    @Component(Object.assign({}, properties))
    class NewDemo5 {
        render() {
            const newProps = {
                attrs: {
                    innerText: prefix + this.innerText,
                }
            };

            return (
                <WrappedComponent { ...newProps } />
            );
        }
    }

@ProxyProperties('Prefix is HAHA')
@Component(Object.assign({}, properties))
class Demo5 {
    render() {
        return (
            <div class="demo5">{ this.innerText }</div>
        );
    }
}

export default Demo5;
