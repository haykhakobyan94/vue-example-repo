/* eslint-disable no-useless-constructor */
import Model from '../../Model'

export default class ConfirmationCode extends Model {
	resource() {
		return 'confirmation/code'
	}
}