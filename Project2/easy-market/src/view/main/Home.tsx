import React, { memo } from 'react'
import useStore from '../../util/useStore'
import { useObserver } from 'mobx-react-lite'

import hooks from '../../util/mockHooks';
const {useState, useEffect, useCallback, useMemo} = hooks;

interface SwiperType {
    banner: any[],
    cb?: Function,
    info?: object
}
const Swiper: React.FC<SwiperType> = props => {
    console.log('我执行了');
    return <>
        <h3>轮播组件</h3>
        <section>{
            props.banner.map((item) => {
                return <img key={item.id} src={item.image_url} alt="" />
            })
        }</section>
    </>
}

const MemoSwiper = memo(Swiper);
export default () => {
    const store = useStore();
    const { home } = store;

    let [count, setCount] = useState(0);

    // useEffect(() => {
    //     home.getData();
    // }, [])

    console.log('home.data...', home.data);
    // 菜单点击事件
    let menuClick = (id: number) => {
        // 跳转...
    }

    return useObserver(() => <>
        <div>
            <button onClick={(()=>setCount(count+1))}>+</button>
            <span>{count}</span>
            <button onClick={(()=>setCount(count-1))}>-</button>
        </div>
        {/* 轮播 */}
        {/* <Swiper 
            banner={home.data.banner} 
            cb={useCallback(()=>(()=>menuClick(100)), [])} 
            // info={useMemo(()=>(home.data.banner.length>10?{}:{}), [home.data.banner])}
        ></Swiper> */}
        {/* 菜单 */}
        <section>{
            home.data.channel.map(item => {
                return <li key={item.id} onClick={() => menuClick(item.id)}>
                    <img src={item.icon_url} alt="" />
                    <span>{item.name}</span>
                </li>
            })}</section>
        {/* 品牌制造商 */}
        <section></section>
        {/* 新品 */}
        <section></section>
        {/* 人气 */}
        <section></section>
        {/* 专题 */}
        <section>{
            home.data.topicList.map(item => {
                return <div key={item.id} dangerouslySetInnerHTML={{ __html: item.content }}></div>
            })
        }</section>
        {/* 居家 */}
        <section></section>
    </>)
}