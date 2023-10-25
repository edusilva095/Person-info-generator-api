<h1>Person-info-generator-api</h1>

<p>Uma aplicação que gera diversos tipos de dados.</p>

<h2>Recursos utilizados</h2>
<ul>
    <li>Node.js ~ 16.17.0</li>
    <li>Express.js ~ 4.18.1</li>
    <li>MongoDb ~ 5.0.3</li>
    <li>Mongoose ~ 6.6.1</li>
</ul>

<p>Utilizei o api do <a href="https://brasilapi.com.br/docs#tag/DDD">Brasil API</a> para me retornar uma lista de cidades de um determinado DDD</p>

<h2>Arquivos JSON</h2>
<p>Eu disponibilizei arquivos json abaixo para download que contem nomes e sobrenomes para importar para o banco de dados e usar no projeto.</p>
<a href="https://drive.google.com/file/d/1JpGLoUeSRLlftv042q0PduNKzGSG2SIm/view?usp=sharing">Nomes</a>
<br>
<a href="https://drive.google.com/file/d/1FmqgMA9CEFfyKxkBzmfF4JYQhrZnoBrF/view?usp=sharing">Sobrenomes</a>

<h2>Gerando dados de uma pessoa</h2>
<p>A tabela abaixo contem os API's para você gerar dados de uma pessoa.</p>
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

<h3>Tipos de dados gerados:</h3>
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

<h2>Gerar números de documentos</h2>
<p>Estes API's serve para gerar números de RG e CPF.</p>
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
<p>Estes API's serve para gerar números de telefone e celular com DDD.</p>
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
