import React, {useState, useEffect} from 'react'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from "bizcharts";

interface ProType {
    chinaDayAddList: Array<{
        date: string,
        confirm: string,
        suspect: string,
        dead: string,
        head: string
    }>,
    chinaDayList: Array<{
        date: string,
        confirm: string,
        suspect: string,
        dead: string,
        head: string
    }>
}

const Hospital = (props: ProType)=>{
    console.log('props...', props);
    // debugger;

    const scale = {
        confirm: {
            type: 'linear',
            alias: '确诊人数'
        },
        suspect: {
            type: 'linear',
            alias: '疑似新增'
        }
    }
    return <>
        <section>
            <h3>疫情新增趋势</h3>
            <Chart height={400} data={props.chinaDayAddList} scale={scale} forceFit>
                <Legend />
                <Axis name="date" />
                <Axis
                    name="date"
                    label={{
                        formatter: val => `${val}`
                    }}
                />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom
                    type="line"
                    position="date*confirm"
                    size={2}
                    color={"confirm"}
                    shape={"smooth"}
                />
                {/* <Geom
                    type="point"
                    position="date*confirm"
                    size={4}
                    shape={"circle"}
                    color={"confirm"}
                    style={{
                    stroke: "#fff",
                    lineWidth: 1
                    }}
                /> */}
                <Geom
                    type="line"
                    position="date*suspect"
                    size={2}
                    color={"suspect"}
                    shape={"smooth"}
                />
                {/* <Geom
                    type="point"
                    position="date*suspect"
                    size={4}
                    shape={"circle"}
                    color={"suspect"}
                    style={{
                    stroke: "#fff",
                    lineWidth: 1
                    }}
                /> */}
            </Chart>
        </section>
        {/* 累计确诊疑似趋势（人） */}
        <section>

        </section>
        {/* 累计治愈死亡趋势（人） */}
        <section>

        </section>
        <p>数据来源：国家卫健委官网发布，每日更新一次</p>
    </>
}


export default Hospital
