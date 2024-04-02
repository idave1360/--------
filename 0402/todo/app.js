import { todoList } from "./todo.js";

// UI 모듈 정의하기
const app = {
  todoList: document.getElementById("todoList"), // To-Do 항목 리스트 엘리먼트
  form: document.querySelector("form"), // To-Do 항목 입력 폼 엘리먼트
  titleInput: document.getElementById("title"), // 할 일 제목 입력 필드 엘리먼트
  dueDateInput: document.getElementById("dueDate"), // 마감 기한 입력 필드 엘리먼트

  // To-Do 항목을 렌더링하는 메소드
  renderItem(item) {
    const li = document.createElement("li"); // To-Do 항목을 표시하는 li 엘리먼트 생성
    if (item.completed) {
      // 항목이 완료되었는지 여부에 따라 CSS 클래스 추가
      li.classList.add("completed");
    }

    const titleText = document.createElement("div"); // 할 일 제목을 표시하는 div 엘리먼트 생성
    titleText.textContent = `${item.title} - ${item.dueDate}`; // 할 일 제목과 마감 기한을 텍스트로 설정
    titleText.classList.add("title"); // CSS 클래스 추가

    const toggleBtn = document.createElement("button"); // 완료 여부를 토글하는 버튼 엘리먼트 생성
    toggleBtn.textContent = "✔️"; // 텍스트 설정
    toggleBtn.addEventListener("click", () => {
      // 클릭 이벤트 핸들러 등록
      todoList.toggleComplete(item); // 항목의 완료 여부를 토글
      this.renderList(); // To-Do 항목 리스트 렌더링
    });

    const removeBtn = document.createElement("button"); // 항목을 삭제하는 버튼 엘리먼트 생성
    removeBtn.textContent = "🗑️"; // 텍스트 설정
    removeBtn.addEventListener("click", () => {
      // 클릭 이벤트 핸들러 등록
      todoList.remove(item); // 항목 삭제
      this.renderList(); // To-Do 항목 리스트 렌더링
    });

    li.appendChild(toggleBtn); // li 엘리먼트에 toggleBtn 엘리먼트 추가
    li.appendChild(removeBtn); // li 엘리먼트에 removeBtn 엘리먼트 추가
    li.appendChild(titleText); // li 엘리먼트에 titleText 엘리먼트 추가
    this.todoList.appendChild(li); // To-Do 항목 리스트 엘리먼트에 li 엘리먼트 추가
  },

  // To-Do 항목 리스트를 렌더링하는 메소드
  renderList() {
    this.todoList.innerHTML = ""; // 기존 To-Do 항목 리스트 엘리먼트 내용 삭제
    todoList.items.forEach((item) => {
      this.renderItem(item); // To-Do 항목 리스트를 순회하면서 항목을 렌더링
    });
  },

  // 이벤트 핸들러 함수 분리
  handleToggleComplete(item) {
    todoList.toggleComplete(item);
    this.renderList();
  },

  handleRemove(item) {
    todoList.remove(item);
    this.renderList();
  },

  handleSubmit(event) {
    event.preventDefault();
    const title = this.titleInput.value;
    const dueDate = this.dueDateInput.value;

    // 입력 유효성 검사 강화
    if (!title || title.length < 3) {
      alert("제목을 3자 이상 입력해주세요.");
      return;
    }
    if (!dueDate || !/^(\d{4})-(\d{2})-(\d{2})$/.test(dueDate)) {
      alert("마감 기한을 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }

    const item = todoList.add(title, dueDate);
    this.renderItem(item);
    this.titleInput.value = "";
    this.dueDateInput.value = "";
  },

  // 초기화 메소드
  init() {
    try {
      todoList.load();
      this.renderList();
    } catch (error) {
      console.error("To-Do 항목을 불러오는 중 에러가 발생했습니다:", error);
    }

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  },
};

app.init();