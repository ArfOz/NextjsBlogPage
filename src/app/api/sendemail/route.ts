import { MailData } from './types';
// import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SendMail } from './nodemailer';
import { NextResponse } from 'next/server';
import { corsHeaders } from '@/cors';

// import { NextResponse } from 'next/server';
export async function POST(req: Request) {
    const data: MailData = await req.json();
    const res = await SendMail(data);

    return NextResponse.json(
        { Data: res },
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers':
                    'Origin, Content-Type, Authorization',
                'Access-Control-Allow-Credentials': 'true',
            },
        }
    );
}
