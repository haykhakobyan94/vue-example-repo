<template>

    <el-dialog
        top="inherit"
        width="22.7rem"
        :visible="modalAccountVerifiedShow"
        @close="toggleModalAccountVerified"
    >
        <div slot="title" class="el-dialog-header__title">Активируйте аккаунт</div>
        <div class="el-dialog__subtitle">Мы отправили вам письмо на почту. Чтобы войти на сайт, активируйте свой аккаунт, перейдя по ссылке из письма.</div>

        <div class="el-dialog__close">
            <svg-icon name="icon-close" width="1.6rem" height="1.6rem" />
        </div>
    </el-dialog>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'RememberPassword',
    computed: {
        ...mapState([
            'modalAccountVerifiedShow'
        ])
    },
    methods: {
        ...mapMutations([
            'toggleModalAccountVerified'
        ])
    }
}
</script>