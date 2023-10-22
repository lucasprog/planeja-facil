<script setup lang="ts">
import { PropType, toRefs, ref} from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<string>,
        default: 'default'
    },
    nativeType:{
        type: String as PropType<string>,
        default: 'button'
    },
    content:{
        type: String as PropType<string>
    },
    route:{
        type: String as PropType<string>,
        default: null
    }
})

const emits = defineEmits(['click']);

const clicked = (e: Event) => emits('click',e);

const { type, nativeType, content, route } = toRefs(props);

</script>
<template>
    <template v-if="!route">
        <button 
            v-bind="$attrs"
            :type="nativeType" 
            class="c-button" 
            @click="clicked" 
            :class="`c-button--${type}`">
            <slot v-if="!content" name="default"></slot>
            {{ content?content:''}}
        </button>    
    </template>

    <template v-if="route">
        <router-link 
            v-bind="$attrs"
            class="c-button c-button--link" 
            :class="`c-button--${type}`"
            :to="route">
            <slot v-if="!content" name="default"></slot>
            {{ content?content:''}}
        </router-link>
    </template>

</template>
<style scoped lang="scss">

.c-button{
    @apply w-full text-white h-8 text-xs rounded-lg shadow-none flex items-center justify-center p-1;

    &--delete{
        @apply bg-red-600;
    }

    &--edit{
        @apply bg-blue-600;
    }

    &--success{
        @apply bg-[var(--plf-green-light)]
    }
}

</style>