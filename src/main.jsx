import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'
import { LaunchContextProvider } from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
          <ChakraProvider>
              <LaunchContextProvider>
                  <App />
              </LaunchContextProvider>
          </ChakraProvider>
      </React.StrictMode>
)
