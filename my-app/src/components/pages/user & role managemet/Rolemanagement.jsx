import React from 'react'
import { Searchbox } from '../../common/searchbar/Searchbox'
import StickyHeadTable from '../../common/table/Table';
import { AddRole } from './AddRole';
import { Rolestable } from './Rolestable';
export const Rolemanagement = () => {
  return (
    <div className="h-100 overflow-hidden flex flex-col">
    <div className="flex justify-between items-center px-0 py-2">
      <Searchbox />
       <AddRole />
    </div>
    <div className="flex-1 overflow-auto px-0 pb-4">
     <Rolestable />
    </div>
  </div>
  
  )
}
