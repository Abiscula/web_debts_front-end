![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

# Web&debts

Aplicação criada com intuito de importar arquivos do tipo XLSX e renderizar no HTML, obtendo estatísticas e gráficos em tempo real.

Para utilizar essa aplicação, será necessário clonar este repositório e o repositório <a href="https://github.com/Abiscula/web_debts_back-end">web_debts_back-end</a>. 
Após realizar o download será necessário executar o comando <b>"npm install"</b> para baixar todas as dependências do projeto.

<ul>
  <li>front-end: <b>"npm start"</b></li>
  <li>back-end: <b>"npm run dev"</b></li>
</ul>

### `Página: Table`
![image](https://user-images.githubusercontent.com/85578784/178626135-345047a9-8fc4-4902-8c95-23b67e59f711.png)

Após importar o XLSX no front-end, a aplicação encaminha o arquivo via POST para uma API (também criada por mim)
que irá salvar esse arquivo temporariamente na pasta TEMP para posteriomente converte-lo em JSON. Após a conversão
o JSON é reestruturado e encaminhado de volta para o front-end onde é renderizado no HTML.

Botão para download do "template XLSX" para manter o padrão da planilha.

### `Página: Statistic`
![image](https://user-images.githubusercontent.com/85578784/178626799-c0ee6266-a98a-41f7-83df-51a59abc6f57.png)

Nesta página é possivel obter alguns dados com base na tabela importada. Até o momento é possivel visualizar:
<div>
  <p> -Gasto total; </p>
  <p> -Gasto filtrado pelo tipo; </p>
<div>


### `Página: Charts`
![image](https://user-images.githubusercontent.com/85578784/178627107-b2eb8e9c-d914-4114-8914-15fa46349592.png)

Nesta página é possivel visualizar um gráfico de pizza que representa o percentual das compras separadas pelo tipo.
