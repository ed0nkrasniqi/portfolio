import { useState } from 'react'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className='ml-10 mt-5' onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
                    <path d="M0 0h24v24H0V0z" fill="#000"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
                    <path d="M0 0h24v24H0V0z" fill="#000"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            )}
            { isOpen && (
                <div className=''>
                <a className='block text-white' href="#">Home</a>
                <a className='block text-white' href="#">About</a>
                <a className='block text-white' href="#">Info</a>
                </div>

            )}
        </div>
    )
}
