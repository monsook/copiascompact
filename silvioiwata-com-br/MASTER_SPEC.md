# MASTER DESIGN & DEV SPEC: SILVIOIWATA-COM-BR
Data de Extração: 21/09/2026
URL de Origem: https://silvioiwata.com.br/


---

## 0. Identificação do Site
- **Framework / Plataforma**: HTML/CSS Puro
- **Tipo de Renderização**: STATIC
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~95%

---

## 🎨 1. Design Tokens & Cores

```css
--cor-font-topo: #ffffff;
--cor-button: #056d33;
--cor-font-pesquisa: #ffffff;
--cor-footer-font: #ffffff;
--cor-primaria: #055227;
--cor-secundaria: #8dbc2a;
--cor-terciaria: #ffffff;
--cor-topo: rgba(0, 80, 35, 0.8);
--cor-topo2: rgba(0, 80, 35, 1);
--cor-primaria-transparente: rgba(5, 82, 39, 0.8);
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `FontOpen, sans-serif` | Size: `50px` | Weight: `400`
- **H2**: Font: `FontOpen, sans-serif` | Size: `22px` | Weight: `300`
- **H3**: Font: `FontOpen, sans-serif` | Size: `24px` | Weight: `500`
- **PARAGRAPH**: Font: `FontOpen, sans-serif` | Size: `14px` | Weight: `300`
- **BUTTON**: Font: `FontOpen, sans-serif` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<nav>** (id: `nav-1`) - Altura aprox: `55px`
   *Resumo:* "Locação Vendas Lançamentos Institucional ATENDIMENTO..."
2. **<section>** (id: `section-2`) - Altura aprox: `520px`
   *Resumo:* "Previous  Reserva do PortoMaringá - PR  Residencial MartiniMaringá - PR  Forte d..."
3. **<section>** (id: `section-162`) - Altura aprox: `336px`
   *Resumo:* "Descubra agora qual é o melhor para você. Veja mais [+] Alugar ou financiar o im..."

---

## ⚡ 4. Particularidades UI/UX & Animações Extraídas

- **GSAP / ScrollTrigger**: Não detectado
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
