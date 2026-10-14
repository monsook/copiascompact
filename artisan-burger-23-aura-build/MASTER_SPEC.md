# MASTER DESIGN & DEV SPEC: ARTISAN-BURGER-23-AURA-BUILD
Data de Extração: 31/08/2026
URL de Origem: https://artisan-burger-23.aura.build/

> ℹ️ **NOTA**: Este site foi identificado como **SPA (CSR Puro)**. O HTML clonado reflete a estrutura renderizada no servidor. Algumas interações dinâmicas requerem os snippets da pasta `ui-ux/`.

---

## 0. Identificação do Site
- **Framework / Plataforma**: SPA (CSR Puro)
- **Tipo de Renderização**: SPA_CSR
- **Modo de Clonagem Aplicado**: STRUCTURED_CLONE
- **Capacidade / Fidelidade do Clone**: ~70%
- **Aviso**: AVISO: SPA renderizado 100% no cliente. Capturando DOM hidratado via Playwright Headless.

---

## 🎨 1. Design Tokens & Cores

```css
/* Variáveis padrão da página */
--background: #000000;
--foreground: #ffffff;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `Modak, system-ui` | Size: `192px` | Weight: `400`
- **H2**: Font: `Modak, system-ui` | Size: `60px` | Weight: `400`
- **H3**: Font: `Inter, sans-serif` | Size: `24px` | Weight: `500`
- **PARAGRAPH**: Font: `"Mouse Memoirs", sans-serif` | Size: `30px` | Weight: `400`
- **BUTTON**: Font: `Inter, sans-serif` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<nav>** (id: `nav-1`) - Altura aprox: `64px`
   *Resumo:* "CRAV ACCUEIL À PROPOS INGRÉDIENTS ADRESSES LES BURGERS..."
2. **<section>** (id: `section-2`) - Altura aprox: `1390px`
   *Resumo:* "CRAV THE BURGER  ÉCRASÉ FRAIS  GOÛT AUDACIEUX  Écrasés chauds sur la plaque, nos..."
3. **<section>** (id: `about`) - Altura aprox: `1062px`
   *Resumo:* "LE GRAND CLASSIQUE  JUTEUX ET FROMAGER BIEN GARNI  CRAV est de retour et plus au..."
4. **<section>** (id: `section-4`) - Altura aprox: `683px`
   *Resumo:* "L'EXPÉRIENCE  UNE NOURRITURE QUI FAIT DU BIEN 450 KCAL RICHE EN PROTÉINES INGRÉD..."
5. **<section>** (id: `ingredients`) - Altura aprox: `660px`
   *Resumo:* "QUALITÉ PURE Chaque couche remplie de notre saveur signature Tomate Fraîche Ched..."
6. **<section>** (id: `locations`) - Altura aprox: `1043px`
   *Resumo:* "À EMPORTER  LA QUALITÉ QUI VOYAGE AVEC VOUS  Des smash burgers fraîchement embal..."
7. **<section>** (id: `section-7`) - Altura aprox: `816px`
   *Resumo:* "RESSENTEZ-LE  SENTEZ LA DIFFÉRENCE  Écrasé pour les audacieux, conçu pour les af..."
8. **<footer>** (id: `footer-8`) - Altura aprox: `798px`
   *Resumo:* "CRAV  L'ultime expérience du burger écrasé, généreux, chaud et préparé à la comm..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: Não detectado
- **Lenis Smooth Scroll**: Não detectado
- **Canvas / WebGL / Shaders**: Nenhum
- **Micro-interações (Magnetic/Spotlight/Tilt)**: Standard

---

## 🤖 Guia de Orientação para Agentes de IA

Para recriar um site novo ou componente baseado nesta referência:
1. Consulte a tabela de identificação (seção 0) para entender as limitações de fidelidade.
2. Aplique a paleta de cores e tipografia descritas nas seções 1 e 2.
3. Monte a estrutura semântica conforme a lista de seções na seção 3.
4. Importe os snippets da pasta `ui-ux/snippets/` para adicionar as animações de ponta e interações.
