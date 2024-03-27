<script setup lang="ts">

import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
let theme = ref<GlobalTheme | null>(null)

</script>

<template>
    <n-config-provider :theme="theme">
        <n-layout class="layout">
            <n-layout-header class="layout-header">
                <client-only><MenuHeader /></client-only>
            </n-layout-header>
            <n-layout-content class="layout-center">
                <NuxtPage />
            </n-layout-content>
            <n-layout-footer class="layout-footer">
                <!-- <MenuFooter /> -->
            </n-layout-footer>
        </n-layout>
    </n-config-provider>
</template>

<style lang="scss">
.layout {
  &>:first-child {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .layout-center {
    flex: 1;
    width: 100%;
    max-width: var(--v-maxwidth);
    margin: 0 auto;
  }
}
</style>