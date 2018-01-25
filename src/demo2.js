import Component from 'vue-class-component';

@Component({
    props: {
        innerText: String,
    },
})
class Demo2 {

    getName() {
        return "Demo2";
    }

    render() {
        return (
            <div class="demo2">{ this.innerText }</div>
        )
    }
}

@Component({
    props: {
        name: String,
    }
})
class Demo2Extend extends Demo2 {

    // @override
    getName() {
        return Demo2Extend.options.methods.getName.call(this) + 'Extend';
        // super.getName() + 'Extend';
    }

    // @override
    render() {
        // super is not supported
        const vnode = Demo2Extend.options.render.call(this, this.$createElement);

        vnode.data.class += '-extend';

        vnode.children.push(<div>Demo2Extend render content: { this.getName() }</div>);

        return vnode;
    }
}

export default Demo2Extend;
