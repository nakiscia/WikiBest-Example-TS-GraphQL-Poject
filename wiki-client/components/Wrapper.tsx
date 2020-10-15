import React from 'react';
import {Box} from '@chakra-ui/core'

interface wrapperProps{

}

const Wrapper: React.FC<wrapperProps> = ({children}) =>{

    return (
        <Box maxW="800px" mx="auto" mt="20px" w="100%">{children}</Box>
    );
}

export default Wrapper;