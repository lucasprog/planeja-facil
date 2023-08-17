<template>
  <div class="page-base">

    <header class="c-header">
      <div class="c-header__content">
         <h1 class="c-header__title">Planeja Fácil</h1>        
      </div>

      <nav class="c-header__nav-menu">
        <router-link class="c-header__nav-menu-link" :to="{ name: 'home'}">Home</router-link>
        <router-link class="c-header__nav-menu-link" :to="{ name: 'my-income'}">Minha Renda</router-link>
      </nav>
    
    </header>
  
    <router-view/>

  </div>
</template>

<style scoped>
.page-base{
  @apply flex flex-col w-full gap-4;
}

.page-base .list-bills{
  @apply flex flex-col w-full h-full gap-2;
}

.c-header{
  @apply flex gap-4 flex-1 items-center w-full flex-col;
}

.c-header__title{
  @apply w-full text-center;
}

.c-header__nav-menu{
  @apply flex gap-4;
}

.c-header__content{
    @apply flex gap-4 flex-1 items-center w-full;
}
</style>
