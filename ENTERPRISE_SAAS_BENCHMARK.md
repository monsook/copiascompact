# 🏛️ Enterprise SaaS Master Benchmark & UI/UX Playbook
**Biblioteca de Referências de Alto Padrão para Modernização do Flashtech Hub**

> Documento gerado e catalogado a partir do ecossistema de cópias do **Studio DNA PRO** e **CopiasCompact**.  
> Destinado à evolução das 7 áreas operacionais centrais: **Chats**, **Uso de Tools (MCP)**, **Gerenciamento de Perfil**, **Gerenciamento de Membros & Governança**, **Dashboards & Observabilidade**, **Configurações** e **Billing Enterprise**.

---

## 📑 Sumário Executivo do Mapeamento

| Módulo do Hub | Referência de Cópia Primária | Componente de Código Reutilizável | Screenshot de Referência |
|---|---|---|---|
| **1. Chat & Conversação IA** | `shadcnblocks-admin` (AI Chat) & `planes` | `enterprise-ai-components/synthesized/ConversationalShell.tsx` + `reactbitspremium/chat-ai/PromptBar` | `ai-chat__composer-1.png`, `ai-chat__composer-5.png`, `ai-chat__response-review.png` |
| **2. Uso de Tools & MCP** | `shadcnblocks-admin` (Plugins & Skills) & `beautiful-ui` | `enterprise-ai-components/synthesized/ApprovalGate.tsx` + `ToolCallDisclosure.tsx` | `ai-chat__plugins.png`, `ai-chat__skills-manager.png`, `ai-chat__api-requests.png` |
| **3. Gerenciamento de Perfil** | `shadcnblocks-admin` (Profile) | `reactbitspremium/cards/ProfileCard` + `todo/todo__settings` | `ai-chat__profile.png`, `todo__settings.png` |
| **4. Membros & Governança** | `shadcnblocks-admin` (Project Management Team) | `shadcnuikit-dashboards/src/components/dashboard/TeamMembersCard.tsx` | `project-management__team-list-1.png`, `project-management__team-list-3.png` |
| **5. Dashboards & Métricas** | `shadcnblocks-admin` (Payment & PM) + `shadcnuikit-dashboards` | `shadcnuikit-dashboards/src/pages/ai-analytics/page.tsx` + `MetricCard.tsx` | `payment-processor__dashboard-1.png`, `ai-chat__usage-insights.png`, `ai-chat__model-usage.png` |
| **6. Configurações Globais** | `shadcnblocks-admin` (Org & Project Settings) | `shadcnblocks-admin/extracted-components/ai-chat/ai-chat__organization-settings` | `ai-chat__organization-settings.png`, `ai-chat__project-settings.png`, `ai-chat__api-keys.png` |
| **7. Billing & Custos** | `shadcnblocks-admin` (Billing & Invoices) | `shadcnuikit-dashboards/src/components/dashboard/PaymentMethodCard.tsx` + `reactbitspremium/dashboards-billing/ElasticSlider` | `ai-chat__billing.png`, `ai-chat__credit-usage.png`, `payment-processor__invoice-list.png` |

---

## 1. Chat & Interfaces Conversacionais com IA

### 🔍 Diagnóstico da Interface Atual vs. Padrão Enterprise
- **Estado Atual**: Interfaces de agentes frequentemente carecem de indicação de modelo ativo, rastreamento visual de raciocínio (chain of thought), botões de anexação rápida e badges de contexto.
- **Padrão de Referência (`ai-chat__composer-1.png` a `composer-7.png` e `planes`)**:
  - **Prompt Dock Flutuante**: O input não é um simples `<textarea>`, mas um **Composer Dock inteligente** com cantos arredondados (`rounded-[22px]`), bordas sutis com `ring-0` e foco limpo.
  - **Seletor de Modelo Integrado**: Badge inline exibindo o modelo selecionado (ex: `GPT-4o`, `Claude 3.5 Sonnet`, `Gemini 1.5 Pro`) com menu suspenso rápido.
  - **Injeção de Contexto**: Botão `+ Add context` para vincular documentos, workspaces ou bases vetoriais diretamente à mensagem.
  - **Feedback de Raciocínio**: Componente `ThoughtLine` e `ReasoningSummary` que exibe de forma colapsável `"Pensou por 4.2s (Ver passos detalhados)"`.

### 💻 Código & Assets Disponíveis no Workspace
- `enterprise-ai-components/synthesized/ConversationalShell.tsx`
- `enterprise-ai-components/synthesized/PromptComposer.tsx`
- `enterprise-ai-components/synthesized/ReasoningSummary.tsx`
- `reactbitspremium/chat-ai/PromptBar/`

