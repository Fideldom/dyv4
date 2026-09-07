# DYLANDE — Website corporativo

Este pacote contém a implementação frontend do website corporativo da **DYLANDE Prestação de Serviços Comércio Geral**, construído em React + Vite + Tailwind CSS. A experiência segue a direcção visual **Navy Precision**, com narrativa editorial, navy profundo, azul atlântico, tipografia Space Grotesk / DM Sans / IBM Plex Mono e uma linguagem de sinais técnicos.

## Executar localmente

Na raiz do projecto, instalar as dependências e iniciar o servidor de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Para validar os tipos e gerar a build de produção:

```bash
pnpm check
pnpm build
```

## Estrutura principal

| Local | Conteúdo |
| --- | --- |
| `client/src/pages/Home.tsx` | Landing page completa, dados editáveis, navegação, filtros, formulário e CTAs |
| `client/src/index.css` | Tokens, identidade visual, layout responsivo e animações |
| `client/index.html` | Metadados, idioma, título e favicon DYLANDE |
| `ideas.md` | Direcção visual e decisões de design |
| `package.json` | Dependências e scripts do projecto |

## Pontos a personalizar

Os contactos apresentados são placeholders estruturados para substituição, centralizados em `client/src/lib/siteConfig.ts` (`contact.email`, `contact.phone`, `contact.whatsapp`, `contact.location`) — ver secção "Motion System" abaixo.

O bloco de software está marcado como catálogo demonstrativo porque ainda não foram fornecidos produtos comerciais reais. Os números da faixa de estatísticas, os projectos do portefólio e os textos de serviço ficam em arrays no topo de `Home.tsx` para edição directa.

Não foram inventados testemunhos ou avaliações de clientes. A página está pronta para receber conteúdo real quando a empresa o disponibilizar.

## Assets visuais

Os assets visuais estão incluídos localmente em `client/public/assets`, para funcionarem no computador do utilizador e em qualquer hospedagem estática:

| Uso | URL |
| --- | --- |
| Hero tecnológico | `/assets/dylande-hero.webp` |
| Imagem institucional | `/assets/dylande-team.webp` |
| Mockup de software | `/assets/dylande-dashboard.webp` |
| Símbolo / favicon | `/assets/dylande-mark.webp` |

## Notas de implementação

A navegação usa âncoras internas, o menu mobile abre e fecha sem dependências adicionais, os filtros do portefólio são funcionais e o formulário apresenta feedback local através de toast. O formulário usa um fallback `mailto:` funcional sem backend. Para guardar leads automaticamente, ligue-o posteriormente a um endpoint ou serviço de formulários.

## DYLANDE Motion System

Camada de motion design adicionada sobre a base "Navy Precision" existente, em `client/src/components/motion/`:

| Ficheiro | Função |
| --- | --- |
| `MotionHeroTitle.tsx` | Componente central de tipografia animada. Recebe `variant` e anima apenas o texto real (h1/h2), nunca canvas. Variantes: `cinematic` (Home), `mask` (Serviços), `fill` (Software), `drift` (Soluções), `blur` (Empresa), `outline` (Certificações), `split` (Contactos) |
| `Reveal.tsx` | Entrada genérica (fade + translateY) para parágrafos, cards e blocos secundários; inclui `Stagger`/`StaggerItem` para grelhas |
| `Magnetic.tsx` | Micro-atração de até 6px nos CTAs mais importantes (proposta, especialista, WhatsApp); apenas desktop com ponteiro fino |
| `ScrollProgress.tsx` | Barra fina fixa no topo que acompanha o progresso de scroll |
| `textSplit.ts` | Utilitários de divisão de palavras/letras usados pelas variantes tipográficas |

`client/src/components/WhatsAppButton.tsx` é o botão global (bottom-right, tooltip no desktop, mensagem contextual por rota definida em `siteConfig.whatsappMessages`) e está montado uma única vez em `SiteLayout.tsx`, disponível em todas as páginas.

Todas as animações respeitam `prefers-reduced-motion` (via `useReducedMotion` do Framer Motion e o `@media` já existente em `index.css`) e animam apenas `transform`, `opacity`, `filter` e `clip-path` — nunca `width`/`height`/`top`/`left` — para manter performance.

### Número de WhatsApp e email — fonte única

`client/src/lib/siteConfig.ts` é agora a única fonte destes dados. `SiteLayout.tsx`, `Contact.tsx` e `WhatsAppButton.tsx` importam de lá — não escrever o número ou o email directamente noutro ficheiro. Para alterar, editar apenas `siteConfig.contact` e `siteConfig.whatsappMessages`.

## Segunda passagem — transições, tipografia mais expressiva, download por software

