# MASTER DESIGN & DEV SPEC: INTEGRIIMOVEIS-COM-BR
Data de Extração: 21/09/2026
URL de Origem: https://integriimoveis.com.br/


---

## 0. Identificação do Site
- **Framework / Plataforma**: HTML/CSS Puro
- **Tipo de Renderização**: STATIC
- **Modo de Clonagem Aplicado**: FULL_CLONE
- **Capacidade / Fidelidade do Clone**: ~95%

---

## 🎨 1. Design Tokens & Cores

```css
--cor-topo: #00233a;
--cor-topo-font: #ffffff;
--cor-pesquisa: #f2f2f2;
--cor-pesquisa-font: #121212;
--cor-pesquisa-border: #00233a;
--cor-button: #00233a;
--cor-primaria: #00233a;
--cor-secundaria: #00233a;
--cor-terciaria: #121212;
--cor-primaria-rgb-hover: rgb(0, 32, 52);
--cor-primaria-rgb-active: rgb(38, 68, 88);
--cor-secundaria-rgb-hover: rgb(0, 32, 52);
--cor-secundaria-rgb-active: rgb(38, 68, 88);
--cor-footer: #f2f2f2;
--cor-footer-font: #121212;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `Poppins, Helvetica, Arial, sans-serif` | Size: `32px` | Weight: `600`
- **H2**: Font: `Poppins, Helvetica, Arial, sans-serif` | Size: `24px` | Weight: `500`
- **H3**: Font: `Poppins, Helvetica, Arial, sans-serif` | Size: `16px` | Weight: `700`
- **PARAGRAPH**: Font: `Poppins, Helvetica, Arial, sans-serif` | Size: `14.4px` | Weight: `700`
- **BUTTON**: Font: `Poppins, Helvetica, Arial, sans-serif` | Size: `16px` | Weight: `400`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `header-1`) - Altura aprox: `108px`
   *Resumo:* "0..."
2. **<nav>** (id: `nav-2`) - Altura aprox: `108px`
   *Resumo:* "0..."
3. **<main>** (id: `main-3`) - Altura aprox: `2813px`
   *Resumo:* "Encontre o seu imóvel ideal! Comprar Rural Todos Selecionados Ambientes Dormitor..."
4. **<footer>** (id: `footer-4`) - Altura aprox: `555px`
   *Resumo:* "Localização  Avenida Ivaí, 299 Centro - CEP 87140-000 Paiçandu - PR  Como chegar..."

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
