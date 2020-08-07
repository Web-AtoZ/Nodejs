import axios from 'axios';

class NaverApiRepository {
	URL = 'https://naveropenapi.apigw.ntruss.com';

	constructor(props) {
		Object.assign(this, props);
	}

	getReverseGeocoding(param) {
		return axios.get(`${this.URL}/map-reversegeocode/v2/gc?${param}`);
	}
}

// 싱글톤으로 리턴
export default new NaverApiRepository();
