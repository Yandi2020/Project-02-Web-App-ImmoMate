//before connect with firestore, for local testing and UI

const messages = [
    {
        id: 1,
        userId: '0001',
        timestamp: 1,
        content: 'Hello, is this house still available? I wanna make an appointment, thanks!'
    },
    {
        id: 1,
        userId: 'testid666',
        timestamp: 2,
        content: 'Hello, the house is still available. How about this Friday at 14:00?'
    },
    {
        id: 1,
        userId: '0001',
        timestamp: 3,
        content: 'Oh, great! Then we meet in front the gate on Friday at 14:00.'
    },
    {
        id: 1,
        userId: 'testid666',
        timestamp: 4,
        content: 'Good! See you soon!'
    },

    {
        id: 6,
        userId: 'testid666',
        timestamp: 1,
        content: 'Hello, is this apartment still available? May I have an appointment, please?'
    },
    {
        id: 6,
        userId: '0001',
        timestamp: 2,
        content: 'Hello, I am so sorry, this apartment is already reserved....'
    },
    {
        id: 6,
        userId: 'testid666',
        timestamp: 3,
        content: 'Oh, what a pity...'
    },
    {
        id: 6,
        userId: '0001',
        timestamp: 4,
        content: 'Yeah... well, maybe next time :)'
    },
];

export default messages;

