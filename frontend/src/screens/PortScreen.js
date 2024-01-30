import React from 'react';
import { Image, Box, Text, GridItem } from '@chakra-ui/react';

const PortFolio = () => {
  return (
    <div>
      <Text fontSize='40px' textAlign='center' padding={5}>
        <strong>My Portfolio Website</strong>
      </Text>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        {/* Home Page Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Home Page</strong>
          </GridItem>
          <Text>
            Welcome to my digital portfolio! Here, you'll find a curated
            collection of my projects and skills alongside insightful
            information about me. Explore the creative endeavors that define my
            journey, from design to development and everything in between. With
            a user-friendly interface, navigating through my portfolio is a
            breeze. Interested in learning more about my background and
            expertise? Simply click the download button to access my resume.
            Join me on this exploration of innovation and inspiration, where
            each project reflects my dedication to excellence. Thank you for
            visiting – let's connect and explore the possibilities together!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\PortfolioProject\HomePage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Projects Info */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\PortfolioProject\Projects.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Projects</strong>
          </GridItem>
          <Text>
            Welcome to my portfolio showcase! Here, I'm thrilled to share a
            visual journey of my completed and ongoing projects, showcasing my
            passion for innovation and creativity. Scroll through to explore the
            diverse range of work that defines my professional landscape.
            Interested in my skill set? Check out my resume, where you'll find a
            comprehensive list of my abilities and experiences. From design to
            development, my portfolio encapsulates the skills that drive my
            projects forward. Dive in, get inspired, and feel free to connect
            for collaborations or to discuss exciting new opportunities. Welcome
            to my world of projects, skills, and endless possibilities!
          </Text>
        </Box>
        {/* RST Site  */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Ecommerce Website Preview</strong>
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
            src='assets\project_img\PortfolioProject\RstSitePage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>

        {/* Sewing Site */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\PortfolioProject\SewingSitePage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Sewing Machine Website Preview</strong>
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
      </Box>
    </div>
  );
};
export default PortFolio;
