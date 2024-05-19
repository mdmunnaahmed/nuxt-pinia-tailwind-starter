<template>
  <div class="text-center pt-5">
    <div
      class="p-5 shadow-lg rounded-xl border border-gray-400 max-w-[520px] mx-auto mb-5"
    >
      <p>Last login at: {{ formattedDate(user.last_sign_in_at) }}</p>
      <p>{{ user.email }}</p>
    </div>
    <button @click="logout" class="btn bg-gray-700 hover:bg-gray-900 text-white px-5 py-2">
      logout
    </button>
  </div>
</template>

<script setup>
import { useFormattedDate } from '../../composables/useFormattedDate';

definePageMeta({
  middleware: "auth",
});
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();
const error = ref(null);
console.log(user.email);
async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
  } catch (error) {
    error.value = error.message;
  }
}

const { formattedDate } = useFormattedDate();
</script>