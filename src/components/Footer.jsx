import {ButtonGroup, Container, IconButton, Image, Stack, Text} from '@chakra-ui/react'
import Logo from '../../assets/spacex-logo-black-and-white.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center" color={"white"}>
                    <Image ml={3} boxSize='50%' src={Logo} />
                    <ButtonGroup variant="ghost">
                        <IconButton as="a" href="https://github.com/gmoqa/spacex-launches" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="white">
                    &copy; {new Date().getFullYear()} Made with <strong>Reactjs</strong> and <strong>Chakra-UI</strong>, using the <strong>SpaceX API.</strong>
                </Text>
            </Stack>
        </Container>
    )
}