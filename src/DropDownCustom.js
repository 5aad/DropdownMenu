import React,{useEffect,useState} from 'react'
import FontAwesome from 'react-fontawesome';
import './styles/global.sass'

export default function DropDownCustom(props) {
    const list=props.list
    const [location,setLocation]=useState(props.list)
    const [listOpen,setListOpen]=useState(false)
    const [nestlistOpen,setnestListOpen]=useState(false)
    const [nestItem,setNestItem]=useState(React.createRef())
    const [keyword,setkeyword]=useState('')
    const [searchField,setSearchField]=useState( React.createRef())
    const [searchNestField,setSearchNestField]=useState( React.createRef())
    const [close,setClose]=useState(true)
    const [headerTitle,setHeadeTitle]=useState(props.title)

    const toggleItem=(id, key)=>{
        let tempp = list[id]
       
        setNestItem(tempp)
        setnestListOpen(prevState => !prevState)
        setkeyword('')
        let temp = list[id]
        temp.selected = !temp.selected
        list[id]=temp
        console.log(id,key,temp,temp.selected)
        setHeadeTitle(list[id].title)
        setLocation(temp.selected)
        
      }

      const toggleNestList=(id) =>{
        let temp = list[id]
        console.log(temp.students)
        setNestItem(temp)
        setnestListOpen(prevState => !prevState)
        setkeyword('')
        // ()=>{
       
    }
    const toggleList=() =>{
        setListOpen(prevState => !prevState)
        setkeyword('')
        // ()=>{
      //       if (listOpen && searchField.current) {
      //           searchField.current.focus()
      //           setkeyword('')
      //       // }
      // }
    }
    const handleClickOutside=()=>{
        setListOpen(false)
    }
    return (
        <div className="dd-wrapper">
        <div className="dd-header" onClick={toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
        </div>
        {listOpen && <ul className="dd-list">
       {list.map((item) => (
         <li className="dd-list-item" key={item.id} 
         onClick={() =>toggleItem(item.id, item.key)}>
                <div className="dd-header">
                <div className="dd-header-title" >{item.title}</div>
                    {nestlistOpen && nestItem.id==item.id?
                    <ul className="dd-list">
                        {/* {nestItem.map(ite=>
                            {ite.id==item.id?
                            <li>{ite.id}</li>
                            :<li></li>}
                        )} */}
                        
                        {nestItem.students.map(ite=>
                            <li className="dd-list-item">{ite.department}</li>
                            )}
                    </ul>
                    :<ul></ul>}
                </div>
            </li>
        ))}
      </ul>}
      </div>
    )
}

// <ul>
// {item.students.map(it=>
//     <li>{it.department}</li>
//     )}
// </ul>