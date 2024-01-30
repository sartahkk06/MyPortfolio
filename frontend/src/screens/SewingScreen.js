import React from 'react';
import { Image, Box, Text, GridItem } from '@chakra-ui/react';

const SewingScreen = () => {
  return (
    <div>
      <Text fontSize='40px' textAlign='center' padding={5}>
        <strong>User Interface Design of a Sewing Machine Shop Website</strong>
      </Text>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        {/* Home Page Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Home Screen</strong>
          </GridItem>
          <Text>
            Welcome to the heart of creativity on our homepage! Discover a
            curated collection of top-notch sewing machines, carefully chosen
            for every skill level. From user-friendly options for beginners to
            advanced models for experts, find the perfect fit for your projects.
            Our expertly serviced machines ensure a smooth sewing experience.
            Transform your ideas into reality... shop confidently and explore
            the art of stitching on our homepage!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\SewingProject\HomePage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Products Info */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\SewingProject\ProductsPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Products Screen</strong>
          </GridItem>
          <Text>
            Explore our handpicked selection of top-notch sewing machines on our
            creativity today! Products Page. From beginner-friendly models to
            advanced options, find the perfect fit for your projects. Our
            curated inventory ensures quality and performance. Elevate your
            sewing experience with machines serviced by our expert team. Shop
            with confidence and unleash your
          </Text>
        </Box>
        {/* Footer Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Footer</strong>
          </GridItem>
          <Text>
            Secure your purchases effortlessly with our convenient payment
            options. Choose from Google Pay, Paytm, and various card payment
            methods for a seamless transaction experience. We're not just an
            online destination; visit us at our physical store. For any
            inquiries or assistance, reach out to us at Contact Number or drop
            us an email at Email Address. Your satisfaction is our priority, and
            we look forward to serving you. Connect with us on social media for
            updates and exclusive offers. Thank you for choosing us as your
            go-to destination for all your needs!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\SewingProject\Footer.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
      </Box>
    </div>
  );
};

export default SewingScreen;
