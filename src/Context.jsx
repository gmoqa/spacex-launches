import {createContext, useEffect, useState} from 'react'
import {useDisclosure} from '@chakra-ui/react'

const Context = createContext({})

export function LaunchContextProvider({ children }) {
    const [launches, setLaunches] = useState([])
    const [filteredLaunches, setFilteredLaunches] = useState([])
    const [onlyFailed, setOnlyFailed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [activeLaunch, setActiveLaunch] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()

    function fetchData() {
        fetch('https://api.spacexdata.com/v4/launches')
            .then((response) => response.json())
            .then((data) => {
                setFilteredLaunches(data.slice(0, 60).reverse())
                setLaunches(data.slice(0, 60).reverse())
            }).then(setIsLoading(false));
    }

    useEffect(() => {
        const filteredList = launches.filter(item => onlyFailed ? item.success === false : true);
        setFilteredLaunches(filteredList);
    }, [onlyFailed]);


    useEffect(() => {
        fetchData()
    }, []);

    return <Context.Provider value={{
        launches,
        filteredLaunches,
        setFilteredLaunches,
        setLaunches,
        isLoading,
        onlyFailed,
        setIsLoading,
        activeLaunch,
        setActiveLaunch,
        setOnlyFailed,
        isOpen,
        onOpen,
        onClose
    }}>
        {children}
    </Context.Provider>
}

export default Context