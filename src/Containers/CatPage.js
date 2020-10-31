import React from 'react'
import Cats from '../Components/Cats.js'
import CatFilter from '../Components/CatFilter.js'
import CatSearch from '../Components/CatSearch.js'

class CatContainer extends React.Component{
    state = {
        allCats: []
    }

    fetchCats = () =>{
        fetch("http://localhost:3000/cats")
        .then(resp => resp.json())
        .then(data => this.setState({ allCats:data }))
    }

    componentDidMount(){
        this.fetchCats()
    }

    render(){
        let cats = this.state.allCats.map(cat => {return <Cats key={cat.id} name={cat.name} img={cat.img} />})
        return(
            <>
            <div className="container">
                {cats}
            </div>
            <CatFilter />
            <CatSearch />
            </>
        )
    }
} 

export default CatContainer