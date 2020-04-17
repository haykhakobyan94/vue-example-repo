<i18n>
    {
        "en": {
            "perfumes": "Perfumes",
            "brands": "Brands",
            "news": "News"
        },
        "ru": {
            "perfumes": "Ароматы",
            "brands": "Бренды",
            "news": "В тексте"
        }
    }
</i18n>
<template>
    <div class="search-results">
        <div class="search-results__toggler">
            <button :class="{ 'search-results__toggler_active': activeIndex === index }" @click.prevent="selectType(index)" v-for="( type, index ) in searchTypes" class="search-results__item">
                <span class="search-results__title">{{ $t(type.key) }}</span>
                <span v-if="searchData[type.key]" class="search-results__count">{{ searchData[type.key].amount }}</span>
            </button>
        </div>
        <div class="search-results__results">
            <transition name="fade" mode="out-in" appear>
                <component :is="searchTypes[activeIndex].componentName" />
            </transition>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapState } from 'vuex'
import BrandResults from '@/components/forms/search/BrandResults'
import ScentResults from '@/components/forms/search/ScentResults'
import TextResults from '@/components/forms/search/TextResults'


export default {
    name: 'SearchResults',
    components: {
        BrandResults,
        ScentResults,
        TextResults
    },
    data() {
        return {
            searchTypes: [
                {
                    componentName: 'ScentResults',
                    key: 'perfumes'
                },
                {
                    componentName: 'BrandResults',
                    key: 'brands'
                },
                {
                    componentName: 'TextResults',
                    key: 'news'
                }
            ],
            activeIndex: 0
        }
    },
    computed: {
        ...mapState('search', [
            'searchData'
        ]),
    },
    methods: {
        selectType(index){
            this.activeIndex = index;
        },
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss">
    .search-results {
        border-top: 1px solid #ECECEC;
        border-bottom: 1px solid #ECECEC;
        &__item {
            outline:none;
            text-align: center;
            width: 100%;
            padding-top: pxToRem(13);
            padding-bottom: pxToRem(11);
            background: white;
            border: none;
            font-weight: 500;
        }
        &__toggler {
            min-height: pxToRem(45);
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            flex-grow: 100;
            background: white;
            color: #B0B0B0;
            &_active {
                color: #613AE7;
                border-bottom: 2px solid #613AE7;
            }
        }
        &__title {
            font-size: pxToRem(15);
        }
        &__count {
            font-size: pxToRem(10);
            vertical-align: top;
        }
    }
</style>