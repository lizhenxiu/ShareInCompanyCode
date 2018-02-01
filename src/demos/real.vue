<style lang="scss"></style>
<template>
    <component v-bind:is="icon" />
    <textbox />
    <component v-bind:is="button" />
</template>
<script>
import Textbox from 'Textbox';
import validate from 'Validate';

export default {
    props: ["icon", "button"],
    mixins: [ validate ],
    components: {
        textbox: Textbox
    },
}

</script>
