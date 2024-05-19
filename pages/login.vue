<template>
  <div class="container mx-auto mt-10">
    <form @submit.prevent="signIn" class="flex flex-col gap-4 sm:w-1/3 mx-auto">
      <input
        class="border py-2 px-3"
        type="email"
        placeholder="email"
        v-model="email"
      />
      <div class="relative">
        <input
          class="border py-2 px-3"
          placeholder="password"
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
        />
        <span
          class="absolute right-3 top-[18px] cursor-pointer z-10"
          @click="togglePasswordVisibility"
          >{{ isPasswordVisible ? "hide" : "show" }}</span
        >
      </div>
      <button class="btn bg-green-600 py-2 hover:bg-green-700 font-bold text-white">Login</button>
      <small class="text-red-600 font-medium" v-if="errMsg && !succMsg">{{
        errMsg
      }}</small>
      <small class="text-green-600 font-medium" v-if="succMsg">{{
        succMsg
      }}</small>
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
const router = useRouter();

const email = ref('msdmunna77@gmail.com');
const password = ref('username');
const errMsg = ref(null);
const succMsg = ref(null);
async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    succMsg.value = "successfully logged in";
    router.push("/");
  } catch (error) {
    errMsg.value = error.message;
  }
}
</script>