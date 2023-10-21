<script setup lang="ts">
    import FilterSearch from './Search.vue';
    import FilterCalendar from './Calendar.vue'
</script>
<template>
    <div class="c-filter-form">
        <FilterCalendar/>
        <FilterSearch /> 
    </div>
          
</template>
<style scoped lang="scss">
    .c-filter-form{
        @apply flex flex-col w-full gap-2 pt-4 pb-4;
    }
</style>