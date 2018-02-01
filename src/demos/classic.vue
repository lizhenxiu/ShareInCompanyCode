<style lang="sass">
</style>
<template>
    <div class="classic">Hello Classic {{ text }}</div>
</template>
<script>
export default {
    name: 'classic',
    props: {
        text: String,
    }
}
</script>
