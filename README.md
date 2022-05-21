# Web&debts

Aplicação criada com intuito de importar arquivos do tipo XLSX e renderizar no HTML.

Após importar o XLSX no front-end, a aplicação encaminha o arquivo via POST para uma API (também criada por mim)
que irá salvar esse arquivo temporariamente na pasta TEMP para posteriomente converte-lo em JSON. Após a conversão
o JSON é reestruturado e encaminhado de volta para o front-end onde é renderizado no HTML.

Após renderizar a tabela a aplicação ainda filtra alguns dados para melhor visualização das finanças, como: gasto total
e gasto por tipo.

Implementado botão para download do "template XLSX" visando que se mantenha o padrão da tabela.

<ul>
  <li>Front-end: React JS (com typescript)</li>
  <li>Back-end: Node JS (com typescript)</li>
</ul>


![image](https://user-images.githubusercontent.com/85578784/169667529-6a96f680-7f58-402d-8142-fb728ef97e53.png)

