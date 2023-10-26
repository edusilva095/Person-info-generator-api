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
            No seu ambiente de desenvolvimento, crie um novo banco de dados com o nome "person-info-generator".
        </p>
    </li>
    <li>
        <p><strong>Importe Dados Iniciais:</strong>
            Importe os dois arquivos "names" e "surnames" que estão localizados na pasta raiz do projeto. Isso garantirá que o banco de dados esteja preenchido com os dados necessários para o funcionamento da API.
        </p>
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