- **`PageTransition.tsx`** — troca suave e animada entre páginas (fade + leve deslocamento + traço de blur, ~450ms), montada uma única vez em `SiteLayout.tsx`. O `<main>` fica fixo; só o conteúdo interno anima ao trocar de rota, e o scroll volta ao topo apenas depois da página anterior ter saído (nunca um salto brusco). Fecha o menu mobile automaticamente ao navegar.
- **Tipografia grande mais expressiva** — todas as variantes do `MotionHeroTitle` foram amplificadas (mais blur, mais deslocamento, durações mais longas) para a assinatura tipográfica ter mais peso e ser mais notada na primeira impressão.
- **Botão de download por software** — cada linha do catálogo em `Software.tsx` tem agora um link "Descarregar ficha" com evento de analytics (`software_download`). Nota de honestidade: ainda não existe uma ficha PDF individual por sistema (Restauração, Hotelaria, Lavandaria, etc.) — todos apontam para o único guia visual real já presente no projeto (`dylande-soft-ux-ui.pdf`). Quando tiveres uma ficha por produto, troca o `href` de cada botão (ficheiro fica centralizado na constante `brochure`/lista `products` em `Software.tsx`).
- **Responsividade** — nova faixa de media query para ecrãs muito pequenos (até 430px: iPhone SE, telemóveis Android compactos) apertando tipografia e espaçamentos sem alterar a grelha editorial nas larguras maiores.

### Por implementar (não incluído nesta passagem)

## Terceira passagem — Revendedores (Home) e Sobre/Equipa (Empresa)

- **Home** — nova secção "Revendedor DYLANDE" entre as certificações e o CTA final: intro com 2 CTAs (WhatsApp dedicado + login externo), 4 cards de benefícios (comissão, suporte, território, crescimento) e 4 cards de requisitos/planos (Empresa, Singular, Treinamento, Benefícios), tudo animado com o motion system existente.
- **Empresa** — adicionadas 4 novas secções: Diferenciais (Missão/Visão/Valores), Certificações (resumo com os dois documentos SAF-T e Faturação Eletrónica), Nossa Trajetória (linha do tempo com 4 marcos) e Nossa Equipa (5 pessoas).
- **`siteConfig.reseller`** — novo bloco centralizando o WhatsApp dedicado a revendedores (`244928271370`, diferente do WhatsApp geral) e o link de login externo.

### Duas coisas para confirmares (não resolvi por conta própria, para não inventar dados):

1. **Ano de fundação inconsistente no texto que enviaste**: "Desde 2020, somos a referência..." vs. "Fundação... 2021 Ano de Fundação" na trajetória. Usei os dois exatamente como escreveste (2020 no parágrafo de introdução, 2021 no marco da linha do tempo) — confirma qual está certo e digo-te exatamente onde mudar.
2. **Certificados da secção "Sobre"**: o teu texto linkava para `dylande.com/certificado.pdf` e `dylande.com/baixar.php?doc=...` (domínio externo, ficheiros que não tenho). Em vez de criar esses links para ficheiros que não existem neste projeto, a secção "Certificações e Documentos" da Empresa agora remete para a página `/certificacoes` já existente no projeto, que usa os PDFs reais que já cá estão (`certificado-validacao.pdf` e `certificado-software.pdf`). Se esses dois documentos locais não corresponderem exatamente à certificação SAF-T e à de Faturação Eletrónica que descreveste, avisa-me para eu ajustar a correspondência ou substituir os ficheiros.



O `MASTER PROMPT` pede uma transformação de 79 fases (cursor contextual, transições de página baseadas em tipografia, parallax de rato no Hero, tipografia gigante de fundo por página, páginas de produto por software, analytics de eventos de conversão, etc.). Esta passagem implementou o **sistema de tipografia motion, o WhatsApp global contextual, o scroll progress e os CTAs magnéticos** em todas as páginas existentes, preservando 100% do conteúdo, rotas, assets, vídeos e certificados já presentes. As restantes fases ficam documentadas aqui como próximos passos, para serem implementadas de forma incremental sem voltar a reescrever o projecto.

## Reconstrução multipágina DYLANDE

A versão actual organiza a experiência em `Empresa`, `Serviços`, `Soluções`, `Software`, `Certificações` e `Contacto`, com layout partilhado em `client/src/components/SiteLayout.tsx`. Os materiais enviados estão em `client/public/media`: logotipo, cinco imagens, dois vídeos, dois certificados AGT e o guia visual UX/UI.

A homepage usa os materiais reais do pacote, o software é apresentado em seis frentes — Faturação e Stock, Restauração, Hotelaria e Restauração, Lavandaria, Barbearia e Oficina — e os certificados têm acesso aos PDFs originais. O comando de verificação é `pnpm check`; a build frontend é `pnpm build:client`.
