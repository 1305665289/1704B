import React from 'react';

// export default props=>{
//     return <p>组件B</p>
// }

export default class extends React.Component{
    state={
        isLoading: true
    }

    render(){
        return <p>组件B</p>
    }
}