import {Badge, Box, Button, Flex, Text} from '@chakra-ui/react'
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons'
import dayjs from 'dayjs'
import {useContext} from 'react'

import Context from '../Context.jsx'

export function LaunchCard(launch) {
    const { setActiveLaunch, onOpen } = useContext(Context)

    function handleClick(launch) {
        setActiveLaunch(launch)
        onOpen()
    }

    return (
        <Box
            key={launch.id}
            bgGradient='linear(to-b, #E0EAFC, #CFDEF3)'
            borderRadius={4}
            p={4}
            m={4}
        >
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='5' px='2' colorScheme={launch.success ? 'green' : 'red'}>
                    {launch.success ? 'SUCCESS' : 'FAILED'}
                </Badge>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                    Flight Number &bull; #{launch.flight_number}
                </Box>
            </Box>
            <Text as='b' fontSize='xl' color={'gray.700'}>{ launch.name }</Text>
            <Box
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                {launch.details}
            </Box>
            <Box mt={1}>
                <Flex align='center'>
                    <CalendarIcon mr={1} w={3} h={3} color={'gray.600'} />
                    <Text fontSize='xs' color={'gray.600'}>
                        { dayjs(launch.date_utc).format('DD/MM/YYYY') }
                    </Text>
                </Flex>
            </Box>
            <Button
                bgGradient='linear(to-r, teal.500, green.500)'
                _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)',
                }}
                onClick={() => handleClick(launch)} rightIcon={<ArrowForwardIcon />} colorScheme='blue' size='sm' mt={3}>
                More Details
            </Button>
        </Box>
    )
}