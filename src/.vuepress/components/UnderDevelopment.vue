<template>
    <div class="cart cart-horizontal">
        <img src="/assets/typewriter.svg" />
        <div class="text-container">
            <h2>Coming Soon</h2>
            <p>This content is under active development and will be available soon. We can notify you via email when we complete it. Just subscribe to our newsletters below.</p>

            <div v-if="withSubscription">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        withSubscription: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style lang="scss">
.cart-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: left;
    margin-top: 30px;

    :first-of-type {
        margin-top: 0;
    }

    img {
        transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s;
        transform: translateY(0px);
        opacity: 1;
        max-width: 250px !important;
        margin: 0 25px 0 0;
        display: block;
    }
}
@media (max-width: 959px) {
    .cart-horizontal {
        display: block;
        text-align: center;

        img {
            margin: auto;
        }

        .text-container {
            margin-top: 30px;
        }
    }
}
</style>