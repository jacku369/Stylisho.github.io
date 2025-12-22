let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;

const suggestionsData = {
  love: [
    "⋆𐙚:͢I:͢L:͢♡:͢V:͢E:͢y:͢o:͢u𓏧𓅚",
    "►►❇︎˖°M̶o̶m̶-D̶a̶d̶°˖☂ ‹𝟹",
    "►►►𝙹𝚘𝚢𝚊 °°✰",
    "☘︎ 𝙰𝚗𝚐𝚎𝚕 ҩᴜᥱ֟፝ᥱɴ⋆˙⟡࿐",
    "☁️𝒮𝓌𝑒𝑒𝓉 𝒞𝓁☁️𝓊𝒹☁️"
  ],
  gamer: [
    "𝚾-Ꮮᴏʀᴅ 亗",
    "ɪᴍ • F ᴀ ɴ ɪ •々",
    "𝑴ꫝ𝑹𝑪𝑶 모 ꤪꤨꤪ",
    "Ƭ͢ɴ ⋆ｂａｂｕ☂",
    "៚ɪ ᴛ ᴀ ᴄ ʜ ɪ ❶❶"
  ],
  fancy: [
    "ꫝ𝛈𝛋𝛖sʜ  ??",
    "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
    "आदिवासी ෴",
    "ᛖᚱ Vιяυѕ ⚠"
  ],
  font: [
    "ᴅ ɪ ᴍ ⌔ ɴ ᴅ",
    "𝐂 🂱 𝐑 𝐃",
    "ᝰ 𝘢 𝘷 𝘦",
    "𝘚𝘗ΞΞ𝘋",
    "ꫝυяα"
  ]
};

const styles = [
    {
        type: "love",
        prefix: "˗ˏˋ🐾𐙚",
        suffix: "𐙚🐾ˎˊ˗࿐",
        map: {
            A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
            K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
            U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
        }
    },
    {
        type: "gamer",
        prefix: "𐙚✨˚",
        suffix: "˚✨𐙚 ツ",
        map: {
            A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
            K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
            U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
            a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
            k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
            u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
        }
    },
    {
        type: "fancy",
        prefix: "𓆜⋆˚࿔⊹ ࣪",
        suffix: " 𓆝⋆.˚﹏𓊝₊˚⊹",
        map: {
            A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
            K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
            U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
        }
    },
    {
        type: "font",
        prefix: " ̤̮ ",
        suffix: " ✔",
        map: {
            A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
            K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ☻ ̤̮", O: "🅞 ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
            U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮"
        }
    }
];

const symbolsData = {
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "꧂", name: "Right Frame" },
    { symbol: "❮", name: "Left Arrow" },
    { symbol: "❯", name: "Right Arrow" },
    { symbol: "︻", name: "Left Gun" },
    { symbol: "︼", name: "Right Gun" },
    { symbol: "⫷", name: "Left Triple" },
    { symbol: "⫸", name: "Right Triple" },
    { symbol: "《", name: "Left Book" },
    { symbol: "》", name: "Right Book" },
    { symbol: "«", name: "Left Double" },
    { symbol: "»", name: "Right Double" },
    { symbol: "【", name: "Left Bracket" },
    { symbol: "】", name: "Right Bracket" },
    { symbol: "〖", name: "Left White" },
    { symbol: "〗", name: "Right White" },
    { symbol: "『", name: "Left Corner" },
    { symbol: "』", name: "Right Corner" },
    { symbol: "❰", name: "Heavy Left" },
    { symbol: "❱", name: "Heavy Right" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "▒", name: "Medium Shade" },
    { symbol: "▓", name: "Dark Shade" },
    { symbol: "█", name: "Full Block" },
    { symbol: "▲", name: "Up Triangle" },
    { symbol: "▼", name: "Down Triangle" },
    { symbol: "◆", name: "Diamond" },
    { symbol: "▣", name: "Square with Dot" },
    { symbol: "◈", name: "Diamond in Square" },
    { symbol: "◉", name: "Fisheye" },
    { symbol: "◊", name: "Lozenge" },
    { symbol: "■", name: "Black Square" },
    { symbol: "□", name: "White Square" },
    { symbol: "▪", name: "Black Small Square" },
    { symbol: "▫", name: "White Small Square" }
  ],
  gun: [
    { symbol: "︻デ═一★彡", name: "Star Gun" },
    { symbol: "︻╦╤─ ▸▹", name: "PARAFAL" },
    { symbol: "︻デ═一", name: "Simple Gun" },
    { symbol: "︻╦̵̵͇̿̿̿̿╤──", name: "AKM" },
    { symbol: "├ ┱ ⋯", name: "MP40" },
    { symbol: "︻デ═一✷✷", name: "Flower Gun" }
  ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
    { symbol: "☃︎", name: "Snowman" },
    { symbol: "💗᪲᪲᪲", name: "Hearts" }
  ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  loadSymbols('frames');
});

