import React , {useEffect} from 'react'
import Usetitle from '../../hooks/useTitle';

const Reels = () => {

    useEffect(()=>{
        Usetitle('Reels');
        var idA = document.getElementById('reels');
        setTimeout(()=>{
            idA.classList.remove('opacity-0');
            idA.classList.add('opacity-1');
        },500)
    },[]);

  return (
    <div className="opacity-0 transition-all linear delay-100 p-5 font-bold text-center" id="reels">
      Reels
    </div>
  )
}
export default Reels;