<template>
    <div class="scent-results">
        <div v-if="errorMessage.message" class="brand-results__error">
            <div class="brand-results__message">{{ errorMessage.message }}</div>
        </div>
        <div v-if="searchData.perfumes && !errorMessage.message" v-for="item in searchData.perfumes.results" class="scent-results__item">
            <div class="scent-results__left">
                <img class="scent-results__image" :src="item.images['32x40']"/>
            </div>
            <div class="scent-results__middle">
                <div class="scent-results__title">{{ item.name }}</div>
                <div class="scent-results__description">{{ item.concentration }}</div>
            </div>
        </div>
        <div class="scent-results__gradient"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'ScentResults',
    computed: {
        ...mapState('search', [
            'searchData',
            'errorMessage'
        ]),
    },
}
</script>
<style lang="scss">
    .scent-results {
        height: 50vh;
        overflow: scroll;
        position: relative;
        &__item {
            border-bottom: 1px solid #ECECEC;
            width: 100%;
            display: flex;
            padding: pxToRem(16);
            font-size: pxToRem(15);
        }
        &__gradient {
            position:absolute;
            height: 55px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%);
            bottom: 0px;
            width:100%;
        }
        &__image {
            width: pxToRem(57);
        }
        &__middle {
            padding: 4px 16px;
        }
        &__title {
            color: #141414;
            font-weight: 500;
            line-height: 150%;
        }
        &__description {
            color: #6C6C6C;
            line-height: 150%;
        }
        &__error{
            padding: 20px;
            width: 100%;
            display: flex;
            text-align: center;
        }
    }
</style>