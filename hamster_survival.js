// ============================================
// TRADUCCIONES
// ============================================

const translations = {
    en: {
        title: "HAMSTER SURVIVAL CALCULATOR",
        rules: "Rules: Minimums locked and maximum of +49 total points",
        choose_hamster: "1. Choose Hamster:",
        choose_diff: "2. Mission Difficulty:",
        stat_adj: "3. Stat Adjustment (Max +49 pts)",
        survival_rate: "Survival Rate",
        total_stats: "Total Stats:",
        base_chance: "Base Chance:",
        mod: "Mod:",
        passive: "Survival Passive:",
        gen1: "FIRST GENERATION",
        gen2: "SECOND GENERATION",
        gen3: "THIRD GENERATION",
        wasHelpful: "Was this tool helpful?",
        supportText: "I developed this tool for free and without intrusive ads. If it helps you save your hamsters during their expeditions, please consider supporting me to keep the project running and add new features. Every bit of support is appreciated!",
        buyCoffee: "Buy me a coffee",
        cryptoTitle: "Crypto Donations",
        copyBtn: "Copy",
        copied: "Copied!",
        ability_full_stats: "Ultimate Ability (100% Stats)",
        ability_auto_win: "Ultimate Ability (100% Win Rate)",
        ability_overflow: "Ultimate Ability (Increase max level stats)",
        sum_base: "Base Sum:",
        level: "Level"
    },
    es: {
        title: "CALCULADORA DE SUPERVIVENCIA",
        rules: "Reglas: Mínimos bloqueados y máximo de +49 puntos totales",
        choose_hamster: "1. Elige tu Hámster:",
        choose_diff: "2. Dificultad de Misión:",
        stat_adj: "3. Ajuste de Stats (Máx +49 pts)",
        survival_rate: "Tasa de Supervivencia",
        total_stats: "Stats Totales:",
        base_chance: "Prob. Base:",
        mod: "Mod:",
        passive: "Pasiva de Supervivencia:",
        gen1: "PRIMERA GENERACIÓN",
        gen2: "SEGUNDA GENERACIÓN",
        gen3: "TERCERA GENERACIÓN",
        wasHelpful: "¿Te ha sido útil la herramienta?",
        supportText: "He desarrollado esta herramienta de forma gratuita y sin publicidad invasiva. Si te ayuda a salvar tus hámsters en las expediciones, puedes apoyarme para mantener el proyecto activo. ¡Cualquier ayuda es bienvenida!",
        buyCoffee: "Invítame a un café",
        cryptoTitle: "Donaciones Cripto",
        copyBtn: "Copiar",
        copied: "¡Copiado!",
        ability_full_stats: "Habilidad Ultimate (Stats al 100%)",
        ability_auto_win: "Habilidad Ultimate (Victoria 100%)",
        ability_overflow: "Habilidad Ultimate (Superar límite de nivel)",
        sum_base: "Suma Base:",
        level: "Nivel"
    }
};

// ============================================
// IDIOMA
// ============================================

function changeLanguage(lang) {
    localStorage.setItem('preferredLang', lang);

    // 1. Traducir elementos estáticos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // 2. Actualizar el selector de dificultad
    const diffSelect = document.getElementById('diffSelect');
    const currentDiffValue = diffSelect.value;
    diffSelect.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const impact = difficultyImpact[i];
        const sign = impact >= 0 ? '+' : '';
        const opt = document.createElement('option');
        opt.value = i;
        opt.text = `${translations[lang].level} ${i} (${sign}${impact.toFixed(2)}%)`;
        diffSelect.add(opt);
    }
    diffSelect.value = currentDiffValue;

    // 3. Reinicializar la cuadrícula y el selector de hámsters para traducir nombres/textos dinámicos
    init(lang);
    calculate();
}

// Al cargar la página, aplicamos el idioma guardado o el inglés por defecto
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage(savedLang);
});

// ============================================
// ESTADO
// ============================================

let userStatsCache = { hp: 0, str: 0, luck: 0 };

// ============================================
// DATOS: Tabla de supervivencia, dificultad, hámsters
// ============================================

