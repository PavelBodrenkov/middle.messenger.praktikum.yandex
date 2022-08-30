import { RootPage } from "./pug/index";
import HomePage from "./pug/pages/home/index";
import RegisterPage from "./pug/pages/register/index";
import LoginPage from "./pug/pages/login/index";
import ProfilePage from "./pug/pages/profile/index";
import Page404 from "./pug/pages/error404/index";
import Page500 from "./pug/pages/error500/index";
import ModalDefault from "./pug/pages/modalDefault/index";
import UpdateProfile from "./pug/pages/updateProfile/index";

import {registerData, loginData, profileData, updateProfileData, dataListSidebar} from './pug/utils/data'

window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#app")!;
  const path = document.location.pathname;
  switch (path) {
    case "/":
      const rootPage = new RootPage({ title: "Home page" });
      root.append(rootPage.getContent()!);
      rootPage.dispatchComponentDidMount();
      break;
    case "/pages/home/home.pug":
      const homePage = new HomePage({ title: "Home page", data: dataListSidebar });
      root.append(homePage.getContent()!);
      homePage.dispatchComponentDidMount();
      break;
    case "/pages/register/register.pug":
      const registerPage = new RegisterPage({ title: "Регистрация", data:registerData });
      root.append(registerPage.getContent()!);
      registerPage.dispatchComponentDidMount();
      break;
    case "/pages/login/login.pug":
      const loginPage = new LoginPage({ title: "Авторизация", data:loginData });
      root.append(loginPage.getContent()!);
      loginPage.dispatchComponentDidMount();
      break;
    case "/pages/profile/profile.pug":
      const profilePage = new ProfilePage({ title: "Home page", data:profileData });
      root.append(profilePage.getContent()!);
      profilePage.dispatchComponentDidMount();
      break;
    case "/pages/error404/404.pug":
      const page404 = new Page404({ title: "Home page" });
      root.append(page404.getContent()!);
      page404.dispatchComponentDidMount();
      break;
    case "/pages/error500/500.pug":
      const page500 = new Page500({ title: "Home page" });
      root.append(page500.getContent()!);
      page500.dispatchComponentDidMount();
      break;
    case "/pages/modalDefault/modalDefault.pug":
      const modalDefault = new ModalDefault({ title: "Home page" });
      root.append(modalDefault.getContent()!);
      modalDefault.dispatchComponentDidMount();
      break;
    case "/pages/updateProfile/updateProfile.pug":
      const updateProfile = new UpdateProfile({ title: "Home page", data:updateProfileData });
      root.append(updateProfile.getContent()!);
      updateProfile.dispatchComponentDidMount();
      break;
  }
});
