import React from 'react'
import { Searchbox } from '../../common/searchbar/Searchbox'
import { Adduser } from './Adduser'
import { Usertable } from './Usertable'

export const UserManagement = () => {
  return (
   <div className="h-100 overflow-hidden flex flex-col">
       <div className="flex justify-between items-center px-0 py-2">
        <Searchbox />
     <Adduser />
       </div>
   <Usertable />
     </div>
  )
}
