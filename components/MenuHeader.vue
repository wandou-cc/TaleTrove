<script lang="ts" setup>
let activeKey = ref<string | null>(null)
const menuOptions: MenuOption[] = [
    {
        label: 'Home',
        key: '/home'
    },
    {
        label: 'Top Stories',
        key: '/topStories'
    },
    {
        label: 'Latest Stories',
        key: '/latestStories'
    },
    {
        label: 'Stories Categorization',
        key: '/categorization'
    },
    {
        label: 'TaleTrove Plus',
        key: '/storyPlus'
    }
]
</script>

<template>
    <div class="story-header">
        <div class="header-center">
            <div class="header-logo"></div>
            <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive />
        </div>
    </div>
</template>

<style lang="scss">
.story-header {
    padding: 0.7rem 0;
    border-bottom: 1px solid #ccc;

    .header-logo {
        width: 20px;
        height: 20px;
        border: 1px solid;
    }

    .header-center {
        max-width: var(--v-maxwidth);
        margin: 0 auto;
        display: flex;
        align-items: center;

        .n-menu {
            .n-menu-item {
                font-size: 1rem;
            }
        }
    }
}
</style>