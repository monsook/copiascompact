# MASTER DESIGN & DEV SPEC: SKIPER-UI-COM
Data de Extração: 28/08/2026
URL de Origem: https://skiper-ui.com/v1/preview/skiper72

> ℹ️ **NOTA**: Este site foi identificado como **Next.js (SSR/SSG)**. O HTML clonado reflete a estrutura renderizada no servidor. Algumas interações dinâmicas requerem os snippets da pasta `ui-ux/`.

---

## 0. Identificação do Site
- **Framework / Plataforma**: Next.js (SSR/SSG)
- **Tipo de Renderização**: SPA_SSR
- **Modo de Clonagem Aplicado**: STRUCTURED_CLONE
- **Capacidade / Fidelidade do Clone**: ~65%
- **Aviso**: AVISO: Site Next.js. Clone estrutural disponível, mas componentes React não são reproduzíveis.

---

## 🎨 1. Design Tokens & Cores

```css
--background: #fff;
--foreground: #121212;
--border: #e0e0e0;
--muted: #f5f4f3;
--muted2: #fcfcfc;
--muted3: #f3f3f3;
--muted4: #fff;
--common: #171717;
--muted-foreground: #4f4f4e;
--code1: #00000080;
--code2: #6c6c6c80;
--code3: #00bfff;
--code4: #00000080;
--code5: #4dc398;
--code6: #00bfff;
--accent: #f5f4f3;
--shadow-glass: 0 4px 8px -2px #0000000f,0 2px 4px -1px #0000;
--swiper-theme-color: #007aff;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `Geist, "Geist Fallback"` | Size: `74.88px` | Weight: `500`
- **H2**: Font: `Inter, sans-serif` | Size: `18px` | Weight: `600`
- **PARAGRAPH**: Font: `Inter, sans-serif` | Size: `14px` | Weight: `400`
- **BUTTON**: Font: `Inter, sans-serif` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<section>** (id: `section-1`) - Altura aprox: `5400px`
   *Resumo:* "Hereourjourneybegins.From(2020→2024)webuiltsomethingincredible.Startingwithlate-..."

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
