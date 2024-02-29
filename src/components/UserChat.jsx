import user from ".././assets/user.png";
import sent from ".././assets/Sent.png";
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
import { UserText } from "./UserText";

export function UserChat({label}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <div className= "p-3 flex flex-wrap ml-2 mt-2">
        <img className="size-10" src={user}/>
        <button className="text-text text-2xl font-light ml-4" onClick={onOpen}>
            {label}
        </button>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerHeader borderBottomWidth='1px' className='bg-background text-text border-none'>
                <h1 className="ml-5 text-2xl">Chat</h1>
            </DrawerHeader>
            <DrawerBody className='bg-background text-text'>
                <div className="flex flex-col">
                    <UserText label={label} msg={'Hello'}/>
                    <UserText label={'You'} msg={'Hey there !!'}/>
                    <div className="flex flex-auto justify-between bg-text m-4 h-14 rounded-2xl p-3">
                        <input placeholder="Type your message..." className="bg-text text-secondary w-[1300px] focus:ring-text" />
                        <img src={sent} className="flex justify-end"/>
                    </div>
                </div>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
}
