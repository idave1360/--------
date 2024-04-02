const postURL = "https://jsonplaceholder.typicode.com/todos";
// 비동기 함수 처리
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        fetch(postURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    });