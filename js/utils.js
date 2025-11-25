// TalentExchange - Utilidades Generales

// Format date (user-facing strings are English)
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Formatear fecha relativa (hace X días)
function formatRelativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

// Generar estrellas de calificación
function generateStars(rating, maxStars = 5) {
    let starsHTML = '<div class="rating">';

    for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
            // Estrella completa
            starsHTML += '<span class="rating-star">★</span>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            // Media estrella
            starsHTML += '<span class="rating-star">⯨</span>';
        } else {
            // Estrella vacía
            starsHTML += '<span class="rating-star" style="color: #D1D5DB;">☆</span>';
        }
    }

    starsHTML += `<span class="text-sm ml-2">(${rating.toFixed(1)})</span></div>`;
    return starsHTML;
}

// Obtener badge de estado
function getStatusBadge(status) {
    const statusConfig = {
        'completed': { text: 'Completed', class: 'badge-success' },
        'in_progress': { text: 'In Progress', class: 'badge-warning' },
        'pending': { text: 'Pending', class: 'badge-warning' },
        'proposed': { text: 'Proposed', class: 'badge-secondary' },
        'active': { text: 'Active', class: 'badge-success' },
        'open': { text: 'Open', class: 'badge-primary' },
        'confirmed': { text: 'Confirmed', class: 'badge-success' },
        'available': { text: 'Available', class: 'badge-secondary' }
    };

    const config = statusConfig[status] || { text: status, class: 'badge-secondary' };
    return `<span class="badge ${config.class}">${config.text}</span>`;
}

// Truncar texto
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Escapar HTML para prevenir XSS
function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Mostrar notificación toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--info)'};
        color: white;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Confirmar acción
function confirmAction(message, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <h3 class="mb-md">Confirm Action</h3>
            <p class="mb-lg">${escapeHTML(message)}</p>
            <div class="flex gap-md justify-end">
                <button class="btn btn-outline" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="btn btn-primary" id="confirmBtn">Confirm</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('confirmBtn').addEventListener('click', () => {
        modal.remove();
        onConfirm();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Validar campo de formulario
function validateField(input, rules) {
    const value = input.value.trim();
    const errors = [];

    if (rules.required && !value) {
        errors.push('This field is required');
    }

    if (rules.minLength && value.length < rules.minLength) {
        errors.push(`Minimum ${rules.minLength} characters`);
    }

    if (rules.maxLength && value.length > rules.maxLength) {
        errors.push(`Maximum ${rules.maxLength} characters`);
    }

    if (rules.email && value && !isValidEmail(value)) {
        errors.push('Invalid email');
    }

    if (rules.pattern && value && !rules.pattern.test(value)) {
        errors.push(rules.patternMessage || 'Invalid format');
    }

    return errors;
}

// Mostrar errores de validación
function showFieldError(input, errors) {
    // Remover errores previos
    const existingError = input.parentElement.querySelector('.field-error');
    if (existingError) existingError.remove();

    input.classList.remove('input-error');

    if (errors.length > 0) {
        input.classList.add('input-error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error text-danger text-sm mt-sm';
        errorDiv.textContent = errors[0];
        input.parentElement.appendChild(errorDiv);
        return false;
    }

    return true;
}

// Debounce para búsquedas
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Obtener parámetros de URL
function getURLParams() {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
}

// Actualizar parámetros de URL sin recargar
function updateURLParams(params) {
    const url = new URL(window.location);
    Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
            url.searchParams.set(key, params[key]);
        } else {
            url.searchParams.delete(key);
        }
    });
    window.history.pushState({}, '', url);
}

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard', 'success');
    }).catch(() => {
        showToast('Error copying to clipboard', 'error');
    });
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// Inicializar dark mode desde localStorage
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark');
    }
}

// Formatear número con separadores de miles
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Generar ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Scroll suave a elemento
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Inicializar tooltips (simple)
function initTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function () {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--text-dark);
                color: white;
                padding: 0.5rem 0.75rem;
                border-radius: var(--radius-md);
                font-size: 0.875rem;
                z-index: 9999;
                pointer-events: none;
            `;
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

            this._tooltip = tooltip;
        });

        element.addEventListener('mouseleave', function () {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    initDarkMode();
    initTooltips();
});
