import React from 'react'
import CatsContainer from '../Containers/CatsContainer.js'
import CatFilterContainer from '../Containers/CatFilterContainer.js'
import CatSearch from '../Components/CatSearch.js'

class CatPage extends React.Component{
    state = {
        allCats: [],
        searchValue: " ",
    }

    fetchCats = () =>{
        fetch("http://localhost:3000/cats")
        .then(resp => resp.json())
        .then(data => this.setState({ allCats:data }))
    }

    componentDidMount(){
        this.fetchCats()
    }

    changeHandler = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    filteredCats = () => {
        return this.state.allCats.filter(cat => cat.about.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
    render(){
        return(
            <>
            <CatsContainer allCats={this.filteredCats()}/>
            <CatFilterContainer allCats={this.filteredCats()} />
            <CatSearch searchValue={this.state.searchValue} changeHandler={this.changeHandler} />
            </>
        )
    }
} 

export default CatPage