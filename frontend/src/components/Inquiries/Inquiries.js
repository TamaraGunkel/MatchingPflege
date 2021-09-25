import * as React from 'react';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td, Link, Button,

} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom";
import {EmailIcon} from "@chakra-ui/icons";

function Inquiries(props) {

  const [inquires, setInquires] = React.useState([]);

  React.useEffect(async() => {
    await fetch("http://localhost:8000/inquiries?page=1&page_size=5&district=5&status=1")
        .then(response => response.json())
        .then(data => setInquires(data))
  }, []);

  return (
      <Box p={12} w="100%">
        <Heading mb={12} size="lg">Verwaltung aller Anfragen</Heading>
        <Tabs isFitted="true" variant="enclosed">
          <TabList>
            <Tab>Offene Anfragen</Tab>
            <Tab>In Akquise</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Stadtteil</Th>
                    <Th>Art der Pflege</Th>
                    <Th>Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {inquires.map(inquiry =>
                  <Tr>
                    <Td>inquiry.address.district</Td>
                    <Td>inquiry.services</Td>
                    <Td>
                      <Link as={RouterLink} to={"/inquiry/"+inquiry.id} alignSelf="flex-end">
                      <Button variant="solid">
                        Mehr Informationen
                      </Button>
                    </Link>
                   </Td>
                  </Tr>
                  )}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Stadtteil</Th>
                    <Th>Art der Pflege</Th>
                    <Th>Details</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Stadtteil</Th>
                    <Th>Art der Pflege</Th>
                    <Th>Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {inquires.map(inquiry =>
                      <Tr>
                        <Td>inquiry.address.district</Td>
                        <Td>inquiry.services</Td>
                        <Td>
                          <Link as={RouterLink} to={"/inquiry/"+inquiry.id} alignSelf="flex-end">
                            <Button variant="solid">
                              Mehr Informationen
                            </Button>
                          </Link>
                        </Td>
                      </Tr>
                  )}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Stadtteil</Th>
                    <Th>Art der Pflege</Th>
                    <Th>Details</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  );
}

export default Inquiries;
