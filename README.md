### CRUD em Node.Js & Express

 Recursos Utilizados

- Node.Js
- jSON data
- Express
- Insomnia

## Sobre o CRUD

 Crud bem simples de filmes para assistir

- Podendo adicionar filmes 
- Ler os filmes da Lista 
- Atualizar nome do Filme 
- Excluir filme 

## Testando a API no Insomnia
- Baixe o Insomnia

Após baixar o Insomia, siga os passos abaixo para acessar cada Api criada:

  ROTA                    |     HTTP(Verbo)   |      Descrição                      | 
------------------------- | ----------------- | ---------------------------------   | 
/films                    |       POST        |  Adicionar filme (CREATE)           | 
/films                    |       GET         |  Selecionar todos os filmes         | 
/films/0                  |       GET         |  Selecionar Por Posição no Array    | 
/films/0                  |       PUT         |  Atualizar Por Posição no Array     |    
/films/0                  |       DELETE      |  Excluir Por Posição no Array       |


## Acessando localmente

Precisa estar instalado: 
* Visual Studio
* Node.JS

## Quando estiver dentro do projeto 

      npm install
 
## Instalar Express

     npm install express

## Executar a aplicação
     node index.js

## A página da aplicação estará disponível em http://localhost:3000/films
* O array estará vazio, para posteriormente testar a aplicação pelo Insomnia e adicionando filmes por lá.

# Mexendo no CRUD

 Para adicionar filmes para me recomendar

- POST - Adicionar filme a lista
- Em um JSON, entre {"name": "NOME DO FILME A SER RECOMENDADO"} 
- SEND

 Consulta 
- GET - Lista de todos os filmes
- SEND
- Mostrará os filmes no Array

 Consulta especifica 
- Olhe na lista a posição do Array
- GET - Procurar um filme especifico
- Coloque no GET -  http://localhost:3000/films/0 (0 - PRIMEIRA POSIÇÃO) // as outras sucessivamente 

 Caso precise atualizar 
- Olhe na lista a posição do Array
- Coloque no PUT -  http://localhost:3000/films/0 (0 - PRIMEIRA POSIÇÃO) // as outras sucessivamente 
- Em um JSON, entre {"name": "NOME DO FILME ATUALIZADO"}
- SEND

 Caso queira excluir
- Olhe na lista a posiçao do array do filme que deseja excluir da lista
- DELETE- Deletar filme da lista
- Coloque no DELETE - http://localhost:3000/films/0 (0 - PRIMEIRA POSIÇÃO) // as outras sucessivamente 


## Adicionando filmes 
### Adicionei um por um
![adicionando-films](https://user-images.githubusercontent.com/65837228/190180180-19413972-2956-4ab1-891f-fbbab1432cf2.png)



<br>

## Listando os filmes adicionados
### Listagem dos filmes que adicionei para mostrar a aplicação rodando 
![listando-films](https://user-images.githubusercontent.com/65837228/190180195-55ed32fb-4f57-4f36-949c-1c6ad6324545.png)





Sinta se à vontade para utilizar a API. 
