import axios from 'axios';
import { NAVER_MAPS_CLIENT_ID, NAVER_MAPS_CLIENT_SECRET } from 'Config/URL';
class NaverApiRepository {
	URL = '/map-reversegeocode/v2/gc';

	constructor(props) {
		Object.assign(this, props);
	}

	getReverseGeocoding(param) {
		const headers = {
			'X-NCP-APIGW-API-KEY-ID': NAVER_MAPS_CLIENT_ID,
			'X-NCP-APIGW-API-KEY': NAVER_MAPS_CLIENT_SECRET,
		};
		return axios.get(`${this.URL}?${param}`, { headers: headers });
	}
}

// 싱글톤으로 리턴
export default new NaverApiRepository();
