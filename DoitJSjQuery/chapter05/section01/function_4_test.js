var rightId = "korea";
var rightPw = "1234";
function login(id, pw) {
  if (id == rightId) {
    if (pw == rightPw) {
      document.write(id + "님 환영합니다");
    } else {
      alert("잘못된 비밀번호입니다");
    }
  } else {
    alert("존재하지 않는 아이디입니다");
  }
}

var userId = prompt("아이디를 입력하세요", "");
var userPw = prompt("패스워드를 입력하세요", "");

login(userId, userPw);
