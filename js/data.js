// TalentExchange - Datos Simulados del Sistema

// Usuarios del sistema
const USERS = [
    {
        id: 1,
        name: "Ana Martínez",
        email: "ana@example.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=1",
        location: "Madrid, Spain",
        skills: ["Graphic Design", "Digital Illustration", "Branding"],
        seeking: ["Web Development", "Photography"],
        bio: "Graphic designer with 5 years of experience. I love creating unique visual identities.",
        rating: 4.8,
        completedExchanges: 23,
        joinDate: "2024-01-15",
        availability: ["2025-11-26", "2025-11-28", "2025-12-01"]
    },
    {
        id: 2,
        name: "Carlos Ruiz",
        email: "carlos@example.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=12",
        location: "Barcelona, Spain",
        skills: ["Web Development", "JavaScript", "React"],
        seeking: ["UI/UX Design", "Digital Marketing"],
        bio: "Full-stack developer specialized in React and Node.js. Always learning new technologies.",
        rating: 4.9,
        completedExchanges: 31,
        joinDate: "2023-11-20",
        availability: ["2025-11-27", "2025-11-29", "2025-12-02"]
    },
    {
        id: 3,
        name: "Laura Sánchez",
        email: "laura@example.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=5",
        location: "Valencia, Spain",
        skills: ["Yoga", "Meditation", "Nutrition"],
        seeking: ["Photography", "Video Editing"],
        bio: "Certified yoga instructor. I help people find balance and wellness.",
        rating: 5.0,
        completedExchanges: 45,
        joinDate: "2023-08-10",
        availability: ["2025-11-26", "2025-11-27", "2025-11-30"]
    },
    {
        id: 4,
        name: "Miguel Torres",
        email: "miguel@example.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=13",
        location: "Seville, Spain",
        skills: ["Photography", "Photo Editing", "Videography"],
        seeking: ["Guitar Lessons", "English Translation"],
        bio: "Professional photographer specializing in portraits and events. I capture unique moments.",
        rating: 4.7,
        completedExchanges: 28,
        joinDate: "2024-02-05",
        availability: ["2025-11-28", "2025-12-01", "2025-12-03"]
    },
    {
        id: 5,
        name: "Elena García",
        email: "elena@example.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=9",
        location: "Bilbao, Spain",
        skills: ["English-Spanish Translation", "Proofreading", "English Lessons"],
        seeking: ["Graphic Design", "Web Development"],
        bio: "Professional translator with experience in technical and literary texts.",
        rating: 4.9,
        completedExchanges: 37,
        joinDate: "2023-10-12",
        availability: ["2025-11-26", "2025-11-29", "2025-12-02"]
    },
    {
        id: 6,
        name: "David López",
        email: "david@example.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=14",
        location: "Malaga, Spain",
        skills: ["Guitar Lessons", "Music Production", "Composition"],
        seeking: ["Digital Marketing", "Community Management"],
        bio: "Professional musician and guitar teacher. I teach from beginner to advanced levels.",
        rating: 4.6,
        completedExchanges: 19,
        joinDate: "2024-03-20",
        availability: ["2025-11-27", "2025-11-30", "2025-12-01"]
    }
];

// Reseñas de usuarios
const REVIEWS = [
    {
        id: 1,
        userId: 1,
        reviewerId: 2,
        reviewerName: "Carlos Ruiz",
        rating: 5,
        comment: "Excellent work! Ana created an amazing logo for my project. Very professional and creative.",
        date: "2025-11-15",
        exchangeType: "Logo Design for Web Development"
    },
    {
        id: 2,
        userId: 1,
        reviewerId: 3,
        reviewerName: "Laura Sánchez",
        rating: 5,
        comment: "Ana is very talented. She helped with the branding for my yoga studio. Highly recommended!",
        date: "2025-11-10",
        exchangeType: "Branding for Yoga Classes"
    },
    {
        id: 3,
        userId: 2,
        reviewerId: 1,
        reviewerName: "Ana Martínez",
        rating: 5,
        comment: "Carlos developed my website impeccably. Very professional and fast.",
        date: "2025-11-16",
        exchangeType: "Web Development for Graphic Design"
    },
    {
        id: 4,
        userId: 3,
        reviewerId: 4,
        reviewerName: "Miguel Torres",
        rating: 5,
        comment: "Laura's yoga classes are transformative. Excellent instructor.",
        date: "2025-11-12",
        exchangeType: "Yoga for Photography"
    }
];

