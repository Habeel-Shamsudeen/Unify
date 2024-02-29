import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import notification from ".././assets/Notification.png";
import user from ".././assets/user.png";
import dot from ".././assets/dot.png";

export function NotificationPage(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <div className='flex flex-wrap justify-center gap-20 mt-[40px]'>
    <img className='size-12' src={user}/>
    <button onClick={onOpen}>
        <img className='size-14 flex items-center' src={notification}/>
    </button>
    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
    <DrawerHeader borderBottomWidth='1px' className='bg-background text-text border-none'>
        <div className='flex flex-wrap mt-3'>
            <p className='w-4/5 ml-3'>
                Notification 
            </p>
        </div>
    </DrawerHeader>
    <DrawerBody className='bg-background text-text'>
        <div className='flex flex-wrap p-4'>
            <img className='m-2' src={dot}/>
            <p className='text-sm mt-[3px] ml-3'>New Notification</p>
        </div>
        <div className='flex flex-wrap p-4'>
            <img className='m-2' src={dot}/>
            <p className='text-sm mt-[3px] ml-3'>New Notification</p>
        </div>
        <div className='flex flex-wrap p-4'>
            <img className='m-2' src={dot}/>
            <p className='text-sm mt-[3px] ml-3'>New Notification</p>
        </div>
    </DrawerBody>
    </DrawerContent>
</Drawer>
</div>
}