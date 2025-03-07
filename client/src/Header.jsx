import React from 'react'
import logo from '/public/pok_logo.png'

const Header = ({ seachPage , token}) => {
    const hendelChange = (e) => {
        seachPage(e.target.value);
    }
    const userlogout = () =>{
        // userdata('')
        token('')
        sessionStorage.setItem('token', '')

    }
    return (
        <>
            <div className='h-20 w-full bg-red-400 flex justify-between align-middle px-2' style={{ alignItems: 'center' }}>
                <div className='h-auto'>
                    <img src={logo} alt="" width={60}/>
                </div>

                <div className='flex' style={{ alignItems: 'center' }}>
                    <div className='seach px-6'>
                        <form action="">
                            <input type="text" className='h-10 w-56 bg-white rounded-sm px-3 outline-0 border border-gray-200' onChange={hendelChange} />
                        </form>
                    </div>
                    {/* <p className='mx-10'>Vankar rahul</p> */}
                    <button className='h-12' onClick={userlogout}>logout</button>
                </div>
            </div>
        </>
    )
}

export default Header