# Web Debts

Aplicação criada com intuito de importar arquivos do tipo XLSX e renderizar no HTML.

Após importar o XLSX no front-end, a aplicação encaminha o arquivo via POST para uma API (também criada por mim)
que irá salvar esse arquivo temporariamente na pasta TEMP para posteriomente converte-lo em JSON. Após a conversão
o JSON é reestruturado e encaminhado de volta para o front-end onde é renderizado no HTML.

Após renderizar a tabela a aplicação ainda filtra alguns dados para melhor visualização das finanças, como: gasto total
e gasto por tipo.

Posteriomente será implementado um botão para impressão de um "template XLSX" de modo que se mantenha o padrão da tabela.
Também será implementado um select para escolha do mês que deseja visualizar (cada mês será correspondente a uma "folha" do excel).

<ul>
  <li>Front-end: React JS (com typescript)</li>
  <li>Back-end: Node JS (com typescript)</li>
</ul>




![image](https://user-images.githubusercontent.com/85578784/169214961-9c656931-5b4a-491b-8207-792f5e34e883.png)

