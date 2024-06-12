import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const Details = ({people}) => {

    const {store, actions}  = useContext(Context)
    const {user, getUser} = useState('');

        return (
            <div className='container'>
            <div className='card d-flex'>
                <div>
                    <card name= {name}/>
                </div>
            </div>
          </div>
        )
}

export default Details;