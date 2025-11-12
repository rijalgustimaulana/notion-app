import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import daisyui from 'daisyui' // 👈 contoh plugin tambahan (optional)

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/views/livewire/**/*.blade.php', // 👈 penting!
    ],


    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: { // 👇 kalau mau warna custom
                primary: '#2E8B57',
                secondary: '#FFD700',
                accent: '#FF69B4',
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('daisyui'),
    ],


    daisyui: {
        themes: ["light", "dark", "forest", "corporate", "lofi"], // 👈 pilih tema yang aktif
    },
}
