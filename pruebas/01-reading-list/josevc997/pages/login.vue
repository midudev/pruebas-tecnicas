<script setup lang="ts">
const user = reactive({ username: "", password: "" });
const { status, signIn, signOut } = useAuth();
const submitHandler = (e: any) => {
    e.preventDefault();
    signIn(user, { redirect: false });
};
</script>
<template>
    <div class="max-w-xl mx-auto h-screen grid items-center">
        <div class="bg-slate-700 p-6 rounded-xl">
            <form
                class="grid grid-cols-1 gap-10"
                @submit.prevent="submitHandler"
                method="post"
            >
                <h1 class="text-center mt-1">{{ status }}</h1>
                <div class="space-y-1 text-lg">
                    <label for="username">username:</label>
                    <input
                        type="text"
                        v-model="user.username"
                        class="w-full mt-1 rounded px-2 pb-1 text-slate-700"
                        placeholder="fokillq"
                        required
                    />
                </div>
                <div class="space-y-1 text-lg">
                    <label for="password">password:</label>
                    <input
                        type="password"
                        v-model="user.password"
                        class="w-full mt-1 rounded px-2 pb-1 text-slate-700"
                        placeholder="xZnWSWnqH"
                        required
                    />
                </div>
                <div class="text-lg">
                    <button
                        v-if="status === 'unauthenticated'"
                        class="w-full bg-green-400 hover:bg-green-500 rounded-lg px-2 py-1 text-green-50"
                        type="submit"
                    >
                        Sign in
                    </button>
                    <button
                        v-else
                        @click="signOut({ redirect: false })"
                        class="w-full bg-red-400 hover:bg-red-500 rounded-lg px-2 py-1"
                    >
                        Sign out
                    </button>
                    <NuxtLink to="/">
                        <button
                            class="w-full border border-slate-400 hover:bg-slate-400 rounded-lg px-2 py-1 mt-4"
                        >
                            Back
                        </button>
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>
