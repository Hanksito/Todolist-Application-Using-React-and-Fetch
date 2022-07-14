import React,{useState,useEffect} from "react";
import Text from "./Text.jsx";
import Lista from "./lista.jsx";

//include images into your bundle


//create your first component
const Home = () => {
 
  const[history,setHistory]= useState([])
	const [val, setVal] = useState();
  
	const get = ()=>{fetch('https://assets.breatheco.de/apis/fake/todos/user/hanks', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {return resp.json();})
    .then(data => 
    setHistory(data))
    .catch(error => {
        //manejo de errores
        console.log(error)
        
    });}
    const put = ()=>{
      fetch('https://assets.breatheco.de/apis/fake/todos/user/hanks', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify([...history,{label:val,done:false}])
    }).then(resp => {if(resp.ok) get()})
   }
   const putborrar = (arr) =>{
   fetch('https://assets.breatheco.de/apis/fake/todos/user/hanks', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(arr)
  }).then(resp => {if(resp.ok) get()})

   }
    useEffect(() => {
      get()
    },[]);

    const borrar = (item) => {
      let aux = history.filter((elemento) => elemento !=item)
      setHistory (aux);
      putborrar(aux)
    };

    return(
			<div className="container text-center ">
				<Text val={val} setVal={setVal} history={history} setHistory={setHistory} get={get} put={put}/>
				<Lista history={history} borrar={borrar} put={putborrar} get={get}/>
			</div>)
	
    }	
;

export default Home;
