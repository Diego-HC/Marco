"use client";

import Image from "next/image";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to /calendar
    window.location.href = "/calendar";

    setLoading(false);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <Image
        src="/marco-logo-color.png"
        alt="Marco Logo"
        width={64}
        height={64}
        className="mb-6 h-16 w-16"
      />

      <h1 className="mb-6 text-2xl font-bold text-gray-700">Iniciar Sesión</h1>
      <form
        onSubmit={handleSubmit}
        className="w-80 rounded-lg bg-white p-4 shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Contraseña
          </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-pink-500 py-2 text-white transition hover:bg-pink-600"
          disabled={loading}
        >
          {loading ? "Iniciando..." : "Iniciar Sesión"}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        ¿No tienes una cuenta?{" "}
        <a href="/signup" className="text-pink-500">
          Regístrate
        </a>
      </p>
    </div>
  );
};

export default function LoginPage() {
  return <LoginForm />;
}
