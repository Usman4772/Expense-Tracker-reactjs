import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme.ts'
import GlobalContextWrapper from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContextWrapper>
  <ChakraProvider theme={theme}>
    <App/>
  </ChakraProvider>
  </GlobalContextWrapper>
  

)
