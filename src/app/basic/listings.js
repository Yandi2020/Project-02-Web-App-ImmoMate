//before connect with firestore, for local testing and UI

const listings = [
    {
        id: 1, // ms laura, image 9-1, done uploaded
        userId: '0001',
        title: '3 Rooms House with Kitchen in Suburbs of Berlin',
        type: 'house',
        favourite: true,
        details: {
            price: 900,
            size: 75,
            rooms: 3,
            address: "Streitstrasse 27a, 13587 Berlin, Hakenfelde",
        },
        images: [
            {url: require('../../assets/images/prop-9-1.jpeg').default},
            {url: require('../../assets/images/prop-9-2.jpeg').default},
            {url: require('../../assets/images/prop-9-3.jpeg').default},
            {url: require('../../assets/images/prop-9-4.jpeg').default},
        ],
        contact: {
            image: 'woman',
            name: 'Ms. Laura Schutz',
            company: 'Prima Immobilien GmbH',
            phone: '016946684675',
            email: 'verwaltung@gmail.com',
        },
        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        id: 2,  // done 2- olaf-
        userId: 'testid666',
        title: 'Beautiful 4 Rooms Apartment in Hamburg City Center',
        type: 'apartment',
        favourite: true,
        details: {
            price: 2500,
            size: 90,
            rooms: 4,
            address: "ABC-Straße 44-46, 20354 Hamburg",
        },
        images: [
            {url: require('../../assets/images/prop-2-1.jpeg').default},
            {url: require('../../assets/images/prop-2-2.jpeg').default},
            {url: require('../../assets/images/prop-2-3.jpeg').default},
            {url: require('../../assets/images/prop-2-4.jpeg').default},
        ],
        contact: {
            image: 'man',
            name: 'Mr. Olaf Müller',
            company: 'GutGrund Immobilien Verwaltungs GmbH',
            phone: '016946684675',
            email: 'verwaltung@gmail.com',
        },
        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        id: 3, //ms 3-1 done
        userId: '0001',
        title: 'Bright 1 Room Apartment near FU Berlin',
        type: 'apartment',
        favourite: false,
        details: {
            price: 750,
            size: 38,
            rooms: 1,
            address: "Clayallee 336, 14169 Berlin, Zehlendorf",
        },
        images: [
            {url: require('../../assets/images/prop-3-1.jpeg').default},
            {url: require('../../assets/images/prop-3-2.jpeg').default},
            {url: require('../../assets/images/prop-3-3.jpeg').default},
            {url: require('../../assets/images/prop-3-4.jpeg').default},
        ],
        contact: {
            image: 'woman',
            name: 'Ms. Mia Schmidt',
            company: 'Kiduro Management GmbH',
            phone: '016946684675',
            email: 'verwaltung@gmail.com',
        },
        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        id: 4, //done ms 4-1
        userId: 'testid666',
        title: 'Modern House for Family in Frankfurt am Main',
        type: 'house',
        favourite: false,
        details: {
            price: 1750,
            size: 99,
            rooms: 3,
            address: "Im Galluspark 10a, 60326 Frankfurt am Main",
        },
        images: [
            {url: require('../../assets/images/prop-10-1.jpeg').default},
            {url: require('../../assets/images/prop-10-2.jpeg').default},
            {url: require('../../assets/images/prop-10-3.jpeg').default},
            {url: require('../../assets/images/prop-10-4.jpeg').default},
        ],
        contact: {
            image: 'man',
            name: 'Mr. Frank Meyer',
            company: 'Meyer Immobilien GmbH',
            phone: '016946684675',
            email: 'verwaltung@gmail.com',
        },
        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        id: 5, // olaf 5-1 done
        userId: '0001',
        title: 'Peaceful 2 Rooms Apartment near Central Park in Potsdam',
        type: 'apartment',
        favourite: true,
        details: {
            price: 680,
            size: 65,
            rooms: 2,
            address: "Gerlachstraße 41, 14480 Potsdam, Drewitz",
        },
        images: [
            {url: require('../../assets/images/prop-5-1.jpeg').default},
            {url: require('../../assets/images/prop-5-2.jpeg').default},
            {url: require('../../assets/images/prop-5-3.jpeg').default},
            {url: require('../../assets/images/prop-5-4.jpeg').default},
        ],
        contact: {
            image: 'woman',
            name: 'Ms. Franziska Weber',
            company: 'PotsdamRaum Immobilien GmbH',
            phone: '016946684675',
            email: 'verwaltung@gmail.com',
        },
        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        id: 6, //done ms 6-1
        userId: 'testid666',
        title: 'Living like Napoleon - 6 Rooms Beautiful Big House for Your Family',
        type: 'house',
        favourite: true,
        details: {
            price: 2900,
            size: 240,
            rooms: 6,
            address: "Lindenthaler Allee 34, 14163 Berlin, Zehlendorf",
        },
        images: [
            {url: require('../../assets/images/prop-6-1.jpeg').default},
            {url: require('../../assets/images/prop-6-2.jpeg').default},
            {url: require('../../assets/images/prop-6-3.jpeg').default},
            {url: require('../../assets/images/prop-6-4.jpeg').default},
        ],
        contact: {
            image: 'man',
            name: 'Mr. Thomas Fischer',
            company: 'Berlin ViViO Immobilien GmbH',
            phone: '016946684675',
            email: 'verwaltung@gmail.com',
        },
        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
];

export default listings;

