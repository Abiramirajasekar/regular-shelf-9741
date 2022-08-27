import React from 'react'
import { Box, Text, WrapItem, Center, Spacer } from '@chakra-ui/react'
// import { SearchIcon } from '@chakra-ui/icons'
export const Footer = () => {
    return (
        <div>
            <Box textAlign='center' mt='5%'>
                <Text fontSize='4xl' fontWeight='400'>Bath & Body Works</Text>
                <WrapItem >
                    <Center w='40%' h='30%' ml='30%' mt='2%'>
                        <Text >Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite discontinued scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions, soaps and candles!</Text>
                    </Center>
                </WrapItem>
            </Box> <Spacer />

        </div >
    )
}