// Contratos directos
const DIRECT_CONTRACTS = [
    {
        id: 1,
        userA: { id: 1, name: "Ana Martínez", skill: "Logo Design" },
        userB: { id: 2, name: "Carlos Ruiz", skill: "Landing Page" },
        status: "completed",
        createdDate: "2025-11-01",
        completedDate: "2025-11-15",
        scheduledDate: "2025-11-10",
        description: "Ana will design a professional logo for Carlos's project, and Carlos will develop a landing page for Ana's portfolio."
    },
    {
        id: 2,
        userA: { id: 3, name: "Laura Sánchez", skill: "5 Yoga Classes" },
        userB: { id: 4, name: "Miguel Torres", skill: "Photo Session" },
        status: "in_progress",
        createdDate: "2025-11-18",
        completedDate: null,
        scheduledDate: "2025-11-28",
        description: "Laura will offer 5 personalized yoga classes to Miguel, and Miguel will conduct a professional photo session for Laura."
    },
    {
        id: 3,
        userA: { id: 5, name: "Elena García", skill: "Document Translation" },
        userB: { id: 1, name: "Ana Martínez", skill: "Flyer Design" },
        status: "pending",
        createdDate: "2025-11-22",
        completedDate: null,
        scheduledDate: "2025-12-01",
        description: "Elena will translate a technical document from English to Spanish for Ana, and Ana will design a promotional flyer for Elena."
    },
    {
        id: 4,
        userA: { id: 6, name: "David López", skill: "3 Guitar Lessons" },
        userB: { id: 2, name: "Carlos Ruiz", skill: "Simple Website" },
        status: "proposed",
        createdDate: "2025-11-24",
        completedDate: null,
        scheduledDate: "2025-12-05",
        description: "David will give 3 beginner guitar lessons to Carlos, and Carlos will create a simple website to promote David's classes."
    },
    {
        id: 5,
        userA: { id: 1, name: "Ana Martínez", skill: "Branding Design" },
        userB: { id: 3, name: "Laura Sánchez", skill: "10 Yoga Classes" },
        status: "completed",
        createdDate: "2025-10-20",
        completedDate: "2025-11-10",
        scheduledDate: "2025-10-25",
        description: "Ana created the full visual identity for Laura's yoga studio, including logo, business cards, and promotional materials."
    },
    {
        id: 6,
        userA: { id: 4, name: "Miguel Torres", skill: "Product Photo Session" },
        userB: { id: 5, name: "Elena García", skill: "Website Translation" },
        status: "in_progress",
        createdDate: "2025-11-20",
        completedDate: null,
        scheduledDate: "2025-11-30",
        description: "Miguel will photograph products for Elena's portfolio, and Elena will translate Miguel's website into English."
    },
    {
        id: 7,
        userA: { id: 2, name: "Carlos Ruiz", skill: "Web Application" },
        userB: { id: 6, name: "David López", skill: "5 Guitar Lessons" },
        status: "pending",
        createdDate: "2025-11-23",
        completedDate: null,
        scheduledDate: "2025-12-03",
        description: "Carlos will develop a web application to manage David's classes, and David will teach him guitar."
    },
    {
        id: 8,
        userA: { id: 5, name: "Elena García", skill: "English Lessons" },
        userB: { id: 4, name: "Miguel Torres", skill: "Portrait Photography" },
        status: "proposed",
        createdDate: "2025-11-25",
        completedDate: null,
        scheduledDate: "2025-12-08",
        description: "Elena will give 8 conversational English lessons to Miguel, and Miguel will conduct a professional photo session for Elena."
    }
];

