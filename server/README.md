
<p align="center"><img src=".github/logo.png" width="100" alt="Nlw Unite Logo"></a></p>

<p align="center"> Um app para gestão de participantes em eventos presenciais </p>

<p align="center"> 
    <a href="#-sobre-o-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;
    <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;
    <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;
    <a href="#-dicas-para-usar-o-projeto">Dicas de uso</a>
</p>

<p align="center">
    <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=20.17.0&color=18181B&labelColor=5354FD">
    <img alt="Npm version" src="https://img.shields.io/static/v1?label=npm&message=10.8.2&color=18181B&labelColor=990000">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

### 💻 Sobre o projeto

O projeto permite que o organizador cadastre um evento e abra uma página pública de inscrição. Os participantes inscritos podem emitir uma credencial para check-in no dia do evento. O sistema fará um scan da credencial do participante para permitir a entrada no evento.

<br>

<p align="center">
  <img alt="Preview do projeto desenvolvido." src=".github/preview.png" width="80%">
</p>

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJs
- SQLite e Prisma
- Git e Github
- Figma

### 🚧 Features

- [x] O organizador deve poder cadastrar um novo evento
- [x] O organizador deve poder visualizar dados de um evento
- [x] O organizador deve poser visualizar a lista de participantes
- [x] O participante deve poder se inscrever em um evento
- [x] O participante deve poder visualizar seu crachá de inscrição
- [x] O participante deve poder realizar check-in no evento
- [x] O participante só pode se inscrever em um evento uma única vez
- [x] O participante só pode se inscrever em eventos com vagas disponíveis
- [x] O participante só pode realizar check-in em um evento uma única vez
- [x] O check-in no evento será realizado através de um QRCode


### Documentação da API (Swagger)

Para documentação da API, acesse o link: http://localhost:3333/docs

### 📜 Licença

Esse projeto está sob a licença MIT.

### 💡 Dicas para usar o projeto

`npm i` ou `npm install` para baixar o node_modules

`npm run dev` para conseguir visualizar o projeto no web

`npx prisma studio` ou `npm run db:studio` abre ferramenta para visualizar o banco de dados

`npx prisma migrate dev` ou `npm run db:migrate` coloca as alterações do schema prisma no banco de dados

`npx prisma db seed` seed database

---

Projeto feito através de uma aula da rocketseat. Alterado e adicionado algumas funcionalidades por KetCode.