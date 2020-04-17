<template>
    <header class="header">
        <div class="header__col">
            <nuxt-link to="/" class="header__logo">
                <svg-icon class="header__logo-svg" :class="'header__logo-svg_'+$i18n.locale" :name="'logo-' + $i18n.locale" />
            </nuxt-link>
        </div>

        <div class="header__col">
            <div class="header__notify header__notify_unread">
                <svg-icon name="icon-bell" class="header__notify-icon" />
            </div>
            <div class="header__profile" @click.prevent="">
                <svg-icon name="icon-user" class="header__profile-icon" />
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="less">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 pxToRem(20);
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: pxToRem(56);
        border-bottom: 1px solid #ECECEC;
        background-color: @color-white;
        box-sizing: border-box;

        &__col {
            display: flex;
            align-items: center;
            flex-direction: row;
        }

        &__logo {
            margin-left: pxToRem(40);

            &-svg {
                display: block;
                height: 100%;

                &_ru{
                    width: pxToRem(91);
                    height: pxToRem(15);
                }

                &_en{
                    width: pxToRem(113);
                    height: pxToRem(17);
                }
            }
        }

        &__notify {
            margin-right: pxToRem(15);
            position: relative;

            &-icon{
                width: pxToRem(18);
                height: pxToRem(20);
            }

            &_unread{
                color: red;
            }
        }

        &__profile{
            &-icon{
                width: pxToRem(18);
                height: pxToRem(18);
            }
        }

    }
</style>
