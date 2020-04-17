module.exports = {
	prompt: ({ prompter, args }) =>
	  prompter
			.prompt({
				name: 'type',
				message: "Выберите тип компонента?",
				choices: [ 'layout', 'navigation', 'modal', 'form', 'ui' ]
			},
			{
				message: 'Создавать файл для тестирования компонента?',
				enabled: 'Да',
				disabled: 'Нет'
			})
}