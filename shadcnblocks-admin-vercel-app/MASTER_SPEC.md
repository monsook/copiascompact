# MASTER DESIGN & DEV SPEC: SHADCNBLOCKS-ADMIN-VERCEL-APP
Data de Extração: 30/09/2026
URL de Origem: https://shadcnblocks-admin.vercel.app/

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
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
--font-mono: "Geist Mono", "SFMono-Regular", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--card: #fff;
--card-foreground: #0a0a0a;
--popover: #fff;
--popover-foreground: #0a0a0a;
--primary: #171717;
--primary-foreground: #fafafa;
--secondary: #f5f5f5;
--secondary-foreground: #171717;
--muted: #f5f5f5;
--muted-foreground: #737373;
--accent: #f5f5f5;
--accent-foreground: #171717;
--destructive: #e40014;
--destructive-foreground: #f8fafc;
--border: #e5e5e5;
--input: #e5e5e5;
--ring: #a1a1a1;
--chart-1: #90c5ff;
--chart-2: #3080ff;
--chart-3: #155dfc;
--chart-4: #1447e6;
--chart-5: #193cb8;
--sidebar: #fafafa;
--sidebar-foreground: #0a0a0a;
--sidebar-primary: #171717;
--sidebar-primary-foreground: #fafafa;
--sidebar-accent: #f5f5f5;
--sidebar-accent-foreground: #171717;
--sidebar-border: #e5e5e5;
--sidebar-ring: #a1a1a1;
--background: #fff;
--foreground: #0a0a0a;
--priority-1: #e40014;
--priority-2: #f27000;
--priority-3: #dca600;
--priority-4: #737373;
--success: #00884b;
--warning: #dca600;
--ai-composer-surface: #fff;
--ai-composer-ink: #1f2124;
--ai-composer-ink-secondary: #62656b;
--ai-composer-ink-tertiary: #9a9da3;
--ai-composer-hover: #f4f5f6;
--ai-composer-line: #ecedef;
--ai-composer-line-strong: #e0e2e5;
--ai-composer-shadow: 0 0 0 1px var(--ai-composer-line), 0 1px 2px #0000000a, 0 4px 12px #00000009;
```

---

## 🔤 2. Tipografia & Hierarquia Textual

- **H1**: Font: `Inter, "Inter Fallback"` | Size: `14px` | Weight: `500`
- **H2**: Font: `Inter, "Inter Fallback"` | Size: `16px` | Weight: `500`
- **PARAGRAPH**: Font: `Inter, "Inter Fallback"` | Size: `12px` | Weight: `400`
- **BUTTON**: Font: `Inter, "Inter Fallback"` | Size: `14px` | Weight: `500`

---

## 🧩 3. Seções & Estrutura Mapeada
1. **<header>** (id: `header-1`) - Altura aprox: `56px`
   *Resumo:* "Ecommerce App ⌘ K 2 Toggle theme Default..."
2. **<main>** (id: `dashboard-main`) - Altura aprox: `1172px`
   *Resumo:* "Monthly revenue  $148,230.00 previous month  $189,540.75  +27.9% vs last month O..."

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
