import Component from 'vue-class-component';

const properties = {
    props: {
        text: String,
    }
};

// 属性代理 - 操作Props
const ProxyProperties = (prefix) => (WrappedComponent) =>  
    @Component({ ...properties })
    class NewDemo4 {
        render() {
            const newProps = {
                props: {
                    text: prefix + this.text,
                }
            };

            return (
                <WrappedComponent { ...newProps } />
            );
        }
    }

@ProxyProperties('Prefix is HAHA ')
@Component({ ...properties })
class Demo4 {
    render() {
        return (
            <div class="demo4">{ this.text }</div>
        );
    }
}

export default Demo4;
