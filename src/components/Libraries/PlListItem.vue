<template>
  <div class="c-list-item">
   <slot name="default"></slot>
  </div>
</template>
<style scoped>
  .c-list-item{
    @apply flex justify-between items-center gap-4 w-full min-h-[3rem] bg-gray-600 rounded-lg pl-4 pt-4 pb-4 pr-2 hover:bg-gray-500 shadow-sm;
  }

  .c-list-item__col{
    @apply flex flex-col text-gray-300;
  }

  .c-list-item__due-date{
    @apply text-xs text-gray-900;
  }

  .c-list-item__block-end{
    @apply flex items-center justify-center gap-4;
  }

  .c-list-item__group-buttons{
    @apply flex items-center justify-center gap-2;
  }

  .c-list-item__button{
    @apply text-white h-8 text-xs rounded-full shadow-none text-xs pl-4 pr-4 pt-1 pb-1;
  }

  .c-list-item__button--delete{
    @apply bg-red-600;
  }

  .c-list-item__button--edit{
    @apply bg-blue-600;
  }
</style>