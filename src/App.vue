<script setup lang="ts">

  import PlButton from './components/Libraries/PlButton.vue'

  import { useBillsStore } from './stores/useBillsStore';

  const billsStore = useBillsStore();

  const toggleBillShowDialog = () => {
    billsStore.openDialog();
    billsStore.setTypeDialog('register');
  }

</script>
<template>
  <div class="page-base">

    <header class="c-header">
      <div class="c-header__content">
         <div class="c-header__logo">
            <img class="c-header__logo-img" src="/img/plf-logo.png" alt="Logo - Planeja Fácil" />
         </div>        
      </div>
<!-- 
      <nav class="c-header__nav-menu">
        <router-link class="c-header__nav-menu-link" :to="{ name: 'home'}">Home</router-link>
        <router-link class="c-header__nav-menu-link" :to="{ name: 'my-income'}">Minha Renda</router-link>
      </nav> -->
    
    </header>

    <div class="page-base__content">
      <router-view/>
    </div>
    
    <nav class="c-nav-control c-nav-control--floating">
      <ul class="c-nav-control__inner">
          <li class="c-nav-control__item c-nav-control__item--new-recipe">
              <pl-button 
                type="success" 
                @click="toggleBillShowDialog()"
                class="c-nav-control__button c-nav-control__new-recipe">
                Nova Renda
              </pl-button>
          </li>

          <li class="c-nav-control__item c-nav-control__item--new-bill">
              <pl-button 
                type="delete" 
                @click="toggleBillShowDialog()"
                class="c-nav-control__button c-nav-control__new-bill">
                Nova Conta
              </pl-button>
          </li>

          <li class="c-nav-control__item c-nav-control__item--my-recipes">
              <pl-button 
                :route="{ name: 'my-income'}" 
                type="edit"
                class="c-nav-control__button c-nav-control__my-recipes">
                Minha Renda
              </pl-button>
          </li>

      </ul>

     </nav>

  </div>
</template>

<style scoped lang="scss">
.page-base{
  @apply flex flex-col w-full gap-4;
  .list-bills{
    @apply flex flex-col w-full h-full gap-2;
  }

  &__content{
    @apply max-w-5xl m-auto w-full;
  }

}

.c-nav-control{
  &--floating{
    @apply fixed right-0 bottom-1/2;
  }

  &__inner{
    @apply mr-0 flex flex-col gap-1;
  }

  &__item{
    @apply rounded-l-lg pt-1 pl-2 pr-8 pb-1 transition-all translate-x-2 hover:translate-x-0;

    &--new-recipe{
      @apply bg-[var(--plf-green-light)]
    }

    &--new-bill{
        @apply bg-red-600;
    }

    &--my-recipes{
        @apply bg-blue-600;
    }
  }
}


.c-header{
  @apply flex gap-4 flex-1 items-center w-full flex-col;

  &__logo{
    @apply w-full flex items-center justify-center pt-8;

    &-img{
      @apply max-w-[100px];
    }
  }

  &__nav-menu{
    @apply flex gap-4;
  }

  &__content{
      @apply flex items-center w-full;
  }
  
}



</style>
