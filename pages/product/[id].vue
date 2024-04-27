<template>
    <div
      
    >
      <div class="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all">
        
        <UContainer class="p-4">
            <NuxtLink
            :to="`/category/${product.category.id}`"
            ><div class="flex pb-4 cursor-pointer text-base"> Back</div></NuxtLink>
            <div class="flex flex-col ">
                
                <div class="flex flex-row">
                    <div class="w-72"><img :src="src" alt="" srcset=""></div>
                    <div class="flex flex-col px-4"> 
                        <span class="text-slate-400 opacity-35">id: {{ product.id }}</span>
                        <span class="text-3xl capitalize font-bold">{{ product.title }}</span>
                        <span class="text-lg">Price: {{ product.price }}$</span>
                        <span><UButton :icon="`i-heroicons-shopping-cart-16-solid`" class="z-0" @click="addToCart(product)" 
    /></span>
                    </div>
                </div>
            </div>
        </UContainer>
        
        <h2 class="p-4 text-lg text-center font-semibold"></h2>
      </div>
    </div>
  </template>
  
  <script setup>
//   const props = defineProps(["product"]);
import { useRoute } from 'vue-router';
  const cart = useShopingCart()
  const { addToCart } = cart;
const route = useRoute();
const product = ref([])
const store = useCategoriesStore();
const { fetchProduct } = store;
const { data } = await useAsyncData("products", () =>
fetchProduct(route.params.id)
);
if (data) {
    product.value = data.value;
    console.log(route.params.id, data.value);
}


const src = product.value.images[0].replace('\["',"").replace('"\]',"").replace('"',"")
  // const getSlugFromName = (name) => name.toLowerCase().replace(" ", "-");
  </script>
  
  <style></style>
  