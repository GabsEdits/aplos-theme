<template>
    <section id="blog-footer">
        <hr />
        <h2>Comments</h2>
        <p>
            If you have any questions or comments about this post, please feel free to leave a comment below.
        </p>
        <script src="https://giscus.app/client.js" :data-repo="theme.blog.data.repo" :data-repo-id="theme.blog.data.repo"
            data-category="Blog Comments" :data-category-id="theme.blog.data.categoryid" data-mapping="url" data-strict="0"
            data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom"
            data-theme="preferred_color_scheme" data-lang="en" crossorigin="anonymous" async>
        </script>
        <a href="/blog/">
            <span>← Go back to the blog's home</span>
        </a>
    </section>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { theme } = useData();
</script>

<style lang="scss">
#blog-footer {
    margin-top: 50px;

    a {
        display: block;
        padding: 20px;
        border-radius: 10px;
        color: var(--color-text-secondary);
        width: 100%;
        text-align: center;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            background-color: var(--color-background-second);
        }

        &:active {
            transform: scale(0.95);
        }

        span {
            font-size: 1em;
            font-weight: 800;
            margin-bottom: 0 !important;
        }
    }
}
</style>