const elements = [
  {
    symbol: 'H',
    name: 'Väte',
    position: 1,
    category: 'non-metal',
    gridColumn: 1,
    gridRow: 1,
  },
  {
    symbol: 'He',
    name: 'Helium',
    position: 2,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 1,
  },
  {
    symbol: 'Li',
    name: 'Litium',
    position: 3,
    category: 'alkali-metal',
    gridColumn: 1,
    gridRow: 2,
  },
  {
    symbol: 'Be',
    name: 'Beryllium',
    position: 4,
    category: 'alkaline-earth-metal',
    gridColumn: 2,
    gridRow: 2,
  },
  {
    symbol: 'B',
    name: 'Bor',
    position: 5,
    category: 'metalloid',
    gridColumn: 13,
    gridRow: 2,
  },
  {
    symbol: 'C',
    name: 'Kol',
    position: 6,
    category: 'non-metal',
    gridColumn: 14,
    gridRow: 2,
  },
  {
    symbol: 'N',
    name: 'Kväve',
    position: 7,
    category: 'non-metal',
    gridColumn: 15,
    gridRow: 2,
  },
  {
    symbol: 'O',
    name: 'Syre',
    position: 8,
    category: 'non-metal',
    gridColumn: 16,
    gridRow: 2,
  },
  {
    symbol: 'F',
    name: 'Fluor',
    position: 9,
    category: 'halogen',
    gridColumn: 17,
    gridRow: 2,
  },
  {
    symbol: 'Ne',
    name: 'Neon',
    position: 10,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 2,
  },
  {
    symbol: 'Na',
    name: 'Natrium',
    position: 11,
    category: 'alkali-metal',
    gridColumn: 1,
    gridRow: 3,
  },
  {
    symbol: 'Mg',
    name: 'Magnesium',
    position: 12,
    category: 'alkaline-earth-metal',
    gridColumn: 2,
    gridRow: 3,
  },
  {
    symbol: 'Al',
    name: 'Aluminium',
    position: 13,
    category: 'post-transition-metal',
    gridColumn: 13,
    gridRow: 3,
  },
  {
    symbol: 'Si',
    name: 'Kisel',
    position: 14,
    category: 'metalloid',
    gridColumn: 14,
    gridRow: 3,
  },
  {
    symbol: 'P',
    name: 'Fosfor',
    position: 15,
    category: 'non-metal',
    gridColumn: 15,
    gridRow: 3,
  },
  {
    symbol: 'S',
    name: 'Svavel',
    position: 16,
    category: 'non-metal',
    gridColumn: 16,
    gridRow: 3,
  },
  {
    symbol: 'Cl',
    name: 'Klor',
    position: 17,
    category: 'halogen',
    gridColumn: 17,
    gridRow: 3,
  },
  {
    symbol: 'Ar',
    name: 'Argon',
    position: 18,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 3,
  },
  {
    symbol: 'K',
    name: 'Kalium',
    position: 19,
    category: 'alkali-metal',
    gridColumn: 1,
    gridRow: 4,
  },
  {
    symbol: 'Ca',
    name: 'Kalcium',
    position: 20,
    category: 'alkaline-earth-metal',
    gridColumn: 2,
    gridRow: 4,
  },
  {
    symbol: 'Sc',
    name: 'Skandium',
    position: 21,
    category: 'transition-metal',
    gridColumn: 3,
    gridRow: 4,
  },
  {
    symbol: 'Ti',
    name: 'Titan',
    position: 22,
    category: 'transition-metal',
    gridColumn: 4,
    gridRow: 4,
  },
  {
    symbol: 'V',
    name: 'Vanadin',
    position: 23,
    category: 'transition-metal',
    gridColumn: 5,
    gridRow: 4,
  },
  {
    symbol: 'Cr',
    name: 'Krom',
    position: 24,
    category: 'transition-metal',
    gridColumn: 6,
    gridRow: 4,
  },
  {
    symbol: 'Mn',
    name: 'Mangan',
    position: 25,
    category: 'transition-metal',
    gridColumn: 7,
    gridRow: 4,
  },
  {
    symbol: 'Fe',
    name: 'Järn',
    position: 26,
    category: 'transition-metal',
    gridColumn: 8,
    gridRow: 4,
  },
  {
    symbol: 'Co',
    name: 'Kobolt',
    position: 27,
    category: 'transition-metal',
    gridColumn: 9,
    gridRow: 4,
  },
  {
    symbol: 'Ni',
    name: 'Nickel',
    position: 28,
    category: 'transition-metal',
    gridColumn: 10,
    gridRow: 4,
  },
  {
    symbol: 'Cu',
    name: 'Koppar',
    position: 29,
    category: 'transition-metal',
    gridColumn: 11,
    gridRow: 4,
  },
  {
    symbol: 'Zn',
    name: 'Zink',
    position: 30,
    category: 'transition-metal',
    gridColumn: 12,
    gridRow: 4,
  },
  {
    symbol: 'Ga',
    name: 'Gallium',
    position: 31,
    category: 'post-transition-metal',
    gridColumn: 13,
    gridRow: 4,
  },
  {
    symbol: 'Ge',
    name: 'Germanium',
    position: 32,
    category: 'metalloid',
    gridColumn: 14,
    gridRow: 4,
  },
  {
    symbol: 'As',
    name: 'Arsenik',
    position: 33,
    category: 'metalloid',
    gridColumn: 15,
    gridRow: 4,
  },
  {
    symbol: 'Se',
    name: 'Selen',
    position: 34,
    category: 'non-metal',
    gridColumn: 16,
    gridRow: 4,
  },
  {
    symbol: 'Br',
    name: 'Brom',
    position: 35,
    category: 'halogen',
    gridColumn: 17,
    gridRow: 4,
  },
  {
    symbol: 'Kr',
    name: 'Krypton',
    position: 36,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 4,
  },
  {
    symbol: 'Rb',
    name: 'Rubidium',
    position: 37,
    category: 'alkali-metal',
    gridColumn: 1,
    gridRow: 5,
  },
  {
    symbol: 'Sr',
    name: 'Strontium',
    position: 38,
    category: 'alkaline-earth-metal',
    gridColumn: 2,
    gridRow: 5,
  },
  {
    symbol: 'Y',
    name: 'Yttrium',
    position: 39,
    category: 'transition-metal',
    gridColumn: 3,
    gridRow: 5,
  },
  {
    symbol: 'Zr',
    name: 'Zirkonium',
    position: 40,
    category: 'transition-metal',
    gridColumn: 4,
    gridRow: 5,
  },
  {
    symbol: 'Nb',
    name: 'Niob',
    position: 41,
    category: 'transition-metal',
    gridColumn: 5,
    gridRow: 5,
  },
  {
    symbol: 'Mo',
    name: 'Molybden',
    position: 42,
    category: 'transition-metal',
    gridColumn: 6,
    gridRow: 5,
  },
  {
    symbol: 'Tc',
    name: 'Teknetium',
    position: 43,
    category: 'transition-metal',
    gridColumn: 7,
    gridRow: 5,
  },
  {
    symbol: 'Ru',
    name: 'Rutenium',
    position: 44,
    category: 'transition-metal',
    gridColumn: 8,
    gridRow: 5,
  },
  {
    symbol: 'Rh',
    name: 'Rodium',
    position: 45,
    category: 'transition-metal',
    gridColumn: 9,
    gridRow: 5,
  },
  {
    symbol: 'Pd',
    name: 'Palladium',
    position: 46,
    category: 'transition-metal',
    gridColumn: 10,
    gridRow: 5,
  },
  {
    symbol: 'Ag',
    name: 'Silver',
    position: 47,
    category: 'transition-metal',
    gridColumn: 11,
    gridRow: 5,
  },
  {
    symbol: 'Cd',
    name: 'Kadmium',
    position: 48,
    category: 'transition-metal',
    gridColumn: 12,
    gridRow: 5,
  },
  {
    symbol: 'In',
    name: 'Indium',
    position: 49,
    category: 'post-transition-metal',
    gridColumn: 13,
    gridRow: 5,
  },
  {
    symbol: 'Sn',
    name: 'Tenn',
    position: 50,
    category: 'post-transition-metal',
    gridColumn: 14,
    gridRow: 5,
  },
  {
    symbol: 'Sb',
    name: 'Antimon',
    position: 51,
    category: 'metalloid',
    gridColumn: 15,
    gridRow: 5,
  },
  {
    symbol: 'Te',
    name: 'Tellur',
    position: 52,
    category: 'metalloid',
    gridColumn: 16,
    gridRow: 5,
  },
  {
    symbol: 'I',
    name: 'Jod',
    position: 53,
    category: 'halogen',
    gridColumn: 17,
    gridRow: 5,
  },
  {
    symbol: 'Xe',
    name: 'Xenon',
    position: 54,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 5,
  },
  {
    symbol: 'Cs',
    name: 'Cesium',
    position: 55,
    category: 'alkali-metal',
    gridColumn: 1,
    gridRow: 6,
  },
  {
    symbol: 'Ba',
    name: 'Barium',
    position: 56,
    category: 'alkaline-earth-metal',
    gridColumn: 2,
    gridRow: 6,
  },
  {
    symbol: 'La',
    name: 'Lantan',
    position: 57,
    category: 'lanthanide',
    gridColumn: 4,
    gridRow: 9,
  },
  {
    symbol: 'Ce',
    name: 'Cerium',
    position: 58,
    category: 'lanthanide',
    gridColumn: 5,
    gridRow: 9,
  },
  {
    symbol: 'Pr',
    name: 'Praseodym',
    position: 59,
    category: 'lanthanide',
    gridColumn: 6,
    gridRow: 9,
  },
  {
    symbol: 'Nd',
    name: 'Neodym',
    position: 60,
    category: 'lanthanide',
    gridColumn: 7,
    gridRow: 9,
  },
  {
    symbol: 'Pm',
    name: 'Prometium',
    position: 61,
    category: 'lanthanide',
    gridColumn: 8,
    gridRow: 9,
  },
  {
    symbol: 'Sm',
    name: 'Samarium',
    position: 62,
    category: 'lanthanide',
    gridColumn: 9,
    gridRow: 9,
  },
  {
    symbol: 'Eu',
    name: 'Europium',
    position: 63,
    category: 'lanthanide',
    gridColumn: 10,
    gridRow: 9,
  },
  {
    symbol: 'Gd',
    name: 'Gadolinium',
    position: 64,
    category: 'lanthanide',
    gridColumn: 11,
    gridRow: 9,
  },
  {
    symbol: 'Tb',
    name: 'Terbium',
    position: 65,
    category: 'lanthanide',
    gridColumn: 12,
    gridRow: 9,
  },
  {
    symbol: 'Dy',
    name: 'Dysprosium',
    position: 66,
    category: 'lanthanide',
    gridColumn: 13,
    gridRow: 9,
  },
  {
    symbol: 'Ho',
    name: 'Holmium',
    position: 67,
    category: 'lanthanide',
    gridColumn: 14,
    gridRow: 9,
  },
  {
    symbol: 'Er',
    name: 'Erbium',
    position: 68,
    category: 'lanthanide',
    gridColumn: 15,
    gridRow: 9,
  },
  {
    symbol: 'Tm',
    name: 'Tulium',
    position: 69,
    category: 'lanthanide',
    gridColumn: 16,
    gridRow: 9,
  },
  {
    symbol: 'Yb',
    name: 'Ytterbium',
    position: 70,
    category: 'lanthanide',
    gridColumn: 17,
    gridRow: 9,
  },
  {
    symbol: 'Lu',
    name: 'Lutetium',
    position: 71,
    category: 'lanthanide',
    gridColumn: 18,
    gridRow: 9,
  },
  {
    symbol: 'Hf',
    name: 'Hafnium',
    position: 72,
    category: 'transition-metal',
    gridColumn: 4,
    gridRow: 6,
  },
  {
    symbol: 'Ta',
    name: 'Tantal',
    position: 73,
    category: 'transition-metal',
    gridColumn: 5,
    gridRow: 6,
  },
  {
    symbol: 'W',
    name: 'Volfram',
    position: 74,
    category: 'transition-metal',
    gridColumn: 6,
    gridRow: 6,
  },
  {
    symbol: 'Re',
    name: 'Rhenium',
    position: 75,
    category: 'transition-metal',
    gridColumn: 7,
    gridRow: 6,
  },
  {
    symbol: 'Os',
    name: 'Osmium',
    position: 76,
    category: 'transition-metal',
    gridColumn: 8,
    gridRow: 6,
  },
  {
    symbol: 'Ir',
    name: 'Iridium',
    position: 77,
    category: 'transition-metal',
    gridColumn: 9,
    gridRow: 6,
  },
  {
    symbol: 'Pt',
    name: 'Platina',
    position: 78,
    category: 'transition-metal',
    gridColumn: 10,
    gridRow: 6,
  },
  {
    symbol: 'Au',
    name: 'Guld',
    position: 79,
    category: 'transition-metal',
    gridColumn: 11,
    gridRow: 6,
  },
  {
    symbol: 'Hg',
    name: 'Kvicksilver',
    position: 80,
    category: 'transition-metal',
    gridColumn: 12,
    gridRow: 6,
  },
  {
    symbol: 'Tl',
    name: 'Tallium',
    position: 81,
    category: 'post-transition-metal',
    gridColumn: 13,
    gridRow: 6,
  },
  {
    symbol: 'Pb',
    name: 'Bly',
    position: 82,
    category: 'post-transition-metal',
    gridColumn: 14,
    gridRow: 6,
  },
  {
    symbol: 'Bi',
    name: 'Vismut',
    position: 83,
    category: 'post-transition-metal',
    gridColumn: 15,
    gridRow: 6,
  },
  {
    symbol: 'Po',
    name: 'Polonium',
    position: 84,
    category: 'metalloid',
    gridColumn: 16,
    gridRow: 6,
  },
  {
    symbol: 'At',
    name: 'Astat',
    position: 85,
    category: 'halogen',
    gridColumn: 17,
    gridRow: 6,
  },
  {
    symbol: 'Rn',
    name: 'Radon',
    position: 86,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 6,
  },
  {
    symbol: 'Fr',
    name: 'Francium',
    position: 87,
    category: 'alkali-metal',
    gridColumn: 1,
    gridRow: 7,
  },
  {
    symbol: 'Ra',
    name: 'Radium',
    position: 88,
    category: 'alkaline-earth-metal',
    gridColumn: 2,
    gridRow: 7,
  },
  {
    symbol: 'Ac',
    name: 'Aktinium',
    position: 89,
    category: 'actinide',
    gridColumn: 4,
    gridRow: 10,
  },
  {
    symbol: 'Th',
    name: 'Torium',
    position: 90,
    category: 'actinide',
    gridColumn: 5,
    gridRow: 10,
  },
  {
    symbol: 'Pa',
    name: 'Protaktinium',
    position: 91,
    category: 'actinide',
    gridColumn: 6,
    gridRow: 10,
  },
  {
    symbol: 'U',
    name: 'Uran',
    position: 92,
    category: 'actinide',
    gridColumn: 7,
    gridRow: 10,
  },
  {
    symbol: 'Np',
    name: 'Neptunium',
    position: 93,
    category: 'actinide',
    gridColumn: 8,
    gridRow: 10,
  },
  {
    symbol: 'Pu',
    name: 'Plutonium',
    position: 94,
    category: 'actinide',
    gridColumn: 9,
    gridRow: 10,
  },
  {
    symbol: 'Am',
    name: 'Americium',
    position: 95,
    category: 'actinide',
    gridColumn: 10,
    gridRow: 10,
  },
  {
    symbol: 'Cm',
    name: 'Curium',
    position: 96,
    category: 'actinide',
    gridColumn: 11,
    gridRow: 10,
  },
  {
    symbol: 'Bk',
    name: 'Berkelium',
    position: 97,
    category: 'actinide',
    gridColumn: 12,
    gridRow: 10,
  },
  {
    symbol: 'Cf',
    name: 'Californium',
    position: 98,
    category: 'actinide',
    gridColumn: 13,
    gridRow: 10,
  },
  {
    symbol: 'Es',
    name: 'Einsteinium',
    position: 99,
    category: 'actinide',
    gridColumn: 14,
    gridRow: 10,
  },
  {
    symbol: 'Fm',
    name: 'Fermium',
    position: 100,
    category: 'actinide',
    gridColumn: 15,
    gridRow: 10,
  },
  {
    symbol: 'Md',
    name: 'Mendelevium',
    position: 101,
    category: 'actinide',
    gridColumn: 16,
    gridRow: 10,
  },
  {
    symbol: 'No',
    name: 'Nobelium',
    position: 102,
    category: 'actinide',
    gridColumn: 17,
    gridRow: 10,
  },
  {
    symbol: 'Lr',
    name: 'Lawrencium',
    position: 103,
    category: 'actinide',
    gridColumn: 18,
    gridRow: 10,
  },
  {
    symbol: 'Rf',
    name: 'Rutherfordium',
    position: 104,
    category: 'transition-metal',
    gridColumn: 4,
    gridRow: 7,
  },
  {
    symbol: 'Db',
    name: 'Dubnium',
    position: 105,
    category: 'transition-metal',
    gridColumn: 5,
    gridRow: 7,
  },
  {
    symbol: 'Sg',
    name: 'Seaborgium',
    position: 106,
    category: 'transition-metal',
    gridColumn: 6,
    gridRow: 7,
  },
  {
    symbol: 'Bh',
    name: 'Bohrium',
    position: 107,
    category: 'transition-metal',
    gridColumn: 7,
    gridRow: 7,
  },
  {
    symbol: 'Hs',
    name: 'Hassium',
    position: 108,
    category: 'transition-metal',
    gridColumn: 8,
    gridRow: 7,
  },
  {
    symbol: 'Mt',
    name: 'Meitnerium',
    position: 109,
    category: 'transition-metal',
    gridColumn: 9,
    gridRow: 7,
  },
  {
    symbol: 'Ds',
    name: 'Darmstadtium',
    position: 110,
    category: 'transition-metal',
    gridColumn: 10,
    gridRow: 7,
  },
  {
    symbol: 'Rg',
    name: 'Röntgenium',
    position: 111,
    category: 'transition-metal',
    gridColumn: 11,
    gridRow: 7,
  },
  {
    symbol: 'Cn',
    name: 'Copernicium',
    position: 112,
    category: 'transition-metal',
    gridColumn: 12,
    gridRow: 7,
  },
  {
    symbol: 'Nh',
    name: 'Nihonium',
    position: 113,
    category: 'post-transition-metal',
    gridColumn: 13,
    gridRow: 7,
  },
  {
    symbol: 'Fl',
    name: 'Flerovium',
    position: 114,
    category: 'post-transition-metal',
    gridColumn: 14,
    gridRow: 7,
  },
  {
    symbol: 'Mc',
    name: 'Moscovium',
    position: 115,
    category: 'post-transition-metal',
    gridColumn: 15,
    gridRow: 7,
  },
  {
    symbol: 'Lv',
    name: 'Livermorium',
    position: 116,
    category: 'post-transition-metal',
    gridColumn: 16,
    gridRow: 7,
  },
  {
    symbol: 'Ts',
    name: 'Tennessine',
    position: 117,
    category: 'halogen',
    gridColumn: 17,
    gridRow: 7,
  },
  {
    symbol: 'Og',
    name: 'Oganesson',
    position: 118,
    category: 'noble-gas',
    gridColumn: 18,
    gridRow: 7,
  },
];

