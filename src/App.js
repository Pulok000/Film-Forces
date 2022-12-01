
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  // Summary:
  // Component
  // state
  // props

  // component:
  const Person = (props) =>{
    return (
      <>
      
      <h1>Name: {props.name}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
      
      </>
    )
  }
  // state
  const [counter,setCounter]=useState(0);

  useEffect(()=>{
    alert("counter change to:"+counter);
  },[counter]);

  const name='CodeDaddy';
  const isNameShowing=true;
  return (
    <div className="App">

      {/* use of state */}

      <button onClick={()=>setCounter((preCount)=>preCount-1)}>-</button>
      <h1> {counter} </h1>
      <button onClick={()=>setCounter((preCount)=>preCount+1)}>+</button>



      <h1>Hello World {isNameShowing ? name: "Poka"}</h1>
    {name ?(<>
      <h1>{name}</h1> 
    </>
    ):(<>
      <h1>No</h1> 
      <h2>Name</h2> 
        
    </>)
    }
        {/* props  */}
        <Person name='Pulok Ahmed' 
        position='Founder'
        company='LionKing ltd' 
        />

        <Person name='CodeDaddy' 
        position='Founder'
        company='CFORCE ltd' 
        />

        <Person name='Poka' 
        position='Founder'
        company='HotForce ltd' 
        />





    </div>
  );
}

export default App;
