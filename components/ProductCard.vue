<template>
  <div
    
  >
    <NuxtLink
      :to="`/product/${product.id}`"
      :key="product.id"
      class="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all"
    >
      <NuxtImg
        :src="src"
        :alt="product.title"
        class="w-full h-60 object-cover"
      />
      <h2 class="p-4 text-lg text-center font-semibold">{{ product.title }}</h2>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["product"]);

const src = props.product.images[0].replace('\["',"").replace('"\]',"").replace('"',"")
// const getSlugFromName = (name) => name.toLowerCase().replace(" ", "-");
</script>

<style></style>
