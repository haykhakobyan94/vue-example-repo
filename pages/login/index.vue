<template>
    <el-form
        ref="form"
        :model="form"
        :rules="rules"
    >
        <el-form-item prop="email">
            <el-input
                v-model="form.email"
                placeholder="Email"
                prefix-icon="el-icon-message"
            />
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                v-model="form.password"
                placeholder="Пароль"
                type="password"
                prefix-icon="el-icon-lock"
            />
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                native-type="submit"
                @click="loginSubmit"
            >
                Вход
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: 'test@email.ru',
                password: 'test1234'
            },
            validCredentials: {
                email: 'test@email.ru',
                password: 'test1234'
            },
            rules: {
                email: [
                    {
                        required: true,
                        message: 'Email обязательное поле',
                        trigger: 'blur'
                    },
                    {
                        min: 4,
                        message: 'Минимальное количество символов - 4',
                        trigger: 'blur'
                    }
                ],
                password: [
                    { required: true, message: 'Пароль обязательное поле', trigger: 'blur' },
                    {
                        min: 5,
                        message: 'Длина пароля должна превышать 5 символов',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        loginSubmit() {
            this.$auth.loginWith('local', {
                data: {
                    email: this.form.email,
                    password: this.form.password
                }
            })
        },
        success() {
            const vm = this
            this.$notify({
                title: 'Успешно',
                // eslint-disable-next-line no-undef
                message: vm.$createElement('div', { style: 'text-align: left' }, 'Вход успешно выполнен'),
                type: 'success',
                position: 'top-right'
            })
            this.$router.push('/cabinet')
        },
        unauthorized() {
            const vm = this
            this.$notify({
                title: 'Ошибка',
                // eslint-disable-next-line no-undef
                message: vm.$createElement('div', { style: 'text-align: left' }, 'Такого пользователя не существует'),
                type: 'warning',
                position: 'top-right'
            })
        }
    }
}
</script>
