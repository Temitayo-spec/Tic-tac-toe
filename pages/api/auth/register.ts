import type { NextApiRequest, NextApiResponse } from 'next';
import { StreamChat } from 'stream-chat';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const apiKey = 'udmu9745hbke';
const apiSecret = process.env.NEXT_PUBLIC_STREAM_API_SECRET || '';
const serverClient = new StreamChat(apiKey, apiSecret);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();
    const token = serverClient.createToken(userId);
    res.status(200).json({
      userId,
      token,
      username,
      email,
      hashedPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}
