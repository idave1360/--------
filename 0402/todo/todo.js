import TodoItem from "./item.js";

// To-Do 항목 관리 모듈 정의
const todoList = {
  items: [], // To-Do 항목 리스트

  // 새로운 항목을 추가하는 메소드
  add(title, dueDate) {
    const item = new TodoItem(title, dueDate);
    this.items.push(item);
    this.save(); // 로컬 스토리지에 항목 리스트 저장
    return item;
  },

  // 항목을 삭제하는 메소드
  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.save(); // 로컬 스토리지에 항목 리스트 저장
    }
  },

  // 항목의 완료 여부를 토글하는 메소드
  toggleComplete(item) {
    item.toggleComplete();
    this.save(); // 로컬 스토리지에 항목 리스트 저장
  },

  // To-Do 항목 리스트를 로컬 스토리지에 저장하는 메소드
  save() {
    try {
      localStorage.setItem("todoList", JSON.stringify(this.items));
    } catch (error) {
      console.error("To-Do 항목을 저장하는 중 에러가 발생했습니다:", error);
    }
  },

  // To-Do 항목 리스트를 로컬 스토리지에서 불러오는 메소드
  load() {
    try {
      const items = localStorage.getItem("todoList");
      if (items) {
        this.items = JSON.parse(items).map(item => new TodoItem(item.title, item.dueDate, item.completed));
      }
    } catch (error) {
      console.error("To-Do 항목을 불러오는 중 에러가 발생했습니다:", error);
    }
  },
};

export { todoList };