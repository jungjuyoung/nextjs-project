import { sendEmail } from '@/app/utils/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
});

export async function POST(
  req: Request,
) {
  // console.log('api/sendEmail/POST req.body', req);
  const body = await req.json();
  // console.log('api/sendEmail/POST req.json()', body, 'bodySchema: ', bodySchema);
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '메일전송에 실패함. 유효하지 않는 이메일 형식 작성.' }), { status: 400 })
  }

  return sendEmail(body)
    .then(() => new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), { status: 200 }))
    .catch(error => {
      console.log(error);
      return new Response(JSON.stringify({ message: '메일전송에 실패함' }), { status: 500 })
    })

}