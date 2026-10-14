# MASTER DESIGN & DEV SPEC: ACILAV-WEBFLOW-IO
Data de Extração: 31/08/2026
URL de Origem: https://acilav.webflow.io/


---

## 0. Identificação do Site
- **Framework / Plataforma**: Webflow
- **Tipo de Renderização**: WEBFLOW
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~90%

---

## 🎨 1. Design Tokens & Cores

```css
--colors--white: white;
--_typography---font-family--body-font: Inter, sans-serif;
--colors--deep-gray: #686868;
--_typography---paragraph-font-sizes--paragraph-medium: 1.25rem;
--_typography---font-weight--font-weight-normal: 400;
--_typography---font-family--heading-font: Anton, sans-serif;
--colors--simple-black: #090909;
--_typography---font-weight--font-weight-bold: 700;
--colors--calming-white: #fffcf2;
--color-shades--transparent: #fff0;
--colors--primary: #ffc552;
--color-shades--pastel-grey-30: #cecac24d;
--color-shades--black-10: #0000001a;
--_typography---paragraph-font-sizes--paragraph-base: 1rem;
--_ui---primary-button--font-size: 1.25rem;
--_typography---font-weight--font-weight-medium: 500;
--colors--plaster-of-paris: #e5e2d9;
--_typography---paragraph-font-sizes--paragraph-large: 1.5rem;
--color-shades--simple-black-50: #09090980;
--_typography---font-sizes--font-size-xs: 1.375rem;
--colors--cottage-cheese: #fffcf5;
--colors--mirage: #0e1c29;
--colors--vintage-gray: #999690;
--colors--early-dawn: #fff9e5;
--error--color: #e21616;
--_typography---font-sizes--font-size-sm: 1.75rem;
--_typography---font-weight--font-weight-semi-bold: 600;
--_typography---font-sizes--font-size-md: 2.25rem;
--colors--floral-white: floralwhite;
--_ui---secondary-btn--font-size: 1.25rem;
--colors--tartan-clear-blue: #b2cbdc;
--_typography---font-sizes--font-size-3xl: 7.5rem;
--color-shades--white-30: #ffffff4d;
--colors--new-gray: #a3a3a3;
--_typography---font-sizes--font-size-2xs: 1.125rem;
--_typography---font-sizes--font-size-lg: 3.25rem;
--_typography---font-sizes--font-size-xl: 3.75rem;
--_typography---font-sizes--font-size-2xl: 6.25rem;
--colors--haze: #c3c5ca;
--colors--hint-of-red: #f9f9f9;
--colors--sour-cream: #fffcf7;
--colors--platinum-dust: #efebe5;
--colors--cosmic-latte: #fff7e8;
--colors--pastel-grey: #cecac2;
--colors--gunsmoke: #858585;
--colors--dravit-grey: #5c5c5c;
--colors--heather: #6f6f80;
--color-shades--primary-5: #ffc5520d;
--color-shades--white-10: #ffffff1a;
--color-shades--white-90: #ffffffe6;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `Anton, sans-serif` | Size: `320px` | Weight: `400`
- **H2**: Font: `Inter, sans-serif` | Size: `44px` | Weight: `600`
- **H3**: Font: `Inter, sans-serif` | Size: `24px` | Weight: `600`
- **PARAGRAPH**: Font: `Inter, sans-serif` | Size: `20px` | Weight: `400`
- **BUTTON**: Font: `Inter, sans-serif` | Size: `20px` | Weight: `500`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<nav>** (id: `nav-1`) - Altura aprox: `108px`
   *Resumo:* "Home Home About About Services Services Insights Insights Review Review CONTACT ..."
2. **<main>** (id: `main-2`) - Altura aprox: `14714px`
   *Resumo:* "SEO THAT CONVERTS Boost traffic, leads, and revenue with SEO. About us We’re a r..."
3. **<header>** (id: `home`) - Altura aprox: `894px`
   *Resumo:* "SEO THAT CONVERTS Boost traffic, leads, and revenue with SEO...."
4. **<section>** (id: `section-4`) - Altura aprox: `174px`
5. **<section>** (id: `about`) - Altura aprox: `570px`
   *Resumo:* "About us We’re a results-driven SEO agency helping businesses grow traffic, boos..."
6. **<section>** (id: `section-6`) - Altura aprox: `960px`
   *Resumo:* "OUR RESULT OUR RESULT  Results-driven SEO agency increasing traffic, rankings, a..."
7. **<section>** (id: `section-7`) - Altura aprox: `1072px`
   *Resumo:* "CHOOSE US CHOOSE US  Increasing traffic, rankings, and qualified leads.  Proven ..."
8. **<section>** (id: `services`) - Altura aprox: `1894px`
   *Resumo:* "OUR SERVICES OUR SERVICES  Boost your site's reach and draw in the right audienc..."
9. **<section>** (id: `section-9`) - Altura aprox: `887px`
   *Resumo:* "PRICING PLAN PRICING PLAN  Increasing visitors, enhancing search positions, and ..."
10. **<section>** (id: `insights`) - Altura aprox: `4660px`
   *Resumo:* "SEO INSIGHTS SEO INSIGHTS April 10, 2026 Click SEO Performance Tracsking March 2..."
11. **<section>** (id: `review`) - Altura aprox: `864px`
   *Resumo:* "CLIENT REVIEW CLIENT REVIEW David Carter Ecom Owner Sarah Mitchell SaaS Founder ..."
12. **<section>** (id: `section-12`) - Altura aprox: `1046px`
   *Resumo:* "SEO QUERIE SEO QUERIE  Strategic SEO built to increase rankings and conversions...."
13. **<section>** (id: `section-13`) - Altura aprox: `540px`
   *Resumo:* "SUBSCRIBE FOR EXPERT SEO EXPERT SEO TIPS SUBSCRIBE FOR EXPERT SEO EXPERT SEO TIP..."
14. **<section>** (id: `contact`) - Altura aprox: `1154px`
   *Resumo:* "CONTACT US CONTACT US SUBMIT NOW SUBMIT NOW..."
15. **<footer>** (id: `footer-15`) - Altura aprox: `1641px`
   *Resumo:* "ACILAV Style Guide Licence Changelog 404 Password Explore Home About Services In..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: DETECTADO ✅
- **Lenis Smooth Scroll**: Não detectado
- **Canvas / WebGL / Shaders**: Nenhum
- **Micro-interações (Magnetic/Spotlight/Tilt)**: DETECTADO ✅

---

## 🤖 Guia de Orientação para Agentes de IA

Para recriar um site novo ou componente baseado nesta referência:
1. Consulte a tabela de identificação (seção 0) para entender as limitações de fidelidade.
2. Aplique a paleta de cores e tipografia descritas nas seções 1 e 2.
3. Monte a estrutura semântica conforme a lista de seções na seção 3.
4. Importe os snippets da pasta `ui-ux/snippets/` para adicionar as animações de ponta e interações.
