import { SimpleGrid } from "@chakra-ui/react"
import {Box} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
function LandingPage(props) {
    return (
        <div>
            <Center>
                <Heading>Who Cares?</Heading>
            </Center>
            <SimpleGrid columns={2} spacing={10}>
                <a href="#">
                    <Box height="auto" p="50px" bg="tomato">
                        <Center>
                            <Heading centerContent size="lg">Login für Pflegedienste</Heading>
                        </Center>
                    </Box>
                </a>
                <a href="#">
                    <Box height="auto" p="50px" bg="tomato">
                        <Center>
                            <Heading centerContent size="lg">Anfrage erstellen</Heading>
                        </Center>
                    </Box>
                </a>
            </SimpleGrid>
        </div>
    );
}

export default LandingPage;