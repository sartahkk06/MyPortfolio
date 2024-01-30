import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// import DownloadButton from './components/Button';
import HomeScreen from './screens/HomeScreen';
import SewingScreen from './screens/SewingScreen';
import RST from './screens/RstScreen';
import PortFolio from './screens/PortScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Flex
        as='main'
        mt='72px'
        direction='column'
        py='6'
        px='6'
        bgColor='gray.100'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/RstScreen' element={<RST />} />
          <Route path='/SewingScreen' element={<SewingScreen />} />
          <Route path='/Portfolio' element={<PortFolio />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
