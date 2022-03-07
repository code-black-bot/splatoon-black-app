/**
 * 网络请求控制层
 */
import { httpGet } from ".";

const API_NAME = {
    MAP: 'https://api.imink.jone.wang/schedules'
}

export async function getMapList() {
    let res = httpGet(API_NAME.MAP);
    return res;
}