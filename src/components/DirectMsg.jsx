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
import logo from ".././assets/logo.png";
import search from ".././assets/SearchWhite.png";
import mathlogo from ".././assets/PlusMath.png";
import notification from ".././assets/Notification.png";
import user from ".././assets/user.png";
import { UserChat } from "./UserChat";
import { useDisclosure } from '@chakra-ui/react';
import { SearchInputBox } from './SearchInputBox';
import { UserRequestButtton } from './UserRequestButton';
import { NotificationPage } from './NotificationPage';

export function DirectMsg(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <div className="text-4xl font-bold pt-6 bg-secondary">
        <img className="h-[90px] my-5 ml-7 mb-8" src={logo}/>
            <div className="flex flex-wrap mx-6 mt-8 mb-4">
                <h1 className="text-text bg-secondary text-2xl font-medium ml-4 mt-2">
                    Direct Messages
                </h1>
                <button onClick={onOpen}>
                    <img className="h-[22px] ml-4 mt-4" src={mathlogo}/>
                </button>
                <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' className='bg-background text-text border-none'>
                        <div className='flex flex-wrap mt-3'>
                            <p className='w-4/5 ml-3'>
                                Search 
                            </p>
                            <img src={search}/>
                        </div>
                    </DrawerHeader>
                    <DrawerBody className='bg-background'>
                        <div>
                            <SearchInputBox placeholder={'Search an ID/Name'}/>
                            <UserRequestButtton label={'Request a Project Collab'}/>
                            <UserRequestButtton label={'Request to send message'}/>
                        </div>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="bg-primary mx-6 h-[400px]">
                <UserChat label={'Friend 1'}/>
                <UserChat label={'Friend 2'}/>
                <UserChat label={'Friend 3'}/>
            </div>
            <div>
                <NotificationPage/>
            </div>
    </div>
}