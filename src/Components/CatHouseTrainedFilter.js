import React from 'react'


class CatHouseTrainedFilter extends React.Component{
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
                    House Trained
                </button>
            </div>

            {
                this.state.showMenu
                ? (
                    // <div>
                    //     <button className="filterOption"> Old Cat </button>
                    //     <br/>
                    //     <button className="filterOption"> Adult Cat </button>
                    //     <br/>
                    //     <button className="filterOption"> Kitten </button>
                    // </div>
                    <div className="checkboxes">
                    <label for="x"><input type="checkbox" id="x" /> <span>Yes</span></label>
                    <br/>
                    <label for="y"><input type="checkbox" id="y" /> <span>No</span></label>
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

export default CatHouseTrainedFilter