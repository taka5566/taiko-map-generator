import React from 'react'

const HowTo = () => {
  return (
    <div className='text-3xl p-10 flex '>
       <p className='text-center leading-loose'>
       How to import:<br/>
       Visit <a href='https://taiko.ani-nya.com/' className='text-cyan-500'>Taiko Web</a><br/>
       Import by clicking this button:
       <img src={require('./assets/howTo.png')}></img>
       Choose the generated file, and added map will appear!
       </p>
    
    </div>
  )
}

export default HowTo