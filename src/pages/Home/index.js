import {React,useState} from "react"
export default function Home(){
    const [count,setcount] = useState(0)
    function handleClick(){
        return setcount(count+1)
    }
    return(
        <>
            <h2>HOME PAGE</h2>
            <p>Tăng số lên 1 khi click: {count}</p>
            <button onClick={handleClick}>Click</button>
        </>
    ) 
}