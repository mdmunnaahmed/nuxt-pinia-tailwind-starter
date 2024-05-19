<template>
  <div class="container mx-auto mt-10">
    <Auth />
    <form @submit.prevent="signUp" class="flex flex-col gap-4 sm:w-1/3 mx-auto">
      <input class="border py-2 px-3" type="email" placeholder="email" v-model="email" />
      <div class="relative">
        <input class="border py-2 px-3" placeholder="password" v-model="password" :type="isPasswordVisible ? 'text' : 'password'" />
        <span class="absolute right-3 top-[18px] cursor-pointer z-10" @click="togglePasswordVisibility">{{ isPasswordVisible ? "hide" : "show" }}</span>
      </div>
      <button class="btn bg-green-600 py-2 hover:bg-green-700 font-bold text-white">Register</button>
      <small class="text-red-600 font-medium" v-if="errMsg && !succMsg">{{ errMsg }}</small>
      <small class="text-green-600 font-medium" v-if="succMsg">{{ succMsg }}</small>
    </form>
  </div>
</template>

<script setup>
// Create a reactive variable to track the password visibility state
const isPasswordVisible = ref(false);

// Method to toggle the password visibility
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

definePageMeta({
  middleware: "auth",
});
const client = useSupabaseClient();
const email = ref("");
const password = ref(null);
const errMsg = ref(null);
const succMsg = ref(null);
async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    succMsg.value = "Please check your mail to confirm signup process";
  } catch (error) {
    errMsg.value = error.message;
    console.log(error);
  }
}
</script>

<style lang="scss" scoped></style>
