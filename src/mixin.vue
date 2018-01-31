<style lang="sass">
</style>
<template>
    <div class="mixin" @click="sayHello">Hello Mixins</div>
</template>
<script>
const someFeature = {
    methods: {
        sayHello() {
            alert('Yes, mixin successfully');
        },
    },
    mounted() {
        console.info('mounted in mixins')
    }
};

export default {
    name: 'mixin',
    mixins: [ someFeature ],
    mounted() {
        console.info('mounted in component self');
    }
}
</script>

