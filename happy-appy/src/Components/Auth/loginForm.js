import React, { useState } from "react";
import '/home/jess/HappinessApp/happy-appy/src/index.css'

const API_URL = "http://131.181.190.87:3000"

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function submit() {
        const url = `${API_URL}/user/login`
        return fetch(url, {
            method: "POST",
            headers: { accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("token", res.token)
            })
    }

    return (
        <div class="box">
            <div class="container is-max-desktop">
                <div class="container is-max-desktop">
                    <h1 class="title is-1">Login</h1>
                </div>
                <form onSubmit={submit()}>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}                                name="Email"
                                type="email"
                                placeholder="Email"
                                class="input" 
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}                                name="password"
                                type="password"
                                placeholder="password"
                                class="input" 
                                />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <input
                            class="button is-warning"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form >
            </div>
        </div>
    );
}
