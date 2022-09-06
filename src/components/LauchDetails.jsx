import {
    Avatar,
    Badge, Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Highlight, Image, Spinner,
    Text, Wrap, WrapItem
} from '@chakra-ui/react'
import * as dayjs from 'dayjs'
import {useContext, useEffect, useState} from 'react'

import LauchContext from '../Context.jsx'

export default function LaunchDetails() {
    const {isOpen, onClose, activeLaunch} = useContext(LauchContext)
    const [isLoading, setIsLoading] = useState(true)
    const [rocket, setRocket] = useState({
        flickr_images: []
    })

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/rockets/' + activeLaunch.rocket)
            .then((response) => response.json())
            .then(setRocket)
            .then(setIsLoading(false));
    }, [activeLaunch])

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bgColor='#131313'>
                <DrawerHeader>
                    <Heading
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        fontSize='2xl'
                        fontWeight='extrabold'
                        align={"left"}
                        pt={2}
                    >
                        { activeLaunch.name }
                    </Heading>
                </DrawerHeader>
                <DrawerBody>
                    <Badge mb={2} fontSize='1em' colorScheme={activeLaunch.success ? 'green' : 'red'}>
                        { activeLaunch.success ? 'SUCCESS' : 'FAILED' }
                    </Badge>
                    <br/>
                    <Text mb={2} as='b' fontSize='md' color={'whiteAlpha.600'}>
                        Launch Day : { dayjs(activeLaunch.date_utc).format('DD/MM/YYYY') }
                    </Text>
                    <br/>
                    <Text mb={2} as='b' fontSize='md' color={'whiteAlpha.600'}>
                       Rocket : { rocket.name }
                    </Text>
                    <br/>
                    <Text mb={2} as='b' fontSize='md' color={'whiteAlpha.600'}>
                        Country : { rocket.country }
                    </Text>
                    <br/>
                    <Text mb={2} as='b' fontSize='md' color={'whiteAlpha.600'}>
                        Company : { rocket.company }
                    </Text>
                    <br/>
                    <Divider mt={2} mb={4}/>
                    <Image
                        borderRadius={5}
                        boxSize='100%'
                        height={'auto'}
                        src={rocket.flickr_images[0]}
                        alt='Rocket Image'
                        fallbackSrc='https://via.placeholder.com/150'
                    />
                    <Wrap mt={3}>
                        <WrapItem>
                            {rocket.flickr_images.slice(0, 4).map(image => (
                                <Avatar mr={3} name='Rocket Image' src={image} fallbackSrc='https://via.placeholder.com/150' />
                            ))}
                        </WrapItem>
                    </Wrap>
                    <Divider mt={4} mb={2}/>
                    <Text as="i" mt={3} color={"whiteAlpha.700"}>
                        <Highlight
                            query={['SpaceX', 'flight', 'launch', 'collision', 'failure', 'Failed']}
                            styles={{ px: '2', py: '1', rounded: 'false', bg: 'pink.350' }}
                        >
                            { activeLaunch.details ? activeLaunch.details : '..No description provided'}
                        </Highlight>
                    </Text>
                    <br/>
                    {isLoading && <Spinner
                        ml={'40%'}
                        mt={'10%'}
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}