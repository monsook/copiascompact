# MASTER DESIGN & DEV SPEC: MORE-NUTRITION-WEBFLOW-IO
Data de Extração: 02/10/2026
URL de Origem: https://more-nutrition.webflow.io/#reviews


---

## 0. Identificação do Site
- **Framework / Plataforma**: HTML/CSS Puro
- **Tipo de Renderização**: STATIC
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~95%

---

## 🎨 1. Design Tokens & Cores

```css
--size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)));
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `"Founders Grotesk Condensed", Arial, sans-serif` | Size: `149.333px` | Weight: `600`
- **H2**: Font: `"Founders Grotesk Condensed", Arial, sans-serif` | Size: `133.333px` | Weight: `500`
- **H3**: Font: `"Founders Grotesk Condensed", Arial, sans-serif` | Size: `53.3333px` | Weight: `500`
- **PARAGRAPH**: Font: `"Founders Grotesk Condensed", Arial, sans-serif` | Size: `40px` | Weight: `400`
- **BUTTON**: Font: `"Founders Grotesk Condensed", Arial, sans-serif` | Size: `21.3333px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<section>** (id: `section-1`) - Altura aprox: `1877px`
   *Resumo:* "Buy now 20 G of Protein 95 % less Sugar 85 MG of Caffeine MATCHA MEETS PROTEIN  ..."
2. **<section>** (id: `section-2`) - Altura aprox: `1524px`
   *Resumo:* "Chunky Flavour New Taste, Low Sugar  Simply stir in 3 g of Chunky Flavour with y..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: DETECTADO ✅
- **Lenis Smooth Scroll**: DETECTADO ✅
- **Canvas / WebGL / Shaders**: 2 Canvas encontrado(s) ✅
- **Micro-interações (Magnetic/Spotlight/Tilt)**: Standard

---

## 🤖 Guia de Orientação para Agentes de IA

Para recriar um site novo ou componente baseado nesta referência:
1. Consulte a tabela de identificação (seção 0) para entender as limitações de fidelidade.
2. Aplique a paleta de cores e tipografia descritas nas seções 1 e 2.
3. Monte a estrutura semântica conforme a lista de seções na seção 3.
4. Importe os snippets da pasta `ui-ux/snippets/` para adicionar as animações de ponta e interações.
