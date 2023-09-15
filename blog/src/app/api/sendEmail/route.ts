import { NextResponse } from 'next/server';
import yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})
export async function POST(
  req: Request,
) {
  if (!bodySchema.isValidSync(req.body)) {
    return new NextResponse('유효하지 않는 포맷', { status: 400 })
  }
  const { from, subject, message } = req.body

}