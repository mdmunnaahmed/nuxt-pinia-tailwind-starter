<template>
  <div class="container mx-auto mt-10">
    <form @submit.prevent="signIn" class="flex flex-col gap-4 sm:w-1/3 mx-auto">
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
      <button class="btn bg-green-600 py-2 hover:bg-green-700">Login</button>
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
const router = useRouter();
console.log(client);

const email = ref(null);
const password = ref(null);
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

<style lang="scss" scoped>
</style>