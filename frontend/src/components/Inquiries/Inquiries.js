import * as React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Heading,
  SimpleGrid
} from "@chakra-ui/react"


function Inquiries(props) {

  const [inquires, setInquires] = React.useState([]);
  React.useEffect(() => {}, []);

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
              <SimpleGrid columns={1} spacing={10}>
                inquires.map((key, index) => {
                <Box bg="tomato" height="100px"></Box>
              }
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <p>two</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  );
}

export default Inquiries;
