import Component from 'vue-class-component';

const Inject = (InjectComponent) => (WrappedComponent) =>
    @Component
    class InjectController extends WrappedComponent {

        render() {
            const view = WrappedComponent.options.render.call(this, this.$createElement);
            view.children.splice(0, 0, <InjectComponent />);

            return view;
        }
    }

@Component
class Icon {
    render() {
        return (
            <i style="color: green;">假装是一个Icon</i>
        );
    }
}

@Inject(Icon)
@Component
class Demo6 {
    render() {
        return (
            <div class="demo6">
                <span>
                    Hello Demo6
                </span>
            </div>
        );
    }
}

export default Demo6;