function setupEventListeners() {
  // Auto-generate when typing
  document.getElementById('nameInput').addEventListener('input', function() {
    clearTimeout(nameInputTimer);
    nameInputTimer = setTimeout(() => {
      if (this.value.trim().length > 0) {
        generateStyles();
      }
    }, 300);
  });
  
  // Symbol picker button
  document.getElementById('symbolPickerBtn').addEventListener('click', openSymbolModal);
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Close modal when clicking outside
  document.getElementById('symbolModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeSymbolModal();
    }
  });
}

function convert(name, map) {
  return name.toLowerCase().split("").map(ch => map[ch] || ch).join("");
}

function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see magical styles!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  // Get the style for current category
  const style = styles.find(s => s.type === currentFilter);
  if (!style) return;
  
  const styled = style.prefix + convert(name, style.map) + style.suffix;
  
  const div = document.createElement('div');
  div.className = `style-box ${currentFilter}`;
  div.innerHTML = `
    <span class="style-text">${styled}</span>
    <button class="copy-btn" onclick="copyText('${styled.replace(/'/g, "\\'")}')">
      <i class="fas fa-copy"></i> Copy
    </button>
  `;
  result.appendChild(div);
  
  // Update results count
  resultsCount.textContent = "1";
}

function selectCategory(type) {
  currentFilter = type;
  
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  // Hide suggestions when switching categories
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  // Auto-generate if there's a name
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    // Clear results if no name
    document.getElementById('result').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see ${type} styles!</p>
      </div>
    `;
    document.getElementById('resultsCount').textContent = "0";
  }
}

function toggleSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const toggleBtn = document.querySelector('.toggle-suggestions-btn');
  
  if (!suggestionsVisible) {
    // Show suggestions
    suggestionsSection.classList.add('show');
    
    const currentSuggestions = suggestionsData[currentFilter] || [];
    
    if (currentSuggestions.length === 0) {
      suggestionsSection.innerHTML = '<p class="no-suggestions">No suggestions available for this category.</p>';
      return;
    }
    
    let html = `<h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
    html += `<div class="suggestions-grid">`;
    
    currentSuggestions.forEach(suggestion => {
      html += `
        <div class="suggestion-box ${currentFilter}">
          <span class="suggestion-text">${suggestion}</span>
          <button class="suggestion-copy-btn" onclick="copyText('${suggestion.replace(/'/g, "\\'")}')">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      `;
    });
    
    html += `</div>`;
    suggestionsSection.innerHTML = html;
    
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Suggestions';
    suggestionsVisible = true;
  } else {
    // Hide suggestions
    suggestionsSection.classList.remove('show');
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Name Suggestions';
    suggestionsVisible = false;
  }
}

function openSymbolModal() {
  document.getElementById('symbolModal').classList.add('show');
}

function closeSymbolModal() {
  document.getElementById('symbolModal').classList.remove('show');
}

function openSymbolTab(tabName) {
  // Update active tab
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(tabName)) {
      btn.classList.add('active');
    }
  });
  
  // Load symbols for this tab
  loadSymbols(tabName);
}

function loadSymbols(category) {
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available for this category.</p>';
    return;
  }
  
  let html = '';
  symbols.forEach(symbol => {
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert-btn" onclick="insertSymbol('${symbol.symbol.replace(/'/g, "\\'")}')">
            <i class="fas fa-plus"></i> Insert
          </button>
          <button class="symbol-copy-btn" onclick="copyText('${symbol.symbol.replace(/'/g, "\\'")}')">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  // Insert symbol at cursor position
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  
  // Update cursor position
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  
  // Trigger input event to auto-generate
  nameInput.dispatchEvent(new Event('input'));
  
  // Close modal
  closeSymbolModal();
}

function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Show feedback
      if (event && event.target) {
        const originalText = event.target.innerHTML;
        event.target.innerHTML = '<i class="fas fa-check"></i> Copied!';
        event.target.style.background = 'linear-gradient(135deg, #00ff88, #00cc6a)';
        
        setTimeout(() => {
          event.target.innerHTML = originalText;
          event.target.style.background = '';
        }, 1500);
      } else {
        // Show a toast notification if event is not available
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      alert("Failed to copy text. Please try again.");
    });
}

function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 30px;
    background: linear-gradient(135deg, #00ff88, #00cc6a);
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Add CSS for toast animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  .no-suggestions, .no-symbols {
    text-align: center;
    padding: 40px 20px;
    color: #aaa;
    font-style: italic;
  }
  
  .symbol-name {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
`;
document.head.appendChild(style);
