

import React from 'react';
import { useErrorCount } from '../../hooks/useErrorCount';

const DisenioEspera = () => {

   const { timer } = useErrorCount();
   console.log(timer)

    return (
        <div className='contLoaderTimer'>

        <div className='loader'>
        </div>

       <p>
          It will be redirected in {timer} seconds
        </p>
            
        </div>
    );
}

export default DisenioEspera;
