// ============================================
// DATOS: Monedas, Ligas, Recompensas
// ============================================

const COINS = {
    RLT: { name: 'RollerToken', color: '#ef4444', blockTime: 10.28, minWithdraw: null, decimals: 2 },
    RST: { name: 'RollerStar', color: '#fbbf24', blockTime: 9.93, minWithdraw: null, decimals: 2 },
    HMT: { name: 'Hamster', color: '#a855f7', blockTime: 10.05, minWithdraw: null, decimals: 2 },
    XRP: { name: 'XRP', color: '#00aae4', blockTime: 10.10, minWithdraw: 40, decimals: 4 },
    TRX: { name: 'TRON', color: '#eb0029', blockTime: 10.07, minWithdraw: 300, decimals: 4 },
    DOGE: { name: 'Dogecoin', color: '#c2a633', blockTime: 9.93, minWithdraw: 220, decimals: 4 },
    BTC: { name: 'Bitcoin', color: '#f7931a', blockTime: 10.55, minWithdraw: 0.00085, decimals: 8 },
    ETH: { name: 'Ethereum', color: '#627eea', blockTime: 9.93, minWithdraw: 0.014, decimals: 6 },
    BNB: { name: 'BNB', color: '#f3ba2f', blockTime: 9.95, minWithdraw: 0.06, decimals: 5 },
    POL: { name: 'Polygon', color: '#8247e5', blockTime: 9.93, minWithdraw: 300, decimals: 4 },
    SOL: { name: 'Solana', color: '#9945ff', blockTime: 9.93, minWithdraw: 0.6, decimals: 4 },
    LTC: { name: 'Litecoin', color: '#bfbbbb', blockTime: 10.08, minWithdraw: 5, decimals: 5 },
    USDT: { name: 'Tether', color: '#26a17b', blockTime: 9.93, minWithdraw: null, decimals: 4 },
    ALGO: { name: 'Algorand', color: '#000000', blockTime: 10.00, minWithdraw: null, decimals: 4 }
};

