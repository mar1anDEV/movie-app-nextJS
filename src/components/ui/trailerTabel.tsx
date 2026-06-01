
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface TrailerProp {
    id?: string,
    title?: string,
    onClose: ()=> void
}


function TrailerTabel({id,title,onClose}:TrailerProp) {

    

  return ( <>
    
        <section className='trailer-section fixed inset-0 top-0 z-[999] backdrop-blur-2xl'>
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
            <div className='w-[95vw] xl:w-[50vw] aspect-video'>
            
                <div className='interaction flex justify-between py-2'>
                <h1 className='text-white text-2xl'>{title}</h1>
                <button onClick={onClose} className='p-2 mb-2 rounded-full bg-white cursor-pointer' type='button' aria-label="Close trailer"><FontAwesomeIcon className='text-black text-lg' icon={faXmark} aria-hidden={true}/></button>
            </div>
           
            
                    <iframe
                        width="100%"
                        height="100%"
                        title={`${title} — Trailer`}
                        src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1`}
                        className=''
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
            
            
            
            </div>
        </div>
    </section>
    
  </>)
}

export default TrailerTabel