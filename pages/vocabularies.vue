<template>
    <NuxtLayout contentonly>
        <template #default>
            <h1 class="text-3xl my-6 flex items-center justify-between gap-2">
                CGI Vocabularies Register
                <span class="text-base">
                    <NuxtLink to="/catalogs">View the catalogues</NuxtLink>
                </span>
            </h1>
            <p>This is the static register (index) of CGI's vocabularies whose purpose is to present the persistent URIs to each of the vocabularies.</p>
            <p>For machine-readable versions of this vocabulary list, see the <NuxtLink to="/catalogs?_profile=altr-ext:alt-profile">Alternate Profiles</NuxtLink> page.</p>
        </template>
    </NuxtLayout>
</template>