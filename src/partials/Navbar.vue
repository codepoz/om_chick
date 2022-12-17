<template>
    <div>
        <div class="bg-bgone">
            <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <a href="/">
                        <img src="./../assets/images/logo.png" alt="logo" class="w-20" />
                    </a>
                    <!-- begin:: mobile menu button -->
                    <div @click="showMenu = !showMenu" class="flex md:hidden">
                        <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <!-- end:: mobile menu button -->
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <li v-for="item in navigation" :key="item.name" class="text-sm font-bold text-white hover:text-textone">
                        <a :href="item.href"><span>{{ item.name }}</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
const navigation = [{
        name: 'Home',
        href: '/',
    },
    {
        name: 'Menu Kami',
        href: '/menu',
    },
    {
        name: 'Lokasi Kami',
        href: '/location',
    },
    {
        name: 'Tentang Kami',
        href: '#',
    },
    {
        name: 'Kontak Kami',
        href: '#',
    },
]
</script>

<script>
    export default {
        data() {
            return {
                showMenu: false,
            };
        },
    };
</script>