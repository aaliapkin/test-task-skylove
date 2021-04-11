export const STATUS_ENUM = [
  { id: 0, value: "Новый", color: "#a9d86e" },
  { id: 1, value: "В обработке", color: "#ff6c60" },
  { id: 2, value: "Отложено", color: "#fcb322" },
  { id: 3, value: "Закрыто", color: "#bec3c7" },
]

export const PRIORITY_ENUM = [
  { id: 0, value: "Низкий" },
  { id: 1, value: "Средний" },
  { id: 2, value: "Высокий" },
  { id: 3, value: "Критический" },
]

export const TYPE_ENUM = [
  { id: 0, value: "Жалоба на пользователя" },
  { id: 1, value: "Жалоба на приложение" },
  { id: 2, value: "Жалоба на сайт" },
  { id: 3, value: "Оплата" },
  { id: 4, value: "Функционал" },
  { id: 5, value: "Авторизация" },
  { id: 6, value: "Модерация" },
  { id: 7, value: "Другое" },
]

export default class ItemModel {
  user = {
    name: "",
    email: "",
    avatar: "",
  }
  body_subject = ""
  subject = ""
  status = 0
  priority = 0
  ticket_number = 0

  constructor(data) {
    this.user = data.user
    this.body_subject = data.body_subject
    this.subject = data.subject
    this.status = data.status
    this.priority = data.priority
    this.ticket_number = data.ticket_number
    this.date = data.date
  }

  getStatus() {
    return STATUS_ENUM.find(el => el.id === this?.status)
  }

  getPriority() {
    return PRIORITY_ENUM.find(el => el.id === this?.priority)
  }
}
