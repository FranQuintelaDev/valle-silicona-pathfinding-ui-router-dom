import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <div className="container">
            <main>
                <Outlet />
            </main>
        </div>
    )
}
