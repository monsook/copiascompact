# MASTER DESIGN & DEV SPEC: STOREYARCHITECTURE-CO-UK
Data de Extração: 25/08/2026
URL de Origem: https://www.storeyarchitecture.co.uk/

> ℹ️ **NOTA**: Este site foi identificado como **Nuxt.js (SSR/SSG)**. O HTML clonado reflete a estrutura renderizada no servidor. Algumas interações dinâmicas requerem os snippets da pasta `ui-ux/`.

---

## 0. Identificação do Site
- **Framework / Plataforma**: Nuxt.js (SSR/SSG)
- **Tipo de Renderização**: SPA_SSR
- **Modo de Clonagem Aplicado**: STRUCTURED_CLONE
- **Capacidade / Fidelidade do Clone**: ~65%
- **Aviso**: AVISO: Site Nuxt.js. Clone estrutural disponível, mas componentes Vue não são reproduzíveis.

---

## 🎨 1. Design Tokens & Cores

```css
--color-primary: 255 255 255;
--color-secondary: 0 0 0;
--color-form: 254 254 254;
--color-formSecondary: 61 61 61;
--font-sans: "New Grotesk",system-ui,sans-serif;
--font-mono: "New Grotesk Mono",ui-monospace,monospace;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `"New Grotesk", system-ui, sans-serif` | Size: `153.6px` | Weight: `500`
- **PARAGRAPH**: Font: `"New Grotesk", system-ui, sans-serif` | Size: `16px` | Weight: `400`
- **BUTTON**: Font: `"New Grotesk", system-ui, sans-serif` | Size: `21.12px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<div>** (id: `transition-overlay`) - Altura aprox: `1080px`
2. **<div>** (id: `div-2`) - Altura aprox: `18614px`
   *Resumo:* "Storey Projects Studio Journal Contact Storey Projects Studio Journal Contact St..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: Não detectado
- **Lenis Smooth Scroll**: DETECTADO ✅
- **Canvas / WebGL / Shaders**: Nenhum
- **Micro-interações (Magnetic/Spotlight/Tilt)**: DETECTADO ✅

---

## 🤖 Guia de Orientação para Agentes de IA

Para recriar um site novo ou componente baseado nesta referência:
1. Consulte a tabela de identificação (seção 0) para entender as limitações de fidelidade.
2. Aplique a paleta de cores e tipografia descritas nas seções 1 e 2.
3. Monte a estrutura semântica conforme a lista de seções na seção 3.
4. Importe os snippets da pasta `ui-ux/snippets/` para adicionar as animações de ponta e interações.
