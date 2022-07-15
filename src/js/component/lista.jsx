import React from "react";



const Lista = ({history,borrar}) =>{
  
     return(
        
     <ul className="list-group ">
     {history.map( (h,index) => {return<li className="list-group-item" key={index}>{h.label}<button type="button" className="btn-close" aria-label="Close"onClick={()=>borrar(h)}></button></li> })}
     
 </ul>)

 
    
 

}
export default Lista