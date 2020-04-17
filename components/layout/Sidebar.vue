<template>

    <div class="sidebar" :data-visible="visible" v-touch:swipe.left="swipe" @click="avoidClick">
        <div class="sidebar__wrap">
            <span class="sidebar__opener" @click="open">
                <svg-icon name="sidebar-opener" class="sidebar__opener-icon" />
            </span>
            <div class="sidebar__head">
                <svg-icon :name="'logo-' + $i18n.locale" :class="'sidebar__logo sidebar__logo_'+$i18n.locale" />
            </div>
            <div class="sidebar__body">
                <div class="sidebar__scrolled">
                    <nav-list class="sidebar__nav" :type="'catalog'" :show-items="5" :show-icons="true" :show-counters="true" />
                    <nav-list class="sidebar__sections" :type="'sections'" />
                    <nav-list class="sidebar__pages" :type="'pages'" />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import NavList from '@/components/layout/nav/NavList'
export default {
    name: 'Sidebar',
    components: {
        NavList
    },
    data() {
        return {
            visible: false
        };
    },
    methods: {
        swipe(direction, $event) {
            this.close();
            return false;
        },
        open() {
            this.visible = true;
            this.$body.cut();
        },
        close() {
            this.visible = false;
            this.$body.uncut();
        },
        avoidClick($event) {
            if (this._.isEqual($event.target, this.$el)) {
                this.close();
            }
        }
    }
}
</script>

<style lang="less">
    .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 101;
        width: pxToRem(300);
        height: 100%;
        transform: translateX(-100%);
        transition: all .2s ease;
        pointer-events: none;

        &[data-visible="true"] {
            transform: translateX(0%);
            pointer-events: auto;

            &:before{
                opacity: 1;
                pointer-events: auto;
            }

            .sidebar{
                &__opener{
                    transition-delay: 0s;
                    visibility: hidden;
                    pointer-events: none;
                }
            }
        }

        &:before{
            content: '';
            display: block;
            position: absolute;
            left: 0;
            width: 200vw;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
            opacity: 0;
            pointer-events: none;
            transition: opacity .1s linear;
        }

        &__wrap{
            position: relative;
            z-index: 1;
            background-color: @color-white;
            height: 100%;
        }

        &__opener{
            position: absolute;
            right: rem(-30-12);
            top: rem((56-30)/2);
            width: rem(30);
            height: rem(30);
            line-height: rem(30);
            display: block;
            pointer-events: auto;
            transition: visibility 0s .19s linear;
            text-align: center;

            &-icon{
                display: inline-block;
                width: rem(18);
                height: rem(14);
                vertical-align: middle;
                cursor: pointer;
            }
        }

        &__logo{
            &_ru{
                width: pxToRem(91);
                height: pxToRem(15);
            }

            &_en{
                width: pxToRem(113);
                height: pxToRem(17);
            }
        }

        &__head {
            display: flex;
            align-items: flex-end;
            height: pxToRem(56);
            padding: pxToRem(20);
            border-bottom: 1px solid#ECECEC;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }

        &__body{
            height: 100%;
            padding-top: pxToRem(56);
        }

        &__scrolled{
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            height: 100%;
            padding-bottom: rem(30);
        }

        &__nav{
            margin: rem(12) 0;
        }

        &__sections{
            background-color: @color-bg-gray;
            margin-top: rem(25);
        }

        &__pages{
            margin-top: rem(14);
        }
    }
</style>