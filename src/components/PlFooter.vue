<script setup lang="ts">

import { ref } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: ''
    }
})

const { type: typeFooter } = props;

const __class = ref('');

switch(typeFooter){
    case 'fixed':
        __class.value = 'c-footer--fixed';
        break;

    default:
        __class.value = 'c-footer--default';
    break
}

</script>
<template>
    <div class="c-footer" :class="__class">
        <slot name="default"></slot>
    </div>
</template>
<style scoped>
    .c-footer{
        @apply w-full bg-gray-500 p-2;
    }
    .c-footer--fixed{
        @apply fixed bottom-0 left-0;
    }
</style>