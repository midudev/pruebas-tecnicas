<script setup lang="ts">
defineProps<{
    item: {
        name: string;
        icon: string | null;
        image: string | null;
        href: string | null;
        description: string | null;
        example: string | null;
    };
}>();
</script>
<template>
    <div
        class="bg-slate-700 rounded-lg p-6 hover:bg-gradient-to-r hover:from-slate-700 hover:via-slate-700 hover:to-green-500/30 h-full flex place-content-between"
    >
        <div>
            <div class="flex gap-4">
                <Icon v-if="item.icon" :name="item.icon" class="w-10 h-10" />
                <NuxtImg
                    v-if="item.image"
                    :src="item.image"
                    class="h-10 w-10"
                />
                <div>{{ item.name }}</div>
            </div>
            <p class="text-base mt-2 text-slate-300">
                {{ $t(String(item.description)) }}
            </p>
        </div>
        <div class="text-sm flex text-end gap-4 self-end text-slate-300">
            <NuxtLink
                v-if="item.example"
                :to="item.example"
                class="hover:underline hover:text-slate-100"
            >
                Example
                <Icon name="heroicons:chevron-right-20-solid" class="w-4 h-4" />
            </NuxtLink>
            <a
                v-if="item.href"
                :href="item.href"
                target="_blank"
                class="hover:underline hover:text-slate-100"
            >
                Docs
                <Icon name="heroicons:chevron-right-20-solid" class="w-4 h-4" />
            </a>
        </div>
    </div>
</template>
