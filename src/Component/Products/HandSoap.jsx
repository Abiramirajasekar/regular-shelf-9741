import React, { useEffect, useState } from 'react'
import getValue from '../Api/api2'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Grid,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export const HandSoap = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("DESC")
  const [loading, setLoading] = useState(false);
  function handleData(page, sort) {
    setLoading(true);
    getValue({
      page: page,
      limit: 4,
      sort: "price",
      order: sort
    })
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .then(err => {
        console.log(err)
      })
  }
  console.log(data)
  useEffect(() => {
    handleData(page, sort)
  }, [page, sort])


  return (
    <div>  <Grid templateColumns='repeat(3, 1fr)' mt="10%" >
      {data.map((el) => (<div key={el.id} >

        {/* <EmployeeName name={el.name} />
                <EmployeeSalary key={el.id} salary={el.salary} /> */}


        <Center py={12} ml='10%' mt='5%'>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            // bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                // backgroundImage: `url(${el.url})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                // ml='25%'
                rounded={'lg'}
                w='full'
                h='full'
                objectFit={'cover'}
                src={el.url}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {el.title}
              </Text>
              <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                {el.sub}
              </Heading>
              <Stack direction={'row'} textAlign={'center'}>
                <Text fontWeight={300} fontSize={'m'} color='teal.600'>
                  {el.des}
                </Text>
                <Text textDecoration={'line-through'} color={'red.600'}>
                  {el.Price}
                </Text>

                <Text fontWeight='bold' color={'gray.600'}>
                  {el.Price1}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Box>
          <Link to='/cart'>  <Button ml='30%' bgColor={'black'} color='white' textAlign={'center'}>Add To Cart</Button></Link>
        </Box>
      </div>))} </Grid>
    </div>
  )
}
