<i18n>
	{
		"en": {
			"title": "Newsletter subscription",
			"form": {
				"email": {
					"placeholder": "Enter your email",
					"error": {
						"required": "Email required field",
						"min": "The minimum number of characters is "
					}
				},
				"password": {
					"placeholder": "Enter your password",
					"error": {
						"required": "Password required field",
						"min": "The minimum number of characters is "
					}
				}
			},
			"submit": "Ok"
		},
		"ru": {
			"title": "Подписка на новостную рассылку",
			"form": {
				"email": {
					"placeholder": "Введите почту",
					"error": {
						"required": "Email обязательное поле",
						"min": "Минимальное количество символов - "
					}
				},
				"password": {
					"placeholder": "Введите пароль",
					"error": {
						"required": "Password обязательное поле",
						"min": "Минимальное количество символов - "
					}
				}
			},
			"submit": "Ок"
		}
	}
</i18n>

<template>

    <popup
        top="inherit"
        width="22.7rem"
        :visible="modalAuthShow"
        @close="toggleModalAnimate(false)"
    >
        <template slot="title">Войти на Aromo</template>

        <template slot="body">
            <div class="signin">
                <el-divider content-position="center">Через социальные сети</el-divider>
                <div class="social-block social-block_auth">
                    <a href="#" class="social-block__link social-block__link_vk">
                        <svg-icon name="icon-social-vk" width="1.46rem" height="1.46rem" />
                    </a>
                    <a href="#" class="social-block__link social-block__link_fb">
                        <svg-icon name="icon-social-fb" width="1.46rem" height="1.46rem" />
                    </a>
                    <a href="#" class="social-block__link social-block__link_gmail">
                        <svg-icon name="icon-social-gmail" width="1.46rem" height="1.46rem" />
                    </a>
                    <a href="#" class="social-block__link social-block__link_twitter">
                        <svg-icon name="icon-social-twitter" width="1.46rem" height="1.46rem" />
                    </a>
                    <a href="#" class="social-block__link social-block__link_ok">
                        <svg-icon name="icon-social-ok" width="1.46rem" height="1.46rem" />
                    </a>
                </div>

                <el-divider content-position="center">Или через почту</el-divider>
                <el-form
                    class="el-form_auth"
                    ref="form"
                    :model="form"
                    :rules="rules"
                    @submit.native.prevent="formSubmit"
                >
                    <el-form-item class="el-form-item_not-bd" prop="email" v-show="formAuthStep==1">
                        <el-input
                            v-model="form.email"
                            :placeholder="$t('form.email.placeholder')"
                        >
                            <el-link
                                @click="formNextStep('email')"
                                class="el-input-group__append-inner"
                                slot="append"
                            >
                                <svg-icon name="arrow-right" width="1.375rem" height="1.375rem" />
                            </el-link>
                        </el-input>
                    </el-form-item>

                    <el-form-item class="el-form-item_not-bd" prop="password" v-show="formAuthStep==2">
                        <el-input
                            class="el-input-group_indent-r"
                            v-model="form.password"
                            :placeholder="$t('form.password.placeholder')"
                            type="password"
                        >
                            <el-button
                                slot="append"
                                class="el-input-group__append-inner"
                                native-type="submit"
                            >
                                <el-link type="info" class="el-link_inner-input el-link_underline" @click.prevent="toggleModalRememberPassword(true)">Не помню</el-link>
                                <svg-icon name="icon-log-in" width="1.375rem" height="1.375rem" />
                            </el-button>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </template>

        <template slot="footer">
            <el-link type="info" class="signin__note">Еще не зарегистрированы?</el-link>
            <el-link type="primary" @click.prevent="toggleModalRegistration(true)">Зарегистрироваться через почту</el-link>
        </template>
    </popup>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import UserValidation from '@/models/users/Validations'
export default {
    name: 'ModalAuth',
    data() {
        const validateEmail = (rule, value, callback) => {
            new UserValidation()
                .params({ email: value })
                .get()
                .then((response) => {
                    callback()
                    this.formAuthStep = 2
                })
                .catch((response) => {
                    callback(new Error('Данный e-mail не зарегистрирован'))
                })
        }
        const validatePassword = (rule, value, callback) => {
            this.$store.dispatch('users/login', this.form)
                .then((response) => {
                    this.toggleModalAnimate()
                    callback()
                })
                .catch((fail) => {
                    const response = JSON.parse(fail.request.response)
                    if (response.code === 'account-not-verified') {
                        callback()
                        this.toggleModalAccountVerified(true)
                    } else {
                        callback(new Error('Неверный пароль.'))
                    }
                })
        }
        return {
            formAuthStep: 1,

            form: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    {
                        required: true,
                        min: 5,
                        message: 'Некорректный формат',
                        trigger: 'blur',
                        type: 'email'
                    },
                    {
                        validator: validateEmail,
                        trigger: 'click'
                    }
                ],
                password: [
                    {
                        required: true,
                        min: 8,
                        message: 'Мин. длина пароля – 8 символов',
                        trigger: 'change'
                    },
                    {
                        validator: validatePassword,
                        trigger: 'click'
                    },
                ]
            }
        }
    },
    computed: {
        ...mapState([
            'modalAuthShow'
        ])
    },
    methods: {
        ...mapMutations([
            'toggleModalAuth',
            'toggleModalRememberPassword',
            'toggleModalRegistration',
            'toggleModalAccountVerified'
        ]),

        toggleModalAnimate() {
            this.formAuthStep = 1
            this.$refs.form.resetFields()
            this.toggleModalAuth(false)
        },

        formNextStep(requireInput) {
            this.$refs.form.validateField(requireInput)
        },

        formSubmit() {
            this.$refs.form.validateField('password')
        }
    }
}
</script>

<style lang="scss">
	.signin{
		&__note{
			pointer-events: none;
		}
	}
</style>