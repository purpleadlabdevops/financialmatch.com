<template>
    <div>
        <component v-for="item in arr" :is="`Thanks${item}`"></component>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: ['Cal', 'Call', 'Cur', 'Main']
        }
    }
}
</script>