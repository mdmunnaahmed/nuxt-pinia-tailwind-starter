<template>
  <div>
    <!-- {{ user.email }} -->
    <button @click="logout" class="btn bg-gray-800 text-white px-5 py-2">logout</button>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();
const error = ref(null);
async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
  } catch (error) {
    error.value = error.message;
  }
}
</script>

<style lang="scss" scoped>
</style>