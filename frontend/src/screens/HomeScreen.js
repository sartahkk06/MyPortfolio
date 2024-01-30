import {
  Flex,
  Grid,
  Card,
  Box,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { Link as RouterLink, Link } from 'react-router-dom';
import { BiLogoGmail } from 'react-icons/bi';
// import ProductCard from '../components/ProductCard';
// import products from '../products';

const HomeScreen = () => {
  return (
    <>
      {/* <Heading as='h2' mb='8' fontSize='xl'>
        Portfolio
      </Heading> */}

      <Flex justifyContent='space-around'>
        <Image
          maxW='sm'
          marginBottom='5'
          borderRadius='full'
          boxSize='400px'
          src='assets\ProfilePictures\PicsArt_10-17-08.11.20-01.jpeg'
          alt='Profile Picture'
        />
        <Box maxW='50rem' paddingTop='50px'>
          <Heading mb={5} fontSize='6xl'>
            Sarthak Ganesh Nandvikar
          </Heading>

          <Link>Email: nandvikarsarthak@gmail.com</Link>
          <Text>Phone: +91 7039967009</Text>
          <br></br>
          <Text fontSize='25px'>
            <strong>Full Stack Web Developer</strong>
          </Text>
          <Text fontSize='xl'>
            I am a proficient Full Stack Web Developer with a specialized
            certification in the MERN (MongoDB, Express.js, React, Node.js)
            stack. Bringing a wealth of hands-on experience, with 4-6 months
            experience, excelling in creative problem-solving and exceeding
            client expectations. Meticulous and adaptable, I bring high-quality
            results to every project. Ready to contribute my skills to your
            success! My commitment to continuous learning ensures that I stay at
            the forefront of industry trends, delivering innovative and
            efficient solutions.
          </Text>
        </Box>
      </Flex>
      <br></br>
      <Box maxW='200rem' paddingLeft='20px' paddingBottom='20px'>
        <Heading fontSize='3xl' paddingBottom='15px'>
          Skills:
        </Heading>
        <Flex padding={2} justifyContent='space-between'>
          <Box>
            <Image boxSize='5rem' src='assets/logo/htmllogojpg.jpg'></Image>
            <Text textAlign='center'>HTML</Text>
          </Box>
          <Box>
            <Image boxSize='5rem' src='assets/logo/csslogo2.png'></Image>
            <Text textAlign='center'>CSS</Text>
          </Box>
          <Box>
            <Image boxSize='5rem' src='assets/logo/javascriptlogo.png'></Image>
            <Text textAlign='center'>Javascript</Text>
          </Box>
          <Box>
            <Image boxSize='5rem' src='assets/logo/mongodblogo.png'></Image>
            <Text textAlign='center'>MongoDB</Text>
          </Box>
          <Box>
            <Image boxSize='5rem' src='assets/logo/expresslogo.png'></Image>
            <Text textAlign='center'>Express.js</Text>
          </Box>
          <Box>
            <Image boxSize='5rem' src='assets/logo/reactlogopng.png'></Image>
            <Text textAlign='center'>React.js</Text>
          </Box>
          <Box>
            <Image boxSize='5rem' src='assets/logo/nodelogo.jpg'></Image>
            <Text textAlign='center'>Node.js</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading padding={3} fontSize='3xl'>
          My Projects
        </Heading>
        <Grid templateColumns='1fr 1fr 1fr' gap='8'>
          {/* {products.map((prod) => ( */}
          {/* //   <ProductCard key={prod._id} product={prod} /> */}
          {/* ))} */}
        </Grid>
        <Flex justifyContent='space-between'>
          <Card maxW='sm'>
            <CardBody>
              <Link as={RouterLink} to='/RstScreen'>
                <Image
                  src='assets\project_img\Rst\ProductsPage.png'
                  alt='RST Store Website Image '
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>End-to-End Shopping Website</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </Link>
            </CardBody>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Link as={RouterLink} to='/SewingScreen'>
                <Image
                  src='assets\project_img\SewingProject\HomePage.png'
                  alt='Shop Website Image '
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Website of a Shop</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </Link>
            </CardBody>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Link as={RouterLink} to='/Portfolio'>
                <Image
                  src='assets\project_img\PortfolioProject\HomePage.png'
                  alt='PortFolio Website Image '
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>PortFolio</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </Link>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default HomeScreen;
