<template>
    <div class="app__wrap">
        <div class="wrapper">
            <app-header />
            <div class="page-content">
                <nuxt />
            </div>
            <app-footer />
        </div>
        <sidebar ref="sidebar" />
    </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import Sidebar from '@/components/layout/Sidebar'

export default {
    name: 'Default',
    components: {
        AppHeader,
        AppFooter,
        Sidebar
    },
    methods: {
        openSidebar() {
            // this.$refs.Sidebar.open();
        }
    },
    head() {
        return this.$nuxtI18nSeo()
    }
}
</script>