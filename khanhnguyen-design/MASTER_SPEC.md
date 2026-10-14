# MASTER DESIGN & DEV SPEC: KHANHNGUYEN-DESIGN
Data de Extração: 25/09/2026
URL de Origem: https://khanhnguyen.design/


---

## 0. Identificação do Site
- **Framework / Plataforma**: Astro (SSG)
- **Tipo de Renderização**: STATIC_GENERATED
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~80%

---

## 🎨 1. Design Tokens & Cores

```css
/* Variáveis padrão da página */
--background: #000000;
--foreground: #ffffff;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `"PP Editorial Old", serif` | Size: `241.333px` | Weight: `400`
- **H2**: Font: `"PP Editorial Old", serif` | Size: `241.333px` | Weight: `400`
- **PARAGRAPH**: Font: `"PP Neue Montreal", ui-sans-serif, system-ui, sans-serif` | Size: `14.6667px` | Weight: `400`
- **BUTTON**: Font: `"PP Neue Montreal", ui-sans-serif, system-ui, sans-serif` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `header-1`) - Altura aprox: `1080px`
   *Resumo:* "FOLIO — EDITION  © 2026..."
2. **<main>** (id: `main-3`) - Altura aprox: `14912px`
   *Resumo:* "KHANH NGUYEN  Independent designer based in Vietnam — focused on thoughtful, con..."
3. **<section>** (id: `section-4`) - Altura aprox: `1080px`
   *Resumo:* "KHANH NGUYEN  Independent designer based in Vietnam — focused on thoughtful, con..."
4. **<section>** (id: `section-5`) - Altura aprox: `1080px`
   *Resumo:* "CHAPTER I  QUICK INTRO  Hi, I’m Khanh — a designer with 10+ years of experience ..."
5. **<section>** (id: `section-6`) - Altura aprox: `1080px`
   *Resumo:* "THE  WORK..."
6. **<section>** (id: `section-7`) - Altura aprox: `1080px`
   *Resumo:* "CHAPTER II  RELATED WORK  EVO Money Plant Tag Swiss Haus Betahaus View All Work ..."
7. **<section>** (id: `section-8`) - Altura aprox: `1080px`
   *Resumo:* "CHAPTER III  WHAT I DO?  Designing digital experiences with clarity, structure, ..."
8. **<section>** (id: `section-9`) - Altura aprox: `1080px`
   *Resumo:* "CHAPTER IV  SELECTED EXPERIENCES  Trusting Social Vietnamwork Autonomous VEN Age..."
9. **<section>** (id: `contact`) - Altura aprox: `1080px`
   *Resumo:* "WHERE STORIES FIND THEIR FORM  NEXT CHAPTER  CONTACT TO  kennguyen02587@gmail.co..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: Não detectado
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
