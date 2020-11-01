import React from 'react'
import Cats from '../Components/Cats.js'
import CatFilter from '../Components/CatFilter.js'
import CatSearch from '../Components/CatSearch.js'

class CatContainer extends React.Component{
    state = {
        allCats: [],
        searchValue: " "
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
    

    render(){

        let cats = this.state.allCats.map(cat => {return <Cats key={cat.id} name={cat.name} img={cat.img} />})


        return(
            <>
            <div id="mainCatsDiv">
                {cats}
            </div>
            <CatFilter />
            <CatSearch />
            </>
        )
    }
} 

export default CatContainer