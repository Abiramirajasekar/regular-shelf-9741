import React from 'react'
import { Box, Stack, Text, Flex, Image, Input, Spacer, InputRightElement, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
export const Navbar = () => {
    return (
        <div>
            <Box >
                <Stack  >

                    <Flex gap={3} bg='#e5e5e5' >
                        <Text fontSize='md' color='#e20887'>POINTS. PERKS. EXCLUSIVES.</Text>
                        <Text fontSize='sm' color='#333333' Text decoration='underline'>Join Rewards!</Text>
                        <Spacer />


                        <Flex gap={3} marginRight={50}>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1661420782792/images/svg-icons/bopis-icon-small.svg?yocs=o_s_' alt='location' />
                            <Text fontSize='md' color='#005699'>PICK UP IN STORE</Text>
                            <Text fontSize='sm' color='#333333' Text decoration='underline'>Set Store</Text>
                        </Flex>

                    </Flex>
                </Stack>

                <Flex marginLeft={500} gap={10} marginTop={5} >
                    <Image boxSize='40%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_' alt='logo' />
                    <InputGroup>
                        <Input width={300} bg='#ffffff' fill='#666666' borderColor='#666666' placeholder='Search by fragrance or products...' size='sm' />
                        <InputRightElement pr='5' pb='2' children={<SearchIcon color='#1876a7' />} /></InputGroup>
                    <Image boxSize='10' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw84b3ea83/images/svg-icons/UI-MyAccount.svg?yocs=o_s_' alt='icon' />
                    <Image boxSize='10' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1661507180191/images/svg-icons/UI-AddToBag.svg?yocs=o_s_' alt='cart' />
                </Flex>
                <Flex justifyContent="space-around" marginTop={5}>
                    <Text fontSize='md' color='#333333'>TOP OFFERS</Text>
                    <Text fontSize='md' color='#333333'>BODY CARE</Text>
                    <Text fontSize='md' color='#333333'>CANDLES</Text>
                    <Text fontSize='md' color='#333333'>HOME FRAGRANCE</Text>
                    <Text fontSize='md' color='#333333'>HAND SOAPS & SANITIZERS</Text>
                    <Text fontSize='md' color='#333333'>MEN'S</Text>
                    <Text fontSize='md' color='#333333'>GIFT'S</Text>
                    <Text fontSize='md' color='#cc0000d'>FALL SHOP</Text>
                </Flex>
                <Box>
                    <Flex justifyContent={'space-evenly'} marginTop={2} >
                        <Text fontSize='md' fontWeight='bold' color='#1876a7' >My Bath & Body Works Rewards is now available nationwide!</Text>
                        <Text fontSize='sm' Text decoration='underline' color='#1876a7'>Details</Text>
                    </Flex>
                </Box>

            </Box>
        </div >
    )
}
