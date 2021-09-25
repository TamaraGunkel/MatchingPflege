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
  const [services, setServices] = React.useState(0);
  const [hasPrescription, setHasPrescription] = React.useState(0);
  const [prescriptionDesc, setPrescriptionDesc] = React.useState(0);
  const [levelOfCare, setLevelOfCare] = React.useState(0);
  const [times_mon, setTimesMon] = React.useState(0);
  const [times_mon_active, setTimesMonActive] = React.useState(0);
  const [times_tue, setTimesTue] = React.useState(0);
  const [times_tue_active, setTimesTueActive] = React.useState(0);
  const [times_wed, setTimesWed] = React.useState(0);
  const [times_wed_active, setTimesWedActive] = React.useState(0);
  const [times_thu, setTimesThu] = React.useState(0);
  const [times_thu_active, setTimesThuActive] = React.useState(0);
  const [times_fri, setTimesFri] = React.useState(0);
  const [times_fri_active, setTimesFriActive] = React.useState(0);
  const [times_sat, setTimesSat] = React.useState(0);
  const [times_sat_active, setTimesSatActive] = React.useState(0);
  const [times_sun, setTimesSun] = React.useState(0);
  const [times_sun_active, setTimesSunActive] = React.useState(0);
  const [district, setDistrict] = React.useState(0);

  const handleTabsChange = index => {
    // Do nothing, we won't allow changing tabs using the tabs itself.
  };

  const createInquiry_api = () => {
    let service_objs = services.map(x => {
      return {name: x};
    });

    console.log(services);
    console.log(service_objs);

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        inquiry: {
          address: {
            street: '',
            number: '',
            postal_code: '',
            city: '',
            district: '',
          },
          level_of_care: levelOfCare,
          duration: 0,
          hiring_start: '',
          hiring_end: '',
          description: '',
          necessary_expertise: [],
          service_categories: [],
          contact_opt_in: true,
        },
        customer: {
          last_name: '',
          first_name: '',
          telephone: '',
          email: '',
        },
        services: [],
      }),
    };

    /*  fetch('https://localhost:8000/inquiry', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
*/
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
              {tabIndex !== 0 && <CheckCircleIcon color="green.600" h="10" w="10" />}
              <Heading size="md">Bedürfnisse angeben</Heading>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              {tabIndex <= 1 && <Avatar name="2" bg="gray.400" h="10" w="10" />}
              {tabIndex > 1 && <CheckCircleIcon color="green.600" h="10" w="10" />}
              <Heading size="md">Wann und Wo</Heading>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              {tabIndex <= 2 && <Avatar name="3" bg="gray.400" h="10" w="10" />}
              {tabIndex > 2 && <CheckCircleIcon color="green.600" h="10" w="10" />}
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
              <CheckboxGroup
                onChange={value => {
                  setServices(value);
                }}
              >
                <Wrap spacing={4}>
                  <Checkbox size="lg" value="Pflege">
                    Pflege
                  </Checkbox>
                  <Checkbox size="lg" value="Ernährung">
                    Ernährung
                  </Checkbox>
                  <Checkbox size="lg" value="Ausscheidung">
                    Ausscheidung
                  </Checkbox>
                  <Checkbox size="lg" value="Mobilisation">
                    Mobilisation
                  </Checkbox>
                  <Checkbox size="lg" value="Betreuung">
                    Begleitung/ Betreuung
                  </Checkbox>
                  <Checkbox size="lg" value="Hauswirtschaft">
                    Hauswirtschaft
                  </Checkbox>
                </Wrap>
              </CheckboxGroup>
              <Divider />

              <Heading mt={8} size="lg">
                Liegt eine ärztliche Verordnung vor?
              </Heading>
              <RadioGroup
                defaultValue="false"
                colorScheme="green"
                onChange={setHasPrescription}
                value={hasPrescription}
              >
                <Wrap spacing={4}>
                  <Radio size="lg" value="true">
                    Ja
                  </Radio>
                  <Radio size="lg" value="false">
                    Nein
                  </Radio>
                </Wrap>
              </RadioGroup>
              <Textarea
                placeholder="Verordnungstext"
                onChange={e => setPrescriptionDesc(e.target.value)}
                value={prescriptionDesc}
              />
              <Divider />

              <Heading mt={8} size="lg">
                Liegt ein Pflegegrad vor?
              </Heading>
              <RadioGroup
                defaultValue="null"
                colorScheme="green"
                onChange={setLevelOfCare}
                value={levelOfCare}
              >
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
                variant="outline"
                color="green.600"
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
                  <Checkbox
                    size="lg"
                    onChange={value => {
                      if (!value) setTimesMon(0);
                      setTimesMonActive(value);
                    }}
                    value={times_mon_active}
                  >
                    Montag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_mon_active) setTimesMon(e.target.value);
                    }}
                    value={times_mon}
                  >
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox
                    size="lg"
                    name="ckb_time_tue"
                    onChange={value => {
                      if (!value) setTimesTue(0);
                      setTimesTueActive(value);
                    }}
                    value={times_tue_active}
                  >
                    Dienstag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_tue_active) setTimesTue(e.target.value);
                    }}
                    value={times_tue}
                  >
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox
                    size="lg"
                    onChange={value => {
                      if (!value) setTimesWed(0);
                      setTimesWedActive(value);
                    }}
                    value={times_wed_active}
                  >
                    Mittwoch:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_wed_active) setTimesWed(e.target.value);
                    }}
                    value={times_wed}
                  >
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox
                    size="lg"
                    onChange={value => {
                      if (!value) setTimesThu(0);
                      setTimesThuActive(value);
                    }}
                    value={times_thu_active}
                  >
                    Donnerstag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_thu_active) setTimesThu(e.target.value);
                    }}
                    value={times_thu}
                  >
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox
                    size="lg"
                    onChange={value => {
                      if (!value) setTimesFri(0);
                      setTimesFriActive(value);
                    }}
                    value={times_fri_active}
                  >
                    Freitag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_fri_active) setTimesFri(e.target.value);
                    }}
                    value={times_fri}
                  >
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox
                    size="lg"
                    onChange={value => {
                      if (!value) setTimesSat(0);
                      setTimesSatActive(value);
                    }}
                    value={times_sat_active}
                  >
                    Samstag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_sat_active) setTimesSat(e.target.value);
                    }}
                    value={times_sat}
                  >
                    <option value="window0">7 - 9 Uhr</option>
                    <option value="window1">10 - 13 Uhr</option>
                    <option value="window2">16 - 18 Uhr</option>
                    <option value="window3">19 - 22 Uhr</option>
                  </Select>

                  <Checkbox
                    size="lg"
                    onChange={value => {
                      if (!value) setTimesSun(0);
                      setTimesSunActive(value);
                    }}
                    value={times_sun_active}
                  >
                    Sonntag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_sun_active) setTimesSun(e.target.value);
                    }}
                    value={times_sun}
                  >
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
              <Select
                placeholder="Stadtteil auswählen"
                size="lg"
                onChange={e => setDistrict(e.target.value)}
                value={district}
              >
                {cityDistricts.map((dist, index, arr) => (
                  <option value={index}>{dist}</option>
                ))}
              </Select>

              <Button
                leftIcon={<ArrowForwardIcon />}
                variant="outline"
                onClick={() => setTabIndex(tabIndex + 1)}
                alignSelf="flex-end"
              >
                Weiter
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Link as={RouterLink} to="/success" alignSelf="flex-end">
              <Button
                leftIcon={<CheckIcon />}
                variant="outline"
                color="green.600"
                onClick={createInquiry_api}
              >
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
