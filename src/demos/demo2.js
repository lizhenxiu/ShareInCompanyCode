import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        text: String,
    },
})
class Demo2 extends Vue {

    name = "Demo2";

    doSomeThing() {
        return `Hello ${ this.name }`;
    }

    render() {
        return (
            <div class="demo2">{ this.text }{ ` And ${ this.doSomeThing() }` }</div>
        );
    }
}

@Component
class Demo2Extend extends Demo2 {

    // @override
    doSomeThing() {
        const superValue = Demo2.options.methods.doSomeThing.call(this);
        return `${ superValue } was extended`;
    }

    // @override
    render() {
        // super is not supported
        const view = Demo2.options.render.call(this, this.$createElement);
        return (
            <div class="border" style={{ border: 'solid 2px red' }}>
                { view }
            </div>
        );
    }
}

// 可以改造成HOC形式吗?

export { Demo2, Demo2Extend };
