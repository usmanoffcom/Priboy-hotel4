// Полная структура меню с категориями и изображениями
import menuItemsData from './menu-items-data.json'

export interface MenuItem {
  id: string
  name: string
  description?: string
  price?: string
  image: string
  category: string
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  items: MenuItem[]
}

// Маппинг категорий на русские названия
export const categoryNames: Record<string, string> = {
  soups: 'Супы',
  salads: 'Салаты',
  appetizers: 'Закуски',
  mains: 'Основные блюда',
  fish: 'Рыба и морепродукты',
  georgian: 'Грузинская кухня',
  pasta: 'Паста и ризотто',
  pizza: 'Пицца',
  breakfast: 'Завтраки',
  sides: 'Гарниры',
  desserts: 'Десерты',
  drinks: 'Напитки',
  other: 'Прочее',
}

// Группируем блюда по категориям
export function getMenuByCategories(): MenuCategory[] {
  const items = menuItemsData as MenuItem[]
  const categoriesMap = new Map<string, MenuItem[]>()

  items.forEach((item) => {
    if (!categoriesMap.has(item.category)) {
      categoriesMap.set(item.category, [])
    }
    categoriesMap.get(item.category)!.push(item)
  })

  return Array.from(categoriesMap.entries())
    .map(([categoryId, items]) => ({
      id: categoryId,
      name: categoryNames[categoryId] || categoryId,
      items: items.sort((a, b) => a.name.localeCompare(b.name, 'ru')),
    }))
    .sort((a, b) => {
      // Порядок категорий
      const order = [
        'breakfast',
        'appetizers',
        'salads',
        'soups',
        'georgian',
        'fish',
        'mains',
        'pasta',
        'pizza',
        'sides',
        'desserts',
        'drinks',
        'other',
      ]
      const aIndex = order.indexOf(a.id)
      const bIndex = order.indexOf(b.id)
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex)
    })
}

// Получить все блюда
export function getAllMenuItems(): MenuItem[] {
  return menuItemsData as MenuItem[]
}

// Получить блюда по категории
export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return (menuItemsData as MenuItem[]).filter((item) => item.category === categoryId)
}

// Фирменные блюда (для главной страницы ресторана)
export const specialties: MenuItem[] = [
  {
    id: 'specialty-1',
    name: 'Барабуля',
    description: 'Свежая рыба, зажаренная на гриле с лимоном и травами',
    price: 'от 850 ₽',
    category: 'fish',
    image: '/menu/dishes/barabulya.jpg',
  },
  {
    id: 'specialty-2',
    name: 'Шашлык из каре баранины',
    description: 'Маринованное мясо на углях с соусом наршараб',
    price: 'от 1 200 ₽',
    category: 'mains',
    image: '/menu/dishes/shashlyk_iz_kare_baraniny.jpg',
  },
  {
    id: 'specialty-3',
    name: 'Хачапури по-аджарски',
    description: 'Традиционное грузинское блюдо с сыром и яйцом',
    price: 'от 450 ₽',
    category: 'georgian',
    image: '/menu/dishes/khachapuri_po-adjarski.jpg',
  },
  {
    id: 'specialty-4',
    name: 'Тирамису',
    description: 'Нежный десерт с кофе и маскарпоне',
    price: 'от 350 ₽',
    category: 'desserts',
    image: '/menu/dishes/tiramisu.jpg',
  },
]

