# MASTER DESIGN & DEV SPEC: LIKOVA-SPACE
Data de Extração: 18/09/2026
URL de Origem: https://likova.space/


---

## 0. Identificação do Site
- **Framework / Plataforma**: HTML/CSS Puro
- **Tipo de Renderização**: STATIC
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~95%

---

## 🎨 1. Design Tokens & Cores

```css
--c-white: #fff;
--c-blue-gray: #070b20;
--c-blue-dark: #232739;
--c-blue-deep: #57566a;
--c-gray: #bdbec4;
--c-gray-light: #e3e6eb;
--c-border: #393c4d;
--c-metal: linear-gradient(180deg,#c7cbd4,#5a5f65);
--c-tap-highlight: rgba(0,0,0,.2);
--c-error: #ce1d20;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `"TT Norms Pro", Helvetica, Arial, sans-serif` | Size: `200px` | Weight: `400`
- **H2**: Font: `"TT Norms Pro", Helvetica, Arial, sans-serif` | Size: `17px` | Weight: `450`
- **PARAGRAPH**: Font: `"TT Norms Pro", Helvetica, Arial, sans-serif` | Size: `200px` | Weight: `400`
- **BUTTON**: Font: `"TT Norms Pro", Helvetica, Arial, sans-serif` | Size: `17px` | Weight: `450`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `header-1`) - Altura aprox: `70px`
   *Resumo:* "SELECT OFFICE SPACE 0 CONTACT US..."
2. **<main>** (id: `top`) - Altura aprox: `63040px`
   *Resumo:* "LIKOVA — WHERE FUTURE GAINS MOMENTUM  WHERE FUTURE GAINS MOMENTUM  BUSINESS CENT..."
3. **<section>** (id: `section-3`) - Altura aprox: `4580px`
   *Resumo:* "LIKOVA — WHERE FUTURE GAINS MOMENTUM  WHERE FUTURE GAINS MOMENTUM  BUSINESS CENT..."
4. **<section>** (id: `about`) - Altura aprox: `2619px`
   *Resumo:* "IMPRESSIVE IDEAS. DARING INSPIRATION. 1  LIKE A STRIKING WORK OF ART, THIS BUSIN..."
5. **<section>** (id: `section-5`) - Altura aprox: `6480px`
   *Resumo:* "ИНФОРМАЦИЯ  VARIABLE NUMBER OF  6-7-8..."
6. **<section>** (id: `location`) - Altura aprox: `9180px`
7. **<section>** (id: `section-7`) - Altura aprox: `9180px`
8. **<section>** (id: `section-8`) - Altura aprox: `6480px`
9. **<section>** (id: `genplan`) - Altura aprox: `2516px`
   *Resumo:* "THE MASTER PLAN  BEAUTY OF YOUR PLANS  SEE THE MASTER PLAN..."
10. **<section>** (id: `architecture`) - Altura aprox: `9536px`
11. **<section>** (id: `lobby`) - Altura aprox: `7195px`
12. **<section>** (id: `offices`) - Altura aprox: `6296px`
13. **<section>** (id: `section-13`) - Altura aprox: `1716px`
   *Resumo:* "PRICELESS IDEAS ARE BORN IN COMFORT.  PRICELESS IDEAS ARE BORN IN COMFORT. LIKOV..."
14. **<section>** (id: `engineering`) - Altura aprox: `4323px`
   *Resumo:* "TECHNOLOGY 7  INNOVATION IN ACTION  THIS BUILDING FEATURES FULLY AUTOMATED ENGIN..."
15. **<section>** (id: `infrastructure`) - Altura aprox: `10220px`
   *Resumo:* "RETAIL  RESTAURANTS  CAFÉS  MEDICAL CENTER  FITNESS CLUB  COMMUNAL SPACES  THESE..."
16. **<section>** (id: `team`) - Altura aprox: `1210px`
   *Resumo:* "OUR TEAM 9  SUPPORTING YOUR SUCCESS  ARCHITECTURAL CONCEPT-PLAN  ARCHITECTURAL L..."
17. **<footer>** (id: `footer-17`) - Altura aprox: `588px`
   *Resumo:* "CONTACT LIKOVA  OPEN DAILY, 9:00 AM – 9:00 PM  © 2026. LIKOVA  PRIVACY POLICY WE..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: Não detectado
- **Lenis Smooth Scroll**: Não detectado
- **Canvas / WebGL / Shaders**: 1 Canvas encontrado(s) ✅
- **Micro-interações (Magnetic/Spotlight/Tilt)**: DETECTADO ✅

---

## 🤖 Guia de Orientação para Agentes de IA

Para recriar um site novo ou componente baseado nesta referência:
1. Consulte a tabela de identificação (seção 0) para entender as limitações de fidelidade.
2. Aplique a paleta de cores e tipografia descritas nas seções 1 e 2.
3. Monte a estrutura semântica conforme a lista de seções na seção 3.
4. Importe os snippets da pasta `ui-ux/snippets/` para adicionar as animações de ponta e interações.
