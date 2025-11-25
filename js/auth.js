// TalentExchange - Módulo de Autenticación

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar contraseña
function isValidPassword(password) {
    return password && password.length >= 6;
}

// Función para login
function login(email, password) {
    // Buscar usuario en los datos simulados
    const user = USERS.find(u => u.email === email && u.password === password);

    if (user) {
        // Guardar usuario en localStorage
        setCurrentUser(user);
        return { success: true, user: user };
    } else {
        return { success: false, error: 'Incorrect email or password' };
    }
}

// Función para registro
function register(userData) {
    const { name, email, password, location, skills, seeking, bio } = userData;

    // Validaciones
    if (!name || name.trim().length < 2) {
        return { success: false, error: 'Name must be at least 2 characters' };
    }

    if (!isValidEmail(email)) {
        return { success: false, error: 'Invalid email' };
    }

    if (!isValidPassword(password)) {
        return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Verificar si el email ya existe
    const existingUser = USERS.find(u => u.email === email);
    if (existingUser) {
        return { success: false, error: 'This email is already registered' };
    }

    // Crear nuevo usuario
    const newUser = {
        id: USERS.length + 1,
        name: name.trim(),
        email: email.toLowerCase(),
        password: password,
        avatar: `https://i.pravatar.cc/150?img=${USERS.length + 1}`,
        location: location || 'No especificada',
        skills: skills || [],
        seeking: seeking || [],
        bio: bio || '',
        rating: 0,
        completedExchanges: 0,
        joinDate: new Date().toISOString().split('T')[0],
        availability: []
    };

    // Agregar a la lista de usuarios (en producción esto iría a una base de datos)
    USERS.push(newUser);

    // Auto-login después del registro
    setCurrentUser(newUser);

    return { success: true, user: newUser };
}

// Función para verificar si hay sesión activa
function isAuthenticated() {
    return getCurrentUser() !== null;
}

// Función para requerir autenticación (redirigir si no está autenticado)
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '../pages/login.html';
        return false;
    }
    return true;
}

// Función para obtener el usuario actual
function getAuthUser() {
    return getCurrentUser();
}

// Función para actualizar perfil de usuario
function updateUserProfile(updates) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return { success: false, error: 'No active session' };
    }

    // Actualizar usuario en el array
    const userIndex = USERS.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        USERS[userIndex] = { ...USERS[userIndex], ...updates };
        setCurrentUser(USERS[userIndex]);
        return { success: true, user: USERS[userIndex] };
    }

    return { success: false, error: 'User not found' };
}

// Función para cerrar sesión
function logoutUser() {
    logout();
}

// Inicialización: verificar si hay usuario en localStorage al cargar
document.addEventListener('DOMContentLoaded', function () {
    // Si estamos en una página que requiere autenticación
    const protectedPages = ['app.html', 'search.html', 'contracts-direct.html',
        'contracts-indirect.html', 'calendar.html', 'profile.html',
        'job-board.html', 'chat.html'];

    const currentPage = window.location.pathname.split('/').pop();

    if (protectedPages.includes(currentPage)) {
        requireAuth();
    }
});
