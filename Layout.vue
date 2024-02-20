<script setup lang="ts">
import { useData } from 'vitepress';
import { Content } from 'vitepress';
import NotFound from './components/404View.vue';
import SiteFooter from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import BlogHead from './components/BlogHead.vue';

const { site, frontmatter, page, theme } = useData()
</script>

<template>
  <Navigation />
  <main>
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
    </div>
    <NotFound v-if="page.isNotFound" />
    <div v-if="frontmatter.layout == 'blog'">
      <BlogHead />
      <Content />
    </div>
    <div v-else>
      <Content />
    </div>
  </main>
  <SiteFooter />
</template>
