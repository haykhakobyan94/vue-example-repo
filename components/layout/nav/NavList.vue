<template>

    <div class="nav" :class="['nav_' + type, mode ? 'nav_' + mode : null]">
        <div class="nav__item" v-for="(item, key) of visibleItems" :key="key">
            <nuxt-link to="/" class="nav__link">
                <svg-icon v-if="showIcons" class="nav__icon" :class="'nav__icon_' + key" :name="item.icon || ['nav', type, key].join('-')" />
                <span class="nav__link-text">
                    {{ $t('nav.' + key) }}
                    <span class="nav__counter" v-if="showCounters && counters[key]">{{ counters[key] }}</span>
                </span>
            </nuxt-link>
        </div>
        <div class="nav__hidden" :data-visible="expanded" v-if="showItems">
            <div class="nav__item" v-for="(item, key) of hiddenItems" :key="key">
                <nuxt-link to="/" class="nav__link">
                    <svg-icon v-if="showIcons" class="nav__icon" :class="'nav__icon_' + key" :name="item.icon || ['nav', type, key].join('-')" />
                    <span class="nav__link-text">
                        {{ $t('nav.' + key) }}
                        <span class="nav__counter" v-if="showCounters && counters[key]">{{ counters[key] }}</span>
                    </span>
                </nuxt-link>
            </div>
        </div>
        <span class="nav__toggle" v-if="showItems" @click="toggle" :data-show="$t('nav.show_more')" :data-hide="$t('nav.hide')"></span>
    </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'NavList',
    props: {
        type: {
            type: String,
            default: ''
        },
        mode: {
            type: String,
            default: null
        },
        showItems: {
            type: Number,
            default: null
        },
        showIcons: {
            type: Boolean,
            default: false
        },
        showCounters: {
            type: Boolean,
            default: false
        },
        sort: {
            type: Array,
            default() {
                return null;
            }
        }
    },
    data() {
        return {
            expanded: false
        }
    },
    computed: {
        ...mapState(['nav']),
        ...mapState('entities', ['counters']),
        items: {
            get() {
                const items = this.nav[this.type] || {};

                if (this.sort) {
                    return this._.pick(items, this.sort);
                }

                return items;
            }
        },
        visibleItems: {
            get() {
                let i = 0;
                const items = {};

                this._.forIn(this.items, (item, key) => {
                    if (!this.showItems || (++i <= this.showItems)) {
                        items[key] = item;
                    }
                });
                return items;
            }
        },
        hiddenItems: {
            get() {
                let i = 0;
                const items = {};

                this._.forIn(this.items, (item, key) => {
                    if (this.showItems && (++i > this.showItems)) {
                        items[key] = item;
                    }
                });
                return items;
            }
        }
    },
    mounted() {
        !this.showCounters || this.getCounters();
    },
    methods: {
        ...mapActions({
            'getCounters': 'entities/getCounters'
        }),
        toggle($event) {
            
            this.expanded = !this.expanded;
            $event.target.setAttribute('data-toggled', this.expanded);
        }
    }
}
</script>

<style lang="less">
    .nav{

        &__hidden{
            visibility: hidden;
            opacity: 0;
            max-height: 0px;
            transition: .2s ease;

            &[data-visible="true"] {
                display: block;
                opacity: 1;
                visibility: visible;
                max-height: rem(999);
            }
        }

        &__item{
            padding: rem(3) 0;
        }

        &__link{
            color: @color-black;
            display: block;
            padding: rem(16) rem(20);
            position: relative;
            font-size: 0;

            .hover({
                color: @color-violet;
            });

            &-text{
                font-weight: 500;
                display: inline-block;
                vertical-align: middle;
                line-height: 1;
                font-size: rem(16);
            }
        }

        &__counter{
            position: absolute;
            font-size: rem(13);
            color: @color-gray-light;
            font-weight: 400;
            margin-left: rem(8);
        }

        &__icon{
            width: rem(20);
            height: rem(20);
            display: inline-block;
            vertical-align: middle;
            margin-right: rem(17);
            margin-top: rem(-1.5);
        }

        &__toggle{
            display: inline-block;
            color: @color-gray-light;
            cursor: pointer;
            margin: rem(6) rem(20);
            font-weight: 500;
            font-size: rem(14);
            padding-right: rem(20);

            &:before{
                content: attr(data-show);
            }

            .wi(icon-chevron-down, 12, 12, 4, @right: 0, @ab: after);

            &:after{
                opacity: .3;
                transition: .2s;
                background-size: contain;
            }

            &[data-toggled="true"] {
                &:before{
                    content: attr(data-hide);
                }
                &:after{
                    .rotate(180deg);
                }
            }

            .hover({
                color: @color-violet;
            });
        }

        &_sections{
            padding: rem(10) 0 rem(6);
            .nav{
                &__link{
                    padding-top: rem(13);
                    padding-bottom: rem(13);
                }
            }
        }

        &_pages{
            .nav{
                &__link{
                    color: @color-gray;
                    padding-top: rem(11);
                    padding-bottom: rem(11);

                    &-text{
                        font-size: rem(15);
                        font-weight: 400;
                    }
                }
            }
        }

        &_footer-sections{
            .nav{
                &__item{
                    display: inline-block;
                    vertical-align: top;
                    width: 50%;

                    &:nth-child(1n){
                        width: 63%;
                    }
                    &:nth-child(2n){
                        width: 37%;
                    }
                }
                &__link{
                    padding-top: rem(7);
                    padding-bottom: rem(7);
                    padding-left: 0;

                    &-text{
                        font-size: rem(15);
                        font-weight: 400;
                    }
                }
            }
        }

        &_footer-pages{
            .nav{
                &__link{
                    padding-left: 0;
                    padding-top: rem(7);
                    padding-bottom: rem(7);

                    &-text{
                        font-size: rem(15);
                    }
                }
            }
        }
    }
</style>