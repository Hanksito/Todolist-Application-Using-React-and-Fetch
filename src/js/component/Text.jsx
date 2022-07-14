import React from "react";


const Text = ({val,setVal,setHistory,history,get,put}) =>{
	
    return(
     <div>
      <h1 className="fw-lighter">Todos</h1>
      <input type="text" onChange={(e) =>{ setVal(e.target.value)}} placeholder=" Introduce tu texto aqui"value={val} onKeyDown={
				(e) => {
					let arr= Array.from(e.target.value)
					let filterarr = arr.filter(caracters => caracters !== " ")
					if(e.key === 'Enter' && filterarr.length !== 0 && e.target.value !== ""){
						put(e.target.value)
						setVal("");
							}}}/>
    </div>  )
 }
 export default Text;