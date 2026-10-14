# MASTER DESIGN & DEV SPEC: NORTHTRAIL-ADVENTURE-59-AURA-BUILD
Data de Extração: 25/08/2026
URL de Origem: https://northtrail-adventure-59.aura.build/

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

- **H1**: Font: `Archivo, sans-serif` | Size: `96px` | Weight: `700`
- **H2**: Font: `Archivo, sans-serif` | Size: `60px` | Weight: `700`
- **H3**: Font: `Archivo, sans-serif` | Size: `14px` | Weight: `700`
- **PARAGRAPH**: Font: `Archivo, sans-serif` | Size: `12px` | Weight: `600`
- **BUTTON**: Font: `Archivo, sans-serif` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `nav`) - Altura aprox: `78px`
   *Resumo:* "NORTHTRAIL Apparel Camping Outdoor Gear Accessories Expeditions 2 Shop Now..."
2. **<section>** (id: `section-3`) - Altura aprox: `1338px`
   *Resumo:* "EST. 2011 · FIELD TESTED  ADVENTURE BEGINS WITH RIGHT GEAR.  A curated range of ..."
3. **<section>** (id: `section-4`) - Altura aprox: `106px`
   *Resumo:* "WATERPROOF SHELLS ULTRALIGHT TENTS DOWN INSULATION TRAIL FOOTWEAR HUNTING OPTICS..."
4. **<section>** (id: `gear`) - Altura aprox: `736px`
   *Resumo:* "BEST APPAREL FOR YOU trending  Adventure-ready apparel to fuel your hiking and c..."
5. **<section>** (id: `story`) - Altura aprox: `3240px`
   *Resumo:* "01 / 03  01 — ENGINEERED FABRIC  DESIGNED FOR TOUGH CLIMATES  Every shell is lam..."
6. **<section>** (id: `section-7`) - Altura aprox: `1106px`
   *Resumo:* "HUNTING & CAMPING GEAR.  Buy hunting and camping gear with discounts — earn rewa..."
7. **<section>** (id: `experience`) - Altura aprox: `1297px`
   *Resumo:* "the mountain's calling  EXPERIENCE  Join 92,000 explorers who trust our gear on ..."
8. **<footer>** (id: `footer-9`) - Altura aprox: `429px`
   *Resumo:* "NORTHTRAIL  Gear that's engineered to perform — hunting, camping & outdoor equip..."

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
