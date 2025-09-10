import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Начало",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "За Мен",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Галерия",
    path: "/gallery",
    newTab: false,
  },
  {
    id: 4,
    title: "Услуги",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Всички услуги",
        path: "/services",
        newTab: false,
      },
      {
        id: 42,
        title: "Татуировки",
        path: "/services/tattoo",
        newTab: false,
      },
      {
        id: 43,
        title: "Перманентен грим",
        path: "/services/permanent-makeup",
        newTab: false,
      },
      // {
      //   id: 44,
      //   title: "Пиърсинг",
      //   path: "/services/piercing",
      //   newTab: false,
      // },
      {
        id: 45,
        title: "Временни татуировки",
        path: "/services/temporary-tattoo",
        newTab: false,
      },
      {
        id: 46,
        title: "Безмастилни татуировки",
        path: "/services/inkless-tattoo",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Промоции",
    path: "/flash",
    newTab: false,
  },
  {
    id: 6,
    title: "Контакти",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Блог",
    path: "/blogs",
    newTab: false,
  },
];
export default menuData;
