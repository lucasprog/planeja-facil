<script setup lang="ts">
    import { toRefs } from 'vue';

    const props = defineProps({
        amount : {
            type: Number as PropType<number>,
            required: 0
        },
        formated: {
            type: Boolean as PropType<Boolean>,
            default: true
        }
    })

    const { amount, formated } = toRefs(props)
</script>
<template>
    <div class="c-amount">
        {{   formated ? parseFloat(amount)
            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2}):amount 
        }}
    </div>

</template>