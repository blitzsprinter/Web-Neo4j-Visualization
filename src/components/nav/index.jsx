import React, {useState} from 'react'
import './style.css'
import {BsArrowLeftRight} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  const [value, setValue] = React.useState('');
  const options = [
    { label: 'EC2', value: 'EC2' },
    { label: 'Subnet', value: 'Subnet' },
    { label: 'AWSZone', value: 'AWSZone' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <nav>
      <a href="#item1" onClick={()=>setActiveNav('#item1')} className={activeNav === '#about' ? 'active' : ''}>
      <label>
        What resource
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      </a>
      <a href="#relationship" onClick={()=>setActiveNav('#relationship')} className={activeNav === '#' ? 'active' : ''}><BsArrowLeftRight/></a>
      <a href="#item2" onClick={()=>setActiveNav('#item2')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
    </nav>
  )
}

export default Nav