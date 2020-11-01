import React from 'react'

class CatSearch extends React.Component{
    render(){
        return(
            <>
            <form id="catSearch">
                <input placeholder="Search" value={this.props.searchValue} onChange={this.props.changeHandler} />
            </form>
            </>
        )
    }
}

export default CatSearch


