import {useState}from "react"
import NewInfo  from "./Newinfo"


const Info = ()=>{
    const [change, setChange]=useState(false);
    const applyChange=()=>{
    setChange(!change);
    console.log(change)           
};
return(
    <div>
      {change ? null : (
          <div> 
              <h1>this is the info</h1>
              <h3>get ready for more</h3>
              <button onClick={applyChange}>view more</button>
              </div>
      )}
      <NewInfo 
      change={change}
      setChange={setChange}
      applyChange={applyChange}
      />
    </div>
 )
}
export default Info;