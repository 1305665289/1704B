import React, { useEffect } from 'react'
import useStore from '../../util/useStore'
import { useObserver } from 'mobx-react-lite'

export default () => {
    const store = useStore();
    const { home } = store;
    useEffect(() => {
        home.getData();
    }, [])

    console.log('home.data...', home.data);
    // 菜单点击事件
    let menuClick = (id: number) => {
        // 跳转...
    }

    return useObserver(() => <>
        {/* 轮播 */}
        <section>{
            home.data.banner.map((item) => {
                return <img key={item.id} src={item.image_url} alt="" />
            })
        }</section>
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
                return <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            })
        }</section>
        {/* 居家 */}
        <section></section>
    </>)
}