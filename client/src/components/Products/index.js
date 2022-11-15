import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";



export default function CardComponent() {
    const posts = [
        {
            title: "STATIC",
            img: "",
            content: "Basic Web pages for small businesses"
        },
        {
            title: "DYNAMIC",
            img: "",
            content: "Web pages with dynamic content"
        },
        {
            title: "DYNAMIC + DB",
            img: "",
            content: "Web pages with dynamic content and data based on"
        },
        {
            title: "DYNAMIC + DB + STRIPE",
            img: "",
            content: "For E-Commerce Web sites"
        },
    ];
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Inquire
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}