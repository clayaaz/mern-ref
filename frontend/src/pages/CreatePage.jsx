import { Box, Button, Container, Heading, VStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';
import {Toaster, toaster} from '../components/ui/toaster'
const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name:"",
        price:"",
        image:""
    });
    const {createProduct} = useProductStore()
    const handleAddProduct = async() => {
       const {success,message} = await createProduct(newProduct)
        if (!success){
            toaster.create({
                title:"Error",
                description:message,
                type: "error",
                action:{lable:"✖"}
            })
        }
        else{
            toaster.create({
                title:"Success",
                description:message,
                type: "success",
                action:{lable:"✖"}
            })
        }
    };
  return (
    <Container maxW={"675px"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>
            <Box width={"full"} bg={useColorModeValue("white", "gray.800")} p={6}rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input placeholder='Product Name' name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                    <Input placeholder='Price' name="price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
                    <Input placeholder='Image URL' name="image" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>

                    <Button colorScheme="blue" onClick={handleAddProduct} w='full'>Add Product</Button>
                </VStack>
            </Box>
        </VStack>
        <Toaster></Toaster>
    </Container>
  )
}

export default CreatePage;