import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Gifts = () => {
    return (
        <div >
            <Box mt='5%' ml='10%' mr='10%'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw16542666/images/Fall2022/xcat_stl-goodforyou_fa1_stl.jpg?yocs=o_s_' alt='poster' />

            </Box>
            <Box mt='5%' ml="5%" textAlign={'center'}>
                <Text color='#6e6c91' fontSize='5xl' fontWeight='400'>THE FRESH START</Text>
                <Text color='#666666' fontSize='2xl'>Gift a handful of wellness from your nature stroll—and so perfect for back to school.</Text>
            </Box>

        </div>
    )
}
