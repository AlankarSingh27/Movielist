import React,{useState} from 'react';
import data from './data.json';
// import image1 from '../newton/images/Avenger.jpg'

function App(){
   
   
    return(
      <>
         <div className="container "style={{border:"1px solid black"}} >
            <nav className="navbar bg-dark text-white">
                <h2>
                    Movie list
                </h2>
            </nav>
          
            <div className="d-flex flex wrap overflow-auto" style={{height:"500px"}}>
               {
                data.map(category=>
                    <div className="card p-2 m-2 w-25">
                        <img src={category.img.src} cardName="card-img-top" height="150px" />
                        <div className="card-header d-flex flex wrap">
                            <h4>#{category.id}- {category.title} ({category.year})</h4>
                        </div>
                        <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Distributor:{category.distributor}</li>
                        </ul>
                        </div>
                        <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Amount:<p>{category.amount}</p></li>
                        </ul>
                        </div>
                        
                    </div>
                        )
               }
            </div>
        </div>


      </>
        
        

    
    )
}
export default App;
