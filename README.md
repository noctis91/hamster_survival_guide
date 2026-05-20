# RollerCoin Companion Tools

Este proyecto es un conjunto de herramientas web diseñadas para optimizar la experiencia de juego en **RollerCoin**, ayudando a los jugadores a calcular sus ganancias de minado de criptomonedas y a predecir la tasa de supervivencia de sus hámsters en expediciones.

La aplicación consta de dos módulos principales con navegación directa:
1. **Calculadora de Minado (Mining Calculator)**
2. **Calculadora de Supervivencia de Hámsters (Hamster Survival Calculator)**

---

## 🚀 Módulos y Cómo Usarlos

### 1. 📊 Calculadora de RollerCoin (`calculadora.html`)
Permite calcular los retornos estimados de minado basados en tu poder de minado personal y en el estado actual de la red de RollerCoin.

*   **Poder de Minado Personal:** Puedes introducir tu poder y seleccionar la unidad (`GH/s`, `TH/s`, `PH/s`, `EH/s`).
*   **Detección de Ligas:** Detección automática de tu rango/liga (Bronze I hasta Diamond III) según el poder introducido, filtrando automáticamente las criptomonedas disponibles para minar en esa liga.
*   **Modo de Visualización:** Cambia rápidamente entre mostrar los resultados en la criptomoneda nativa o su valor equivalente en dólares estadounidense (`USD`).
*   **Integración de Precios:** Los precios de las criptomonedas se actualizan en tiempo real llamando a la API pública de **CoinGecko**.
*   **Actualizador de Datos de Red:** Permite copiar la información de la página *Network Power* de RollerCoin y pegarla en un cuadro de texto para extraer y actualizar la potencia de bloque y recompensas automáticamente.

### 2. 🐹 Calculadora de Supervivencia Pro (`hamster_survival.html`)
Ayuda a calcular el porcentaje de éxito o tasa de supervivencia de tus hámsters al enviarlos a expediciones espaciales/misiones.

*   **Selección de Hámster:** Desplegable e interfaz visual interactiva con cartas que agrupan a los hámsters por generaciones (Primera, Segunda y Tercera Generación) usando sus sprites en Pixel Art.
*   **Selector de Dificultad:** Ajusta el nivel de la misión (Nivel 1 al 10), aplicando modificadores de penalización o bonificación a la probabilidad final.
*   **Ajuste de Atributos (Sliders):** Modifica los valores de HP, STR (Fuerza) y LUCK (Suerte) de cada hámster respetando los mínimos base de la especie y un presupuesto de hasta **+49 puntos extra** en total.
*   **Habilidades Especiales (Ultimate Abilities):**
    *   **Ultimate Full Stats (100% Stats):** Habilita stats al máximo en hámsters aplicables (ej: Anomaly, Hammy Hooks).
    *   **Ultimate Auto Win (100% Win Rate):** Probabilidad de supervivencia del 100% (ej: Lucky Red).
    *   **Ultimate Overflow:** Rompe el límite de los +49 puntos permitiendo maximizar todos los atributos hasta 100 de forma independiente (ej: Kitsumi).
*   **Tasa de Supervivencia Dinámica:** Calcula en tiempo real usando interpolación matemática basada en las sumas de estadísticas y las constantes de dificultad del juego.

---

## 🛠️ Arquitectura y Desarrollo

El proyecto está diseñado bajo principios de desarrollo ágil y rendimiento en cliente (sin necesidad de bases de datos o backend pesado):

*   **Lenguajes:** HTML5 y JavaScript moderno (ES6+).
*   **Estilos:** 
    *   **Tailwind CSS (via CDN):** Para una maquetación responsive, rápida y moderna basada en clases de utilidad.
    *   **CSS Personalizado (`calculadora.css`, `fondo.css`):** Encargado de las fuentes tipográficas retro-futuristas (Orbitron, Press Start 2P, Roboto) y de efectos visuales avanzados, como el visor de hámster con fondo de luces de neón simulando un gimnasio cyberpunk.
*   **Desacoplamiento de Código (Clean Code):** Toda la lógica de comportamiento, datos de configuración (listados de monedas, coeficientes de ligas y parámetros de hámsters) y traducciones de idioma están separadas de la estructura de presentación:
    *   `calculadora.html` carga su lógica desde `calculadora.js`.
    *   `hamster_survival.html` carga su lógica desde `hamster_survival.js`.
*   **Internacionalización (i18n):** Sistema de traducción dinámico nativo que permite cambiar entre **Español (ES)** e **Inglés (EN)** al instante guardando la preferencia del usuario en el `localStorage` del navegador.

---

## 💻 Ejecución Local

Para ejecutar el proyecto de forma local, no necesitas instalar dependencias de backend. Simplemente:

1.  Descarga o clona los archivos de este directorio en tu ordenador.
2.  Abre `calculadora.html` o `hamster_survival.html` directamente en tu navegador web de preferencia (haciendo doble clic en el archivo).
3.  ¡Listo! Puedes empezar a realizar cálculos.
