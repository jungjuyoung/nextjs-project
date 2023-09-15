import { EmailForm } from '../components/ContactForm'

const sendContactEmail = async (email: EmailForm) => {
  // api route에 이메일 전송을 위한 요청을 보냄 (fetch)
  const res = await fetch('/api/sendEmail', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || '서버 요청에 실패함.')
  }
  return data;
}

export default sendContactEmail