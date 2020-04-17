<i18n>
	{
		"en": {
			"title": "Newsletter subscription",
			"form": {
				"name": {
					"placeholder": "Введите имя"
				},
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
				"name": {
					"placeholder": "Введите имя"
				},
				"email": {
					"placeholder": "Введите свой email",
					"error": {
						"required": "Email обязательное поле",
						"min": "Минимальное количество символов - "
					}
				},
				"password": {
					"placeholder": "Введите свой пароль",
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

    <el-dialog
        top="inherit"
        width="22.7rem"
        :visible="modalRegistrationShow"
        @close="toggleModalAnimate"
        v-touch:swipe.down="toggleModalAnimate"
        v-touch-options="{touchClass: 'active'}"
    >
        <div slot="title" class="el-dialog-header__title">Регистрация на Аромо</div>

        <div class="el-dialog__close">
            <svg-icon name="icon-close" width="1.6rem" height="1.6rem" />
        </div>

        <el-form
            ref="form"
            :model="form"
            :rules="rules"
            @submit.native.prevent="formSubmit"
        >
            <el-form-item prop="name">
                <el-input
                    v-model="form.name"
                    :placeholder="$t('form.name.placeholder')"
                />
            </el-form-item>

            <el-form-item prop="email">
                <el-input
                    v-model="form.email"
                    :placeholder="$t('form.email.placeholder')"
                />
            </el-form-item>

            <el-form-item prop="password">
                <el-input
                    v-model="form.password"
                    :placeholder="$t('form.password.placeholder')"
                    type="password"
                    show-password
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    native-type="submit"
                    class="el-button_big"
                >Зарегистрироваться</el-button>
            </el-form-item>
        </el-form>

        <div slot="footer">
            <p class="wh-nowrap">Регистрируюсь на Аромо, вы соглашаетесь<br/><el-link type="primary" @click.prevent="toggleModalAnimate">Пользовательским соглашением</el-link></p>
            <p class="wh-nowrap">Уже зарегистрированы?<br/><el-link type="primary" @click.prevent="toggleModalAnimate">Войдите через почту или соц.сети</el-link></p>
        </div>
    </el-dialog>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import User from '@/models/users/accounts'
export default {
    name: 'Registration',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
            rules: {
                email: [
                    {
                        required: true,
                        min: 5,
                        message: 'Некорректный формат',
                        trigger: 'change'
                    }
                ],
                password: [
                    {
                        required: true,
                        min: 8,
                        message: 'Мин. длина пароля – 8 символов',
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    computed: {
        ...mapState([
            'modalRegistrationShow'
        ])
    },
    methods: {
        ...mapMutations([
            'toggleModalRegistration'
        ]),

        toggleModalAnimate() {
            this.$refs.form.resetFields()
            this.toggleModalRegistration(false)
        },

        sendConfirmationCode(userID) {
            const user = new User({ id: userID })
            user.confirmationCode().get()
        },

        sendForm() {
            const vm = this
            new User(this.form)
                .save()
                .then((response) => {
                    vm.sendConfirmationCode(response.id)
                    this.toggleModalAnimate()
                })
                .catch((fail) => {
                    return false
                })
        },

        validateForm() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.sendForm()
                } else {
                    return false;
                }
            });
        },

        formSubmit() {
            this.validateForm()
        }
    }
}
</script>