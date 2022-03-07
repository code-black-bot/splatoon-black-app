/**
 * 网络请求封装
 */
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: '',
    timeout: 2000
});

export function httpGet(url, params) {
    axiosInstance.get(url, {params: params}).then(res => {
        return res;
    })
}

export function httpPost(url, params) {
    axiosInstance.post(url, {params: params}).then(res => {
        return res;
    })
}