const bloomBtn = document.getElementById('bloomBtn');
const content = document.getElementById('content');
const garden = document.getElementById('garden');
const flowersContainer = document.getElementById('flowersContainer');
const finalMessage = document.getElementById('finalMessage');

bloomBtn.addEventListener('click', () => {
    content.style.animation = 'fadeOut 0.8s ease-out forwards';
    
    setTimeout(() => {
        content.classList.add('hidden');
        garden.classList.remove('hidden');
        createGarden();
    }, 800);
});

const fadeOutKeyframes = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-30px);
        }
    }
`;

const style = document.createElement('style');
style.textContent = fadeOutKeyframes;
document.head.appendChild(style);

function createGarden() {
    const flowerTypes = [
        { color: 'pink', count: 4 },
        { color: 'red', count: 4 },
        { color: 'purple', count: 4 },
        { color: 'blue', count: 6 }
    ];

    let delay = 0;
    
    flowerTypes.forEach(type => {
        for (let i = 0; i < type.count; i++) {
            setTimeout(() => {
                createFlower(type.color);
                
                if (type.color === 'blue' && i === type.count - 1) {
                    setTimeout(() => {
                        finalMessage.classList.remove('hidden');
                    }, 1000);
                }
            }, delay);
            delay += 200;
        }
    });
}

function createFlower(color) {
    const flower = document.createElement('div');
    flower.className = `flower ${color}`;
    
    const stem = document.createElement('div');
    stem.className = 'stem';
    
    const petals = document.createElement('div');
    petals.className = 'petals';
    
    for (let i = 0; i < 5; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.animationDelay = `${i * 0.1}s`;
        petals.appendChild(petal);
    }
    
    const center = document.createElement('div');
    center.className = 'center';
    petals.appendChild(center);
    
    flower.appendChild(stem);
    flower.appendChild(petals);
    flowersContainer.appendChild(flower);
}
