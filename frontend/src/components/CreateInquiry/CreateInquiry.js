import * as React from 'react';
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Container,
  Avatar,
  HStack,
  Button,
  Link,
  VStack,
  Wrap,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Divider,
  Textarea,
  SimpleGrid,
  Select,
} from '@chakra-ui/react';
import {CheckCircleIcon, ArrowForwardIcon, CheckIcon} from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom';

const CreateInquiry = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = index => {
    // Do nothing, we won't allow changing tabs using the tabs itself.
  };

  const cityDistricts = [
    'Albachten (48163)',
    'Altstadt (48143, 48147)',
    'Amelsbüren (48163, 48165)',
    'Angelmodde (48165, 48167)',
    'BergFidel (48153, 48163, 48165)',
    'Coerde (48157)',
    'Gelmer-Dyckburg (48155, 48157)',
    'Gievenbeck	(48149, 48159, 48161)',
    'Gremmendorf (48155, 48157, 48167)',
    'Handorf (48155, 48157)',
    'Hiltrup (48163, 48165)',
    'Innenstadtring (48143, 48145, 48147, 48149, 48151, 48153, 48155, 48159)',
    'Kinderhaus (48157, 48159)',
    'Mecklenbeck (48163)',
    'Mitte-Nordost (48145, 48147, 48155, 48159)',
    'Mitte-Süd (48151, 48153, 48163)',
    'Nienberge (48159, 48161)',
    'Roxel (48161, 48163)',
    'Sentruper Höhe (48149, 48161, 48163)',
    'Sprakel (48157, 48159, 48161)',
    'St.Mauritz	(48145, 48155, 48157)',
    'Wolbeck (48155, 48167)',
  ];

  return (
    <Container as="main" maxW="3xl" rounded="md" shadow="xs" p={10}>
      <Tabs isFitted="true" variant="unstyled" index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>
            <HStack>
              {tabIndex === 0 && <Avatar name="1" bg="gray.400" h="10" w="10" />}
              {tabIndex !== 0 && <CheckCircleIcon color="brand" h="10" w="10" />}
              <Heading size="md">Bedürfnisse angeben</Heading>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              {tabIndex <= 1 && <Avatar name="2" bg="gray.400" h="10" w="10" />}
              {tabIndex > 1 && <CheckCircleIcon color="brand" h="10" w="10" />}
              <Heading size="md">Wann und Wo</Heading>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              {tabIndex <= 2 && <Avatar name="3" bg="gray.400" h="10" w="10" />}
              {tabIndex > 2 && <CheckCircleIcon color="brand" h="10" w="10" />}
              <Heading size="md">Kontakt und Details</Heading>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={8}>
              <Heading mt={8} size="lg">
                Wobei wird Hilfe benötigt? (Mehrfachauswahl möglich)
              </Heading>
              <CheckboxGroup>
                <Wrap spacing={4}>
                  <Checkbox size="lg">Pflege</Checkbox>
                  <Checkbox size="lg">Ernährung</Checkbox>
                  <Checkbox size="lg">Ausscheidung</Checkbox>
                  <Checkbox size="lg">Mobilisation</Checkbox>
                  <Checkbox size="lg">Begleitung/ Betreuung</Checkbox>
                  <Checkbox size="lg">Hauswirtschaft</Checkbox>
                </Wrap>
              </CheckboxGroup>
              <Divider />

              <Heading mt={8} size="lg">
                Liegt eine ärztliche Verordnung vor?
              </Heading>
              <RadioGroup defaultValue="false" colorScheme="green">
                <Wrap spacing={4}>
                  <Radio size="lg" value="true">
                    Ja
                  </Radio>
                  <Radio size="lg" value="false">
                    Nein
                  </Radio>
                </Wrap>
              </RadioGroup>
              <Textarea placeholder="Verordnungstext" />
              <Divider />

              <Heading mt={8} size="lg">
                Liegt ein Pflegegrad vor?
              </Heading>
              <RadioGroup defaultValue="null" colorScheme="green">
                <Wrap spacing={4}>
                  <Radio size="lg" value="1">
                    1
                  </Radio>
                  <Radio size="lg" value="2">
                    2
                  </Radio>
                  <Radio size="lg" value="3">
                    3
                  </Radio>
                  <Radio size="lg" value="4">
                    4
                  </Radio>
                  <Radio size="lg" value="5">
                    5
                  </Radio>
                  <Radio size="lg" value="0">
                    liegt nicht vor
                  </Radio>
                  <Radio size="lg" value="null">
                    unbekannt
                  </Radio>
                </Wrap>
              </RadioGroup>

              <Button
                leftIcon={<ArrowForwardIcon />}
                variant="solid"
                bg="brand"
                onClick={() => setTabIndex(tabIndex + 1)}
                alignSelf="flex-end"
              >
                Weiter
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={8}>
              <Heading mt={8} size="lg">
                An welchen Tagen und zu welcher Uhrzeit wird Hilfe benötigt?
              </Heading>
              <CheckboxGroup defaultValue="false" colorScheme="green">
                <SimpleGrid columns={2} spacing={4}>
                  <Checkbox size="lg">Montag:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox size="lg">Dienstag:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox size="lg">Mittwoch:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox size="lg">Donnerstag:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox size="lg">Freitag:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox size="lg">Samstag:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox size="lg">Sonntag:</Checkbox>
                  <Select placeholder="Zeitraum auswählen" size="lg">
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>
                </SimpleGrid>
              </CheckboxGroup>
              <Divider />

              <Heading mt={8} size="lg">
                In welchem Stadtteil wird Hilfe benötigt?
              </Heading>
              <Select placeholder="Stadtteil auswählen" size="lg">
                {cityDistricts.map((dist, index, arr) => (
                  <option value={index}>{dist}</option>
                ))}
              </Select>

              <Button
                leftIcon={<ArrowForwardIcon />}
                variant="solid"
                bg="brand"
                onClick={() => setTabIndex(tabIndex + 1)}
                alignSelf="flex-end"
              >
                Weiter
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Link as={RouterLink} to="/success" alignSelf="flex-end">
              <Button leftIcon={<CheckIcon />} variant="solid" bg="brand">
                Abschließen
              </Button>
            </Link>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default CreateInquiry;
