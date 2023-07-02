<p align="center">
  <img width="200px" alt="Project Ignite Gim" title="Project Ignite Gim" src="./mobile/src/assets/series.svg" />

  <h1 align="center">Ignite Gim</h1>

  <!-- <p align="center">
    🔗 <a href="https://URLThisProject.com">https://URLThisProject.com</a> 🔗
  </p> -->

Developed the Ignite Gym project in React Native, it is a fitness-oriented application that provides features for user registration, exercise tracking, and execution history.

Below, I will describe each of the main screens of the application:

- Login Screen:

  - On this screen, users can enter their login credentials, such as username and password, to access the application.
  - If they don't have an account yet, there is an option to register within the application.

- Registration Screen:

  - In the registration screen, users can fill out a form with their information, such as name, email, and password.
  - After filling out the form, they can confirm the registration and create an account within the application.

- Main Screen:

  - After successfully logging in, users will be directed to the main screen.
  - On this screen, they will find a list of available exercises to perform.
  - Each exercise can be selected to view the execution instructions, which may include a demonstrative video.

- Workout History Screen:

  - In this screen, users can access the history of their previous workout sessions.
  - Users can revisit their previous sessions to track their progress over time.

- Profile Screen:

  - The profile screen allows users to view and update their personal information, such as name, profile picture, and password change.

These screens provide a comprehensive experience for users of the Ignite Gym application, allowing them to log in, register, perform exercises, track their progress, and manage their personal information.

</p>

## 🧭 Table of contents

- [🧭 Table of contents](#-table-of-contents)
- [🎨 Layout](#-layout)
- [👏 Learning and more Implementations](#-learning-and-more-implementations)
- [💡 Technologies Used](#-technologies-used)
  - [Mobile](#mobile)
- [📂 Folder Structure](#-folder-structure)
- [🚀 Running the Project](#-running-the-project)
  - [Back-end](#back-end)
  - [Mobile](#mobile-1)
- [🌎 License](#-license)
- [✒ Author](#-author)

<!-- ## 🎥 Implementation Video

In the GitHub edit, drag the video that it already puts on github itself. -->

## 🎨 Layout

Layout developed by: [Rodrigo Gonçalves](https://www.linkedin.com/in/rodrigo-goncalves-santana/) e [Millena Kupsinskü Martins](https://www.linkedin.com/in/millenakmartins/)

[![Layout in Figma](https://github.com/VagnerNerves/default-readme/blob/main/assets/layout-in-figma.svg)](<https://www.figma.com/file/cK3B1mWvQi8FJwDuLcREzi/Ignite-Gym-(Community)?type=design&node-id=37%3A6&mode=design&t=3TCm5eQEjIDDg6qA-1>)

## 👏 Learning and more Implementations

- Learned how to use NativeBase for building the interface.
- Learned to use the Bottom Navigator.
- Learned to fetch images from the photo gallery using Expo ImagePicker.
- Learned to use React Hook Form for form control and validation using Yup.
- Learned to create Contexts and hooks for data passing to other screens.
- Learned about consuming APIs with Fetch API and Axios.
- Learned about JWT Authentication and how to use it for data retrieval.
- Learned to upload images to the database.
- Learned about refresh tokens to automatically retrieve a new token when it expires.

## 💡 Technologies Used

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

## 📂 Folder Structure

```plainText
mobile
.
├── assets                      # Images for expo
├── src                         # Source files
│   ├── @types                  # Contains all global definitions of types and interfaces
│   ├── assets                  # Contains Js bundles assets. e.g: icons, splash, images etc...
│   ├── components              # Contains all global react components
│   ├── contexts                # Application context
│   ├── dtos                    # Models Data Base
│   ├── hooks                   # Application hooks
│   ├── routes                  # Contains application routes
│   ├── screens                 # Contains application screens
│   ├── services                # Config service api
│   ├── storage                 # Contains saving data in locations.
│   ├── theme                   # Contains the theme of the application
│   ├── utils                   # Class utils for system
.
.
├── App                         # Bundle entry
.
```

## 🚀 Running the Project

### Back-end

Clone the project

```bash
  git clone https://github.com/VagnerNerves/ignitegym-rn.git
```

Enter the project directory

```bash
  cd ignitegym-rn\server
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Access the README.md from the server folder

<!-- ### Front-end Web

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
``` -->

### Mobile

Clone the project

```bash
  git clone https://github.com/VagnerNerves/ignitegym-rn.git
```

Enter the project directory

```bash
  cd ignitegym-rn\mobile
```

Install with dependencies

```bash
  npm install
```

Start the server

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

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://github.com/VagnerNerves/ignitegym-rn/blob/main/LICENSE) file for more details.

## ✒ Author

<p align="center">
  <img width="200px" alt="Author Vagner Nerves" title="Author Vagner Nerves" src="https://github.com/VagnerNerves/default-readme/blob/main/assets/VagnerNerves.svg" />

  <h3 align="center">Vagner Nerves</h3>

  <p align="center">
    Made with love and hate 😅, get in touch!
  </p>
</p>

<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vagnernervessantos/)](https://www.linkedin.com/in/vagnernervessantos/)
[![Gmail Badge](https://img.shields.io/badge/-vagnernervessantos@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vagnernervessantos@gmail.com)](mailto:vagnernervessantos@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/VagnerNerves)](https://github.com/VagnerNerves)

</div>
