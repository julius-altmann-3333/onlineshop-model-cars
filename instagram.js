import { renderInstagram } from './instagram.js'; // we'll define it here

function renderInstagram() {
    const grid = document.getElementById('instagram-grid');
    const feeds = [
        { img: 'https://picsum.photos/id/1015/300/300', name: 'hotwheels' },
        { img: 'https://picsum.photos/id/102/300/300', name: 'matchbox' },
        { img: 'https://picsum.photos/id/201/300/300', name: 'maisto' },
        { img: 'https://picsum.photos/id/251/300/300', name: 'bburago' },
        { img: 'https://picsum.photos/id/29/300/300', name: 'minigt' },
        { img: 'https://picsum.photos/id/180/300/300', name: 'kyosho' },
        { img: 'https://picsum.photos/id/133/300/300', name: 'norev' },
        { img: 'https://picsum.photos/id/201/300/300', name: 'almostreal' }
    ];
    grid.innerHTML = feeds.map(f => `
        <div class="ig-card">
            <img src="${f.img}" class="w-100">
            <div class="position-absolute bottom-0 start-0 bg-black p-2 text-white small">${f.name}</div>
        </div>
    `).join('');
}

renderInstagram();