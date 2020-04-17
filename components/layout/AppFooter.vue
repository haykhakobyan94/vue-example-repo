<i18n>
    {
        "ru": {
            "copyright": "Aromo.ru&nbsp;&mdash; Энциклопедия парфюмерии",
            "rights": "Все права защищены,"
        },
        "en": {
            "copyright": "Perfume Community",
            "rights": "All rights reserved ©"
        }
    }
</i18n>

<template>
    <footer class="footer">
        
        <div class="footer__nav footer-nav" :data-opened="nav.catalog.opened">
            <div class="footer-nav__head" @click="toggleNav('catalog')">{{ $t('nav.footer.catalog') }}</div>
            <div class="footer-nav__body">
                <nav-list class="footer__catalog" :type="'catalog'" :mode="'footer-sections'" :sort="nav.catalog.sort" />
            </div>
        </div>

        <div class="footer__nav footer-nav" :data-opened="nav.pages.opened">
            <div class="footer-nav__head" @click="toggleNav('pages')">{{ $t('nav.footer.pages') }}</div>
            <div class="footer-nav__body">
                <nav-list class="footer__pages" :type="'pages'" :mode="'footer-pages'" :sort="nav.pages.sort" />
            </div>
        </div>

        <div class="footer__documents">
            <div class="footer__document">
                <a href="/" class="footer__document-link">Пользовательское соглашение</a>
            </div>
            <div class="footer__document">
                <nuxt-link to="/" class="footer__document-link">Политика обработки перс.данных</nuxt-link>
            </div>
            <div class="footer__document">
                <nuxt-link to="/" class="footer__document-link">Правообладателям</nuxt-link>
            </div>
        </div>

        <subscription class="footer__subscription" />

        <div class="social-block footer__social-block mt-28">
            <a href="#" class="social-block__link">
                <svg-icon name="icon-social-vk" width="1.33rem" height="1.33rem" />
            </a>
            <a href="#" class="social-block__link">
                <svg-icon name="icon-social-fb" width="1.33rem" height="1.33rem" />
            </a>
            <a href="#" class="social-block__link">
                <svg-icon name="icon-social-ins" width="1.33rem" height="1.33rem" />
            </a>
            <a href="#" class="social-block__link">
                <svg-icon name="icon-social-youtube" width="1.33rem" height="1.33rem" />
            </a>
            <a href="#" class="social-block__link">
                <svg-icon name="icon-social-tg" class="social-block__icon" width="1.33rem" height="1.33rem" />
            </a>
        </div>

        <div class="footer__bottom mt-24">
            <p v-html="$t('copyright')"></p>
            <p><span v-html="$t('rights')"></span> <span itemprop="copyrightYear">2020</span></p>
        </div>
    </footer>
</template>

<script>
import NavList from '@/components/layout/nav/NavList'
import Subscription from '@/components/forms/Subscription'

export default {
    name: 'Footer',
    components: {
        NavList,
        Subscription
    },
    data() {
        return {
            nav: {
                catalog: {
                    opened: false,
                    sort: [
                        "groups",
                        "perfumes",
                        "segments",
                        "brands",
                        "concentrations",
                        "shops",
                        "perfumes_by_year",
                        "notes",
                        "brands_by_country",
                        "noses",
                        "licensees",
                        "glossary"
                    ]
                }, 
                pages: {
                    opened: false,
                    sort: [
                        "about",
                        "ads",
                        "help"
                    ]
                }
            }
        }
    },
    methods: {
        toggleNav(type) {
            this.nav[type].opened = !this.nav[type].opened;
        }
    },
}
</script>

<style lang="less">
    .footer {
        width: 100%;
        padding: rem(12) rem(20) rem(32);
        background: @color-white;

        &__nav{
            margin-top: rem(8);
        }

        &__documents{
            margin-top: rem(26);
        }

        &__document{
            margin-top: rem(13);

            &-link{
                color: @color-gray;
                text-decoration: underline;
                font-size: rem(15);
                .hover({
                    text-decoration: none;
                });
            }
        }

        &__bottom {
            font-size: pxToRem(13);
            text-align: center;
            color: @color-gray;

            p {
                margin-bottom: 0;

                &:last-child {
                    margin-top: pxToRem(2);
                }

            }
        }

        &__subscription{
            margin-top: rem(32);
        }
    }

    .footer-nav{
        border-bottom: rem(1) solid #ececec;

        &[data-opened="true"] {
            .footer-nav{
                &__head{
                    &:before{
                        .rotate(180deg);
                    }
                }

                &__body{
                    max-height: rem(300);
                    visibility: visible;
                    overflow: visible;
                    padding: rem(6) 0 rem(16);
                }
            }
        }

        &__head{
            font-size: rem(16);
            font-weight: 500;
            padding: rem(5) rem(20) rem(5) 0;
            .wi(icon-chevron-down, 12, 12, @right: 0);
            &:before{
                top: 50%;
                margin-top: rem(-12/2);
                transition: .2s;
                background-size: contain;
            }
        }

        &__body{
            max-height: 0;
            padding: rem(5) 0 0;
            visibility: hidden;
            overflow: hidden;
            transition: .2s;
        }
    }
</style>
