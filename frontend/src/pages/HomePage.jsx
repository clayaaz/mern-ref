import { Container, VStack, Text, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ui/ProductCard.jsx'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore()

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW='1024px' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"38"}
          fontWeight={"bold"}
					textAlign={"center"}
        >
          Current Products 🚀
        </Text>
 
        <Grid templateColumns="repeat(3, 1fr)" gap="6" w={"full"}>
          {products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
        </Grid>
          {products.length === 0 &&(<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>)}
        
      </VStack>
    </Container>
  )
}

export default HomePage;