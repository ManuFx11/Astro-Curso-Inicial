import {useState} from 'preact/hooks';

export function Counter(){
    //Declaro estado
    const [counter,setCounter] = useState(0);
    return(
        <>  
            <span class="text-yellow-300 text-xl mr-4">{counter}</span>
            <button class="text-white border px-4 py-2 text-xl" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="text-white border px-4 py-2 text-xl" onClick={() => setCounter(counter => counter - 1)}>-</button>
        </>
    )
}