import axios from 'axios';
// import jsonp from 'jsonp';

// 获取全国省份列表
export const getHospitalProvince = ()=>{
    return axios.post('/wechat/api/THPneumoniaService/getHospitalProvince',{
        service: 'THPneumoniaOuterService',
        args: {req:{}},
        func: 'getHospitalProvince',
        context: {channel: 'AAEEviDRbllNrToqonqBmrER'}
    })
}