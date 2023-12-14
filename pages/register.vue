<template>
  <div class="container mx-auto mt-10">
    <form @submit.prevent="signUp" class="flex flex-col gap-4 sm:w-1/3 mx-auto">
      <input
        class="border py-2 px-3"
        type="email"
        placeholder="email"
        v-model="email"
      />
      <input
        class="border py-2 px-3"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <button
        class="btn bg-green-600 py-2 hover:bg-green-700 font-bold text-white"
      >
        Register
      </button>
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
    console.log(data);
    if (error) throw error;
    succMsg.value = "Please check your mail to confirm signup process";
  } catch (error) {
    errMsg.value = error.message;
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
</style>