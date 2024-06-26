import './CSS/Todoitems.css'
import tick from './Assets/Assets/tick.png'
import not_tick from './Assets/Assets/not_tick.png'
import cross from './Assets/Assets/cross.png'

const Todoitems = ({no,display,text,setTodos}) => {

  const deletetodo=(no)=>{
    let data=JSON.parse(localStorage.getItem('todos'));
    data=data.filter((todo)=> todo.no!==no)
    setTodos(data);
  }
  
  const toogle=()=>{
    let data=JSON.parse(localStorage.getItem('todos'));
    for(let i=0;i<data.length;i++)
    {
      if(data[i].no==no)
      {
        if(data[i].display=='')
        {
          data[i].display='line-through';
        }
        else{
          data[i].display='';
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toogle(no)}}>
        {display==''?<img src={not_tick}/>: <img src={tick}/>}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-crossicon" onClick={()=>{deletetodo(no)}} src={cross}/>
    </div>
  )
}

export default Todoitems