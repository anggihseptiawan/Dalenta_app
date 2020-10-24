import axios from "axios";
import errorHandler from "./errorHandler";

const Axios = axios.create({
	baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
});

Axios.defaults.headers.common["accesskey"] = "ZnJvbnRFbmRUZXN0MTIz";
Axios.defaults.headers.common["Content-type"] =
	"application/json; charset=UTF-8";

axios.interceptors.response.use((res) => res.data, errorHandler);

export default Axios;
