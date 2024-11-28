import { Box, Heading, HStack, Text, Image, Button } from '@chakra-ui/react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import React from 'react'
import { useColorModeValue } from './color-mode'
import { IconContext } from "react-icons";
import { useProductStore } from '../../store/product';
import {Toaster, toaster} from './toaster'
import { Link } from 'react-router-dom';


const  ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
    const {deleteProduct} = useProductStore() 
    const handleDeleteProduct = async (pID) => {
        const {success, message} = await deleteProduct(pID)

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
    }
  return (
    <Box 
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{transform:"translateY(-5px)", shadow:"x1"}}
        bg = {bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size={"md"} mb={2}>
                {product.name}
            </Heading>

            <Text fontWidth={'bold'} fontSize="x1" color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack spacing={2}>
           <Button  onClick={() => handleDeleteProduct(product._id)}> <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
					<MdDeleteForever />
            </IconContext.Provider></Button>
				</HStack>
        </Box>
        <Toaster></Toaster>
    </Box>
  )
}

export default ProductCard;
