import React , {useEffect} from 'react';

const Discover = () => {
    
    useEffect(()=>{
        var idA = document.getElementById('discover');
        setTimeout(()=>{
            idA.classList.remove('opacity-0');
            idA.classList.add('opacity-1');
        },500)
    },[]);

  return (
    <div className="opacity-0 transition-all linear delay-100 p-5 font-bold text-center" id="discover">discover</div>
  );
}

export default Discover;
