import React from 'react';
import { Box, GridItem, Text, Image } from '@chakra-ui/react';
const RST = () => {
  return (
    <div>
      <Text fontSize='40px' textAlign='center' padding={5}>
        <strong>End-to-End Shopping Website</strong>
      </Text>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        {/* Login Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Login Screen</strong>
          </GridItem>
          <Text>
            Welcome to our Login page! To ensure a smooth and secure
            transaction, please log in or create an account. By doing so, you
            can track your order, save your preferences, and enjoy a
            personalized shopping experience. Join us on this journey of
            seamless shopping by logging in now or signing up to enhance your
            checkout process. Happy shopping!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\LoginPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Register Info */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\RegisterPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Register Screen</strong>
          </GridItem>
          <Text>
            Welcome to our Registration page! To streamline your checkout
            process and unlock exclusive benefits, create an account now. Enjoy
            personalized shopping, order tracking, and faster transactions.
            Registering is quick and easy...let's get started on making your
            shopping experience even more convenient. Sign up today for a
            seamless journey through our online store!
          </Text>
        </Box>
        {/* Products Page Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Products Page</strong>
          </GridItem>
          <Text>
            Welcome to our online fashion haven, where style meets simplicity!
            Immerse yourself in a curated collection of stunning clothing
            products that redefine your wardrobe. Our website boasts an
            intuitive and easy-to-navigate interface, ensuring a seamless and
            enjoyable shopping experience for every visitor. From casual chic to
            elegant couture, explore a diverse range of fashion options that
            cater to every taste and occasion. Discover the joy of effortless
            browsing and swift selections as you navigate through our
            user-friendly platform. Our commitment to simplicity extends beyond
            the interface.. expect a hassle-free checkout process for a swift
            and secure purchase. Stay on trend with the latest fashion releases,
            and let our website become your go-to destination for elevating your
            style game. Welcome to a world where fashion meets ease, and your
            dream wardrobe is just a click away!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\ProductsPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Single Product Page Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Single Product Page</strong>
          </GridItem>
          <Text>
            Elevate your wardrobe with your favorite outfits, a top-rated
            favorite among fashion enthusiasts. Boasting a remarkable star
            ratings from thrilled customers, this pair offers the perfect blend
            of style and comfort. With a pocket-friendly price, now is the ideal
            time to upgrade your denim collection. Check out the rave reviews
            and discover why customers adore the fit and durability of these
            jeans. Available in various sizes and quantities, these denim
            essentials seamlessly transition from casual Fridays to weekend
            adventures. Don't miss out on the chance to enhance your style –
            order now while stocks last!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\SingleProduct.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Product Review Info */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Product Review </strong>
          </GridItem>
          <Text>
            Now, it's your turn to share your thoughts! Rate the outfits based
            on fit, style, and overall satisfaction, and leave your comments to
            help fellow fashion enthusiasts make informed decisions. Priced
            competitively, this wardrobe staple is a steal for its quality. Let
            your style speak volumes. Share your feedback below and be a part of
            our fashion community – because your opinion matters!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\ReviewSection.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Cart Page */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\CartPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Cart Page</strong>
          </GridItem>
          <Text>
            Welcome to your Cart... the ultimate gateway to a seamless checkout
            experience! Here, you can review your carefully selected items,
            check quantities, or delete some items if you want and see the total
            cost before finalizing your purchase. Our user-friendly Cart page
            ensures transparency with detailed product information and clear
            pricing. Easily make adjustments to your selections or quantities
            with just a click. With a quick overview of your shopping bag, you
            can proceed confidently to checkout, knowing you've got everything
            you need. Enjoy the convenience of a straightforward interface that
            puts you in control of your shopping journey. Ready to make your
            fashion dreams a reality? Let's go proceed to checkout effortlessly
            from your Cart page!
          </Text>
        </Box>
        {/* Shipping Page */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Shipping Page</strong>
          </GridItem>
          <Text>
            Welcome to our Shipping Details page, where we make getting your
            favorite items to your doorstep a breeze! If you're logged in,
            simply fill out the straightforward form with your shipping
            information from your country to your precise address and postal
            code. We've streamlined the process to ensure a hassle-free
            experience, making sure your order reaches you without a hitch. Your
            convenience is our priority, so let's make your shopping journey
            smooth and your delivery swift. Fill in your details and get ready
            to welcome your new favorites to your doorstep!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\ShippingPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* Payment Page */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\PaymentPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Payment Page</strong>
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
        {/* Place Order Page */}
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Place Order Page</strong>
          </GridItem>
          <Text>
            Welcome to your Order Summary page – the final stop before your
            fashion finds make their way to you! Here, you'll find a snapshot of
            your chosen products, along with the shipping address you provided.
            Double-check your selection, ensure your shipping details are
            accurate, and glance at the chosen payment method. Ready to make it
            official? Simply hit the "Place Order" button, and voila – your
            style upgrade is on its way! Your total price is crystal clear, and
            your satisfaction is guaranteed. Thanks for choosing us – get ready
            to unwrap a package full of fashion delights!
          </Text>
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\PlaceOrderPage.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        {/* My Orders Page */}
        <Box gridColumn='span 6' padding='20px'>
          <Image
            src='assets\project_img\Rst\MyOrders.png'
            alt='PortFolio Website Image '
            borderRadius='lg'
          />
        </Box>
        <Box gridColumn='span 6' padding='20px'>
          <GridItem fontSize='22px'>
            <strong>Profile Page</strong>
          </GridItem>
          <Text>
            Welcome to your Profile Page – your personalized hub for all things
            you! Here, you can view and update your name and email address
            effortlessly. Need to add an extra layer of security? Change your
            password hassle-free. Plus, track the status of all your orders,
            whether they're on their way or already at your doorstep. Your
            journey with us is at your fingertips, making managing your account
            a breeze. Stay in control, stay updated, and enjoy the ease of a
            personalized profile. Your satisfaction is our priority, and your
            style journey is just a click away!
          </Text>
        </Box>
      </Box>
    </div>
  );
};
export default RST;
