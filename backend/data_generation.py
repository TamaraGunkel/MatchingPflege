import main

inquiries = [
    {
      "inquiry": {
        "last_name": "Jennings",
        "first_name": "Melva",
        "telephone": "+49 (963) 545-3388",
        "email": "melvajennings@sloganaut.com",
        "address": {
          "street": "Lorraine Street",
          "number": 22,
          "postal_code": 1337,
          "city": "Münster",
          "district": "West"
        },
        "level_of_care": 3,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "tempor",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": False
      },
      "customer": {
        "last_name": "Roach",
        "first_name": "Katheryn",
        "telephone": "+49 (850) 410-3718",
        "email": "katherynroach@sloganaut.com"
      },
      "services": [
        {
          "name": "Pflege"
        },
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Rasenmähen"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Pitts",
        "first_name": "Cote",
        "telephone": "+49 (886) 563-3530",
        "email": "cotepitts@sloganaut.com",
        "address": {
          "street": "Clifford Place",
          "number": 35,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Ost"
        },
        "level_of_care": 5,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "ad",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Blackwell",
        "first_name": "Summer",
        "telephone": "+49 (930) 489-2707",
        "email": "summerblackwell@sloganaut.com"
      },
      "services": [
        {
          "name": "Mobilität"
        },
        {
          "name": "Pflege"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Monroe",
        "first_name": "Norris",
        "telephone": "+49 (896) 438-3074",
        "email": "norrismonroe@sloganaut.com",
        "address": {
          "street": "Broome Street",
          "number": 32,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Süd"
        },
        "level_of_care": 0,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "laborum",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Holden",
        "first_name": "Raquel",
        "telephone": "+49 (815) 538-3387",
        "email": "raquelholden@sloganaut.com"
      },
      "services": [
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Mobilität"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Ray",
        "first_name": "Hughes",
        "telephone": "+49 (942) 432-2930",
        "email": "hughesray@sloganaut.com",
        "address": {
          "street": "Morton Street",
          "number": 23,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Nord"
        },
        "level_of_care": 2,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "irure",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Graves",
        "first_name": "Maryann",
        "telephone": "+49 (942) 519-2910",
        "email": "maryanngraves@sloganaut.com"
      },
      "services": [
        {
          "name": "Mobilität"
        },
        {
          "name": "Pflege"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Yang",
        "first_name": "Powell",
        "telephone": "+49 (881) 526-3766",
        "email": "powellyang@sloganaut.com",
        "address": {
          "street": "Williams Court",
          "number": 20,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Nord"
        },
        "level_of_care": 0,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "id",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": False
      },
      "customer": {
        "last_name": "Irwin",
        "first_name": "Kent",
        "telephone": "+49 (914) 595-2206",
        "email": "kentirwin@sloganaut.com"
      },
      "services": [
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Pflege"
        },
        {
          "name": "Pflege"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Bolton",
        "first_name": "Lowe",
        "telephone": "+49 (921) 426-3535",
        "email": "lowebolton@sloganaut.com",
        "address": {
          "street": "Knickerbocker Avenue",
          "number": 29,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Nord"
        },
        "level_of_care": 0,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "ut",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Wade",
        "first_name": "Jeannie",
        "telephone": "+49 (860) 564-3466",
        "email": "jeanniewade@sloganaut.com"
      },
      "services": [
        {
          "name": "Pflege"
        },
        {
          "name": "Pflege"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Chen",
        "first_name": "Leblanc",
        "telephone": "+49 (979) 500-2624",
        "email": "leblancchen@sloganaut.com",
        "address": {
          "street": "Lake Street",
          "number": 34,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Süd"
        },
        "level_of_care": 1,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "pariatur",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": False
      },
      "customer": {
        "last_name": "Nieves",
        "first_name": "Holland",
        "telephone": "+49 (939) 417-2027",
        "email": "hollandnieves@sloganaut.com"
      },
      "services": [
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Crawford",
        "first_name": "Rose",
        "telephone": "+49 (835) 573-3645",
        "email": "rosecrawford@sloganaut.com",
        "address": {
          "street": "Colin Place",
          "number": 27,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Nord"
        },
        "level_of_care": 1,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "dolore",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Hardy",
        "first_name": "Serena",
        "telephone": "+49 (916) 468-2560",
        "email": "serenahardy@sloganaut.com"
      },
      "services": [
        {
          "name": "Mobilität"
        },
        {
          "name": "Mobilität"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Wooten",
        "first_name": "Holloway",
        "telephone": "+49 (936) 452-2571",
        "email": "hollowaywooten@sloganaut.com",
        "address": {
          "street": "Bokee Court",
          "number": 24,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Nord"
        },
        "level_of_care": 3,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "et",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": False
      },
      "customer": {
        "last_name": "Rodriguez",
        "first_name": "Goodwin",
        "telephone": "+49 (840) 543-2813",
        "email": "goodwinrodriguez@sloganaut.com"
      },
      "services": [
        {
          "name": "Mobilität"
        },
        {
          "name": "Mobilität"
        },
        {
          "name": "Rasenmähen"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Kelly",
        "first_name": "Silvia",
        "telephone": "+49 (871) 593-2961",
        "email": "silviakelly@sloganaut.com",
        "address": {
          "street": "Balfour Place",
          "number": 22,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Süd"
        },
        "level_of_care": 3,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "anim",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Grant",
        "first_name": "Jenkins",
        "telephone": "+49 (998) 467-2981",
        "email": "jenkinsgrant@sloganaut.com"
      },
      "services": [
        {
          "name": "Pflege"
        },
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Mobilität"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Mullen",
        "first_name": "Potter",
        "telephone": "+49 (985) 479-2592",
        "email": "pottermullen@sloganaut.com",
        "address": {
          "street": "Rockwell Place",
          "number": 34,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Ost"
        },
        "level_of_care": 5,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "ullamco",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": True
      },
      "customer": {
        "last_name": "Burns",
        "first_name": "Katrina",
        "telephone": "+49 (931) 402-3904",
        "email": "katrinaburns@sloganaut.com"
      },
      "services": [
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Pflege"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "inquiry": {
        "last_name": "Cabrera",
        "first_name": "Imelda",
        "telephone": "+49 (848) 545-3004",
        "email": "imeldacabrera@sloganaut.com",
        "address": {
          "street": "Schenectady Avenue",
          "number": 28,
          "postal_code": 1337,
          "city": "Münster",
          "district": "Süd"
        },
        "level_of_care": 1,
        "time": [],
        "duration": 0,
        "duration_hiring": {
          "start": "2021-09-25T13:42:21.882Z",
          "end": "2021-10-30T13:42:21.882Z"
        },
        "description": "nisi",
        "necessary_expertise": [],
        "service_categories": [],
        "status": "",
        "contact_opt_in": False
      },
      "customer": {
        "last_name": "Dunn",
        "first_name": "Muriel",
        "telephone": "+49 (946) 503-2369",
        "email": "murieldunn@sloganaut.com"
      },
      "services": [
        {
          "name": "Mobilität"
        },
        {
          "name": "Rasenmähen"
        },
        {
          "name": "Pflege"
        }
      ],
      "times": [
        {
          "weekday": "Monday",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    }
  ]


for i in inquiries:
  inquiry = i["inquiry"]
  customer = i["customer"]
  services = i["services"]
  times = i["times"]

  main.create_inquiry(inquiry=inquiry, customer=customer,services=services, times = times)


