<template>
  <NuxtLink to="/" class="flex gap-1 items-end">
    <UIcon
      name="i-heroicons-shopping-bag-20-solid"
      class="h-10 w-10 text-primary-500"
    />
    <div class="text-2xl font-black hidden md:flex">
      <span class="text-primary-500">PINK</span>
      <span class="text-gray-700 dark:text-gray-100">STORE</span>
    </div>
  </NuxtLink>
  <div class="relative w-full">
    <span>
        <UButton :icon="`i-heroicons-shopping-cart-16-solid`" @click="openCart" />
      </span>
      <!-- Модальное окно с товарами -->
      <div v-if="isCartOpen" @close="openCart" class="absolute bg-gray-600 p-4 rounded-xl my-4 ">
        <h2 class="py-2 text-xl font-bold w-full">Shopping Cart</h2>
        <ul>
          <li v-for="(product, index) in cart "  :key="index" class="flex flex-row items-center gap-3 py-2 w-full">
            <div class="capitalize">{{ product.title }}</div>
            <div>{{ product.price}}$</div>
            <UButton :icon="`i-heroicons-minus-16-solid`" @click="removeFromCart(index)" />
          </li>
        </ul>
        <div class="flex flex-col gap-2 justify-center" v-if="total>0">
          <span  >Total: {{ total }}$</span>
          <UButton :icon="`i-heroicons-clipboard-document-check-16-solid`" class="w-fit"/>
        </div>
      </div>
  </div>
</template>

<script  setup>
const UserCart = useShopingCart()
let isCartOpen = ref(false)
const { countTotal, cart,  removeFromCart } = UserCart;
const total = ref(0)
const openCart = () => {
  total.value = countTotal()
  isCartOpen.value = !isCartOpen.value;  
    };
</script>

<style></style>
