import React from 'react'
import { iconUrlFromCode } from '../services/weatherServices'
                                    
//Forecast fonksiyonu havanın bulutlu,yağmurlu vb. durumları, duruma karşılık gelen ikonları, hava durumun günlük ve saatlik olacak şekilde ekrana gösterir
//"items.map" kısmı ise verileri tek tek yazmak yerine bi döngü içine alıp ekrana yazdırır

function Forecast({title,items}) {
  return (
    <div>
      <div className=' flex  items-center justify-center mt-6'>
        <p className='text-white font-medium uppercase'>{title} </p>
      </div>
      <hr  className=' my-2'/>
      <div className='flex flex-row items-center justify-between text-white'>
      {items.map(item=>(
        

        <div className='flex flex-col items-center  justify-center'>
    <p className=' font-light text-sm'>{item.title} </p>
        <img src={iconUrlFromCode(item.icon)} alt="" className='w-12 my-1'/>
        <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
     </div>

        
      ))}
   
     

      </div>
    </div>
  )
}

export default Forecast
