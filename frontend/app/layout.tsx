import React from "react";
import MainNavigation from "../components/Navigation/MainNavigation";
import classes from "../styles/home.module.scss";
import "../styles/global.css";

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return <html lang="en">
        <head>
            <title>Todo</title>
        </head>
        <body className={classes.container}>
            <MainNavigation/>
            {children}
        </body>
    </html>
}