import { Menu } from 'lucide-react'
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from './sidebar'


const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
            <Menu />
        </SheetTrigger>
        <SheetContent className='p-0' side={"left"}>
            <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar