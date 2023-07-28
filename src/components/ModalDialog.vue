<script setup lang="ts">

    import { toRefs,watch } from 'vue'

    const emit = defineEmits<{
        (e: 'open'): void,
        (e: 'close'): void,
    }>()

    const props = defineProps({
        show: {
            type: Boolean,
            default: false
        }
    })

    const { show:showModal} = toRefs(props)

    const close = () =>{
        emit('close');
    }

    watch(showModal,(newValueModal) => {
        if(newValueModal){
            emit('open')
        }  
    })


</script>
<template>
    <div class="c-modal-dialog" :class="{ 'hidden': !showModal, 'flex': showModal }">
    
        <div class="c-modal-dialog__window">
            <div class="c-modal-dialog__header">
                <slot name="header"/>
            </div>
            <div class="c-modal-dialog__body">
                <slot name="body"/>
            </div>
            <div class="c-modal-dialog__footer">
                <slot name="footer"/>
            </div>
        </div>

        <div class="c-modal-dialog__back" @click="close()"></div>
    </div>
</template>
<style scoped>

    .c-modal-dialog{
        @apply fixed top-0 w-full h-screen items-center justify-center left-0;   
    }

    .c-modal-dialog__window{
        @apply bg-white p-4 rounded-3xl absolute z-20 h-[50vh] min-w-[50vw] flex flex-col justify-between items-center;   
    }

    .c-modal-dialog__back{
        @apply absolute top-0 left-0 w-full h-screen bg-black opacity-50 cursor-pointer z-10;
    }

    .c-modal-dialog__footer{
        @apply flex gap-2;
    }

</style>