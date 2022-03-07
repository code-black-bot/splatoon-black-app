import { Button } from 'antd';
import {getMapList} from '../api/http.js';
import React, {useState} from 'react';

interface mapObj{
    name: string,
    img: string
}

type Item = {
    name: string,
    img: string
}

function MapList() {
    const [mapList, setMapList]= useState([]);
    function initMapList(): mapObj[] {
        let res = getMapList();
        console.log(res)
        return [];
    }
    return (
        <div>
            <Button onClick={initMapList}>点击获取模式</Button>
            <div>
                {mapList.map((item: Item)=> 
                    <div>
                        <div>{item}</div>
                        <div>{item.img}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MapList;