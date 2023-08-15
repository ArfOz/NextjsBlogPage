import React from 'react';
import { CardType } from '../types';

export default function WeatherCard({ data }: { data: CardType }) {
    return (
        <div className="w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
            {/* <img
                className="object-cover w-full lg:w-40 lg:h-40"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            /> */}
            <div className="pl-2">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {data.name}
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    {data.name}
                </button>
            </div>
        </div>
    );
}
