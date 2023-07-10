<script setup>
  import { ref, defineProps, toRefs } from 'vue';

  const props = defineProps(['show'])

  const { show } = toRefs(props);

  const form = ref({
    name: null,
    price: 0,
    due_date: null,
    description: null
  })

  const save = () => {

  }
</script>
<template>
  <div class="c-form-modal" :class="{ 'c-form-modal--show': show }">
    <form @submit.prevent="save()">
      <input type="text" name="name" v-model="form.name" />
      <input type="text" name="price" v-model="form.price" />
      <input type="date" name="due_date" v-model="form.due_date" />
      <textarea name="description" v-model="form.description" ></textarea>
    </form>
  </div>  
</template>