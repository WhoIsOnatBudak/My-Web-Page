/* ============================================================
   s.js — RENDERING LOGIC — DO NOT EDIT
   Edit config.js to change your content.
   ============================================================ */

// Auto colour palette for timeline bars (used if no color specified in config)
const TIMELINE_COLORS = ['#7c6af5', '#56cfba', '#e05475', '#f5a623', '#4fc3f7', '#a5d6a7', '#ef9a9a'];

// Tech icon map → devicon class names
const ICON_MAP = {
    c: { label: 'C', cls: 'devicon-c-plain colored' },
    cpp: { label: 'C++', cls: 'devicon-cplusplus-plain colored' },
    html: { label: 'HTML', cls: 'devicon-html5-plain colored' },
    css: { label: 'CSS', cls: 'devicon-css3-plain colored' },
    js: { label: 'JS', cls: 'devicon-javascript-plain colored' },
    react: { label: 'React', cls: 'devicon-react-original colored' },
    vue: { label: 'Vue', cls: 'devicon-vuejs-plain colored' },
    java: { label: 'Java', cls: 'devicon-java-plain colored' },
    python: { label: 'Python', cls: 'devicon-python-plain colored' },
    docker: { label: 'Docker', cls: 'devicon-docker-plain colored' },
    csharp: { label: 'C#', cls: 'devicon-csharp-plain colored' },
    flask: { label: 'Flask', cls: 'devicon-flask-original colored' },
    mysql: { label: 'MySQL', cls: 'devicon-mysql-plain-wordmark colored' },
};

document.addEventListener('DOMContentLoaded', () => {
    buildSlideshow();
    buildTimeline();
    buildProjects();
    initScrollReveal();
});

/* ── SLIDESHOW ─────────────────────────────────────────── */
let curSlide = 0;

function buildSlideshow() {
    const track = document.getElementById('slide-track');
    const dotsWrap = document.getElementById('slide-dots');
    if (!track || !dotsWrap || !SLIDES || !SLIDES.length) return;

    SLIDES.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (i === 0 ? ' active' : '');

        const num = document.createElement('div');
        num.className = 'slide-num';
        num.textContent = `${i + 1} / ${SLIDES.length}`;

        const img = document.createElement('img');
        img.src = src;
        img.className = 'slide-img';
        img.alt = 'slide ' + (i + 1);

        slide.appendChild(num);
        slide.appendChild(img);
        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active-dot' : '');
        dot.onclick = () => goToSlide(i);
        dotsWrap.appendChild(dot);
    });
}

function goToSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (!slides.length) return;
    curSlide = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === curSlide));
    dots.forEach((d, i) => d.classList.toggle('active-dot', i === curSlide));
}

window.prevSlide = () => goToSlide(curSlide - 1);
window.nextSlide = () => goToSlide(curSlide + 1);

/* ── GANTT TIMELINE ───────────────────────────────────── */
function buildTimeline() {
    const container = document.getElementById('timeline-gantt');
    if (!container || !TIMELINE || !TIMELINE.length) return;

    const NOW = new Date();
    const startOfYear = new Date(NOW.getFullYear(), 0, 1);
    const endOfYear = new Date(NOW.getFullYear() + 1, 0, 1);
    const TODAY = NOW.getFullYear() + (NOW - startOfYear) / (endOfYear - startOfYear);

    const allStarts = TIMELINE.map(e => e.start);
    const allEnds = TIMELINE.map(e => e.end ?? TODAY);
    const minYear = Math.min(...allStarts) - 0.2;
    const maxYear = Math.max(...allEnds, Math.floor(TODAY) + 1) + 0.3;
    const span = maxYear - minYear;

    // Year axis
    const axis = document.createElement('div');
    axis.className = 'tl-axis';
    for (let y = Math.ceil(minYear); y <= Math.floor(maxYear) + 1; y++) {
        const lbl = document.createElement('span');
        lbl.className = 'tl-year-lbl';
        lbl.textContent = y;
        lbl.style.left = ((y - minYear) / span * 100) + '%';
        axis.appendChild(lbl);
    }
    container.appendChild(axis);

    // Today marker
    const markers = document.createElement('div');
    markers.className = 'tl-markers';
    const todayPct = ((TODAY - minYear) / span * 100).toFixed(2) + '%';
    const todayLine = document.createElement('div');
    todayLine.className = 'tl-today';
    todayLine.style.left = todayPct;
    todayLine.innerHTML = '<span>bugün</span>';
    markers.appendChild(todayLine);
    container.appendChild(markers);

    // Rows
    TIMELINE.forEach((ev, idx) => {
        const endVal = ev.end ?? TODAY;
        const left = ((ev.start - minYear) / span * 100).toFixed(2);
        const width = ((endVal - ev.start) / span * 100).toFixed(2);
        const color = ev.color || TIMELINE_COLORS[idx % TIMELINE_COLORS.length];

        const row = document.createElement('div');
        row.className = 'tl-row reveal';

        const rowLabel = document.createElement('div');
        rowLabel.className = 'tl-row-label';
        rowLabel.textContent = ev.label;
        rowLabel.style.color = color;
        row.appendChild(rowLabel);

        const track = document.createElement('div');
        track.className = 'tl-track';

        const bar = document.createElement('div');
        bar.className = 'tl-bar' + (!ev.end ? ' tl-bar-ongoing' : '');
        bar.style.left = left + '%';
        bar.style.width = width + '%';
        bar.style.background = color;
        bar.style.boxShadow = `0 0 14px ${color}55`;
        bar.title = ev.desc || ev.label;

        const desc = document.createElement('div');
        desc.className = 'tl-desc';
        if (ev.desc) desc.textContent = ev.desc;

        const toggleDesc = () => {
            const wasOpen = bar.classList.contains('tl-bar-active');
            document.querySelectorAll('.tl-bar').forEach(b => b.classList.remove('tl-bar-active'));
            document.querySelectorAll('.tl-desc').forEach(d => d.classList.remove('tl-desc-open'));
            if (!wasOpen && ev.desc) {
                bar.classList.add('tl-bar-active');
                desc.classList.add('tl-desc-open');
            }
        };

        bar.addEventListener('click', toggleDesc);
        rowLabel.addEventListener('click', toggleDesc);

        track.appendChild(bar);
        row.appendChild(track);
        row.appendChild(desc);
        container.appendChild(row);
    });
}

/* ── PROJECTS GRID ────────────────────────────────────── */
function buildProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid || !PROJECTS || !PROJECTS.length) return;

    PROJECTS.forEach(proj => {
        const card = document.createElement('a');
        card.href = proj.url;
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'proj-card reveal';

        const title = document.createElement('h3');
        title.className = 'proj-title';
        title.textContent = proj.title;

        const icons = document.createElement('div');
        icons.className = 'proj-icons';

        (proj.icons || []).forEach(key => {
            const info = ICON_MAP[key];
            if (!info) return;
            const wrap = document.createElement('div');
            wrap.className = 'proj-icon-wrap';
            const ic = document.createElement('i');
            ic.className = info.cls;
            const lbl = document.createElement('span');
            lbl.textContent = info.label;
            wrap.appendChild(ic);
            wrap.appendChild(lbl);
            icons.appendChild(wrap);
        });

        card.appendChild(title);
        card.appendChild(icons);
        grid.appendChild(card);
    });
}

/* ── SCROLL REVEAL ────────────────────────────────────── */
function initScrollReveal() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('revealed');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.10 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
