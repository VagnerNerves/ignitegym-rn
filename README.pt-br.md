<div align="right">

<a href="./README.md" alt="Translate to English">Translate English</a>

</div>

<p align="center">
  <img width="200px" alt="Projeto Ignite Gim" title="Projeto Ignite Gim" src="./mobile/src/assets/series.svg" />

  <h1 align="center">Ignite Gim</h1>

  <!-- <p align="center">
    🔗 <a href="https://URLProjeto.com">https://URLProjeto.com</a> 🔗
  </p> -->

O projeto Ignite Gim foi desenvolvido em React Native e é um aplicativo voltado para fitness que oferece recursos de registro de usuários, rastreamento de exercícios e histórico de execução.

Abaixo, descreverei cada uma das principais telas do aplicativo:

- Tela de Login:

  - Nesta tela, os usuários podem inserir suas credenciais de login, como nome de usuário e senha, para acessar o aplicativo.
  - Se eles ainda não possuem uma conta, há uma opção para se registrar dentro do próprio aplicativo.

- Tela de Registro:

  - Na tela de registro, os usuários podem preencher um formulário com suas informações, como nome, e-mail e senha.
  - Após preencher o formulário, eles podem confirmar o registro e criar uma conta dentro do aplicativo.

- Tela Principal:

  - Após fazer o login com sucesso, os usuários serão direcionados para a tela principal.
  - Nessa tela, eles encontrarão uma lista de exercícios disponíveis para realizar.
  - Cada exercício pode ser selecionado para visualizar as instruções de execução, que podem incluir um vídeo demonstrativo.

- Tela de Histórico de Treino:

  - Nesta tela, os usuários podem acessar o histórico de suas sessões de treino anteriores.
  - Os usuários podem revisitar suas sessões anteriores para acompanhar seu progresso ao longo do tempo.

- Tela de Perfil:

  - A tela de perfil permite que os usuários visualizem e atualizem suas informações pessoais, como nome, foto de perfil e alteração de senha.

Essas telas proporcionam uma experiência abrangente para os usuários do aplicativo Ignite Gim, permitindo que eles façam login, se registrem, realizem exercícios, acompanhem seu progresso e gerenciem suas informações pessoais.

</p>

## 🧭 Índice

- [🧭 Índice](#-índice)
- [🎥 Vídeo de Implementação](#-vídeo-de-implementação)
- [🎨 Layout](#-layout)
- [👏 Aprendizado e Mais Implementações](#-aprendizado-e-mais-implementações)
- [💡 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [Mobile](#mobile)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [🚀 Executando o Projeto](#-executando-o-projeto)
  - [Back-end](#back-end)
  - [Mobile](#mobile-1)
- [🌎 Licença](#-licença)
- [✒ Autor](#-autor)

## 🎥 Vídeo de Implementação

https://github.com/VagnerNerves/ignitegym-rn/assets/40831841/2ff96116-98e4-4641-9df6-7fa2c843e7b6

## 🎨 Layout

Layout desenvolvido por: [Rodrigo Gonçalves](https://www.linkedin.com/in/rodrigo-goncalves-santana/) e [Millena Kupsinskü Martins](https://www.linkedin.com/in/millenakmartins/)

[![Layout no Figma](https://github.com/VagnerNerves/default-readme/blob/main/assets/layout-in-figma.svg)](<https://www.figma.com/file/cK3B1mWvQi8FJwDuLcREzi/Ignite-Gym-(Community)?type=design&node-id=37%3A6&mode=design&t=3TCm5eQEjIDDg6qA-1>)

## 👏 Aprendizado e Mais Implementações

- Aprendi a usar o NativeBase para construir a interface.
- Aprendi a usar o Bottom Navigator.
- Aprendi a buscar imagens da galeria de fotos usando o Expo ImagePicker.
- Aprendi a usar o React Hook Form para controle e validação de formulários usando o Yup.
- Aprendi a criar Contextos e hooks para passar dados para outras telas.
- Aprendi sobre o consumo de APIs com Fetch API e Axios.
- Aprendi sobre Autenticação JWT e como usá-la para recuperar dados.
- Aprendi a fazer upload de imagens para o banco de dados.
- Aprendi sobre tokens de atualização para obter automaticamente um novo token quando ele expira.

## 💡 Tecnologias Utilizadas

### Mobile

- [x] [React Native](https://reactnative.dev/)
- [x] [Expo](https://docs.expo.dev/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [NativeBase](https://nativebase.io/)
- [x] [React Navigation - Native Stack and Bottom Tabs](https://reactnavigation.org/)
- [x] [Axios](https://axios-http.com/ptbr/)
- [x] [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [x] [Expo FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem/)
- [x] [React Hook Form](https://react-hook-form.com/)
- [x] [Yup](https://github.com/jquense/yup)
- [x] [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)

## 📂 Estrutura de Pastas

```plainText
mobile
.
├── assets                      # Imagens para o Expo
├── src                         # Arquivos de código-fonte
│   ├── @types                  # Contém todas as definições globais de tipos e interfaces
│   ├── assets                  # Contém os recursos de pacotes JS, como ícones, splash, imagens, etc.
│   ├── components              # Contém todos os componentes React globais
│   ├── contexts                # Contexto da aplicação
│   ├── dtos                    # Modelos de banco de dados
│   ├── hooks                   # Hooks da aplicação
│   ├── routes                  # Contém as rotas da aplicação
│   ├── screens                 # Contém as telas da aplicação
│   ├── services                # Configurações do serviço de API
│   ├── storage                 # Contém a persistência de dados em locais específicos
│   ├── theme                   # Contém o tema da aplicação
│   ├── utils                   # Classes utilitárias para o sistema
.
.
├── App                         # Ponto de entrada do pacote
.
```

## 🚀 Executando o Projeto

### Back-end

Clone o projeto

```bash
  git clone https://github.com/VagnerNerves/ignitegym-rn.git
```

Acesse o diretório do projeto

```bash
  cd ignitegym-rn\server
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Acesse o arquivo README.md na pasta do servidor para ver outros comandos.

<!-- ### Front-end Web

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Acesse o diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
``` -->

### Mobile

Clone o projeto

```bash
  git clone https://github.com/VagnerNerves/ignitegym-rn.git
```

Acesse o diretório do projeto

```bash
  cd ignitegym-rn\mobile
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npx run start
```

<!--
- IOS:

```bash
  npx pod-install && npx react-native run-ios
```

- Android:

```bash
  npx react-native run-android
``` -->

<!-- ## 📝 Routes

[![Run in Postman](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-postman.svg)](https://app.getpostman.com/run-collection/link)
[![Run in Insomnia](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-insomnia.svg)](https://insomnia.rest/run/?label=NAMEPROJECT&uri=LINK) -->

## 🌎 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/VagnerNerves/ignitegym-rn/blob/main/LICENSE) para mais detalhes.

## ✒ Autor

<p align="center">
  <img width="200px" alt="Author Vagner Nerves" title="Author Vagner Nerves" src="https://github.com/VagnerNerves/default-readme/blob/main/assets/VagnerNerves.svg" />

  <h3 align="center">Vagner Nerves</h3>

  <p align="center">
    Feito com amor e ódio 😅, entre em contato!
  </p>
</p>

<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vagnernervessantos/)](https://www.linkedin.com/in/vagnernervessantos/)
[![Gmail Badge](https://img.shields.io/badge/-vagnernervessantos@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vagnernervessantos@gmail.com)](mailto:vagnernervessantos@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/VagnerNerves)](https://github.com/VagnerNerves)

</div>
