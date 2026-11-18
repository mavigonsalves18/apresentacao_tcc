# Página web da apresentação — TCC

Esta pasta contém uma primeira versão em HTML da apresentação de 27 slides.

## Arquivos
- `index.html`: conteúdo da página. É aqui que você altera títulos, textos, tabelas, números e referências.
- `style.css`: cores, fontes, espaçamentos e aparência.
- `script.js`: comportamento do menu em telas pequenas.

## Como editar
1. Abra `index.html` no GitHub.
2. Clique no lápis (**Edit this file**).
3. Altere o texto diretamente no HTML.
4. Clique em **Commit changes** para salvar.
5. As alterações serão publicadas no endereço do GitHub Pages após alguns instantes.

Para remover uma parte, apague o bloco `<section class="slide"...> ... </section>` correspondente. Para remover uma seção inteira, apague também o bloco `<div class="section-heading"...>`.

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub (por exemplo, `apresentacao-tcc`).
2. Envie os três arquivos (`index.html`, `style.css` e `script.js`) para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
6. O GitHub vai disponibilizar um endereço no formato `https://SEU-USUARIO.github.io/apresentacao-tcc/`.

Use esse endereço para criar o QR Code. Se você editar os arquivos depois, o conteúdo do mesmo endereço será atualizado.

## Observações sobre esta primeira versão
- O texto e as tabelas estão em HTML editável.
- Os slides 13 e 15 tinham diagramas/figuras cuja representação visual não foi recuperada como elementos editáveis do PDF; deixei espaços indicados para inserir as imagens originais ou redesenhar os diagramas.
- O conteúdo foi transcrito a partir do PDF enviado. Recomendo revisar referências, símbolos matemáticos e números antes de publicar.
- O site usa fontes do Google Fonts; se quiser que funcione totalmente offline, remova a linha `@import` do `style.css`.
