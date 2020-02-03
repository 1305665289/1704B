import React from 'react';

export default RawComponent=>{
    return class extends RawComponent{
        render(){
            return <React.Fragment>{
                !this.state.isLoading?<p>组件正在加载中...</p>:super.render()
        }</React.Fragment>
        }
    }
}