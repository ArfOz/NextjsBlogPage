// import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SendMail } from './nodemailer';

// import { NextResponse } from 'next/server';
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     console.log('bodyyyyyyyyyy', req.body);
//     // const res = await SendMail();
//     console.log('ressssssss', res);
//     return res.status(200).json({ message: 'Hello from Next.js!' });
// }

export async function POST(req, res) {
    console.log('selammmm');
    return res.json({ success: 'ok' });
}