---

## 2. Uso de Tools, Servidores MCP & Governança de Execução

### 🔍 Diagnóstico da Interface Atual (`media_1792693849900_5b25c1c5.png`)
- **Tela Atual do Hub**:
  - O Hub já possui um catálogo de servidores MCP (`browsermcp`, `automatalabs-playwright-server`) e seletor de "Governança de execução": *Somente leitura*, *Leitura e escrita*, *Administrativo*, *Destrutivo (com cadeado)*.
  - **Oportunidade de Melhoria**: A lista atual em lista vertical pode ganhar cartões estruturados no padrão Enterprise Plugin Directory, com **chips de status de conexão em tempo real (Health Check)**, **contadores de tools disponíveis**, **latência média de chamada** e **modal de autorização com Approval Gate**.
- **Padrão de Referência (`ai-chat__plugins.png`, `ai-chat__skills-manager.png`, `beautiful-ui/approval-card`)**:
  - **Plugin Grid com Badges**: Cada MCP Server ganha um cartão com ícone, versão, autor, status de ping (ex: `24ms - Conectado`), switch de ativação imediata e tag de permissão máxima.
  - **Accordion de Schemas Interativos**: Teste rápido do schema JSON dentro do próprio Hub sem precisar acionar o chat.
  - **Human-In-The-Loop Approval Gate (`ApprovalGate.tsx`)**: Quando um agente solicita uma ferramenta com nível *Destrutivo* (ex: deletar branch, sobrescrever tabela, revogar usuário), a interface renderiza um cartão de aprovação com visualizador de diff, impacto estimado e botões de `Rejeitar` ou `Aprovar Ação`.
  - **Trilha de Auditoria de Requisições (`ai-chat__api-requests.png`)**: Tabela com código de resposta HTTP/gRPC, latência em ms, tokens de entrada/saída consumidos pela tool e payload colapsável.

---

## 3. Gerenciamento de Perfil (Profile Management)

### 🔍 Diagnóstico da Interface Atual (`media_1792693853968_5caf2143.png`)
- **Tela Atual do Hub**:
  - Submenu lateral com divisões coerentes (Perfil, Pessoas e acesso, Segurança, Canais, Workspaces, Preferências).
  - Formulário central com Avatar, Nome, Email, Organização, Função e resumo à direita.
  - Heatmap inferior "Ritmo de atividade" (28, 91, 182, 364 dias).
- **Padrão de Referência (`ai-chat__profile.png`, `todo__settings.png`)**:
  - **Avatar Uploader Enterprise**: Suporte a arraste direto, pré-visualização circular com máscara SVG e badge de status (Ativo/Ausente).
  - **Cartão Resumo Visual 360**: Substituir o card estático por um cartão com gradiente sutil, indicando papel na organização (`Owner`), método de login SSO (`Google Workspace via SAML 2.0`) e status de autenticação em 2 fatores (2FA Ativo).
  - **Heatmap de Atividade Aperfeiçoado**: Utilização de escala cromática no estilo GitHub/Linear (tons de esmeralda ou azul escuro) com tooltips interativos mostrando número exato de execuções de agentes em cada dia.

---

## 4. Gerenciamento de Membros & Governança (Members & RBAC)

### 🔍 Diagnóstico da Interface Atual (`media_1792693844565_24aadeaa.png`)
- **Tela Atual do Hub**:
  - Métricas no topo: Participantes (1), Execuções (1), Conclusão (100.0%), Latência média (6.752 ms).
  - Abas: Membros & Funções, Trilha de Auditoria, Uso & Custos, Limites da Organização.
  - Tabela com filtros de função e botão "+ Adicionar acesso".
- **Padrão de Referência (`project-management__team-list-1.png`, `team-list-3.png`, `TeamMembersCard.tsx`)**:
  - **Cards de Métricas com Sparklines**: Em vez de cartões de texto plano, incluir micrográficos SVG de tendência (ex: variação de latência e execuções nos últimos 7 dias).
  - **Tabela de Membros de Alta Densidade**:
    - Avatar com iniciais ou foto real.
    - Coluna de **Papel (Role)** com dropdown nativo para alteração rápida (Owner, Admin, Developer, Viewer, Auditor) com descrição dos privilégios no tooltip.
    - Coluna de **Autenticação & Segurança**: Indicador de 2FA habilitado ou pendente.
    - Coluna de **Última Sessão / Ação Recente**: Timestamp relativo (ex: *"há 12 min em Servidores MCP"*).
    - **Menu de Ações Rápidas (Três Pontos)**: Reenviar convite, Transferir titularidade, Suspender acesso temporariamente ou Revogar credenciais.
  - **Modal de Convite Inteligente**: Permite colar múltiplos emails separados por vírgula, definir data de expiração do convite e atribuir grupos de permissão por padrão.

