export interface MenuItem {
  id: string
  name: string
  description?: string
  price: string
  image?: string
  category: string
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Завтраки",
    description: "Богатый шведский стол с 08:00 до 10:30",
    items: [
      {
        id: "breakfast-1",
        name: "Свежая выпечка и круассаны",
        price: "Включено",
        category: "breakfast",
      },
      {
        id: "breakfast-2",
        name: "Блюда из яиц на выбор",
        price: "Включено",
        category: "breakfast",
      },
      {
        id: "breakfast-3",
        name: "Каши и хлопья",
        price: "Включено",
        category: "breakfast",
      },
      {
        id: "breakfast-4",
        name: "Мясная и сырная нарезка",
        price: "Включено",
        category: "breakfast",
      },
      {
        id: "breakfast-5",
        name: "Фрукты и йогурты",
        price: "Включено",
        category: "breakfast",
      },
      {
        id: "breakfast-6",
        name: "Свежевыжатые соки",
        price: "Включено",
        category: "breakfast",
      },
    ],
  },
  {
    id: "lunch",
    name: "Обеды",
    description: "Комплексные обеды с 12:00 до 15:00",
    items: [
      {
        id: "lunch-1",
        name: "Супы дня (2 вида)",
        price: "Включено",
        category: "lunch",
      },
      {
        id: "lunch-2",
        name: "Салаты и закуски",
        price: "Включено",
        category: "lunch",
      },
      {
        id: "lunch-3",
        name: "Горячие блюда на выбор",
        price: "Включено",
        category: "lunch",
      },
      {
        id: "lunch-4",
        name: "Гарниры",
        price: "Включено",
        category: "lunch",
      },
      {
        id: "lunch-5",
        name: "Напитки",
        price: "Включено",
        category: "lunch",
      },
      {
        id: "lunch-6",
        name: "Десерт дня",
        price: "Включено",
        category: "lunch",
      },
    ],
  },
  {
    id: "dinner",
    name: "Ужины",
    description: "Авторские блюда с 18:00 до 22:00",
    items: [
      {
        id: "dinner-1",
        name: "Черноморская рыба",
        price: "Включено",
        category: "dinner",
      },
      {
        id: "dinner-2",
        name: "Стейки и мясо на гриле",
        price: "Включено",
        category: "dinner",
      },
      {
        id: "dinner-3",
        name: "Паста и ризотто",
        price: "Включено",
        category: "dinner",
      },
      {
        id: "dinner-4",
        name: "Кавказская кухня",
        price: "Включено",
        category: "dinner",
      },
      {
        id: "dinner-5",
        name: "Вегетарианские блюда",
        price: "Включено",
        category: "dinner",
      },
      {
        id: "dinner-6",
        name: "Авторские десерты",
        price: "Включено",
        category: "dinner",
      },
    ],
  },
]

// Фирменные блюда с ценами
export const specialties: MenuItem[] = [
  {
    id: "specialty-1",
    name: "Черноморская барабулька",
    description: "Свежая рыба, зажаренная на гриле с лимоном и травами",
    price: "от 850 ₽",
    category: "specialties",
    image: "/avenue.jpg", // Заменить на реальное изображение
  },
  {
    id: "specialty-2",
    name: "Шашлык из баранины",
    description: "Маринованное мясо на углях с соусом наршараб",
    price: "от 1 200 ₽",
    category: "specialties",
    image: "/avenue.jpg", // Заменить на реальное изображение
  },
  {
    id: "specialty-3",
    name: "Хачапури по-аджарски",
    description: "Традиционное грузинское блюдо с сыром и яйцом",
    price: "от 450 ₽",
    category: "specialties",
    image: "/avenue.jpg", // Заменить на реальное изображение
  },
  {
    id: "specialty-4",
    name: "Крем-брюле",
    description: "Нежный десерт с хрустящей карамельной корочкой",
    price: "от 350 ₽",
    category: "specialties",
    image: "/avenue.jpg", // Заменить на реальное изображение
  },
]

