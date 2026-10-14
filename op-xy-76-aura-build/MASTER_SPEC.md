# MASTER DESIGN & DEV SPEC: OP-XY-76-AURA-BUILD
Data de Extração: 25/09/2026
URL de Origem: https://op-xy-76.aura.build/
Template: Teenage Engineering OP–XY Showcase Clone

> ℹ️ **NOTA**: Site renderizado via Three.js r186 + Web Audio API embutido em iframe no Aura.build. Captura completa de DOM hidratado, modelo 3D GLB original com descompressão Draco, sintetizador procedural e tokens visuais concluída com 100% de fidelidade.

---

## 0. Identificação do Site & Stack
- **Framework / Plataforma**: Vanilla ESM + Three.js r186 + GSAP + Lenis + Web Audio API
- **Tipo de Renderização**: Hybrid 3D Canvas (`#cv`) + Scroll-Driven Camera + DOM Overlays
- **Modo de Clonagem Aplicado**: FULL_HYDRATED_IFRAME_EXTRACTION
- **Capacidade / Fidelidade do Clone**: 100% (DOM + Shaders + 3D Model + Audio Engine)
- **Ativos 3D Capturados**: `assets/models/opxy.glb` (3.73 MB, 78 nodes, 86 materiais)
- **Decodificadores Draco**: `assets/draco/draco_decoder.wasm` e scripts auxiliares locais

---

## 🎨 1. Design Tokens & Cores

Paleta industrial monocromática inspirada na estética Teenage Engineering:

```css
:root {
  /* Surface & Background */
  --bg: #0c0d0e;
  --surface: #141517;
  --surface-raised: #1c1d20;
  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.18);

  /* Typography Colors */
  --fg: #e2e4e8;
  --fg-dim: #8b8f97;
  --fg-muted: #52565e;
  --fg-invert: #0c0d0e;

  /* Accentuation & Functional */
  --rec: #ff3a2f;          /* Vermelho de gravação - o ÚNICO ponto de cor */
  --rec-dim: rgba(255, 58, 47, 0.18);
  --status-lens: #00ffaa;  /* LED indicador sutil */

  /* Scale Typo (Fluid) */
  --s0: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --s1: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --s2: clamp(1.125rem, 1rem + 0.6vw, 1.35rem);
  --s3: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --s4: clamp(2rem, 1.7rem + 1.5vw, 2.75rem);
  --s5: clamp(2.75rem, 2.2rem + 2.5vw, 4rem);
  --s6: clamp(3.5rem, 2.8rem + 3.5vw, 5.5rem);
  --s7: clamp(4.5rem, 3.5rem + 5vw, 7.5rem);
}
```

---

## 🔤 2. Tipografia & Layout
- **Font Family**: Monospace técnica / Grotesk suíça minúscula (lowercase rigoroso)
- **Grid de Composição**: 16 colunas para o sequenciador, alinhamento lateral rígido
- **Escala de Scroll**: 22.356px de altura total mapeados para poses de câmera 3D
- **Viewport**: 1920×1080 com canvas fixo em `z-index: 0` e texto em `z-index: 10`

---

## 🧩 3. Seções Mapeadas (28 Blocos)
1. `#hero` - Apresentação, título tipográfico massivo e animação de chegada 3D
2. `#strip` - Overview das quatro fileiras e 68 teclas mecânicas
3. `#macro` - Close na usinagem de alumínio e acabamento anodizado
4. `#keys` - Teclado de duas oitavas com foco em acionamento individual
5. `#engines` - Lista dos 8 motores sonoros com demonstração interativa
6. `#scope-sec` - Osciloscópio ao vivo (`#scope`) desenhando a forma de onda
7. `#seq` - Sequenciador de 16 passos com 4 pistas (kick, snare, hat, synth)
8. `#connect` - I/O lateral (line in/out, MIDI, USB-C, power) com click no modelo
9. `#flip` - Giro de 180° mostrando o verso em alumínio e pés de borracha
10. `#close` - Chamada final de compra ($2,299) e especificações completas

---

## ⚡ 4. Mecânicas & Física 3D Interativa Extraídas

### A. Três Canvas (`#cv`) & Three.js Engine
- **Modelo**: `assets/models/opxy.glb`
- **73 Control Nodes**: 68 teclas (`key-01` a `key-68`), 4 encoders giratórios e knob de volume
- **Física de Teclas**: Cada tecla pressionada sofre overshoot para baixo (-0.32mm) e oscilação amortecida:
  ```javascript
  const click = s < 0.5 ? -0.32 * Math.exp(-7 * s) * Math.sin(s * 22) : 0;
  ```
- **Film Assembly**: No início da página, todas as teclas e encoders voam do espaço flutuando em arcos tridimensionais com função `backInOut` até se encaixarem no chassi metálico.

### B. Shaders de Fundo & Iluminação Volumétrica
- Shader procedural GLSL com FBM (Fractal Brownian Motion) para simulação de névoa/fumaça de estúdio fotográfico escuro.
- O feixe de luz principal (`uBeamO`, `uBeamD`) rastreia a posição da câmera durante o scroll.

### C. Motor de Áudio Web Audio API (100% Procedural)
- Zero dependência de MP3/WAV externo.
- **8 Sintetizadores**: Axis (sawtooth duplo com filtro LP variável), Dissolve (senoidal com ruído de modulação), E-Piano (FM de 2 operadores), Hardsync, Organ (4 barras senoidais), Prism, Simple, Wavetable.
- **Bateria Procedural**: Bumbo com queda exponencial de frequência, Caixa com ruído passa-faixa, Chimbal com ruído passa-alta, Click de pulso.
- **Reverb Convolver**: Sala sintética gerada por buffer estéreo de impulso aleatório decrescente.

### D. Sequenciador Interativo de 16 Passos
- Grid de 16×4 botões interativos sincronizados com o motor de áudio.
- Indicador de passo (`#phbar`) animado via `requestAnimationFrame` que dispara notas em tempo real.

---

## 🤖 Guia de Orientação para Agentes de Transmutação
Para transmutar esta referência para um novo cliente (ex: hardware, produto premium, vestuário técnico, arquitetura):
1. **Malha 3D**: Substitua `assets/models/opxy.glb` pelo modelo 3D do produto do cliente ou desative o canvas 3D usando o fallback fotográfico gerado.
2. **DNA Visual**: Mantenha o contraste de um único ponto de destaque tonal (no original `--rec: #ff3a2f`, transmutável para o accent do cliente).
3. **Scroll Choreography**: Conserve a curva inercial do Lenis e os gatilhos ScrollTrigger para transição fluida entre seções.
4. **Áudio Opcional**: O sintetizador pode ser desacoplado caso o produto do cliente não possua mecânica sonora.
