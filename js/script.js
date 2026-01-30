import { programsData } from './data.js';

let allPrograms = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadAllPrograms();
    setupEventListeners();
    renderCategory('all');
});

// Load all programs from data
function loadAllPrograms() {
    allPrograms = [];
    Object.values(programsData).forEach(programs => {
        allPrograms.push(...programs);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-category');
            renderCategory(category);
        });
    });

    // Search functionality
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            filterAndRender(query);
        });
    }

    // Modal close button
    const modal = document.getElementById('programModal');
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// Render a specific category
function renderCategory(category) {
    // Hide all sections
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Render programs based on category
    if (category === 'all') {
        renderPrograms(allPrograms, 'allProgramsGrid');
    } else if (category === 'board') {
        showBoardYears();
    } else {
        const categoryPrograms = programsData[category] || [];
        const gridId = category + 'Grid';
        renderPrograms(categoryPrograms, gridId);
    }
}

// Filter programs based on search query
function filterAndRender(query) {
    const filtered = allPrograms.filter(program =>
        program.title.toLowerCase().includes(query) ||
        program.description.toLowerCase().includes(query) ||
        program.tags.some(tag => tag.toLowerCase().includes(query))
    );

    renderPrograms(filtered, 'allProgramsGrid');
    
    // Show all category as active
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        }
    });

    const allSection = document.getElementById('all');
    if (allSection) {
        allSection.classList.add('active');
    }
}

// Render programs to grid
function renderPrograms(programs, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = '';

    if (programs.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #aaa;">No programs found</div>';
        return;
    }

    programs.forEach(program => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.onclick = () => showProgramModal(program);

        const tagsHtml = program.tags.map(tag => `<span class="program-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="program-title">${program.title}</div>
            <div class="program-description">${program.description}</div>
            <div class="program-tags">${tagsHtml}</div>
            <div class="program-meta">
                <span>${program.difficulty || 'N/A'}</span>
                <span>${program.year || 'General'}</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Show board years/papers
function showBoardYears() {
    document.getElementById('boardYearView').style.display = 'grid';
    document.getElementById('boardProgramsView').style.display = 'none';
}

// Show board year papers
function showBoardYearPaper(year, type) {
    const boardPrograms = programsData.board.filter(p => p.year === year && p.paper === type);
    
    // Update header with year and type
    const typeLabel = type === 'specimen' ? '(Specimen)' : '';
    const boardHeader = document.querySelector('#boardProgramsView .category-header');
    if (boardHeader) {
        boardHeader.innerHTML = `📋 ICSE ${year} ${typeLabel}`;
    }
    
    renderPrograms(boardPrograms, 'boardProgramsGrid');
    
    document.getElementById('boardYearView').style.display = 'none';
    document.getElementById('boardProgramsView').style.display = 'block';
}

// Show program in modal
function showProgramModal(program) {
    const modal = document.getElementById('programModal');
    const modalBody = document.getElementById('modalBody');

    const tagsHtml = program.tags.map(tag => `<span class="program-tag">${tag}</span>`).join('');
    const paperLabel = program.paper === 'specimen' ? '(Specimen)' : '';
    const yearLabel = program.year ? `${program.year} ${paperLabel}` : 'General';

    modalBody.innerHTML = `
        <div class="modal-header">
            <div>
                <h3 style="margin: 0; color: #667eea;">${program.title}</h3>
                <p style="margin: 5px 0; color: #999; font-size: 0.9em;">${yearLabel}</p>
            </div>
            <button class="close-btn" onclick="document.getElementById('programModal').classList.remove('active');">&times;</button>
        </div>
        <p>${program.description}</p>
        <div class="program-tags" style="margin-bottom: 20px;">${tagsHtml}</div>
        <div class="program-meta" style="margin-bottom: 20px;">
            <span>Difficulty: ${program.difficulty || 'N/A'}</span>
            <span>Category: ${program.category || 'N/A'}</span>
        </div>
        <button class="copy-btn" onclick="copyToClipboard(\`${program.code.replace(/`/g, '\\`')}\`)">📋 Copy Code</button>
        <div class="code-container">
            <code>${escapeHtml(program.code)}</code>
        </div>
    `;

    modal.classList.add('active');
}

// Copy to clipboard
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

// Escape HTML for safe display
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Make functions available globally
window.showBoardYears = showBoardYears;
window.showBoardYearPaper = showBoardYearPaper;
