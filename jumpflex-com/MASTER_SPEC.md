# MASTER DESIGN & DEV SPEC: JUMPFLEX-COM
Data de Extração: 31/08/2026
URL de Origem: https://www.jumpflex.com/


---

## 0. Identificação do Site
- **Framework / Plataforma**: HTML/CSS Puro
- **Tipo de Renderização**: STATIC
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~95%

---

## 🎨 1. Design Tokens & Cores

```css
/* Variáveis padrão da página */
--background: #000000;
--foreground: #ffffff;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `"Red Hat Display Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` | Size: `36px` | Weight: `200`
- **H2**: Font: `"Red Hat Display Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` | Size: `30px` | Weight: `200`
- **H3**: Font: `"Red Hat Text Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` | Size: `16px` | Weight: `500`
- **PARAGRAPH**: Font: `"Red Hat Display Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` | Size: `20px` | Weight: `700`
- **BUTTON**: Font: `"Red Hat Text Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `header-1`) - Altura aprox: `80px`
   *Resumo:* "Jumpflex® TRAMPOLINES ACCESSORIES SUPPORT ABOUT CONTACT BLOG Phone +1 (866) 3057..."
2. **<main>** (id: `mainContent`) - Altura aprox: `12990px`
   *Resumo:* "A Jumpflex® trampoline is for life VIEW TRAMPOLINES FLEX™ Trampolines  A family ..."
3. **<section>** (id: `section-4`) - Altura aprox: `972px`
   *Resumo:* "A Jumpflex® trampoline is for life VIEW TRAMPOLINES..."
4. **<section>** (id: `section-5`) - Altura aprox: `764px`
   *Resumo:* "Our Trampolines FLEX™ 8ft Trampoline 4.9 out of 5 star rating 4.9 star rating 55..."
5. **<section>** (id: `section-6`) - Altura aprox: `1080px`
6. **<section>** (id: `section-7`) - Altura aprox: `972px`
7. **<section>** (id: `section-8`) - Altura aprox: `1532px`
8. **<section>** (id: `section-9`) - Altura aprox: `470px`
9. **<section>** (id: `section-10`) - Altura aprox: `972px`
10. **<section>** (id: `section-11`) - Altura aprox: `972px`
11. **<section>** (id: `section-12`) - Altura aprox: `457px`
12. **<section>** (id: `section-13`) - Altura aprox: `1281px`
13. **<section>** (id: `section-14`) - Altura aprox: `798px`
14. **<section>** (id: `section-15`) - Altura aprox: `506px`
15. **<section>** (id: `section-16`) - Altura aprox: `640px`
16. **<section>** (id: `section-17`) - Altura aprox: `556px`
   *Resumo:* "Real Reviews From Real Customers Powered by  4.8 out of 5 star rating 4.8 star r..."
17. **<footer>** (id: `footer-18`) - Altura aprox: `854px`
   *Resumo:* "Jumpflex®  USA's favorite trampoline for kids of all ages, our trampolines with ..."
18. **<section>** (id: `section-19`) - Altura aprox: `412px`
   *Resumo:* "TRAMPOLINES  FLEX™ 8 ft FLEX™ 10 ft FLEX™ 12 ft HERO™ 10 ft HERO™ 12 ft HERO™ 14..."
19. **<nav>** (id: `nav-20`) - Altura aprox: `368px`
   *Resumo:* "FLEX™ 8 ft FLEX™ 10 ft FLEX™ 12 ft HERO™ 10 ft HERO™ 12 ft HERO™ 14 ft HERO™ 15 ..."
20. **<section>** (id: `section-21`) - Altura aprox: `252px`
   *Resumo:* "ACCESSORIES  ANCHORKIT PRO™ AQUAJET™ FLEXBOARD™ JUMPSLIDE™ PROJAM™ SMARTSHADE™..."
21. **<nav>** (id: `nav-22`) - Altura aprox: `208px`
   *Resumo:* "ANCHORKIT PRO™ AQUAJET™ FLEXBOARD™ JUMPSLIDE™ PROJAM™ SMARTSHADE™..."
22. **<section>** (id: `section-23`) - Altura aprox: `284px`
   *Resumo:* "SUPPORT  FAQs & Help Center Assembly Payment Delivery Warranty Parts Customer Su..."
23. **<nav>** (id: `nav-24`) - Altura aprox: `240px`
   *Resumo:* "FAQs & Help Center Assembly Payment Delivery Warranty Parts Customer Support..."
24. **<section>** (id: `section-25`) - Altura aprox: `220px`
   *Resumo:* "ABOUT  About Us Our Team Contact Us Blogs Jumpflex Athletes..."
25. **<nav>** (id: `nav-26`) - Altura aprox: `176px`
   *Resumo:* "About Us Our Team Contact Us Blogs Jumpflex Athletes..."

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
