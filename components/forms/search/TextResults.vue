<template>
    <div class="text-results">
        <div v-if="errorMessage.message" class="brand-results__error">
            <div class="brand-results__message">{{ errorMessage.message }}</div>
        </div>
        <div v-if="searchData.news && !errorMessage.message" v-for="item in searchData.news.results" class="text-results__item">
            <div class="text-results__left">
                <img class="text-results__image" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"/>
            </div>
            <div class="text-results__middle">
                <div class="text-results__title">Новости</div>
                <div class="text-results__description" v-html="item.nameWithPhraseEntry">{{ item.nameWithPhraseEntry }}</div>
            </div>
        </div>
        <div v-if="searchData.news" v-for="item in searchData.news.articles" class="text-results__item">
            <div class="text-results__left">
                <img class="text-results__image" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"/>
            </div>
            <div class="text-results__middle">
                <div class="text-results__title">Статьи</div>
                <div class="text-results__description" v-html="item.nameWithPhraseEntry"></div>
            </div>
        </div>
        <div class="scent-results__gradient"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'TextResults',
    computed: {
        ...mapState('search', [
            'searchData',
            'errorMessage'
        ]),
    },
}
</script>
<style lang="scss">
    .text-results {
        height: 50vh;
        overflow: scroll;
        position: relative;
        &__item {
            border-bottom: 1px solid #ECECEC;
            width: 100%;
            display: flex;
            padding: 20px;
        }
        &__image {
            width: 57px;
        }
        &__middle {
            padding: 0px 20px;
        }
        &__title {
            color: #6C6C6C;
            line-height: 150%;
            font-size: 14px;
        }
        &__description {
            color: #141414;
            line-height: 150%;
            font-size: 15px;
            i {
                font-weight: 600;
                font-style: normal;
            }
        }
        &__gradient {
            position:absolute;
            height: 55px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%);
            bottom: 0px;
            width:100%;
        }
        &__error{
            padding: 20px;
            width: 100%;
            display: flex;
            text-align: center;
        }
    }
</style>