const LEAGUES = [
    {
        id: 'BRONZE_I', name: 'BRONZE I', minPower: 0, maxPower: 5e6,
        coins: ['RLT', 'RST', 'BTC', 'LTC']
    },
    {
        id: 'BRONZE_II', name: 'BRONZE II', minPower: 5e6, maxPower: 3e7,
        coins: ['RLT', 'RST', 'BTC', 'BNB', 'LTC']
    },
    {
        id: 'BRONZE_III', name: 'BRONZE III', minPower: 3e7, maxPower: 1e8,
        coins: ['RLT', 'RST', 'BTC', 'BNB', 'POL', 'LTC']
    },
    {
        id: 'SILVER_I', name: 'SILVER I', minPower: 1e8, maxPower: 2e8,
        coins: ['RLT', 'RST', 'XRP', 'BTC', 'BNB', 'POL', 'LTC', 'USDT']
    },
    {
        id: 'SILVER_II', name: 'SILVER II', minPower: 2e8, maxPower: 5e8,
        coins: ['RLT', 'RST', 'XRP', 'DOGE', 'BTC', 'BNB', 'POL', 'LTC', 'USDT']
    },
    {
        id: 'SILVER_III', name: 'SILVER III', minPower: 5e8, maxPower: 1e9,
        coins: ['RLT', 'RST', 'XRP', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'LTC', 'USDT']
    },
    {
        id: 'GOLD_I', name: 'GOLD I', minPower: 1e9, maxPower: 2e9,
        coins: ['RLT', 'RST', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'LTC', 'USDT']
    },
    {
        id: 'GOLD_II', name: 'GOLD II', minPower: 2e9, maxPower: 5e9,
        coins: ['RLT', 'RST', 'HMT', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT']
    },
    {
        id: 'GOLD_III', name: 'GOLD III', minPower: 5e9, maxPower: 1.5e10,
        coins: ['RLT', 'RST', 'HMT', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT']
    },
    {
        id: 'PLATINUM_I', name: 'PLATINUM I', minPower: 1.5e10, maxPower: 5e10,
        coins: ['RLT', 'RST', 'HMT', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT', 'ALGO']
    },
    {
        id: 'PLATINUM_II', name: 'PLATINUM II', minPower: 5e10, maxPower: 1e11,
        coins: ['RLT', 'RST', 'HMT', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT', 'ALGO']
    },
    {
        id: 'PLATINUM_III', name: 'PLATINUM III', minPower: 1e11, maxPower: 2e11,
        coins: ['RLT', 'RST', 'HMT', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT', 'ALGO']
    },
    {
        id: 'DIAMOND_I', name: 'DIAMOND I', minPower: 2e11, maxPower: 4e11,
        coins: ['RST', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT', 'ALGO']
    },
    {
        id: 'DIAMOND_II', name: 'DIAMOND II', minPower: 4e11, maxPower: 1e13,
        coins: ['RST', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT', 'ALGO']
    },
    {
        id: 'DIAMOND_III', name: 'DIAMOND III', minPower: 1e13, maxPower: 5e13,
        coins: ['RST', 'XRP', 'TRX', 'DOGE', 'BTC', 'ETH', 'BNB', 'POL', 'SOL', 'LTC', 'USDT', 'ALGO']
    }
];

let networkPower = {
    RLT: 0, RST: 0, HMT: 0, XRP: 0, TRX: 0,
    DOGE: 0, BTC: 0, ETH: 0, BNB: 0, POL: 0,
    SOL: 0, LTC: 0, USDT: 0, ALGO: 0
};

// Recompensas por bloque por defecto (actualizables con el parser)
let networkRewards = {
    RLT: 0, RST: 0, HMT: 0, XRP: 0, TRX: 0,
    DOGE: 0, BTC: 0, ETH: 0, BNB: 0, POL: 0,
    SOL: 0, LTC: 0, USDT: 0, ALGO: 0
};

// Precios USD por defecto (actualizables)
let coinPrices = {
    RLT: 0.008, RST: 0.0001, HMT: 0.005, XRP: 2.30, TRX: 0.25,
    DOGE: 0.38, BTC: 105000, ETH: 3800, BNB: 680, POL: 0.45,
    SOL: 175, LTC: 92, USDT: 1.00, ALGO: 0.20
};

// ============================================
// TRADUCCIONES
// ============================================

const i18n = {
    en: {
        calc_title: "CALCULATOR",
        calc_subtitle: "Calculate your RollerCoin mining earnings",
        your_power: "Your power:",
        league: "League:",
        block_duration: "BLOCK DURATION",
        th_coins: "COINS", th_network: "NETWORK", th_block: "BLOCK",
        th_daily: "DAILY", th_weekly: "WEEKLY", th_monthly: "MONTHLY (30D)",
        th_withdraw: "MIN WITHDRAW", th_time_withdraw: "TIME TO WITHDRAW",
        net_total: "NET TOTAL",
        network_data_title: "NETWORK DATA",
        help_text: "Go to the 'Network Power' page in RollerCoin, select all the text containing the coins, and paste it below to get accurate and updated calculations.",
        apply_btn: "APPLY DATA",
        auto: "Auto",
        wasHelpful: "Was this tool helpful?",
        supportText: "I developed this tool for free and without intrusive ads. If it helps you calculate your mining earnings accurately, please consider supporting me to keep the project active. Every donation helps!",
        cryptoTitle: "Support with Crypto",
        copyBtn: "Copy",
        copied: "Copied!"
    },
    es: {
        calc_title: "CALCULADORA",
        calc_subtitle: "Calcula tus ganancias de minado en RollerCoin",
        your_power: "Tu poder:",
        league: "Liga:",
        block_duration: "DURACIÓN DE BLOQUE",
        th_coins: "MONEDAS", th_network: "RED", th_block: "BLOQUE",
        th_daily: "DIARIO", th_weekly: "SEMANAL", th_monthly: "MENSUAL (30D)",
        th_withdraw: "RETIRO MÍNIMO", th_time_withdraw: "TIEMPO RETIRO",
        net_total: "RED TOTAL",
        network_data_title: "DATOS DE LA RED",
        help_text: "Ve a la página de 'Network Power' en RollerCoin, selecciona todo el texto de las monedas y pégalo aquí abajo para tener cálculos precisos y actualizados.",
        apply_btn: "APLICAR DATOS",
        auto: "Auto",
        wasHelpful: "¿Te ha sido útil la herramienta?",
        supportText: "He desarrollado esta herramienta de forma gratuita y sin publicidad invasiva. Si te ayuda a calcular tus ganancias mineras con precisión, puedes apoyarme para mantener el proyecto activo. ¡Cualquier ayuda es bienvenida!",
        cryptoTitle: "Apoyo con Cripto",
        copyBtn: "Copiar",
        copied: "¡Copiado!"
    }
};

// ============================================
// ESTADO
// ============================================

let currentLang = 'es';
let displayMode = 'crypto'; // 'crypto' o 'usd'
let autoLeague = true;

// ============================================
// FUNCIONES DE CÁLCULO
// ============================================

function getUserPowerGH() {
    const val = parseFloat(document.getElementById('powerInput').value) || 0;
    const mult = parseFloat(document.getElementById('powerUnit').value);
    return val * mult; // en GH/s
}

function getUserPowerEH() {
    return getUserPowerGH() / 1e9; // convertir GH/s a EH/s
}

function detectLeague(powerGH) {
    for (let i = LEAGUES.length - 1; i >= 0; i--) {
        if (powerGH >= LEAGUES[i].minPower) return LEAGUES[i];
    }
    return LEAGUES[0];
}

function getSelectedLeague() {
    const sel = document.getElementById('leagueSelect');
    if (sel.value === 'auto') {
        return detectLeague(getUserPowerGH());
    }
    return LEAGUES.find(l => l.id === sel.value) || LEAGUES[0];
}

function calcEarnings(coin, userPowerEH) {
    const netPower = networkPower[coin] || 1;
    const reward = networkRewards[coin] || 0;
    const share = Math.min(1, userPowerEH / netPower);
    const perBlock = reward * share;
    const blocksPerDay = 1440 / COINS[coin].blockTime;
    const daily = perBlock * blocksPerDay;
    return {
        network: netPower,
        perBlock: perBlock,
        daily: daily,
        weekly: daily * 7,
        monthly: daily * 30,
        minWithdraw: COINS[coin].minWithdraw
    };
}

// ============================================
// FUNCIONES DE FORMATO
// ============================================

function formatNumber(num, decimals) {
    if (num === 0 || isNaN(num)) return '--';

    // JS parseFloat converts small decimals (<1e-6) back to scientific notation!
    // We must format as string and remove trailing zeros manually.
    let str = num.toFixed(decimals);

    if (str.includes('.')) {
        str = str.replace(/0+$/, '').replace(/\.$/, '');
    }

    return str;
}

function formatPower(ehValue) {
    if (ehValue >= 1000) return (ehValue / 1000).toFixed(3) + ' ZH/s';
    if (ehValue >= 1) return ehValue.toFixed(1) + ' EH/s';
    if (ehValue >= 0.001) return (ehValue * 1000).toFixed(1) + ' PH/s';
    return (ehValue * 1e6).toFixed(1) + ' TH/s';
}

function formatValue(coin, amount) {
    if (amount === 0 || isNaN(amount)) return '--';
    const isGameCurrency = ['RLT', 'RST', 'HMT'].includes(coin);
    if (displayMode === 'usd' && !isGameCurrency) {
        const usd = amount * (coinPrices[coin] || 0);
        // Fuerza 2 decimales siempre para USD (ej. $0.00, $0.01)
        return '$' + usd.toFixed(2);
    }
    return formatNumber(amount, COINS[coin].decimals) + (isGameCurrency && displayMode === 'usd' ? ` ${coin}` : '');
}

// ============================================
// RENDERIZADO DE TABLAS
// ============================================

function getCoinIconHTML(coin) {
    const isGameCurrency = ['RLT', 'RST', 'HMT'].includes(coin);
    if (isGameCurrency) {
        return `<span class="coin-dot" style="background:${COINS[coin].color}">${coin[0]}</span>`;
    }

    const logos = {
        BTC: 'bitcoin-btc',
        ETH: 'ethereum-eth',
        BNB: 'bnb-bnb',
        XRP: 'xrp-xrp',
        TRX: 'tron-trx',
        DOGE: 'dogecoin-doge',
        POL: 'polygon-matic',
        SOL: 'solana-sol',
        LTC: 'litecoin-ltc',
        USDT: 'tether-usdt',
        ALGO: 'algorand-algo'
    };

    const logoId = logos[coin];
    if (logoId) {
        const url = `https://cryptologos.cc/logos/${logoId}-logo.svg?v=035`;
        return `<img src="${url}" alt="${coin}" class="w-[18px] h-[18px] rounded-full inline-block object-contain bg-white p-[1px]" 
            onerror="this.outerHTML='<span class=\\'coin-dot\\' style=\\'background:${COINS[coin].color}\\'>${coin[0]}</span>'">`;
    }

    return `<span class="coin-dot" style="background:${COINS[coin].color}">${coin[0]}</span>`;
}

function renderTables() {
    const league = getSelectedLeague();
    const userEH = getUserPowerEH();
    const coins = league.coins;

    // Tabla izquierda: Duración de bloque
    const blockBody = document.getElementById('blockDurationBody');
    blockBody.innerHTML = '';
    coins.forEach(coin => {
        const bt = COINS[coin].blockTime;
        const mins = Math.floor(bt);
        const secs = Math.round((bt - mins) * 60);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="coin-cell">${getCoinIconHTML(coin)} ${coin}</td>
            <td>${String(mins).padStart(2, '0')}</td>
            <td>${String(secs).padStart(2, '0')}</td>`;
        blockBody.appendChild(tr);
    });

    // Tabla derecha: Ganancias
    const earnBody = document.getElementById('earningsBody');
    earnBody.innerHTML = '';
    let totalDailyUSD = 0;
    let totalWeeklyUSD = 0;
    let totalMonthlyUSD = 0;
    let totalNetworkEH = 0;

    coins.forEach(coin => {
        const e = calcEarnings(coin, userEH);
        totalNetworkEH += e.network;
        totalDailyUSD += e.daily * (coinPrices[coin] || 0);
        totalWeeklyUSD += e.weekly * (coinPrices[coin] || 0);
        totalMonthlyUSD += e.monthly * (coinPrices[coin] || 0);

        const tr = document.createElement('tr');
        const withdrawAmount = COINS[coin].minWithdraw;
        const withdrawStr = withdrawAmount ? formatNumber(withdrawAmount, COINS[coin].decimals) : '--';

        let withdrawTimeStr = '--';
        if (withdrawAmount && e.daily > 0) {
            const daysToWithdraw = withdrawAmount / e.daily;
            const totalHours = daysToWithdraw * 24;
            const d = Math.floor(totalHours / 24);
            const h = Math.floor(totalHours % 24);
            withdrawTimeStr = `${d}d ${h}h`;
        }

        tr.innerHTML = `
            <td class="coin-cell">${getCoinIconHTML(coin)} ${coin}</td>
            <td>${formatPower(e.network)}</td>
            <td>${formatValue(coin, e.perBlock)}</td>
            <td>${formatValue(coin, e.daily)}</td>
            <td>${formatValue(coin, e.weekly)}</td>
            <td>${formatValue(coin, e.monthly)}</td>
            <td>${withdrawStr}</td>
            <td class="text-[#f97316] font-bold">${withdrawTimeStr}</td>`;
        earnBody.appendChild(tr);
    });

    // Totales (pie de tabla)
    document.getElementById('totalNetwork').textContent = formatPower(totalNetworkEH);
    if (displayMode === 'usd') {
        document.getElementById('totalDaily').textContent = '$' + totalDailyUSD.toFixed(2);
        document.getElementById('totalWeekly').textContent = '$' + totalWeeklyUSD.toFixed(2);
        document.getElementById('totalMonthly').textContent = '$' + totalMonthlyUSD.toFixed(2);
    } else {
        document.getElementById('totalDaily').textContent = '--';
        document.getElementById('totalWeekly').textContent = '--';
        document.getElementById('totalMonthly').textContent = '--';
    }

    // Info de red
    updateNetworkInfo();
}

function updateNetworkInfo() {
    const league = getSelectedLeague();
    const info = document.getElementById('networkInfo');
    let html = '';
    league.coins.forEach(coin => {
        const pw = networkPower[coin] || 0;
        html += `<span style="color:${COINS[coin].color}">${coin}</span>  ${formatPower(pw)}    `;
    });
    info.innerHTML = html;
}

// ============================================
// EVENT HANDLERS
// ============================================

function onPowerChange() {
    // Actualizar liga auto
    if (autoLeague) {
        const league = detectLeague(getUserPowerGH());
        const sel = document.getElementById('leagueSelect');
        sel.options[0].text = `Auto (${league.name})`;
    }
    renderTables();
}

function onLeagueChange() {
    const sel = document.getElementById('leagueSelect');
    autoLeague = (sel.value === 'auto');
    renderTables();
}

function setMode(mode) {
    displayMode = mode;
    document.getElementById('btnUSD').classList.toggle('active', mode === 'usd');
    document.getElementById('btnCrypto').classList.toggle('active', mode === 'crypto');
    renderTables();
}

// ============================================
// PARSER DE DATOS DE RED
// ============================================

// Alias map: RollerCoin sometimes uses different tickers
const TICKER_ALIASES = {
    'MATIC': 'POL',
    'POLY': 'POL',
    'ROLLERCOIN': 'RLT',
    'ROLLERTOKEN': 'RLT',
    'ROLLERSTAR': 'RST',
    'HAMSTER': 'HMT',
};

function parseNetwork() {
    const text = document.getElementById('networkTextarea').value;
    if (!text.trim()) return;

    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const coinSymbols = Object.keys(COINS);
    let found = 0;
    let updatedCoins = [];

    // Strategy: scan line by line, identify coin symbols, then look for
    // "Power" keyword followed by a hashrate value on the same or next line
    let currentCoin = null;
    let lookingForPower = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineUpper = line.toUpperCase().trim();

        // Try to identify a coin symbol on this line
        // Check if line is EXACTLY a known symbol or alias (standalone line)
        let detectedCoin = null;

        // Check exact match first (line is just the symbol)
        if (coinSymbols.includes(lineUpper)) {
            detectedCoin = lineUpper;
        } else if (TICKER_ALIASES[lineUpper]) {
            detectedCoin = TICKER_ALIASES[lineUpper];
        }

        // Also check if previous line was the lowercase version (e.g., "rlt" then "RLT")
        // In that case we already have the coin from this line
        if (!detectedCoin) {
            // Check if line matches pattern like "rlt" or "btc" (lowercase ticker)
            const lowerTicker = line.toLowerCase().trim();
            const upperTicker = lowerTicker.toUpperCase();
            if (coinSymbols.includes(upperTicker)) {
                detectedCoin = upperTicker;
            } else if (TICKER_ALIASES[upperTicker]) {
                detectedCoin = TICKER_ALIASES[upperTicker];
            }
        }

        if (detectedCoin) {
            currentCoin = detectedCoin;
            lookingForPower = true;
            continue;
        }

        // If we have a current coin, look for the power/hashrate line
        if (currentCoin && lookingForPower) {
            // Match hashrate patterns like: "10.690 Zh/s", "2.478 Zh/s", "16.288 Zh/s"
            const hashMatch = line.match(/([0-9][0-9.,]*)\s*([ZzEePpTtGg])[Hh]\/s/);
            if (hashMatch) {
                const value = parseFloat(hashMatch[1].replace(/,/g, ''));
                const unitChar = hashMatch[2].toUpperCase();

                // Convert everything to EH/s (our internal unit)
                let ehValue;
                switch (unitChar) {
                    case 'Z': ehValue = value * 1000; break;  // 1 ZH = 1000 EH
                    case 'E': ehValue = value; break;          // already EH
                    case 'P': ehValue = value / 1000; break;   // 1 PH = 0.001 EH
                    case 'T': ehValue = value / 1e6; break;    // 1 TH = 0.000001 EH
                    case 'G': ehValue = value / 1e9; break;    // 1 GH = 0.000000001 EH
                    default: ehValue = value; break;
                }

                networkPower[currentCoin] = ehValue;
                found++;
                updatedCoins.push(currentCoin);
                lookingForPower = false;
                continue;
            }

            // Also try a more relaxed pattern for lines like "Power" followed by value on next line
            if (lineUpper === 'POWER') {
                // The hashrate should be on the next line
                continue;
            }
        }

        // Also try to extract per-block reward
        // Pattern: "1.21 RLT" or "0.0000134 BTC" after "Per block"
        if (currentCoin && lineUpper === 'PER BLOCK') {
            // Next line should have the reward value
            if (i + 1 < lines.length) {
                const rewardMatch = lines[i + 1].trim().match(/^([0-9.,]+)/);
                if (rewardMatch) {
                    const rewardVal = parseFloat(rewardMatch[1].replace(/,/g, ''));
                    networkRewards[currentCoin] = rewardVal;
                }
            }
            continue;
        }
    }

    const infoDiv = document.getElementById('networkInfo');
    infoDiv.classList.remove('hidden');

    if (found > 0) {
        renderTables();
        const coinList = updatedCoins.join(', ');
        infoDiv.innerHTML = `<span class="text-emerald-500">✅ ${currentLang === 'es' ? '¡Éxito! Se actualizaron' : 'Success! Updated'} ${found} ${currentLang === 'es' ? 'monedas' : 'coins'}: ${coinList}</span>`;
    } else {
        infoDiv.innerHTML = `<span class="text-red-500">❌ ${currentLang === 'es' ? 'No se encontraron datos válidos.' : 'No valid data found.'}</span>`;
    }
}

// ============================================
// IDIOMA
// ============================================

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('calcLang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    // Actualizar auto league text
    if (autoLeague) {
        const league = detectLeague(getUserPowerGH());
        const sel = document.getElementById('leagueSelect');
        sel.options[0].text = `Auto (${league.name})`;
    }
    renderTables();
}

// ============================================
// INICIALIZACIÓN
// ============================================

function initLeagueSelector() {
    const sel = document.getElementById('leagueSelect');
    sel.innerHTML = '';
    // Opción Auto
    const autoOpt = document.createElement('option');
    autoOpt.value = 'auto';
    autoOpt.text = 'Auto (BRONZE I)';
    sel.add(autoOpt);
    // Todas las ligas
    LEAGUES.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l.id;
        opt.text = l.name;
        sel.add(opt);
    });
}

async function fetchCoinPrices() {
    const cgMapping = {
        XRP: 'ripple', TRX: 'tron', DOGE: 'dogecoin', BTC: 'bitcoin',
        ETH: 'ethereum', BNB: 'binancecoin', POL: 'matic-network',
        SOL: 'solana', LTC: 'litecoin', USDT: 'tether', ALGO: 'algorand'
    };
    const ids = Object.values(cgMapping).join(',');
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
        const data = await response.json();

        let updated = false;
        for (const [coin, id] of Object.entries(cgMapping)) {
            if (data[id] && data[id].usd) {
                coinPrices[coin] = data[id].usd;
                updated = true;
            }
        }

        if (updated) {
            console.log('Precios actualizados desde CoinGecko');
            // Re-renderizar si estamos en modo USD para reflejar los nuevos precios
            if (displayMode === 'usd') {
                renderTables();
            }
        }
    } catch (error) {
        console.error('Error al obtener precios de CoinGecko:', error);
    }
}

function init() {
    const savedLang = localStorage.getItem('calcLang') || localStorage.getItem('preferredLang') || 'es';
    document.getElementById('languageSelect').value = savedLang;
    initLeagueSelector();
    changeLanguage(savedLang);
    renderTables();

    // Obtener precios reales de criptomonedas
    fetchCoinPrices();
}

document.addEventListener('DOMContentLoaded', init);

// ============================================
// DONACIONES Y UTILIDADES
// ============================================

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        const lang = document.getElementById('languageSelect').value;
        button.innerText = i18n[lang].copied || 'Copied!';
        button.classList.remove('bg-purple-500/20', 'text-purple-300');
        button.classList.add('bg-emerald-500/20', 'text-emerald-400', 'shadow-[0_0_8px_rgba(16,185,129,0.3)]');

        setTimeout(() => {
            button.innerText = originalText;
            button.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'shadow-[0_0_8px_rgba(16,185,129,0.3)]');
            button.classList.add('bg-purple-500/20', 'text-purple-300');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar la dirección: ', err);
    });
}
