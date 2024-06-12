import React from "react";

const Card = (name) => {
    const { store, actions } = useContext(context)
    const {user, getUser} = useState('')
    handleSelect = e => {
        e.preventDefault()
        actions.getCharacter()
    }
    

    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body d-flex">
                <div className="conatainer">
                    <img src="" alt="" />
                    alt = {name}
                </div>
                <figure>
                    <div className="conatainer">
                        <p>name: {name} </p>
                    </div>
                </figure>
                <button onClick={handleSelect}>get Character</button>
            </div>
        </div>
    )
}

export default Card