// Contratos indirectos (cadenas de ayuda)
const INDIRECT_CONTRACTS = [
    {
        id: 1,
        name: "Creative Chain",
        participants: [
            { id: 1, name: "Ana Martínez", gives: "Logo Design", receives: "English Lessons" },
            { id: 5, name: "Elena García", gives: "English Lessons", receives: "Product Photography" },
            { id: 4, name: "Miguel Torres", gives: "Product Photography", receives: "Logo Design" }
        ],
        status: "active",
        createdDate: "2025-11-05",
        completedDate: null,
        description: "A chain where each person helps the next, creating a circle of creative skill exchanges."
    },
    {
        id: 2,
        name: "Tech & Wellness Chain",
        participants: [
            { id: 2, name: "Carlos Ruiz", gives: "Web Development", receives: "Yoga Classes" },
            { id: 3, name: "Laura Sánchez", gives: "Yoga Classes", receives: "Meditation Music" },
            { id: 6, name: "David López", gives: "Meditation Music", receives: "Web Development" }
        ],
        status: "completed",
        createdDate: "2025-10-15",
        completedDate: "2025-11-20",
        description: "Chain that combines technology, wellness and art for mutual benefit."
    }
];

// Trabajos publicados en el tablón
const JOB_BOARD = [
    {
        id: 1,
        userId: 2,
        userName: "Carlos Ruiz",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        title: "Need Logo Design for Startup",
        description: "Looking for a creative designer to create the visual identity for my new tech startup. I need a logo, color palette, and a basic style guide.",
        skillRequired: "Graphic Design",
        skillOffered: "Responsive Website Development",
        category: "Design",
        postedDate: "2025-11-23",
        applicants: 3,
        status: "open"
    },
    {
        id: 2,
        userId: 4,
        userName: "Miguel Torres",
        userAvatar: "https://i.pravatar.cc/150?img=13",
        title: "Guitar Lessons in Exchange for Digital Marketing",
        description: "I offer personalized guitar lessons (beginner to intermediate) in exchange for help with social media strategy for my photography business.",
        skillRequired: "Digital Marketing",
        skillOffered: "Guitar Lessons",
        category: "Music",
        postedDate: "2025-11-22",
        applicants: 1,
        status: "open"
    },
    {
        id: 3,
        userId: 3,
        userName: "Laura Sánchez",
        userAvatar: "https://i.pravatar.cc/150?img=5",
        title: "Yoga Video Editing",
        description: "I need editing for my yoga class videos for YouTube. About 4-5 videos per month. I offer unlimited yoga classes for 3 months in exchange.",
        skillRequired: "Video Editing",
        skillOffered: "Yoga Classes",
        category: "Video",
        postedDate: "2025-11-21",
        applicants: 5,
        status: "open"
    },
    {
        id: 4,
        userId: 1,
        userName: "Ana Martínez",
        userAvatar: "https://i.pravatar.cc/150?img=1",
        title: "Illustrations for Children's Book",
        description: "Looking for a writer to collaborate on a children's book. I will do all illustrations in exchange for the story writing.",
        skillRequired: "Creative Writing",
        skillOffered: "Digital Illustration",
        category: "Art",
        postedDate: "2025-11-20",
        applicants: 2,
        status: "in_progress"
    },
    {
        id: 5,
        userId: 5,
        userName: "Elena García",
        userAvatar: "https://i.pravatar.cc/150?img=9",
        title: "Website Content Translation",
        description: "I need my entire website translated from Spanish to English. About 20 pages. I offer personalized English lessons in exchange.",
        skillRequired: "Web Development",
        skillOffered: "English-Spanish Translation",
        category: "Languages",
        postedDate: "2025-11-24",
        applicants: 2,
        status: "open"
    },
    {
        id: 6,
        userId: 6,
        userName: "David López",
        userAvatar: "https://i.pravatar.cc/150?img=14",
        title: "Music Production for Podcast",
        description: "Looking for someone who needs original music for their podcast. I compose and produce music in exchange for graphic design for my album.",
        skillRequired: "Graphic Design",
        skillOffered: "Music Production",
        category: "Music",
        postedDate: "2025-11-19",
        applicants: 4,
        status: "open"
    },
    {
        id: 7,
        userId: 2,
        userName: "Carlos Ruiz",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        title: "E-commerce Development",
        description: "I offer to develop a complete online store with cart and payment gateway. Looking for product photography services.",
        skillRequired: "Photography",
        skillOffered: "Web Development",
        category: "Technology",
        postedDate: "2025-11-18",
        applicants: 6,
        status: "open"
    },
    {
        id: 8,
        userId: 3,
        userName: "Laura Sánchez",
        userAvatar: "https://i.pravatar.cc/150?img=5",
        title: "Corporate Yoga Classes",
        description: "I offer a corporate yoga program (8 sessions) in exchange for help with digital marketing strategy for my studio.",
        skillRequired: "Digital Marketing",
        skillOffered: "Yoga",
        category: "Wellness",
        postedDate: "2025-11-17",
        applicants: 3,
        status: "open"
    }
];

