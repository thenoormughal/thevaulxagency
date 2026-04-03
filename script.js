
// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
});
function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a, button, .service-card, .process-step').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform += ' scale(2.5)'; ring.style.transform += ' scale(1.5)'; ring.style.borderColor = 'rgba(201,168,76,0.8)'; });
    el.addEventListener('mouseleave', () => { ring.style.borderColor = 'rgba(201,168,76,0.4)'; });
});

// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => observer.observe(el));

// 1. Data Store
const caseData = {
    case1: {
        tag: "Scaling & Ads",
        title: "Aura Fashion",
        challenge: "Client was stuck at 1.5x ROAS and high CPA.",
        strategy: "Retested creatives and scaled winning hooks.",
        res1: "5.8x", lab1: "ROAS",
        res2: "+$120k", lab2: "Revenue",
        imgStore: "images/case1-store.jpg",
        imgAds: "images/case1-ads.jpg",
        imgSales: "images/case1-sales.jpg"
    },
    case2: {
        tag: "Store Dev",
        title: "Lumière Skin",
        challenge: "Store was slow and had a 1.2% conversion rate.",
        strategy: "Custom Shopify theme and mobile optimization.",
        res1: "4.5%", lab1: "Conv. Rate",
        res2: "3.2x", lab2: "ROI",
        imgStore: "images/case2-store.jpg",
        imgAds: "images/case2-ads.jpg",
        imgSales: "images/case2-sales.jpg"
    },
    case3: {
        tag: "Full Scale",
        title: "Vogue Interiors",
        challenge: "Scaling issues beyond $10k/month spend.",
        strategy: "Broad targeting and UGC ad focus.",
        res1: "4.1x", lab1: "ROAS",
        res2: "35%", lab2: "CPA Reduction",
        imgStore: "images/case3-store.jpg",
        imgAds: "images/case3-ads.jpg",
        imgSales: "images/case3-sales.jpg"
    }
};

// 2. Open Function
function openModal(id) {
    const data = caseData[id];
    if (!data) return;

    // Fill Text
    document.getElementById('modalTag').innerText = data.tag;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalChallenge').innerHTML = `<strong>Challenge:</strong> ${data.challenge}`;
    document.getElementById('modalStrategy').innerHTML = `<strong>Strategy:</strong> ${data.strategy}`;
    document.getElementById('res1-val').innerText = data.res1;
    document.getElementById('res1-lab').innerText = data.lab1;
    document.getElementById('res2-val').innerText = data.res2;
    document.getElementById('res2-lab').innerText = data.lab2;

    // Fill Images
    document.getElementById('imgStore').src = data.imgStore;
    document.getElementById('imgAds').src = data.imgAds;
    document.getElementById('imgSales').src = data.imgSales;

    // Show Modal
    document.getElementById('vaultModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 3. Close Function
function closeModal() {
    document.getElementById('vaultModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
