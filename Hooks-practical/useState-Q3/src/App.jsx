import React , {useState} from "react";

const App = () => {


  const [value , setValue] = useState('');
  const [list , setList] = useState([]);

  let onChangeHandle = (e)=>{ 
   setValue(
       e.target.value
    )
  }

  
  let handleAdd = () =>{
     setList([...list , value ])
     setValue('')
  }

  let handleDelete = (index) =>{
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);

  }






  return (
    <>
      <div>
        <input type="text" 
        value={value}
        onChange={onChangeHandle}
        placeholder="put task here" />

        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        <ul>
            {
              list.map((item , index)=>(
                   <li key={index}>
                    {item}

                    <button onClick={()=>handleDelete(index)}>
                      delete
                    </button>
                   </li>
              ))
            }
        </ul>
      </div>
    </>
  );
};

export default App;
