export default defineAppConfig({
    menu: () => [
        { "label": "Home", "url": "/", "active": true },
        { "label": "Vocabularies", "url": "/vocabularies", "active": true },
        { "label": "Search", "url": "/search", "active": true },
        { "label": "SPARQL", "url": "/sparql", "active": false },
        { "label": "Profiles", "url": "/profiles", "active": true },
        { "label": "About", "url": "/about", "active": true },
        { "label": "API Documentation", "url": "/docs", "active": false },
    ]
});

declare module '@nuxt/schema' {
    interface AppConfigInput {
        menu?: (() => Array<{ label: string, url: string, active: boolean }>) | Array<{ label: string, url: string, active: boolean }>,
        nameSubstitutions?: Record<string, string>,
        breadcrumbPrepend?: Array<{ label: string, url: string }>,
        utilsMenu?: Array<{ label: string, url: string }>
    }
}