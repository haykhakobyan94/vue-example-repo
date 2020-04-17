/* eslint-disable no-useless-constructor */
import Model from '@/models/Model'

export default class Subscription extends Model {
	resource() {
		return 'services/mailings/subscriptions'
	}
}