const survivalTable = [
    { sum: 50, prob: 20.38 }, { sum: 100, prob: 24.71 }, { sum: 150, prob: 33.83 },
    { sum: 185, prob: 43.07 }, { sum: 200, prob: 47.75 }, { sum: 215, prob: 52.86 },
    { sum: 220, prob: 54.66 }, { sum: 250, prob: 66.47 }, { sum: 275, prob: 77.64 },
    { sum: 300, prob: 90.00 }
];

const difficultyImpact = {
    1: 5.00, 2: 3.89, 3: 2.78, 4: 1.67, 5: 0.56,
    6: -0.56, 7: -1.67, 8: -2.78, 9: -3.89, 10: -5.00
};

const hamsters = [
    { name: "Cowham", gen: 1, hp: 40, str: 30, luck: 40, bonus: 0, img: "img/cowham.gif" },
    { name: "Guile", gen: 1, hp: 50, str: 30, luck: 20, bonus: 5, img: "img/guile.gif" },
    { name: "Big Daddy", gen: 1, hp: 50, str: 90, luck: 50, bonus: 0, img: "img/big_daddy.gif" },
    { name: "The Dracula", gen: 1, hp: 10, str: 50, luck: 90, bonus: 0, img: "img/the_dracula.gif" },
    { name: "The Hamster", gen: 1, hp: 20, str: 10, luck: 20, bonus: 0, img: "img/the_hamster.gif" },
    { name: "Naughty Claus", gen: 1, hp: 85, str: 45, luck: 55, bonus: 10, img: "img/naughty_claus.gif" },
    { name: "Uncle", gen: 1, hp: 85, str: 85, luck: 30, bonus: 0, img: "img/uncle.gif" },
    { name: "Birthday Bob", gen: 1, hp: 30, str: 30, luck: 10, bonus: 0, img: "img/birthday_bob.gif" },
    { name: "Valkirita", gen: 1, hp: 90, str: 90, luck: 25, bonus: 0, img: "img/valkirita.gif" },
    { name: "Banjo Walker", gen: 1, hp: 65, str: 30, luck: 80, bonus: 0, img: "img/banjo_walker.gif" },
    { name: "Dusty McUncle", gen: 1, hp: 80, str: 80, luck: 40, bonus: 0, img: "img/dusty_mcuncle.gif" },
    { name: "Mamita", gen: 1, hp: 85, str: 30, luck: 85, bonus: 0, img: "img/mamita.gif" },
    { name: "Plague Dancer", gen: 2, hp: 25, str: 90, luck: 80, bonus: 15, img: "img/plague_dancer.gif" },
    { name: "Anomaly", gen: 2, hp: 60, str: 60, luck: 40, bonus: 0, img: "img/anomaly.gif", hasUltimate: true },
    { name: "Lord Hexron", gen: 2, hp: 85, str: 85, luck: 35, bonus: 0, img: "img/lord_hexron.gif" },
    { name: "Sir Catch-a-Lot", gen: 2, hp: 45, str: 75, luck: 95, bonus: 0, img: "img/sir_catchalot.gif" },
    { name: "Lucky Red", gen: 2, hp: 70, str: 80, luck: 50, bonus: 0, img: "img/lucky_red.gif", hasAutoWin: true },
    { name: "Partello", gen: 2, hp: 20, str: 35, luck: 35, bonus: 0, img: "img/partello.gif" },
    { name: "Kitsumi", gen: 2, hp: 90, str: 40, luck: 90, bonus: 0, img: "img/kitsumi.gif", hasOverFlow: true },
    { name: "Hammy Hooks", gen: 2, hp: 80, str: 80, luck: 45, bonus: 10, img: "img/hammy_hooks.gif", hasUltimate: true },
    { name: "Mr. Jack", gen: 2, hp: 25, str: 25, luck: 15, bonus: 0, img: "img/mr_jack.gif" },
    { name: "Goodncle", gen: 2, hp: 60, str: 40, luck: 80, bonus: 0, img: "img/god_uncle.png" },
    { name: "Badncle", gen: 2, hp: 60, str: 80, luck: 40, bonus: 0, img: "img/bad_uncle.png" },
    { name: "Joga Bonito", gen: 2, hp: 70, str: 90, luck: 50, bonus: 0, img: "img/taps.gif" },
    { name: "Uncle'Azoth", gen: 3, hp: 85, str: 85, luck: 60, bonus: 0, img: "img/azoth.png" },
];

