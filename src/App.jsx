import {useContext} from 'react'
import {Box, FormControl, FormLabel, ScaleFade, Spinner, Switch} from '@chakra-ui/react'

import Context from './Context.jsx'
import {LaunchCard} from './components/LaunchCard.jsx'
import Header from './components/Header'
import LaunchDetails from './components/LauchDetails'
import Footer from './components/Footer'

export function App() {
    const {filteredLaunches, setOnlyFailed, isLoading} = useContext(Context)
    const onKeyUpHandler = (e) => setOnlyFailed(e.target.checked)

    return (
    <>
        <Box bgGradient='linear(to-l, #000328, #00458e)'>
            <Header />
            <FormControl ml={5} display='flex' alignItems='center'>
                <FormLabel color={"white"} htmlFor='only-failed' mb='0'>
                    Only Failed
                </FormLabel>
                <Switch id='only-success' colorScheme='red' onChange={onKeyUpHandler}/>
            </FormControl>
            { isLoading && <Spinner ml={'45%'}  mt={150} mb={450} size='xl' color={'white'} /> }
            <section>
                {filteredLaunches.map(launch => (
                    <ScaleFade key={launch.flight_number} initialScale={0.9} in={!isLoading}>
                        <LaunchCard { ...launch }/>
                    </ScaleFade>
                ))}
            </section>
            <Footer />
            <LaunchDetails />
        </Box>
    </>
  )
}
