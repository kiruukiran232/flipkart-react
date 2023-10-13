import React from 'react'
import sectionsdata from './sectionsdata'

export default function Sections() {
  return (
    <>
      <div className='sections bg-white'>
        {
            sectionsdata.map((data)=>{
                return(
                    <>
                        <div className='section-div'>
                            <img className='vimg' src={data.link} />
                            <p align={"center"}><b>{data.text}</b></p>
                        </div>
                    </>
                )
            })
        }
      </div>
    </>
  )
}
