import React, { useState } from 'react'
import load from '../components/load.gif'
import './Navbar.css'
const Navbar = () => {

    const [dataFetch, setDataFetch] = useState();
    const [users, setUsers] = useState();
    const [clicked, setClicked] = useState();

    const user = async () => {
        setClicked(true);

        const response = await fetch("https://reqres.in/api/users?page=1");

        const JsonResponse = await response.json();

        setUsers(JsonResponse.data);
        setInterval(() => {
            setDataFetch(true);
        }, 3000)
    }
    return (
        <div>
            <nav className="navbar">
                <p className="logo"><b> Expo</b></p>
                <button className="btnuser" onClick={user}><b>Get Users</b></button>
            </nav>

            {
                clicked ? (
                    dataFetch ? (
                        <div className="card-main-container" style={{ backgroundColor: ' #FDAC53' }}>

                            {
                                users.map(({ id, first_name, last_name, avatar, email }) => {
                                    return (
                                        <div className="card-container">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="usercontent" key={id}>
                                                    <div className="box">
                                                        <img src={avatar} className="userimage" />

                                                    </div>

                                                    <div className="info-box">
                                                        <h4 className="username">{first_name}{last_name}</h4>
                                                        <p className="useremail">{email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    ) : (
                        <div className="loading" style={{ textAlign: 'center', marginTop: '100px' }}><img src={load} alt="loading image"></img></div>
                    )

                ) : (
                    <div><body></body></div>
                )
            }
        </div>
    )
}

export default Navbar
