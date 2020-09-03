import { observable, action } from 'mobx';
import NaverApiRepository from '../repository/NaverApiRepository';
import queryString from 'query-string';
import { autobind } from 'core-decorators';

@autobind
class NaverApiStore {
	@observable myPlace = {};

	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	// 비동기인 경우 @action 대신 @asyncAction
	@action
	async getMyPlace(param) {
		const defaultParam = {
			request: 'coordsToaddr',
			orders: 'roadaddr',
			output: 'json',
		};

		const queryParam = queryString.stringify({ ...param, ...defaultParam });
		const { data, status } = await NaverApiRepository.getReverseGeocoding(queryParam);
		if (status === 200) {
			const { results } = data;
			this.myPlace = results[0];
		}
	}
}

export default NaverApiStore;
