<script setup lang="ts">
import { toRefs } from 'vue';


    const props = defineProps({
        type: {
            type: String as PropType<string>,
            default: 'default'
        },
        nativeType:{
            type: String as PropType<string>,
            default: 'button'
        }
    })
    const emits = defineEmits(['click']);

    const clicked = (e: Event) => {
        emits('click',e)
    }

    const { type, nativeType } = toRefs(props);

</script>
<template>
    <button :type="nativeType" class="c-button" @click="clicked" :class="`c-button--${type}`">
        <slot name="default"></slot>
    </button>    
</template>
<style scoped>


.c-button{
    @apply text-white h-8 text-xs rounded-full shadow-none text-xs pl-4 pr-4 pt-1 pb-1;
  }

  .c-button--delete{
    @apply bg-red-600;
  }

  .c-button--edit{
    @apply bg-blue-600;
  }
</style>