// ============================================
// FUNCIONES DE CÁLCULO
// ============================================

function getBaseProb(sum) {
    if (sum <= 50) return 20.38;
    if (sum >= 300) return 90.00;
    for (let i = 0; i < survivalTable.length - 1; i++) {
        let p1 = survivalTable[i], p2 = survivalTable[i + 1];
        if (sum >= p1.sum && sum <= p2.sum) {
            return p1.prob + (sum - p1.sum) * (p2.prob - p1.prob) / (p2.sum - p1.sum);
        }
    }
    return 0;
}

// ============================================
// GESTIÓN DE SLIDERS
// ============================================

// 1. GESTIÓN DE SLIDERS: Controla que no pasen de +49 puntos
function handleSlider(activeSlider, type) {
    const h = hamsters[document.getElementById('hamsterSelect').value];
    const hpS = document.getElementById('inputHP');
    const strS = document.getElementById('inputSTR');
    const luckS = document.getElementById('inputLUCK');

    const isOverFlowActive = document.getElementById('ultimateOverFlowToggle').checked;

    let totalExtra = (parseInt(hpS.value) - h.hp) +
        (parseInt(strS.value) - h.str) +
        (parseInt(luckS.value) - h.luck);

    // Si NO está activo el Overflow, aplicamos el límite de 49
    if (!isOverFlowActive && totalExtra > 49) {
        const exceso = totalExtra - 49;
        activeSlider.value = parseInt(activeSlider.value) - exceso;
    }
    // Si ESTÁ activo, no hacemos nada, permitiendo que lleguen a 100 cada uno

    document.getElementById('valHP').innerText = hpS.value;
    document.getElementById('valSTR').innerText = strS.value;
    document.getElementById('valLUCK').innerText = luckS.value;

    calculate();
}

// ============================================
// CARGA DE DATOS DEL HÁMSTER
// ============================================

// 2. CARGA DE DATOS: Configura los sliders cuando cambias de hámster
function loadHamsterStats() {
    const h = hamsters[document.getElementById('hamsterSelect').value];
    const hpS = document.getElementById('inputHP');
    const strS = document.getElementById('inputSTR');
    const luckS = document.getElementById('inputLUCK');

    // Reset de habilidades ultimate
    document.getElementById('ultimateToggle').checked = false;
    document.getElementById('ultimateAutoWinToggle').checked = false;
    document.getElementById('ultimateOverFlowToggle').checked = false;
    hpS.disabled = strS.disabled = luckS.disabled = false;

    // Mostrar/Ocultar contenedores de habilidad
    document.getElementById('ultimateContainer').classList.toggle('hidden', !h.hasUltimate);
    document.getElementById('ultimateContainerAutoWin').classList.toggle('hidden', !h.hasAutoWin);
    document.getElementById('ultimateContainerOverFlow').classList.toggle('hidden', !h.hasOverFlow);

    // Ajustar mínimos y valores base de los sliders
    hpS.min = h.hp; hpS.value = h.hp;
    strS.min = h.str; strS.value = h.str;
    luckS.min = h.luck; luckS.value = h.luck;

    // Actualizar etiquetas numéricas
    document.getElementById('valHP').innerText = h.hp;
    document.getElementById('valSTR').innerText = h.str;
    document.getElementById('valLUCK').innerText = h.luck;

    // Imagen del hámster
    const imgElement = document.getElementById('hamsterImg');
    if (h.img) {
        imgElement.src = h.img;
        document.getElementById('hamsterImgContainer').style.display = 'block';
    }

    calculate();
}

// ============================================
// CÁLCULO FINAL
// ============================================

