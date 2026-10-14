# MASTER DESIGN & DEV SPEC: 21OAKS-ORG
Data de Extração: 21/09/2026
URL de Origem: https://21oaks.org/


---

## 0. Identificação do Site
- **Framework / Plataforma**: HTML/CSS Puro
- **Tipo de Renderização**: STATIC
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~95%

---

## 🎨 1. Design Tokens & Cores

```css
--black: #292929;
--primary: #e8ceff;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `Exposure, Georgia, sans-serif` | Size: `96px` | Weight: `400`
- **H2**: Font: `Exposure, Georgia, sans-serif` | Size: `88.32px` | Weight: `400`
- **PARAGRAPH**: Font: `Exposure, Georgia, sans-serif` | Size: `17.28px` | Weight: `400`
- **BUTTON**: Font: `Exposure, Georgia, sans-serif` | Size: `19.2px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `header-1`) - Altura aprox: `82px`
   *Resumo:* "21OAKS Menu Schedule a Tour Apply Now..."
2. **<main>** (id: `main-2`) - Altura aprox: `5797px`
   *Resumo:* "Live better, closer to USC Freshly renovated and upgraded. Minutes from Williams..."
3. **<section>** (id: `section-3`) - Altura aprox: `1080px`
   *Resumo:* "Live better, closer to USC Freshly renovated and upgraded. Minutes from Williams..."
4. **<section>** (id: `section-4`) - Altura aprox: `4717px`
   *Resumo:* "Everything student living should be..."
5. **<section>** (id: `section-5`) - Altura aprox: `2903px`
   *Resumo:* "Made for everyday living Private space Your space to reset and focus Shared spac..."
6. **<section>** (id: `section-6`) - Altura aprox: `5724px`
   *Resumo:* "Where student life feels balanced Available 4 Bed 2 Baths 1,108 ft2 D1 695.00 A ..."
7. **<section>** (id: `section-7`) - Altura aprox: `1306px`
   *Resumo:* "Closer than you think..."
8. **<section>** (id: `section-8`) - Altura aprox: `745px`
   *Resumo:* "Everything you ‍need, within reach From campus to everyday essentials — everythi..."
9. **<section>** (id: `section-9`) - Altura aprox: `1370px`
   *Resumo:* "Just outside your door Discover Amenities Grilling Courtyard Host easy evenings ..."
10. **<section>** (id: `section-10`) - Altura aprox: `1222px`
   *Resumo:* "Simple Move-In How it Works Sounds like a fit? Apply now or book a tour. Schedul..."
11. **<section>** (id: `section-11`) - Altura aprox: `1286px`
   *Resumo:* "Real student experiences Emily Carter Ryan Mitchell Daniel Brooks “I can't say e..."
12. **<section>** (id: `section-12`) - Altura aprox: `1045px`
   *Resumo:* "Frequently asked questions Everything you might want to know before moving in. D..."
13. **<section>** (id: `section-13`) - Altura aprox: `2648px`
   *Resumo:* "Find your place. Make it yours. Schedule a Tour 21Oaks Your space. Still on. Dis..."
14. **<section>** (id: `section-14`) - Altura aprox: `1080px`
   *Resumo:* "Find your place. Make it yours. Schedule a Tour..."
15. **<footer>** (id: `footer-15`) - Altura aprox: `1568px`
   *Resumo:* "21Oaks Your space. Still on. Discover Apartments Amenities Location Gallery How ..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: DETECTADO ✅
- **Lenis Smooth Scroll**: DETECTADO ✅
- **Canvas / WebGL / Shaders**: Nenhum
- **Micro-interações (Magnetic/Spotlight/Tilt)**: Standard

---

## 🤖 Guia de Orientação para Agentes de IA

Para recriar um site novo ou componente baseado nesta referência:
1. Consulte a tabela de identificação (seção 0) para entender as limitações de fidelidade.
2. Aplique a paleta de cores e tipografia descritas nas seções 1 e 2.
3. Monte a estrutura semântica conforme a lista de seções na seção 3.
4. Importe os snippets da pasta `ui-ux/snippets/` para adicionar as animações de ponta e interações.
