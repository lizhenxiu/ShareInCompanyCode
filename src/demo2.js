import Component from 'vue-class-component';

@Component({
    props: {
        text: String,
    },
})
class Demo2 {

    getName() {
        return "Demo2";
    }

    render() {
        return (
            <div class="demo2">{ this.text }{ ` And my name is ${ this.getName() }` }</div>
        )
    }
}

@Component
class Demo2Extend extends Demo2 {

    // @override
    getName() {
        return Demo2Extend.options.methods.getName.call(this) + 'Extend';
        // super.getName() + 'Extend';
    }

    // @override
    render() {
        // super is not supported
        const view = Demo2Extend.options.render.call(this, this.$createElement);
        return (
            <div class="border" style={{ border: 'solid 2px red' }}>
                { view }
            </div>
        );
    }
}

// 可以改造成HOC形式吗?

export default Demo2Extend;
