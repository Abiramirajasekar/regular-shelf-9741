import axios from 'axios'

export const api = (params) => {
    return axios.get("http://localhost:8080/perfume", {
        params: {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.order
        }
    })
}
export default api