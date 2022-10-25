import React,{useState} from 'react'
import data from './AccordionData'

const Accordion = () => {
    const [selected, setSelected]=useState(null)

    const toggle=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <div className='wrapper'>
        <div className='accordion'>
        {data.map((item,i)=>(
            <div className='item'>
            <div className='title' onClick={()=>toggle(i)} >
             <h> {item.question}</h>
             <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}</div>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Accordion
        