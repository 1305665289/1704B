import React from 'react';

export default RawComponent=>{
    return class extends React.Component{
        render(){
            return <React.Fragment>
                <h3>我是一个高阶Tip</h3>
                <RawComponent />
            </React.Fragment>
        }
    }
}