const totalElements = elements.length;
let correctCount = 0;
let timer = 0;
let interval;

let popup = null;

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.periodic-table');
  elements.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('element');
    div.dataset.name = element.name.toLowerCase();
    div.dataset.position = element.position;
    div.dataset.category = element.category;
    div.style.gridColumn = element.gridColumn;
    div.style.gridRow = element.gridRow;

    // Lägg till hovringsfunktionalitet med kontroll
    div.addEventListener('mouseover', (event) => {
      if (div.classList.contains('correct')) {
        showPopup(event, element.name);
      }
    });
    div.addEventListener('mouseleave', hidePopup);

    table.appendChild(div);
  });

  document
    .getElementById('element-input')
    .addEventListener('input', checkInput);
  document.getElementById('reveal-button').addEventListener('click', revealAll);
  document.getElementById('retry-button').addEventListener('click', retryGame);
  interval = setInterval(updateTimer, 1000);

  document.addEventListener('click', (event) => {
    if (popup && !popup.contains(event.target)) {
      hidePopup();
    }
  });
});

function checkInput(event) {
  const input = event.target.value.toLowerCase();
  const elementDiv = document.querySelector(`.element[data-name="${input}"]`);
  if (elementDiv && !elementDiv.classList.contains('correct')) {
    elementDiv.classList.add('correct');
    elementDiv.textContent = elements.find(
      (el) => el.name.toLowerCase() === input
    ).symbol;
    correctCount++;
    updateProgress();
    event.target.value = '';
  }
}

