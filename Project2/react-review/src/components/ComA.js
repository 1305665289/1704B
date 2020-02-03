import React from 'react';

// export default props=>{
    // return <p>组件A</p>
// }

export default class extends React.Component{
    state={
        isLoading: false
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                isLoading: !this.state.isLoading
            })
        }, 2000);
    }

    render(){
        return <p>组件A</p>
    }
}