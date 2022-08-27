import React from 'react'
import { Box, Image, Text, Flex, Button } from '@chakra-ui/react'
export const Home = () => {
    return (
        <div>
            <Box marginLeft='10%' marginTop={5}>
                <Image boxSize='90%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw32f3ac58/images/Fall2022/cndl_pumpkinbreadth_fa1_hm.gif?yocs=s_' alt='poster' />
                <Box textAlign='center' mt='5'>
                    <Text fontSize='2xl' fontWeight='bold' textAlign='center'>TODAY'S TOP OFFERS</Text>
                    <Flex justifyContent='space-evenly' mt='2'>
                        <Box bg='#f2f2f2' p='5' textAlign='center'>
                            <Text fontSize='md' textAlign='center'>All 3 Wick Candles</Text>
                            <Text fontSize='md' fontWeight='bold' textAlign='center'>$10 Off</Text>
                            <Button bg='black' color='white'>SHOP</Button>
                        </Box>
                        <Box bg='#f2f2f2' p='5' textAlign='center'>
                            <Text fontSize='md' textAlign='center'>Hand Soaps New pack</Text>
                            <Text fontSize='md' fontWeight='bold' textAlign='center'>5/$25</Text>
                            <Button bg='black' color='white'>SHOP</Button>
                        </Box>
                        <Box bg='#f2f2f2' p='5' textAlign='center'>
                            <Text fontSize='md' textAlign='center'>Hand Sanitizers 5-Packs</Text>
                            <Text fontSize='md' fontWeight='bold' textAlign='center'>$8</Text>
                            <Button bg='black' color='white'>SHOP</Button>
                        </Box>
                        <Box bg='#f2f2f2' p='5' textAlign='center'>
                            <Text fontSize='md' textAlign='center'>Wallflower Fragrance</Text>
                            <Text fontSize='md' fontWeight='bold' textAlign='center'>5/$25</Text>
                            <Button bg='black' color='white'>SHOP</Button>
                        </Box>
                    </Flex>
                </Box>
                <Box mt='5'>
                    <Image width='90%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwad656e28/images/Fall2022/boc-launch-prospects_hb_0.jpg?yocs=s_' alt='poster' />
                </Box>
                <Box mt='5'>
                    <Image width='90%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2fc3d99/images/Fall2022/650at_fa1_hm_0.jpg?yocs=s_' alt='poster' />
                </Box>
                <Box mt='5' ml='-5%' mr='5%'>
                    <Text fontSize='2xl' fontWeight='bold' textAlign='center'>SHOP BY CATEGORY</Text>

                    <Flex>
                        <Box>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw415d6bf8/images/Fall2022/bc_midamber_sfl_fa1_vn2.jpg?yocs=o_s_' alt='product' />
                            <Text fontWeight='bold' textAlign='center' Text decoration='underline'>Body Care</Text>
                        </Box>
                        <Box>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc2ca0b55/images/Fall2022/cndl_roadtrip_fa1_vn.jpg?yocs=o_s_' alt='product' />
                            <Text fontWeight='bold' textAlign='center' Text decoration='underline'>Candles</Text>
                        </Box>
                        <Box>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf6577e0c/images/Fall2022/diff_Ingredient_fa1_vn.jpg?yocs=o_s_' alt='product' />
                            <Text fontWeight='bold' textAlign='center' Text decoration='underline'>WallFlowers</Text>
                        </Box>
                        <Box>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw806578a9/images/Fall2022/sp_roadtrip_decor_fa1_vn.jpg?yocs=o_s_' alt='product' />
                            <Text fontWeight='bold' textAlign='center' Text decoration='underline'>Hand Soaps</Text>
                        </Box>
                        <Box>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc728cf91/images/Fall2022/bc_at_sanctuary_fa1_vn2.jpg?yocs=o_s_' alt='product' />
                            <Text fontWeight='bold' textAlign='center' Text decoration='underline'>Aromatherapy</Text>
                        </Box>
                        <Box>
                            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5a02a7ff/images/Fall2022/bc_ingredientled_fa1_vn2.jpg?yocs=o_s_' alt='product' />
                            <Text fontWeight='bold' textAlign='center' Text decoration='underline'>Men's</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box mt='5' textAlign='center'>
                    <Text fontSize='2xl' fontWeight='bold' textAlign='center'>NEW Midnight Amber Glow</Text>
                    <Text fontSize='l' textAlign='center'>Our unique blend of smooth amber, vanilla bourbon and caramel latte is so rich, you can almost taste it.</Text>
                    <Button bg='black' color={'white'} mt='2'>Shop The Collection</Button>
                </Box>
                <Flex mt='5%'>
                    <Image ml='-5%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2209c56/images/Fall2022/bc_midamber_sfl_fa1_atb.jpg?yocs=o_s_' alt='' />
                    <Box ml="8%" mt='5%'>
                        <Image w='50%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8787746d/crop/026553000_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_' alt='product' />
                        <Text color='#005699' fontWeight={'bold'}>New Fragrance</Text>
                        <Text fontWeight={'bold'}>Mid Night Amber Glow</Text>
                        <Text>3-Wick candle</Text>
                        <Text fontWeight={'bold'} >$25.50</Text>
                        <Button bg='black' color='white'>Add To Bag</Button>
                    </Box>
                    <Box ml="8%" mt='5%'>
                        <Image w='50%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8787746d/crop/026553000_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_' alt='product' />
                        <Text color='#005699' fontWeight={'bold'}>New Fragrance</Text>
                        <Text fontWeight={'bold'}>Mid Night Amber Glow</Text>
                        <Text>3-Wick candle</Text>
                        <Text fontWeight={'bold'} >$25.50</Text>
                        <Button bg='black' color='white'>Add To Bag</Button>
                    </Box>
                </Flex>
                <Flex mt='5%' gap='5%' textAlign={'center'}>
                    <Box>
                        <Image ml='-10%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw48de6656/images/Fall2022/xcat_fall_pumpkin_fa1_hps.jpg?yocs=o_s_' alt='poster' />
                        <Box mt='2%'>
                            <Text textAlign={'center'} >From late summer to early fall,you just have to try it all.</Text>
                            <Text textAlign={'center'} >Your fragrance adventure starts now.</Text>
                            <Text textAlign={'center'} text decoration={'underline'} fontWeight='bold'>Shop The Collection</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Image ml='-10%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw79491a41/images/Fall2022/bc_at_sanctuary_fa1_hps.jpg?yocs=o_s_' alt='poster' />
                        <Box mt='2%'>
                            <Text textAlign={'center'}>Open your mind,refresh your body and cleanse yours split --</Text>
                            <Text textAlign={'center'} >Your new sanctuary awaits.</Text>
                            <Text textAlign={'center'} text decoration={'underline'} fontWeight='bold'>Shop The Collection</Text>
                        </Box>
                    </Box>
                </Flex>
                <Box>
                    <Image ml='-5%' mt='5%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfd31720e/images/Summer2022/xcat_halloween_su3_hb.jpg?yocs=s_' alt='poster' />
                </Box>
                <Flex mt='5%' ml="-5%" fontWeight='bold' >
                    <Box>
                        <Image w='70%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_' alt='icon' />
                        <Text text decoration={'underline'} textAlign={'center'}>Shop-It's fast,easy,free</Text>
                    </Box>
                    <Box>
                        <Image w='70%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_' alt='icon' />
                        <Text text decoration={'underline'} textAlign={'center'}>Sign up for texts</Text>
                    </Box>
                    <Box>
                        <Image w='70%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_' alt='icon' />
                        <Text text decoration={'underline'} textAlign={'center'}> Sign up for emails</Text>
                    </Box>
                    <Box>
                        <Image w='70%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_' alt='icon' />
                        <Text text decoration={'underline'} textAlign={'center'}>Check out auto refresh</Text>
                    </Box>
                    <Box>
                        <Image w='70%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_' alt='icon' />
                        <Text text decoration={'underline'} textAlign={'center'}>Join the VIPs</Text>
                    </Box>
                    <Box>
                        <Image w='70%' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_' alt='icon' />
                        <Text text decoration={'underline'} textAlign={'center'}>See our return policy</Text>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}