// Mensajes de chat
const CHAT_CONVERSATIONS = [
    {
        id: 1,
        participants: [1, 2],
        participantNames: ["Ana Martínez", "Carlos Ruiz"],
        lastMessage: "Perfect! See you on Friday then.",
        lastMessageDate: "2025-11-25T10:30:00",
        unread: 0,
        messages: [
            { id: 1, senderId: 2, text: "Hi Ana, I saw your profile and I'm interested in exchanging services.", timestamp: "2025-11-24T09:00:00" },
            { id: 2, senderId: 1, text: "Hi Carlos! Sure, tell me what you need.", timestamp: "2025-11-24T09:15:00" },
            { id: 3, senderId: 2, text: "I need a logo for my new project. Could you help?", timestamp: "2025-11-24T09:20:00" },
            { id: 4, senderId: 1, text: "Of course. I need a landing page. Are you interested?", timestamp: "2025-11-24T09:25:00" },
            { id: 5, senderId: 2, text: "Great! Let's make the exchange. When can we start?", timestamp: "2025-11-24T09:30:00" },
            { id: 6, senderId: 1, text: "How about Friday?", timestamp: "2025-11-25T10:15:00" },
            { id: 7, senderId: 2, text: "Perfect! See you on Friday then.", timestamp: "2025-11-25T10:30:00" }
        ]
    },
    {
        id: 2,
        participants: [1, 3],
        participantNames: ["Ana Martínez", "Laura Sánchez"],
        lastMessage: "Thanks for the classes, they've been amazing 🙏",
        lastMessageDate: "2025-11-24T18:45:00",
        unread: 1,
        messages: [
            { id: 1, senderId: 3, text: "Hi Ana, I loved the branding you did for my studio.", timestamp: "2025-11-24T18:30:00" },
            { id: 2, senderId: 1, text: "Thank you Laura! I'm glad you liked it.", timestamp: "2025-11-24T18:35:00" },
            { id: 3, senderId: 3, text: "Thanks for the classes, they've been amazing 🙏", timestamp: "2025-11-24T18:45:00" }
        ]
    },
    {
        id: 3,
        participants: [1, 4],
        participantNames: ["Ana Martínez", "Miguel Torres"],
        lastMessage: "Sure, send me the details please",
        lastMessageDate: "2025-11-23T14:20:00",
        unread: 0,
        messages: [
            { id: 1, senderId: 4, text: "Hi Ana, could you design a flyer to promote my services?", timestamp: "2025-11-23T14:00:00" },
            { id: 2, senderId: 1, text: "Sure, send me the details please", timestamp: "2025-11-23T14:20:00" }
        ]
    }
];

