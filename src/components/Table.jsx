import React from "react";

export default function Table() {
    return (
        <>
            <table>
                <ul class="nav nav-tabs  ">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">Active</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item disabled">
                        <a href="#" class="nav-link">Disabled</a>
                    </li>
                </ul>
            </table>
        </>
    )
} 