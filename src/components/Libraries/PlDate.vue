<script setup lang="ts">
    import { ref } from 'vue';
    import { dateFormat } from '../../composables/helpers'

    const props = defineProps({
        date: {
            type: String as PropType<any>
        }
    })

    const { date } = props
    const dateToView = ref(dateFormat(date));
    console.log('dateToView',dateToView)

</script>
<template>
    <span class="c-date">
        {{  dateToView?dateToView:'' }}
    </span>
</template>