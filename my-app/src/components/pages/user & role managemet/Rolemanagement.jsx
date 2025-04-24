import React from 'react'
import { Searchbox } from '../../common/searchbar/Searchbox'
import { CustomDialog } from '../../common/dialog/CustomDialog ';
import StickyHeadTable from '../../common/table/Table';
export const Rolemanagement = () => {
  return (
    <div className="h-100 overflow-hidden flex flex-col">
    <div className="flex justify-between items-center px-0 py-2">
      <Searchbox />
      <CustomDialog />
    </div>
    <div className="flex-1 overflow-auto px-0 pb-4">
      <StickyHeadTable />
    </div>
  </div>
  
  )
}
