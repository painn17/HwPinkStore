import { defineStore } from "pinia";

export const useShopingCart = defineStore("cart", () => {
  const cart = ref([]);
  const addToCart = (product) => {
    cart.value.push(product);
  };

  const removeFromCart = (index) => {
    cart.value.splice(index, 1);
    total.value -= cart.value[index].price;
    
  };
  
  const countTotal = () => {
    const total = ref(0);
    for (const product of cart.value) {
        total.value += product.price;
    }
    return total.value;
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    countTotal,
  };
});
export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);
  const links = ref([]);

  const fetchCategories = async () => {
    const response = await $fetch("https://api.escuelajs.co/api/v1/categories");
    categories.value = response;
    console.log(response, 'response');
    links.value = response.map((item) => ({
      label: item.name,
      to: `/category/${item.id}`,
    }));
  };

  const getCategoryData = (id) => {
    const tmp = categories.value.find((item) => item.id == id);
    return tmp;
  };

  const fetchProductsByCategory = async (id) => {
    const response = await $fetch(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    );
    return response;
  };
  const fetchProduct = async (id) => {
    const response = await $fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response;
  };

  return {
    categories,
    links,
    fetchCategories,
    getCategoryData,
    fetchProductsByCategory,
    fetchProduct,
  };
});
