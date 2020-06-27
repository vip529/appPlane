import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles/headerStyle.css';

const HeaderComp = () => {
    // const [state, setstate] = useState('');

    useEffect(() => {
        const navItems = document.querySelectorAll('.nav-wrapper');
         navItems.forEach(item => {
            item.addEventListener('mouseenter', hoverin);
            item.addEventListener('mouseleave', hoverout);
         })
        }, [])


    const hoverin  =(event) => {
        const { children } = event.target;
        children[1].style.transform="translate(60px, 30px)"
        children[2].style.transform="translate(120px, 60px)"
      }
    
    const hoverout = (event) => {
        const { children } = event.target;
        children[1].style.transform="translate(0, 0)"
        children[2].style.transform="translate(0, 0)"
      }
    return (
        <div className='navbar' >
        <Link to='/'>
          <div className='nav-wrapper'>
            <p className='overlap text'>AppPlane</p>
            <p className='overlap text2'>AppPlane</p>
            <p className='overlap text3'>AppPlane</p>
          </div>
          </Link>

          <Link to='/gitscout'>
          <div className='nav-item nav-item__grey'>
            Git Scout
          </div>
          </Link>

          <Link to='/card'>
          <div className='nav-item nav-item__b'>
            Get a Card
          </div>
          </Link>

          <Link to='/image'>
          <div className='nav-item nav-item__p'>
            Image Effects
          </div>
          </Link>

          

        </div>
    )
}

export default HeaderComp;