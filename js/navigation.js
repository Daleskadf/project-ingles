// TalentExchange - Navegación del Sistema

// Función para navegar a una página
function navigateTo(page) {
    window.location.href = page;
}

// Función para obtener la página actual
function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}

// Función para marcar el elemento activo en el menú
function setActiveNavItem() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.sidebar-nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Función para toggle del sidebar en móvil
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('mobile-open');
    }
}

// Función para cerrar sidebar en móvil al hacer clic fuera
function closeSidebarOnClickOutside() {
    document.addEventListener('click', function (event) {
        const sidebar = document.querySelector('.sidebar');
        const menuButton = document.querySelector('.mobile-menu-btn');

        if (sidebar && !sidebar.contains(event.target) &&
            menuButton && !menuButton.contains(event.target)) {
            sidebar.classList.remove('mobile-open');
        }
    });
}

// Función para crear breadcrumbs
function createBreadcrumbs(items) {
    const breadcrumbContainer = document.getElementById('breadcrumbs');
    if (!breadcrumbContainer) return;

    let breadcrumbHTML = '<nav class="breadcrumbs flex items-center gap-sm text-sm mb-lg">';

    items.forEach((item, index) => {
        if (index > 0) {
            breadcrumbHTML += '<span class="text-gray-400">/</span>';
        }

        if (item.link && index < items.length - 1) {
            breadcrumbHTML += `<a href="${item.link}" class="text-secondary hover:underline">${item.text}</a>`;
        } else {
            breadcrumbHTML += `<span class="text-gray-600 dark:text-gray-400">${item.text}</span>`;
        }
    });

    breadcrumbHTML += '</nav>';
    breadcrumbContainer.innerHTML = breadcrumbHTML;
}

// Función para generar el sidebar de navegación
function generateSidebar() {
    const currentUser = getCurrentUser();
    if (!currentUser) return '';

    return `
        <aside class="sidebar">
            <!-- Logo y Usuario -->
            <div class="flex items-center gap-md mb-xl">
                <div class="text-2xl font-black text-primary-red flex items-center">
                    <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span>Talent</span><span class="text-secondary-teal">Exchange</span>
                </div>
            </div>
            
            <!-- Perfil de Usuario -->
            <div class="card p-md mb-lg">
                <div class="flex items-center gap-md">
                    <img src="${currentUser.avatar}" alt="${currentUser.name}" class="avatar">
                    <div class="flex-1 min-w-0">
                        <p class="font-semibold truncate">${currentUser.name}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${currentUser.completedExchanges} exchanges</p>
                    </div>
                </div>
            </div>
            
            <!-- Navegación -->
            <ul class="sidebar-nav">
                <li class="sidebar-nav-item">
                    <a href="../app.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/search.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Search Skills
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/contracts-direct.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                        </svg>
                        Direct Contracts
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/contracts-indirect.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        Help Chains
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/job-board.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        Job Board
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/calendar.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Calendar
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/chat.html" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        Messages
                    </a>
                </li>
                <li class="sidebar-nav-item">
                    <a href="../pages/profile.html?id=${currentUser.id}" class="sidebar-nav-link">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        My Profile
                    </a>
                </li>
            </ul>
            
            <!-- Botones de acción -->
            <div class="mt-auto pt-lg border-t border-gray-200 dark:border-gray-700">
                <button onclick="toggleDarkMode()" class="btn btn-outline w-full mb-sm">
                    <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                    Dark Mode
                </button>
                <button onclick="logoutUser()" class="btn btn-outline w-full">
                    <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    Log Out
                </button>
            </div>
        </aside>
        
        <!-- Botón de menú móvil -->
        <button class="mobile-menu-btn fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg" onclick="toggleSidebar()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    `;
}

// Inicializar navegación al cargar
document.addEventListener('DOMContentLoaded', function () {
    setActiveNavItem();
    closeSidebarOnClickOutside();
});
