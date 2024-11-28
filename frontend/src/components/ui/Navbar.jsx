import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from './color-mode';

const Navbar = () => {
 const {colorMode, toggleColorMode} = useColorMode();

 return (
    <Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					fontSize={{ base: "32", sm: "36" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<CiSquarePlus fontSize={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
                        {colorMode === "light" ? "🌙" : "🌞"}
					</Button>
				</HStack>
			</Flex>
		</Container>
  )
}

export default Navbar
