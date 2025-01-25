"use client";
import React from "react";

export default function payMe()
{
    return (
    <>
    <div id="donation-container">
        <input id="donation-amount" type="text" placeholder="0.01" />
        <button id="donation-button">Dona</button>
    </div>
    <div id="log"></div>
    </>
    );
}