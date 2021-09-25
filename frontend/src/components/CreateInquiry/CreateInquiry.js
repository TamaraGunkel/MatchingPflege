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
    Text,
    Input,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    Tooltip,
} from '@chakra-ui/react';
import {CheckCircleIcon, ArrowForwardIcon, CheckIcon, QuestionIcon} from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom';

const CreateInquiry = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [services, setServices] = React.useState([]);
  const [hasPrescription, setHasPrescription] = React.useState(0);
  const [prescriptionDesc, setPrescriptionDesc] = React.useState('');
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
  const [first_name, setFirstName] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [telephone, setPhonenumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [street_number, setStreetnumber] = React.useState('');
  const [postal_code, setPostalcode] = React.useState('');
  const [city, setCity] = React.useState('');

  const[accept, setAccept] = React.useState(false);
  const[contactOptIn, setContactOptIn] = React.useState(false);
  const handleTabsChange = index => {
    // Do nothing, we won't allow changing tabs using the tabs itself.
  };

  const createInquiry_api = () => {
    let service_objs = services.map(x => {
      return {name: x};
    });

    let all_times = [times_mon, times_tue, times_wed, times_thu, times_fri, times_sat, times_sun];
    let all_times_active = [
      times_mon_active,
      times_tue_active,
      times_wed_active,
      times_thu_active,
      times_fri_active,
      times_sat_active,
      times_sun_active,
    ];
    let weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let times_objs = [];

    all_times.forEach(function(value, i) {
      if (all_times_active[i]) {
        times_objs.push({
          weekday: weekdays[i],
          time_start: '',
          time_end: '',
        });

        switch (value) {
          case 'window0':
            times_objs[times_objs.length - 1].time_start = '07:00';
            times_objs[times_objs.length - 1].time_end = '09:00';
            break;
          case 'window1':
            times_objs[times_objs.length - 1].time_start = '10:00';
            times_objs[times_objs.length - 1].time_end = '13:00';
            break;
          case 'window2':
            times_objs[times_objs.length - 1].time_start = '16:00';
            times_objs[times_objs.length - 1].time_end = '18:00';
            break;
          case 'window3':
            times_objs[times_objs.length - 1].time_start = '19:00';
            times_objs[times_objs.length - 1].time_end = '22:00';
            break;
        }
      }
    });

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        inquiry: {
          address: {
            street: street,
            number: street_number,
            postal_code: postal_code,
            city: city,
            district: district,
          },
          level_of_care: levelOfCare,
          duration: 0,
          hiring_start: '2021-09-25T09:44:37.514Z',
          hiring_end: '2021-09-25T09:44:37.514Z',
          description: prescriptionDesc,
          necessary_expertise: [],
          service_categories: [],
          contact_opt_in: true,
        },
        customer: {
          last_name: last_name,
          first_name: first_name,
          telephone: telephone,
          email: email,
        },
        services: service_objs,
        times: times_objs,
      }),
    };

    fetch('http://localhost:8000/inquiry', requestOptions).then(response => console.log(response));
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

  const renderTime = (time_window) => {
    switch(time_window) {
      case 'window0': return '07:00 - 09:00 Uhr';
      case 'window1': return '10:00 - 13:00 Uhr';
      case 'window2': return '16:00 - 18:00 Uhr';
      case 'window3': return '19:00 - 22:00 Uhr';
      default: return 'Ungültig';
    }
  }

  return (
    <Container as="main" maxW="4xl" rounded="md" shadow="xs" p={10}>
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
          <Tab>
            <HStack>
              {tabIndex <= 3 && <Avatar name="4" bg="gray.400" h="10" w="10" />}
              {tabIndex > 3 && <CheckCircleIcon color="green" h="10" w="10" />}
              <Heading size="md">Zusammenfassung</Heading>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={8}>
              <Heading mt={8} size="lg">
                Datenschutzangaben
              </Heading>
      <Text>Für die Nutzung der von mir ausgewählten Transaktion aus dem Online-Dienstleistungsangebot der Stadt Münster ist die Erhebung und Speicherung von personenbezogenen Daten erforderlich. Detaillierte Informationen über den Umgang mit personenbezogenen Daten sind in der <Link color="teal.500" href="#">Datenschutzerklärung</Link> zu finden</Text>
                <Checkbox onChange={e => {setAccept(e);
                }} >Ich habe die Datenschutzerklärung gelesen und nehme diese zur Kenntnis. Ich bin damit einverstanden, dass meine Angaben und Daten elektronisch zu den in der Datenschutzerklärung erläuterten Zwecken erhoben und gespeichert werden.</Checkbox>
                <Checkbox onChange={e => {
                  setContactOptIn(e);
                }}
              >
                Ich bin damit einverstanden, dass meine Daten an Pflegeeinrichtungen und
                Dienstleister weiter gegeben werden dürfen.
              </Checkbox>
              <Divider />
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

              <HStack><Heading mt={8} size="lg">
                Liegt eine ärztliche Verordnung vor?
              </Heading>
                <Tooltip label="Die Verordnung einer häuslichen Krankenpflege erfolgt in der Regel durch einen Vertragsarzt, z.B. den Hausarzt. Die erste Verordnung ist längstens für 14 Tage möglich, die Folgeverordnung kann auch für einen längeren Zeitraum ausgestellt werden"><QuestionIcon/></Tooltip></HStack>

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
                isDisabled={!accept}
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
                      setTimesMonActive(value.target.checked);
                    }}
                  >
                    Montag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_mon_active) setTimesMon(e.target.value);
                    }}
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
                      setTimesTueActive(value.target.checked);
                    }}
                  >
                    Dienstag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_tue_active) setTimesTue(e.target.value);
                    }}
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
                      setTimesWedActive(value.target.checked);
                    }}
                  >
                    Mittwoch:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_wed_active) setTimesWed(e.target.value);
                    }}
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
                      setTimesThuActive(value.target.checked);
                    }}
                  >
                    Donnerstag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_thu_active) setTimesThu(e.target.value);
                    }}
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
                      setTimesFriActive(value.target.checked);
                    }}
                  >
                    Freitag:
                  </Checkbox>
                  <Select
                    placeholder="Zeitraum auswählen"
                    size="lg"
                    onChange={e => {
                      if (times_fri_active) setTimesFri(e.target.value);
                    }}
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
                      setTimesSatActive(value.target.checked);
                    }}
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
                      setTimesSunActive(value.target.checked);
                    }}
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
              >     <option value="Albachten (48163)"> Albachten (48163) </option>
                    <option value="Altstadt (48143, 48147)"> Altstadt (48143, 48147) </option>
                    <option value="Amelsbüren (48163, 48165)"> Amelsbüren (48163, 48165) </option>
                    <option value="Angelmodde (48165, 48167)"> Angelmodde (48165, 48167) </option>
                    <option value="BergFidel (48153, 48163, 48165)"> BergFidel (48153, 48163, 48165) </option>
                    <option value="Coerde (48157)"> Coerde (48157) </option>
                    <option value="Gelmer-Dyckburg (48155, 48157)"> Gelmer-Dyckburg (48155, 48157) </option>
                    <option value="Gievenbeck(48149, 48159, 48161)"> Gievenbeck(48149, 48159, 48161) </option>
                    <option value="Gremmendorf (48155, 48157, 48167)"> Gremmendorf (48155, 48157, 48167) </option>
                    <option value="Handorf (48155, 48157)"> Handorf (48155, 48157) </option>
                    <option value="Hiltrup (48163, 48165)"> Hiltrup (48163, 48165) </option>
                    <option value="Innenstadtring (48143, 48145, 48147, 48149, 48151, 48153, 48155, 48159)"> Innenstadtring (48143, 48145, 48147, 48149, 48151, 48153, 48155, 48159) </option>
                    <option value="Kinderhaus (48157, 48159)"> Kinderhaus (48157, 48159) </option>
                    <option value="Mitte-Nordost (48145, 48147, 48155, 48159)"> Mitte-Nordost (48145, 48147, 48155, 48159) </option>
                    <option value="Mitte-Süd (48151, 48153, 48163)"> Mitte-Süd (48151, 48153, 48163) </option>
                    <option value="Nienberge (48159, 48161)"> Nienberge (48159, 48161) </option>
                    <option value="Roxel (48161, 48163)"> Roxel (48161, 48163) </option>
                    <option value="Sentruper Höhe (48149, 48161, 48163)"> Sentruper Höhe (48149, 48161, 48163) </option>
                    <option value="Sprakel (48157, 48159, 48161)"> Sprakel (48157, 48159, 48161) </option>
                    <option value="St.Mauritz (48145, 48155, 48157)"> St.Mauritz	(48145, 48155, 48157) </option>
                    <option value="Wolbeck (48155, 48167)"> Wolbeck (48155, 48167) </option>
              </Select>

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
                Kontakt und Details
              </Heading>

              <FormControl id="first_name" isRequired>
                <FormLabel>Vorname</FormLabel>
                <Input
                  placeholder="First name"
                  onChange={e => setFirstName(e.target.value)}
                  value={first_name}
                />
              </FormControl>

              <FormControl id="last_name" isRequired>
                <FormLabel>Nachname</FormLabel>
                <Input
                  placeholder="Last name"
                  onChange={e => setLastName(e.target.value)}
                  value={last_name}
                />
              </FormControl>

              <FormControl id="telephone" isRequired>
                <FormLabel>Telefonnummer</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+49" />
                  <Input
                    type="tel"
                    placeholder="12345"
                    onChange={e => setPhonenumber(e.target.value)}
                    value={telephone}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="user@test.de"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>

              <FormControl id="street">
                <FormLabel>Straße</FormLabel>
                <Input
                  placeholder="Straße"
                  onChange={e => setStreet(e.target.value)}
                  value={street}
                />
              </FormControl>

              <FormControl id="street_number">
                <FormLabel>Hausnummer</FormLabel>
                <Input
                  placeholder="Hausnummer"
                  onChange={e => setStreetnumber(e.target.value)}
                  value={street_number}
                />
              </FormControl>

              <FormControl id="postal_code">
                <FormLabel>Postleitzahl</FormLabel>
                <Input
                  placeholder="Postleitzahl"
                  onChange={e => setPostalcode(e.target.value)}
                  value={postal_code}
                />
              </FormControl>

              <FormControl id="city">
                <FormLabel>Stadt</FormLabel>
                <Input placeholder="Münster" onChange={e => setCity(e.target.value)} value={city} />
              </FormControl>

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
            <Heading mt={8} size="lg">
              Zusammenfassung
            </Heading>
            <Heading mt={8} size="md">
              Bedürfnisse
            </Heading>

            <Text mt={4}><strong>Wobei wird Hilfe benötigt?</strong></Text>
            <p>{services}</p>
            <Text mt={4}><strong>Liegt eine ärztliche Verordnung vor?</strong></Text>
            <p>{hasPrescription ? 'Ja': 'Nein'}</p>
            <p>{hasPrescription ? prescriptionDesc: ''}</p>
            <Text mt={4}><strong>Liegt ein Pflegegrad vor?</strong></Text>
            <p>{levelOfCare}</p>

            <Heading mt={8} size="md">
              Wann und Wo
            </Heading>
            <Text mt={4}><strong>An welchen Tagen und zu welcher Uhrzeit wird Hilfe benötigt?</strong></Text>
            <p>{times_mon_active ? 'Montag: ' + renderTime(times_mon) : ''}</p>
            <p>{times_tue_active ? 'Dienstag: ' + renderTime(times_tue) : ''}</p>
            <p>{times_wed_active ? 'Mittwoch: ' + renderTime(times_wed) : ''}</p>
            <p>{times_thu_active ? 'Donnerstag: ' + renderTime(times_thu) : ''}</p>
            <p>{times_fri_active ? 'Freitag: ' + renderTime(times_fri) : ''}</p>
            <p>{times_sat_active ? 'Samstag: ' + renderTime(times_sat) : ''}</p>
            <p>{times_sun_active ? 'Sonntag: ' + renderTime(times_sun) : ''}</p>

            <Text mt={4}><strong>In welchem Stadtteil wird Hilfe benötigt?</strong></Text>
            <p>{cityDistricts[district]}</p>

            <Heading mt={8} size="md">
              Kontaktinformationen
            </Heading>
            <Text mt={4}><strong>Name</strong></Text>
            <p>{first_name} {last_name}</p>
            <Text mt={4}><strong>Telefonnummer</strong></Text>
            <p>{telephone}</p>
            <Text mt={4}><strong>Email</strong></Text>
            <p>{email}</p>
            <Text mt={4}><strong>Straße und Hausnummer:</strong></Text>
            <p>{street} {street_number}</p>
            <Text mt={4}><strong>Postleitzahl und Stadt:</strong></Text>
            <p>{postal_code} {city}</p>

            <Link as={RouterLink} to="/success" alignSelf="flex-end">
              <Button
                  mt={8}
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
