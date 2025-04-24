<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
</script>

<template>
    <div class="relative">
        <nav class="main-nav container font-extralight mx-auto px-4 py-4 hidden md:flex md:flex-row justify-center gap-8 text-lg">
            <NuxtLink
                v-for="{ label, url } in appConfig.menu.filter(item => item.active !== false)"
                :to="url"
                :class="`border-b-[3px] hover:border-primary transition-all ${(url === '/' && route.path === '/') || (url !== '/' && route.path.startsWith(url)) ? 'text-primary border-primary' : 'border-transparent'}`"
            >{{ label }}</NuxtLink>
        </nav>
    </div>
</template>
