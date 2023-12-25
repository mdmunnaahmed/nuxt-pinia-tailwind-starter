<template>
  <div class="container mx-auto mt-10 mb-10">
    <h2 class="hidden md:block">Home Pgae</h2>
    {{ myorder }}
    <button class="bg-red-500" @click="fetchOrders">Insert</button>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const myorder = ref(null);
const fetchOrders = async () => {
  try {
    const { data: order, error } = await supabase.from("users").insert({
      name: "manna",
    });
    if (error) {
      console.log(error.code);
    }
  } catch (error) {
    console.log(error.message);
  }
};
</script>