// 3. CÁLCULO FINAL: Suma todo y saca el porcentaje
function calculate() {
    const h = hamsters[document.getElementById('hamsterSelect').value];

    // 1. Obtenemos los valores actuales de los sliders y la dificultad
    const hp = parseInt(document.getElementById('inputHP').value);
    const str = parseInt(document.getElementById('inputSTR').value);
    const luck = parseInt(document.getElementById('inputLUCK').value);
    const diff = document.getElementById('diffSelect').value;

    const totalSum = hp + str + luck;

    // 2. Verificamos si la habilidad Overflow está activa
    const isOverFlowActive = document.getElementById('ultimateOverFlowToggle').checked;

    // 3. Calculamos los puntos extra invertidos
    const extra = totalSum - (h.hp + h.str + h.luck);

    // 4. Actualizamos el texto del límite dinámicamente (MAX si hay Overflow activo)
    const currentLimitLabel = isOverFlowActive ? "MAX" : "49";
    document.getElementById('extraPointsLabel').innerText = `${extra} / ${currentLimitLabel}`;

    // 5. Calculamos el porcentaje visual de la barra de progreso
    // Si Overflow está activo, el máximo posible es la suma de llevar todo a 100 (300) menos la base
    const maxPossibleExtra = isOverFlowActive ? (300 - (h.hp + h.str + h.luck)) : 49;
    const visualPercentage = Math.min((extra / maxPossibleExtra) * 100, 100);
    document.getElementById('pointsBar').style.width = `${visualPercentage}%`;

    // 6. Ajustamos el color y brillo de la barra si alcanza su límite correspondiente
    if (extra >= (isOverFlowActive ? maxPossibleExtra : 49)) {
        document.getElementById('pointsBar').className = "bg-amber-500 h-full rounded-full transition-all shadow-[0_0_10px_#f59e0b]";
    } else {
        document.getElementById('pointsBar').className = "bg-sky-400 h-full rounded-full transition-all";
    }

    // 7. Cálculos de probabilidad de supervivencia
    const baseProb = getBaseProb(totalSum);
    const influence = difficultyImpact[diff];

    // Comprobamos si las otras habilidades especiales están activas
    const isAutoWin = document.getElementById('ultimateAutoWinToggle').checked;
    const isFullStats = document.getElementById('ultimateToggle').checked;

    let finalDisplay;
    if (isAutoWin) {
        finalDisplay = 100.00;
    } else if (isFullStats) {
        // Si la habilidad de Anomaly/Hammy Hooks está activa, calculamos con stats al 100
        const maxStatsProb = getBaseProb(300);
        finalDisplay = Math.min(Math.max(maxStatsProb + influence + h.bonus, 0), 100);
    } else {
        // Cálculo normal: Probabilidad base + dificultad + bono del hámster
        finalDisplay = Math.min(Math.max(baseProb + influence + h.bonus, 0), 100);
    }

    // 8. Renderizamos los resultados finales en la interfaz
    document.getElementById('sumLabel').innerText = totalSum;
    document.getElementById('baseLabel').innerText = baseProb.toFixed(2) + "%";
    document.getElementById('diffLabel').innerText = (influence > 0 ? "+" : "") + influence + "%";
    document.getElementById('diffLabel').className = influence >= 0 ? "text-green-400" : "text-red-400";
    document.getElementById('bonusLabel').innerText = h.bonus + "%";
    document.getElementById('finalResult').innerText = finalDisplay.toFixed(2) + "%";
}

// ============================================
// HABILIDADES ULTIMATE
// ============================================

// 4. HABILIDAD ULTIMATE: Setea todo al 100
function toggleUltimate() {
    const isChecked = document.getElementById('ultimateToggle').checked;
    const hpS = document.getElementById('inputHP');
    const strS = document.getElementById('inputSTR');
    const luckS = document.getElementById('inputLUCK');

    if (isChecked) {
        userStatsCache = { hp: hpS.value, str: strS.value, luck: luckS.value };
        hpS.value = strS.value = luckS.value = 100;
        hpS.disabled = strS.disabled = luckS.disabled = true;
    } else {
        hpS.value = userStatsCache.hp;
        strS.value = userStatsCache.str;
        luckS.value = userStatsCache.luck;
        hpS.disabled = strS.disabled = luckS.disabled = false;
    }

    document.getElementById('valHP').innerText = hpS.value;
    document.getElementById('valSTR').innerText = strS.value;
    document.getElementById('valLUCK').innerText = luckS.value;
    calculate();
}

