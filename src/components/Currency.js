import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  
    const {dispatch } = useContext(AppContext);
    
    const changeCurrency = (val)=>{

            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-success'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value='$' className='alert alert-success'>$ Dollar</option>
        <option value="£" className='alert alert-success'>£ Pound</option>
        <option value="€" className='alert alert-success'>€ Euro</option>
        <option value="₹" className='alert alert-success'>₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};
export default Currency;