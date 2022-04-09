import React , {useEffect} from 'react';
import Usetitle from '../../hooks/useTitle';

const Igshop = () => {
    
    useEffect(()=>{
        Usetitle('IG Shop');
        var idA = document.getElementById('igshop');
        setTimeout(()=>{
            idA.classList.remove('opacity-0');
            idA.classList.add('opacity-1');
        },500);

    },[]);

  return (
    <div className="opacity-0 transition-all linear delay-100 p-5 font-bold text-center" id="igshop">iG Shop</div>
  );
}

export default Igshop;