// Eventos del calendario
const CALENDAR_EVENTS = [
    {
        id: 1,
        title: "Photo Session with Miguel",
        date: "2025-11-28",
        time: "10:00",
        type: "exchange",
        status: "confirmed",
        participants: ["Laura Sánchez", "Miguel Torres"],
        description: "Professional photo session for a yoga portfolio",
        contractId: 2
    },
    {
        id: 2,
        title: "Translation Delivery",
        date: "2025-12-01",
        time: "15:00",
        type: "exchange",
        status: "pending",
        participants: ["Elena García", "Ana Martínez"],
        description: "Delivery of the translated document",
        contractId: 3
    },
    {
        id: 3,
        title: "First Guitar Lesson",
        date: "2025-12-05",
        time: "18:00",
        type: "exchange",
        status: "proposed",
        participants: ["David López", "Carlos Ruiz"],
        description: "First guitar lesson session for beginners",
        contractId: 4
    },
    {
        id: 4,
        title: "Available for Exchanges",
        date: "2025-11-26",
        time: "09:00",
        type: "availability",
        status: "available",
        participants: ["Ana Martínez"],
        description: "Full day available for new projects"
    },
    {
        id: 5,
        title: "Group Yoga Class",
        date: "2025-11-27",
        time: "07:00",
        type: "availability",
        status: "available",
        participants: ["Laura Sánchez"],
        description: "Morning yoga session available"
    },
    {
        id: 6,
        title: "Planning Meeting - Website",
        date: "2025-11-29",
        time: "16:00",
        type: "exchange",
        status: "confirmed",
        participants: ["Carlos Ruiz", "David López"],
        description: "Meeting to define requirements for the guitar lessons website",
        contractId: 7
    },
    {
        id: 7,
        title: "Product Photo Session",
        date: "2025-11-30",
        time: "11:00",
        type: "exchange",
        status: "confirmed",
        participants: ["Miguel Torres", "Elena García"],
        description: "Product photography for a translation portfolio",
        contractId: 6
    },
    {
        id: 8,
        title: "Branding Design Delivery",
        date: "2025-12-02",
        time: "14:00",
        type: "exchange",
        status: "pending",
        participants: ["Ana Martínez", "Laura Sánchez"],
        description: "Final presentation of the yoga studio branding",
        contractId: 5
    },
    {
        id: 9,
        title: "First English Lesson",
        date: "2025-12-08",
        time: "17:00",
        type: "exchange",
        status: "proposed",
        participants: ["Elena García", "Miguel Torres"],
        description: "First conversational English lesson session",
        contractId: 8
    },
    {
        id: 10,
        title: "Work Session - Children's Book",
        date: "2025-12-03",
        time: "10:00",
        type: "exchange",
        status: "confirmed",
        participants: ["Ana Martínez"],
        description: "Work on illustrations for the children's book"
    },
    {
        id: 11,
        title: "Available - Photography Sessions",
        date: "2025-12-04",
        time: "09:00",
        type: "availability",
        status: "available",
        participants: ["Miguel Torres"],
        description: "Day available for photography sessions"
    },
    {
        id: 12,
        title: "Outdoor Yoga Workshop",
        date: "2025-12-06",
        time: "08:00",
        type: "availability",
        status: "available",
        participants: ["Laura Sánchez"],
        description: "Special outdoor yoga session in the park"
    }
];

// Categorías de habilidades
const SKILL_CATEGORIES = {
    "Design": ["Graphic Design", "Digital Illustration", "Branding", "UI/UX", "Logo Design"],
    "Technology": ["Web Development", "JavaScript", "React", "Python", "Technical Support"],
    "Languages": ["English-Spanish Translation", "English Lessons", "French Lessons", "Proofreading"],
    "Art": ["Photography", "Photo Editing", "Videography", "Video Editing", "Illustration"],
    "Music": ["Guitar Lessons", "Music Production", "Composition", "Piano Lessons", "Singing Lessons"],
    "Wellness": ["Yoga", "Meditation", "Nutrition", "Fitness", "Personal Coaching"],
    "Marketing": ["Digital Marketing", "Community Management", "SEO", "Copywriting", "Social Media"],
    "Writing": ["Creative Writing", "Content Writing", "Editing", "Blogging"]
};

// Función para obtener usuario actual (simulado con localStorage)
function getCurrentUser() {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
}

// Función para establecer usuario actual
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../pages/login.html';
}

// Función para obtener conversaciones del usuario actual
function getUserConversations(userId) {
    return CHAT_CONVERSATIONS.filter(conv =>
        conv.participants.includes(userId)
    );
}

// Función para obtener trabajos del tablón
function getJobBoardListings(filter = 'all') {
    if (filter === 'all') return JOB_BOARD;
    return JOB_BOARD.filter(job => job.status === filter);
}

// Función para buscar usuarios por habilidad
function searchUsersBySkill(skillQuery) {
    const query = skillQuery.toLowerCase();
    return USERS.filter(user =>
        user.skills.some(skill => skill.toLowerCase().includes(query))
    );
}

// Función para obtener eventos del calendario por fecha
function getEventsByDate(date) {
    return CALENDAR_EVENTS.filter(event => event.date === date);
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        USERS,
        REVIEWS,
        DIRECT_CONTRACTS,
        INDIRECT_CONTRACTS,
        JOB_BOARD,
        CHAT_CONVERSATIONS,
        CALENDAR_EVENTS,
        SKILL_CATEGORIES,
        getCurrentUser,
        setCurrentUser,
        logout,
        getUserConversations,
        getJobBoardListings,
        searchUsersBySkill,
        getEventsByDate
    };
}
