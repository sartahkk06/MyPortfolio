import { Box, Button, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const onButtonClick = () => {
    const pdfUrl = 'newResume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sarthak Nandvikar Resume.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Flex
      as='header'
      align='center'
      justifyContent='space-between'
      wrap='wrap'
      py='6'
      px='6'
      bgColor='gray.700'
      boxShadow='2px 2px 10px 1px gray'
      w='100%'
      pos='fixed'
      top='0'
      zIndex='99999999'
      left='0'>
      {/* Logo */}
      <Link as={RouterLink} to='/'>
        <Heading
          as='h1'
          color='whiteAlpha.800'
          fontWeight='bold'
          size='md'
          letterSpacing='wide'>
          PortFolio
        </Heading>
      </Link>

      {/* Menu Icon */}
      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={() => setShow(!show)}>
        <Icon as={HiOutlineMenuAlt3} color='white' w='6' h='6' />
      </Box>

      {/* Menu */}
      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        mt={{ base: '5', md: '0' }}>
        <Button onClick={onButtonClick}>Download Resume</Button>
      </Box>
    </Flex>
  );
};

export default Header;
