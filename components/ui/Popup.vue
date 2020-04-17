<template>
    <el-dialog
        :visible="visible"
        :title="title"
        :width="width"
        :fullscreen="fullscreen"
        :top="top"
        :modal="modal"
        :modal-append-to-body="modalAppendToBody"
        :append-to-body="appendToBody"
        :lock-scroll="lockScroll"
        :custom-class="customClass"
        :close-on-click-modal="preventClose ? false : closeOnModalClick"
        :close-on-press-escape="closeOnPressEscape"
        :show-close="preventClose ? false : showClose"
        :center="center"
        :destroyOnClose="destroyOnClose"
        :before-close="beforeClose"
        @close="emitClose"
        @open="emitOpen"
        @opened="emitOpened"
        @closed="emitClosed"
        v-touch:swipetop="emitClose"
    >
        <div class="el-dialog__close">
            <svg-icon name="icon-close" width="1.6rem" height="1.6rem" />
        </div>

        <div slot="title" class="el-dialog-header__title">
            <slot name="title"></slot>
        </div>

        <slot name="body"></slot>

        <div slot="footer">
            <slot name="footer"></slot>
        </div>
    </el-dialog>
</template>
<script>
export default {
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '' },
        width: { type: String, default: '50%' },
        fullscreen: { type: Boolean, default: false },
        top: { type: String, default: '15vh' },
        modal: { type: Boolean, default: true },
        modalAppendToBody: { type: Boolean, default: true },
        appendToBody: { type: Boolean, default: false },
        lockScroll: { type: Boolean, default: true },
        customClass: { type: String, default: '' },
        closeOnModalClick: { type: Boolean, default: true },
        closeOnPressEscape: { type: Boolean, default: true },
        showClose: { type: Boolean, default: true },
        center: { type: Boolean, default: false },
        destroyOnClose: { type: Boolean, default: false },
        // eslint-disable-next-line vue/require-default-prop
        beforeClose: { type: Function },
        preventClose: { type: Boolean, default: false },
    },
    methods:{
        emitClose($event){
            if (!this.preventClose) {
                this.$emit('close');
            }
        },
        emitOpen(){
            this.$emit('open')
        },
        emitOpened(){
            this.$emit('opened')
        },
        emitClosed(){
            this.$emit('closed')
        }
    }
}
</script>