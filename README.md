<h1>Person-info-generator-api</h1>

<p>Esta API é um gerador de dados pessoais que fornece informações fictícias de pessoas, incluindo nome completo, CPF, RG, data de nascimento, sexo, signo, altura, peso, cidade, estado, tipo sanguíneo, número de telefone, número de celular, nome do pai e nome da mãe. Ela foi criada para fins de teste, simulação e desenvolvimento de aplicativos que necessitam de dados de pessoa para preencher formulários, realizar testes, ou para qualquer outra aplicação que exija informações pessoais fictícias.</p>

<h3>Tipos de dados Gerado:</h3>
<p>A API gera os seguintes tipos de dados:</p>
<ul>
    <li>Nome completo</li>
    <li>CPF</li>
    <li>RG</li>
    <li>Data de nascimento</li>
    <li>Sexo</li>
    <li>Signo</li>
    <li>Altura</li>
    <li>Peso</li>
    <li>Cidade</li>
    <li>Estado</li>
    <li>Tipo Sanguíneo</li>
    <li>Número de telefone</li>
    <li>Número de celular</li>
    <li>Nome do pai</li>
    <li>Nome da mãe</li>
</ul>


<h2>Recursos utilizados</h2>
<p>A "Person-info-generator-api" utiliza as seguintes tecnologias:</p>
<ul>
    <li>Node.js ~ 18.18.2</li>
    <li>Express.js ~ 4.18.1</li>
    <li>MongoDB ~ 7.0.2</li>
    <li>Mongoose ~ 6.6.1</li>
    <li>Nodemon ~ 2.0.20</li>
</ul>

<p>Além disso, o projeto faz uso da API do <a href="https://brasilapi.com.br/docs#tag/DDD">Brasil API</a> para obter uma lista de cidades com base em um DDD específico. O objetivo é fornecer um conjunto confiável de dados fictícios que podem ser usados para preencher formulários, realizar testes e criar cenários de simulação.</p>

<h2>Configurando o banco de dados</h2>
<p>Antes de começar a usar a API, é necessário configurar um banco de dados MongoDB. Siga os passos abaixo:
</p>
<ol>
    <li>
        <p><strong>Crie um Banco de Dados:</strong>
            Abra um terminal e utilize o comando mongo para iniciar o shell do MongoDB. Em seguida, execute os seguinte comando para criar um novo banco de dados chamado "person-info-generator":
        </p>
        <div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>use person-info-generator
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="gulp" tabindex="0" role="button" style="display: inherit;">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
    </li>
    <li>
        <p><strong>Importe Dados Iniciais:</strong>
            Execute o comando <strong>mongoimport</strong> para importar os dados iniciais dos arquivos "names.json" e "surnames.json" localizados na pasta raiz do projeto para o banco de dados "person-info-generator". Certifique-se de que você esteja no diretório correto antes de executar o comando. Aqui está um exemplo de como fazer isso:
        </p>
         <div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code> mongoimport --db person-info-generator --collection names --type json --file names.json --jsonArray
 mongoimport --db person-info-generator --collection surnames --type json --file surnames.json --jsonArray
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="gulp" tabindex="0" role="button" style="display: inherit;">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
    </li>
</ol>

<h2>Gerando dados de uma pessoa</h2>
<p>A tabela abaixo contém as rotas para você gerar dados fictícios de uma pessoa.</p>
<table>
    <thead>
        <tr>
            <th>ROTA</th>
            <th>HTTP</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>/get/random-person</td>
        <td>GET</td>
        <td>Gera dados de uma pessoa de qualquer gênero</td>
    </tr>
    <tr>
        <td>/get/random-person-male</td>
        <td>GET</td>
        <td>Gera dados de uma pessoa de gênero masculino</td>
    </tr>
    <tr>
        <td>/get/random-person-female</td>
        <td>GET</td>
        <td>Gera dados de uma pessoa de gênero feminino</td>
    </tr>
    </tbody>
</table>

<h2>Gerar números de documentos</h2>
<p>A tabela abaixo contém as rotas para você gerar números fictícios de RG e CPF.</p>
<table>
    <thead>
        <tr>
            <th>ROTA</th>
            <th>HTTP</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>/get/generate-rg</td>
        <td>GET</td>
        <td>Gera números randômico de RG</td>
    </tr>
     <tr>
        <td>/get/generate-cpf</td>
        <td>GET</td>
        <td>Gera números randômico de CPF</td>
    </tr>
    </tbody>
</table>

<h2>Gerar números de telefone e celular</h2>
<p>A tabela abaixo contém as rotas para você gerar números fictícios de telefone e celular com DDD.</p>
<table>
    <thead>
        <tr>
            <th>ROTA</th>
            <th>HTTP</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>/get/generate-land-line</td>
        <td>GET</td>
        <td>Gera números randômico de telefone</td>
    </tr>
     <tr>
        <td>/get/generate-cell-phone</td>
        <td>GET</td>
        <td>Gera números randômico de celular</td>
    </tr>
    </tbody>
</table>
