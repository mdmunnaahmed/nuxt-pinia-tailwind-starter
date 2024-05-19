<template>
  <h1 class="text-center text-xl mt-5 font-bold">Home Page</h1>
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
