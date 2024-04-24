import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-5xl font-semibold'>
            <h1 className='text-secondary a'> 𝓐</h1>
            <h1 className='text-white s'>𝓢</h1>
            <h1 className='text-tertiary r'>𝕽</h1>

        </div>
    </div>
  )
}

export default Loader;