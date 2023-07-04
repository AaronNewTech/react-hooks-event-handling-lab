// Code Keypad Component Here

function handleOnChange() {
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={handleOnChange}/>
        </div>
    )
}

export default Keypad;