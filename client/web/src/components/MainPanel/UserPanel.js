import React, {useContext} from 'react';
import {Button, Flex, HStack, Icon, Text, Tooltip} from "@chakra-ui/react";

import { BiLogOut } from "react-icons/bi";
import {QUIZ_TOKEN, QUIZ_TOKEN_REFRESH} from '@utils/common';
import {UserContext} from '@providers/UserProvider';
import {ColorModeSwitcher} from '@components/ColorModeSwitcher';
import {useNavigate} from 'react-router-dom';

const UserBar = ({logout, isFullPanel}) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem(QUIZ_TOKEN);
        localStorage.removeItem(QUIZ_TOKEN_REFRESH);
        logout();
        navigate('login');
    }

    return (
        <Flex alignItems={'center'} gap={'10px'} flexDirection={isFullPanel ? 'row' : 'column'} justifyContent={'center'} zIndex={'108'} spacing={'10px'} right='15px' top='15px'>
            {user.info.name &&
                <Tooltip label={user.info.name}>
                    <Text maxWidth={'250px'} noOfLines={1}><b>Пользователь</b>: {user.info.name}</Text>
                </Tooltip>
            }
            <ColorModeSwitcher />
            {!!localStorage.getItem(QUIZ_TOKEN) && <Button onClick={handleLogout} size={"md"} variant='ghost' pt={"2px"} colorScheme={'red'}><Icon w={"25px"} h={"25px"} as={BiLogOut} /></Button>}
        </Flex>
    );
};

export default UserBar;