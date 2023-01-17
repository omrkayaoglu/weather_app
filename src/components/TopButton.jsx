import React from 'react'

//Sayfanın üst kısmında bulunan şehirlerin butonlarını ekledik.
function TopButton({setQuery}) {
 const cities =[

    {
        id:1,
        title:'İstanbul'
    },
    {
        id:2,
        title:'Bolu'
    },
    {
        id:3,
        title:'Tokyo'
    },
    {
        id:4,
        title:'New York'
    },  
    {
        id:5,
        title:'Paris'
    },
    
   
   
   
 ]

    return (
    <div className='flex items-center justify-around my-6'>
    {cities.map((city)=>(<button key={city.id} className='text-white text-lg font-medium'  onClick={() => setQuery({ q: city.title })} >{city.title}</button>))}
      
    </div>
  )
}

export default TopButton
