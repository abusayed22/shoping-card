import React from 'react'

function Button({ he, wd, bc, arr }) {
    return (
        <>
            {/* <button className={`   text-violet-500 text-xl hover:transition hover:${text - white}}` > +</ button> */}
            <button className={`w-${wd} h-${he} rounded-full bg-${bc}  hover:text-white hover:transition`}>{arr}</button>
        </>
    )
}

export default Button