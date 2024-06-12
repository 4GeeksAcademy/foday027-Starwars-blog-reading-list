import React from 'react';

const Character = () => {
    const { store, actions } = useContext(context)
    const {user, getUser} = useState('')
    handleSelect = e => {
        e.preventDefault()
        actions.getCharacter()
    }
    return (
        <div>Character
            <form onSubmit={e => handleSelect(e)} className='form-control'></form>
            <p>get Character</p>
            <input onChange={e => setUser(e.target.value)} type='text' value={{user}}/>
            <button type='submit'></button>
        </div>
    )
}

export default Character;