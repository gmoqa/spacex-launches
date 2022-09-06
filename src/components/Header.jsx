import {Box, Heading} from '@chakra-ui/react'

export default function Header() {
    return (
        <Box maxW='32rem'>
            <Heading
                bgGradient='linear(to-l, #71c3f7, #f6f6f6)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
                pt={3}
                ml={5}
                mb={3}
            >
                🚀 SpaceX <span style={{ fontSize: '22px' }}>Launches</span>
            </Heading>
        </Box>
    )
}