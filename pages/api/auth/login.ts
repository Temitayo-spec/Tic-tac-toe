import type { NextApiRequest, NextApiResponse } from 'next';
import { StreamChat } from 'stream-chat';
import bcrypt from 'bcrypt';

const apiKey = 'udmu9745hbke';
const apiSecret =
  'kcteb2a9gsv2fgm3sn3whbgenerhp9t555qnu9bv7hun59ebf54jb6pa8awceuaf';
const serverClient = new StreamChat(apiKey, apiSecret);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, password } = req.body;
    const { users } = await serverClient.queryUsers({ name: username });
    if (!users.length) {
      throw Error('User not found');
    }

    const success = bcrypt.compare(password, users[0].hashedPassword as string);
    if (await success) {
      const token = serverClient.createToken(users[0].id);
      res.status(200).json({
        token,
        username,
        email: users[0].email,
        userId: users[0].id,
        hashedPassword: users[0].hashedPassword,
      });
    } else {
      throw Error('Incorrect password');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}
