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
		const queryParam = queryString.stringify(param);
		const { data, status } = await NaverApiRepository.getReverseGeocoding(queryParam);
		if (status === 200) {
			console.log(data);
		}
	}
}

export default NaverApiStore;
