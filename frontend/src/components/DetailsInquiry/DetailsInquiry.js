import * as React from 'react';
import {
    Button,
    Container,
    Heading, Link,
    Text
} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom";
import {AddIcon} from "@chakra-ui/icons";

function DetailInquiry(props) {

    const renderTime = (time_obj) => {
        return time_obj.weekday + ': ' + time_obj.time_start + ' - ' + time_obj.time_end;
    }

    const [inquiry, setInquiry] = React.useState({
        address_city: 'Münster',
        address_number: '5',
        address_postal_code: '48149',
        address_street: 'Rüschhausweg',
        address_district: 'Gievenbeck',
        contact_opt_in: true,
        description: "",
        duration_in_minutes: 0,
        hiring_end: '2021-10-25T09:56:02.955000',
        hiring_start: '2021-09-25T09:56:02.955000',
        level_of_care: 3,
        first_name: 'Helga',
        last_name: 'Müller',
        email: 'helga.mueller@gmail.com',
        telephone: '0123456789',
        services: ['Pflege', 'Mobilisation'],
        times: [
            {
                weekday: 'Montag',
                time_start: '07:00',
                time_end: '09:00'
            },
            {
                weekday: 'Mittwoch',
                time_start: '07:00',
                time_end: '09:00'
            },
            {
                weekday: 'Samstag',
                time_start: '10:00',
                time_end: '13:00'
            }
        ]
    });

    React.useEffect(async () => {
        await fetch("http://localhost:8000/inquiry/1")
            .then(response => response.json())
            .then(data => {
                data.services = ['Pflege', 'Betreuung'];
                data.times = [
                    {
                        weekday: 'Montag',
                        time_start: '07:00',
                        time_end: '09:00'
                    }
                ];
                data.first_name = 'Helga';
                data.last_name = 'Müller';
                data.email = 'helga.mueller@gmail.com';
                data.telephone = '0123456789';
                setInquiry(data);
            })
    }, []);

    return (
        <Container as="main" maxW="3xl" rounded="md" shadow="xs" p={10} mt={8}>
            <Heading mb={12} size="lg">Details der Anfrage</Heading>
            <Heading mt={8} size="md">
                Bedürfnisse
            </Heading>

            <Text mt={4}><strong>Wobei wird Hilfe benötigt?</strong></Text>
            <p>{inquiry.services ? inquiry.services.join(', '): ''}</p>
            <Text mt={4}><strong>Liegt eine ärztliche Verordnung vor?</strong></Text>
            <p>Ja</p>
            <p>{inquiry.description}</p>
            <Text mt={4}><strong>Liegt ein Pflegegrad vor?</strong></Text>
            <p>{inquiry.level_of_care}</p>

            <Heading mt={8} size="md">
                Wann und Wo
            </Heading>
            <Text mt={4}><strong>An welchen Tagen und zu welcher Uhrzeit wird Hilfe benötigt?</strong></Text>
            {inquiry.times.map((time_obj, idx) => (
                <p key={idx}>{renderTime(time_obj)}</p>
            ))}

            <Text mt={4}><strong>In welchem Stadtteil wird Hilfe benötigt?</strong></Text>
            <p>{inquiry.address_district}</p>

            <Heading mt={8} size="md">
                Kontaktinformationen
            </Heading>
            <Text mt={4}><strong>Name</strong></Text>
            <p>{inquiry.first_name} {inquiry.last_name}</p>
            <Text mt={4}><strong>Telefonnummer</strong></Text>
            <p>{inquiry.telephone}</p>
            <Text mt={4}><strong>Email</strong></Text>
            <p>{inquiry.email}</p>
            <Text mt={4}><strong>Straße und Hausnummer:</strong></Text>
            <p>{inquiry.address_street} {inquiry.address_number}</p>
            <Text mt={4}><strong>Postleitzahl und Stadt:</strong></Text>
            <p>{inquiry.address_postal_code} {inquiry.address_city}</p>


            <Link as={RouterLink} to="/inquiries" alignSelf="flex-end">
            <Button leftIcon={<AddIcon />} variant="solid" mt={8}>
                Kunde acquirieren
            </Button>
            </Link>
        </Container>
    );
}

export default DetailInquiry;
