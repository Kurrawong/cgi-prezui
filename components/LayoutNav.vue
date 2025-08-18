<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

function isActive(url: string): boolean {
    if (url === "/") {
        return route.path === "/";
    } else {
        if (url === "/vocab") {
            return route.path.startsWith(url) || route.path.startsWith("/object") || route.path.startsWith("/catalogs");
        } else {
            return route.path.startsWith(url);
        }
    }
}
</script>

<template>
    <div class="relative">
        <nav class="main-nav container font-extralight mx-auto px-4 py-4 flex flex-row justify-center gap-8">
            <NuxtLink
                v-for="{ label, url } in appConfig.menu.filter(item => item.active !== false)"
                :to="url"
                :class="`border-b-[3px] hover:border-primary transition-all ${isActive(url) ? 'text-primary border-primary' : 'border-transparent'}`"
            >{{ label }}</NuxtLink>
        </nav>
    </div>
</template>
