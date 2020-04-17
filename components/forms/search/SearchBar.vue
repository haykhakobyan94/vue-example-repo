<i18n>
	{
		"en": {
			"placeholder": "Search the encyclopedia of 90 975 fragrances"
		},
		"ru": {
			"placeholder": "Поиск по энциклопедии из 90 975 ароматов"
		}
	}
</i18n>
<template>
    <div v-click-outside="unsetSearch" class="search-bar">
        <el-form ref="form" :model="form">
            <el-input @input="search" v-model="form.search" class="el-input--search" :placeholder="$t('placeholder')" prefix-icon="el-icon-search" >
                <i class="el-input__icon" slot="suffix" :class="{ 'el-icon-close': form.search }" @click="unsetSearch"></i>
            </el-input>
        </el-form>
        <div v-if="showResults" class="search-bar__results">
            <SearchResults />
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ClickOutside from 'vue-click-outside'
import SearchResults from '@/components/forms/search/SearchResults'

export default {
    name: 'SearchBar',
    components: {
        SearchResults
    },
    data() {
        return {
            form: {
                search: ''
            }
        }
    },
    computed: {
        ...mapState('search', [
            'showResults'
        ]),
    },
    methods: {
        ...mapMutations('search',[
            'unsetSearchData'
        ]),
        search(){
            if(this.form.search){
                if(this.form.search.length > 2){
                    this.$store.dispatch('search/search', this.form.search)
                }
            }else{
                this.unsetSearchData()
            }
        },
        unsetSearch(){
            this.form.search = ''
            this.unsetSearchData()
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss">
	.search-bar {
		position: absolute;
		width:100%;
		&__results {
			position: relative;
			background-color: white;
			z-index: 10;
		}
	}
</style>
