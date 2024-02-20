<template>
    <section id="blog-footer">
        <hr />
        <a href="/blog/">
            <span>← Go back to the blog's home</span>
        </a>
    </section>
</template>

<style lang="scss">
#blog-footer {
    margin-top: 50px;

    a {
        display: block;
        padding: 20px;
        border-radius: 10px;
        box-shadow: var(--base-shadow);
        color: var(--color-text-secondary);
        width: 100%;
        text-align: left;
        text-decoration: none;
        transition: all 0.3s ease;
        background-color: var(--color-background-second);

        &:hover {
            transform: translateY(-5px);
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