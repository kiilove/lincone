export default function validate({ userEmail }) {
  const err = {};

  if (!userEmail) {
    err.userEmail = "이메일이 입력되지 않았습니다.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail)) {
    err.userEmail = "이메일 형식이 유효하지 않습니다.";
  }

  return err;
}
