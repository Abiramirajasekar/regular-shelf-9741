import axios from 'axios'

export const api5 = (params) => {
    return axios.get("http://localhost:8080/Lip", {
        params: {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.order
        }
    })
}
export default api5