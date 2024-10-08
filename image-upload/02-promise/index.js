const fetchData = async () => {
  // api 보내기 요청

  const result = await new Promise((성공시함수, 실패시함수) => {
    setTimeout(() => {
      try {
        console.log("이미지 받아왔당"); // 5초 뒤에 이미지 받아옴
        성공시함수("성공");
      } catch (error) {
        실패시함수("실패");
      }
    }, 5000);

    console.log("받아온 강아지.jpg 브라우저에 전달");
  });
  console.log(result);
};

fetchData();