function revealAll() {
  document.querySelectorAll('.element').forEach((div) => {
    const element = elements.find((el) => el.position == div.dataset.position);
    div.textContent = element.symbol;
    div.classList.add('correct');
  });
  correctCount = totalElements;
  updateProgress();
  clearInterval(interval);
}

function retryGame() {
  document.querySelectorAll('.element').forEach((div) => {
    div.textContent = '';
    div.classList.remove('correct');
  });
  correctCount = 0;
  timer = 0;
  document.getElementById('element-input').value = '';
  updateProgress();
  clearInterval(interval);
  interval = setInterval(updateTimer, 1000);
}

function updateProgress() {
  document.getElementById(
    'progress'
  ).textContent = `${correctCount}/${totalElements}`;
  document.getElementById('percentage').textContent = `${Math.round(
    (correctCount / totalElements) * 100
  )}%`;
}

function updateTimer() {
  timer++;
  document.getElementById('timer').textContent = `Tid: ${timer}s`;
}

function showPopup(event, name) {
  if (popup) {
    hidePopup();
  }

  popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = name;
  document.body.appendChild(popup);

  const rect = event.target.getBoundingClientRect();
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.top = `${rect.top + window.scrollY - 30}px`;
}

function hidePopup() {
  if (popup) {
    document.body.removeChild(popup);
    popup = null;
  }
}

