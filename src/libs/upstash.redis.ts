import { Redis } from '@upstash/redis';
import { Locale } from '../../i18n-config';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function getViews(lang: Locale) {
    return (await redis.get<Number>(['pageviews', lang].join(':'))) || 0;
}

export async function isNewUser(hash: string, lang: Locale) {
    return await redis.set(['deduplicate', hash, lang].join(':'), true, {
        nx: true,
        ex: 24 * 60 * 60,
    });
}

export async function incrViews(lang: Locale) {
    return await redis.incr(['pageviews', lang].join(':'));
}
