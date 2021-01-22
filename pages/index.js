import {useState} from 'React';

function Contador(){
    const [contador,setContador] = useState(1);
    
    function adicionaContador()
    {        
        setContador(contador+1);
    }

    return (        
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}> adicionar </button>
        </div>
    )
}
function Home(){    
    return ( <Contador/>) ;    
}

export default Home