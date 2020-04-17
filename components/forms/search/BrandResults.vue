<i18n>
    {
        "en": {
            "perfumes_one": "prfumes",
            "perfumes_two_to_four": "prfumes",
            "perfumes_five_to_zero": "prfumes"
        },
        "ru": {
            "perfumes_one": "аромат",
            "perfumes_two_to_four": "аромата",
            "perfumes_five_to_zero": "ароматов"
        }
    }
</i18n>
<template>
    <div class="brand-results">
        <div v-if="errorMessage.message" class="brand-results__error">
            <div class="brand-results__message">{{ errorMessage.message }}</div>
        </div>
        <div v-if="searchData.brands" v-for="item in searchData.brands.results" class="brand-results__item">
            <div class="brand-results__left">
                <img class="brand-results__image" :src="item.images.length > 0 ? _.head(item.images) : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'"/>
            </div>
            <div class="brand-results__middle">
                <div class="brand-results__title">{{ item.name }}</div>
                <div class="brand-results__description">{{ item.amountPerfumes }} {{ $t(getPerfumeWord(item.amountPerfumes)) }}</div>
            </div>
            <div class="brand-results__stars">
                <star-rating :rate="item.rating"/>
            </div>
        </div>
        <div class="brand-results__gradient"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import StarRating from '@/components/ui/StarRating'

export default {
    name: 'BrandResults',
    computed: {
        ...mapState('search', [
            'searchData',
            'errorMessage'
        ]),
    },
    components: {
        StarRating
    },
    methods: {
        getPerfumeWord(amount){
            const reminder = amount % 10;

            const result = reminder >= 2 && reminder <= 4 ? 'perfumes_two_to_four' : reminder == 1 ? 'perfumes_one' : 'perfumes_five_to_zero';
            return result;
        }
    }
}
</script>
<style lang="scss">
    .brand-results {
        height: 50vh;
        overflow: scroll;
        position: relative;
        &__item {
            border-bottom: 1px solid #ECECEC;
            width: 100%;
            display: flex;
            padding: 20px 18px;
            font-size: 15px;
        }
        &__gradient {
            position:absolute;
            height: 55px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%);
            bottom: 0px;
            width:100%;
        }
        &__image {
            width: 99px;
            height: 64px;
        }
        &__middle {
            padding: 6px 16px;
            min-width: 150px;
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
        &__stars{
            padding: 7px 0px;
        }
        &__error{
            padding: 20px;
            width: 100%;
            display: flex;
            text-align: center;
        }
    }
</style>