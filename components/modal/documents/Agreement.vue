<i18n>
    {
        "en": {
            "title": "Newsletter subscription"
        },
        "ru": {
            "title": "Пользовательское Соглашение"
        }
    }
</i18n>
<template>
    <el-dialog
        top="inherit"
        width="22.7rem"
        v-if="modalAgreementShow"
        :visible="modalAgreementShow"
        :show-close="false"
        :open="getAgrement()"
        class="agreement-block"
    >
        <div slot="title" class="el-dialog-header__title">{{ $t('title') }}</div>

        <div class="agreement-block__content">
            {{ agreement }}
        </div>

        <div class="agreement-block__button-block">
            <button @click.prevent="toggleModalAgreement(false)" class="agreement-block__button-block_purple">Ясно</button>
        </div>
    </el-dialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Documents from '@/models/documents'
export default {
    name: 'ModalAgreement',
    data() {
        return {
            agreement: ''
        }
    },
    computed: {
        ...mapState([
            'modalAgreementShow'
        ])
    },
    methods: {
        getAgrement() {
            const document = new Documents()
            document.custom('documents/terms-of-use')
                .get()
                .then((response) => {
                    this.agreement = response[0].text
                })
                .catch((response) => {
                    this.agreement = false
                })
        },
        ...mapMutations([
            'toggleModalAgreement'
        ])
    }
}
</script>

<style lang="scss">
    .agreement-block {

        &__content {
             max-height: pxToRem(336);
             overflow-y: auto;
		}

        &__button-block {
             padding-top: pxToRem(20);
			 padding-bottom: pxToRem(20);

            &_purple {
                 width: 100%;
                 height: pxToRem(44);
                 background: $--color-primary;
                 border-radius: pxToRem(3);
                 color: white;
                 font-size: pxToRem(15);
                 border: none;
             }
        }
    }
</style>