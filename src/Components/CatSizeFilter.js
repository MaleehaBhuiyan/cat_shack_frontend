import React from 'react'


class CatSizeFilter extends React.Component{
    state = {
        showMenu: false
    }

    showMenu = (e) => {
        e.preventDefault()
        this.setState({ showMenu: !(this.state.showMenu) })
    }
    render(){
        return(
            <>
            <div>
                <button className="filterButton"onClick={this.showMenu}>
                    Size
                </button>
            </div>

            {
                this.state.showMenu
                ? (
                    <div className="menu">
                        <button className="filterOption"> Old Cat </button>
                        <br/>
                        <button className="filterOption"> Adult Cat </button>
                        <br/>
                        <button className="filterOption"> Kitten </button>
                    </div>
                )
                : (
                    null
                )
            }
            </>
        )
    }
}

export default CatSizeFilter