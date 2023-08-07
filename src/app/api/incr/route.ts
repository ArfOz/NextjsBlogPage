import { incrViews, isNewUser } from '@/libs/upstash.redis';
import { NextResponse } from 'next/server';
import { Locale, i18n } from '../../../../i18n-config';

export interface BodyType {
    lang: Locale;
}

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return new NextResponse('use POST', { status: 405 });
    }

    const body: BodyType = await req.json();
    let lang;
    if ('lang' in body) {
        lang = body['lang'];
    }
    if (!lang) {
        return new NextResponse('Lang not found', { status: 400 });
    }

    let ip;
    if (!ip) {
        const forwardedFor = req.headers.get('x-forwarded-for');

        if (Array.isArray(forwardedFor)) {
            ip = forwardedFor.at(0);
        } else {
            ip = forwardedFor?.split(',').at(0) ?? 'Unknown';
        }
    }

    if (ip) {
        if (Array.isArray(ip)) {
            ip = ip.at(0);
        }
        // Hash the IP in order to not store it directly in your db.
        const buf = await crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(ip)
        );
        const hash = Array.from(new Uint8Array(buf))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');

        // deduplicate the ip for each slug
        const isNew = await isNewUser(hash, lang);
        if (!isNew) {
            return new NextResponse(null, { status: 202 });
        }
    }

    await incrViews(lang);
    return new NextResponse(null, { status: 202 });
}