function toggleAutoWin() {
    // Esta habilidad no bloquea inputs, solo afecta al resultado final
    calculate();
}

function toggleOverFlow() {
    const isChecked = document.getElementById('ultimateOverFlowToggle').checked;

    if (!isChecked) {
        // Si apaga el overflow, reseteamos a los stats base para forzar el límite de 49
        loadHamsterStats();
    }
    calculate();
}

// ============================================
// SELECCIÓN DE HÁMSTER DESDE CUADRÍCULA
// ============================================

function selectHamster(index) {
    const select = document.getElementById('hamsterSelect');
    select.value = index;
    loadHamsterStats();

    // Opcional: Hace scroll suave hacia arriba para ver la calculadora
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// DONACIONES Y UTILIDADES
// ============================================

// Función interactiva para copiar cripto-direcciones al portapapeles
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
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

// ============================================
// INICIALIZACIÓN
// ============================================

function init(lang = 'en') {
    const select = document.getElementById('hamsterSelect');
    const gen1Grid = document.getElementById('gen1Grid');
    const gen2Grid = document.getElementById('gen2Grid');
    const gen3Grid = document.getElementById('gen3Grid');

    // Guardamos el hámster que estaba seleccionado antes de limpiar
    const selectedIdx = select.value || 0;

    // Limpiamos los contenedores para evitar duplicados al cambiar de idioma
    select.innerHTML = '';
    gen1Grid.innerHTML = '';
    gen2Grid.innerHTML = '';
    gen3Grid.innerHTML = '';

    hamsters.forEach((h, index) => {
        // 1. Actualizamos el selector (Dropdown)
        const opt = document.createElement('option');
        opt.value = index;
        opt.text = `[Gen ${h.gen}] ${h.name} ${h.bonus > 0 ? '(+' + h.bonus + '%)' : ''}`;
        select.add(opt);

        // 2. Creamos la carta con textos traducidos
        const card = `
            <div class="hamster-card p-4 rounded-lg text-sm border-l-4 ${h.gen === 1 ? 'border-sky-500' : 'border-purple-500'} cursor-pointer hover:bg-slate-700/50 transition-all group" 
                 onclick="selectHamster(${index})">
                <div class="flex flex-col items-center mb-3">
                    <div class="relative w-20 h-20 bg-slate-900/50 rounded-lg overflow-hidden border border-white/5 mb-2 shadow-inner">
                        <img src="${h.img}" alt="${h.name}" 
                             class="pixel-hamster absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] max-w-none h-auto object-contain object-bottom transform group-hover:scale-110 transition-transform">
                    </div>
                    
                    <div class="text-center w-full">
                        <div class="flex justify-center items-center gap-2">
                            <span class="font-bold text-white text-base">${h.name}</span>
                           ${h.bonus > 0 ? `
    <div class="bonus-badge flex items-center gap-1">
        <img src="img/survive_percent.png" alt="Survival" class="w-4 h-4 object-contain">
        <span>+${h.bonus}%</span>
    </div>` : ''}
                        </div>
                        <div class="text-[10px] text-slate-500 italic mt-1">${translations[lang].sum_base} ${h.hp + h.str + h.luck}</div>
                    </div>
                </div>

                <div class="space-y-1.5 opacity-90">
                    <div class="stat-bar"><div class="stat-fill-hp h-full" style="width:${h.hp}%"></div></div>
                    <div class="stat-bar"><div class="stat-fill-str h-full" style="width:${h.str}%"></div></div>
                    <div class="stat-bar"><div class="stat-fill-luck h-full" style="width:${h.luck}%"></div></div>
                </div>
            </div>
        `;

        if (h.gen === 1) {
            gen1Grid.innerHTML += card;
        } else if (h.gen === 2) {
            gen2Grid.innerHTML += card;
        } else if (h.gen === 3) {
            gen3Grid.innerHTML += card;
        }
    });

    // Restauramos la selección y cargamos los stats iniciales
    select.value = selectedIdx;
    loadHamsterStats();
}
init();