// Add this function to create emoji rain effect
function createEmojiRain(emojis) {
  const emojiContainer = document.createElement('div');
  emojiContainer.classList.add('emoji-container');
  document.body.appendChild(emojiContainer);

  for (let i = 0; i < 500; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.animationDelay = `${Math.random() * 2}s`;
    emojiContainer.appendChild(emoji);
  }

  setTimeout(() => {
    document.body.removeChild(emojiContainer);
  }, 10000);
}

// Modify the checkInput function
function checkInput(event) {
  const input = event.target.value.toLowerCase();
  const elementDiv = document.querySelector(`.element[data-name="${input}"]`);

  if (input === 'modo') {
    createEmojiRain(['👍', '😊', '🎉', '👏']);
    event.target.value = '';
    return;
  }

  if (input === 'timrå' || input === 'timra') {
    createEmojiRain(['😡', '😢', '👎', '💔']);
    const message = document.createElement('div');
    message.classList.add('message', 'flashing');
    message.textContent = 'Modo är bättre!';
    document.body.appendChild(message);

    setTimeout(() => {
      document.body.removeChild(message);
    }, 10000);

    event.target.value = '';
    return;
  }

  if (elementDiv && !elementDiv.classList.contains('correct')) {
    elementDiv.classList.add('correct');
    elementDiv.textContent = elements.find(
      (el) => el.name.toLowerCase() === input
    ).symbol;
    correctCount++;
    updateProgress();
    event.target.value = '';
  }
}
