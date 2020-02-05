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
    }>
}

const Hospital = (props: ProType)=>{
    console.log('props...', props);
    // debugger;
    return <>
        <section>
            <h3>疫情新增趋势</h3>
            <Chart height={400} data={props.chinaDayAddList} forceFit>
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
                    color={"city"}
                    // shape={"smooth"}
                />
                <Geom
                    type="point"
                    position="date*confirm"
                    size={4}
                    shape={"circle"}
                    color={"city"}
                    style={{
                    stroke: "#fff",
                    lineWidth: 1
                    }}
                />
            </Chart>
        </section>
    </>
}


export default Hospital
