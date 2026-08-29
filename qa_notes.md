# Validação visual — primeiro passe

## Desktop

A página renderizou em uma composição contínua e editorial, com hero dividido entre texto e retrato, faixa documental em azul-petróleo, blocos assimétricos de atuação e trajetória, agenda em fundo escuro e rodapé institucional. A hierarquia de títulos, acentos verde/amarelo/coral e linhas de seção está consistente com a direção Brasil em Movimento Editorial. A revisão visual independente indicou que o estilo está coeso e pronto para entrega.

## Mobile

Em viewport de 390 × 844 px, o header reduz corretamente para logo + botão de menu, o hero empilha texto e imagem, os CTAs permanecem legíveis e a tipografia mantém o impacto sem extrapolar a largura. As seções de agenda, resultados, trajetória, participação e contato possuem regras específicas de empilhamento no CSS.

## Código

`pnpm check` e `pnpm build` concluíram sem erros de TypeScript ou compilação. O build emitiu apenas um aviso padrão de tamanho do bundle JavaScript, sem impedir a execução.

## Conteúdo pendente de substituição

Agenda, biografia, números, e-mail, redes sociais, relatório do mandato e informações legais são demonstrativos e devem ser conectados aos dados oficiais antes de publicação.