---

## 5. Dashboards & Observabilidade Executiva

### 🔍 Diagnóstico e Padrão Enterprise
- **Padrão de Referência (`shadcnuikit__classic-dashboard-hd.png`, `shadcnuikit__classic-dashboard-dark-hd.png`, `payment-processor__dashboard-1.png`, `ai-chat__usage-insights.png`, `ai-analytics/page.tsx`)**:
  - **Hierarquia de 4 KPIs Principais**:
    1. *Execuções Totais de Agentes* (com delta percentual vs. período anterior).
    2. *Taxa de Conclusão / SLA Operacional* (99.8% com indicador verde).
    3. *Latência Média de Execução* (histograma em percentis: p50, p95, p99).
    4. *Custo Estimado de Tokens & Infraestrutura* (valor em moeda corrente com projeção de fechamento).
  - **Visões Operacionais Multi-View**:
    - **Kanban Board** (`project-management__issue-kanban-1.png`): Gestão ágil de agentes com badges de prioridade e avatares.
    - **Spreadsheet View** (`project-management__issue-spreadsheet-1.png`): Planilha corporativa de alta densidade para auditoria em massa de tarefas.
    - **Gantt Chart** (`project-management__issue-gantt-1.png`): Linha do tempo com dependências entre pipelines de agentes e subagentes.
  - **Visualização de Carga de Trabalho**: Gráfico de barras bidirecional ou área empilhada mostrando requisições por modelo (GPT-4o, Claude 3.5, Gemini 1.5) e taxa de acerto de cache de contexto.
  - **Feed de Atividades em Tempo Real**: Componente `ExecutionTimeline` integrado na lateral do dashboard para que o gestor veja em tempo real quais agentes estão operando e quais tools foram disparadas.

---

## 6. Configurações da Organização & Segurança

### 🔍 Diagnóstico e Padrão Enterprise
- **Padrão de Referência (`ai-chat__organization-settings.png`, `ai-chat__api-keys.png`)**:
  - **Políticas de Governança e Retenção**: Seletor de período de retenção de logs e trilhas de auditoria (30 dias, 90 dias, 1 ano, Ilimitado).
  - **Chaves de API Write-Only**: Máscara automática `flashtech_live_••••••••••••4x8a` com botão de cópia única no momento da geração e aviso de conformidade SOC2.
  - **Controle de Domínios Confiáveis**: Bloqueio de cadastro para permitir apenas emails `@suaempresa.com`.

---

## 7. Billing, Custos & Faturamento Corporativo

### 🔍 Diagnóstico e Padrão Enterprise
- **Padrão de Referência (`ai-chat__billing.png`, `ai-chat__credit-usage.png`, `payment-processor__invoice-list.png`)**:
  - **Barra de Progresso de Créditos / Tier**: Medidor visual do consumo da cota mensal (ex: 84.500 de 100.000 créditos utilizados) com alerta preventivo em 80%.
  - **Discriminação de Custos por Centro de Custo**: Tabela detalhando quanto cada Workspace ou Squad consumiu no mês corrente.
  - **Histórico de Faturas com Download Fiscal**: Lista com status (`Pago`, `Pendente`), número da NF-e/Invoice, valor líquido e botão de download instantâneo em PDF.
  - **Cartão de Método de Pagamento Primário e Backup**: Exibição da bandeira, últimos 4 dígitos e data de validade, com suporte a cartão de crédito corporativo e faturamento a prazo (PO/Invoice Enterprise).

---

## 🎨 Paleta de Design Tokens Recomendada (Tailwind / CSS Variables)

```css
:root {
  /* Superfícies & Bordas */
  --surface-primary: #ffffff;
  --surface-secondary: #f8fafc;
  --surface-tertiary: #f1f5f9;
  --border-subtle: #e2e8f0;
  --border-strong: #cbd5e1;

  /* Tipografia */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;

  /* Acentos de Governança */
  --accent-brand: #ff6b00; /* Flash Tech Orange */
  --status-safe: #10b981;  /* Emerald - Somente Leitura */
  --status-write: #3b82f6; /* Blue - Leitura & Escrita */
  --status-admin: #f59e0b; /* Amber - Administrativo */
  --status-danger: #ef4444;/* Rose/Red - Destrutivo / Requer Aprovação */
}
```
