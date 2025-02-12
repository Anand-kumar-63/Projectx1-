import React from 'react'
import Buttonlist from "./Buttonlist";
import VedioContainer from './VedioContainer';

const MainContainer = () => {
  return (
    <div className='flex flex-col w-[1320px] mt-4 '>
     <Buttonlist />
     <VedioContainer />
    </div>
  )
}

export default MainContainer;