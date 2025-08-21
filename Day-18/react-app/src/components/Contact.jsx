import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState('');
    const [names, setNames] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        setNames([...names, data]);
        setData('');
        // console.log(names)

    }
    // function handleChange(e) {
    //     setData(e.target.data);
    // }
    return (
        <div>
            <h1>This is contacat page</h1>
            <form action="">
                Name: <input type="text" placeholder='Enter your name' required value={data} onChange={(e)=>setData(e.target.value)}/>
                <button type='submit' onClick={handleSubmit}>submit</button>
            </form>
            <h3>data avalable</h3>
            <ul>
                {names.map((items, i) => (
                    <li key={i}>{items}</li>
                ))}
            </ul>

        </div>
    );
}

export default Contact;
