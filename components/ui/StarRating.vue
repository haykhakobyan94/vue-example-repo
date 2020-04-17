<template>
    <div class="star-rating">
        <svg-icon :key="number" v-for="number in 5" class="star-rating__star" :name="rate < number ? 'icon-star-blank' : 'icon-star'"/>
    </div>
</template>
<script>
export default {
    name: 'StarRating',
    props: {
        rate: {
            type: Number,
            default: 0
        },
    }
}
</script>
<style lang="scss">
    .star-rating {
        &__star {
            width: pxToRem(12);
            height: pxToRem(12);
            margin-left: pxToRem(3);
        }
    }
</style>