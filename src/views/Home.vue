<template>
    <section class="relative overflow-hidden pb-2/3">
        <img src="./../assets/images/bg.png" alt="" class="absolute h-full w-full object-cover bg-cover" />

        <div class="absolute flex h-full">
            <div class="m-auto">
                <div class="pt-5 pb-5 px-5 w-3/5">
                    <div class="mt-5 mb-5">
                        <h1 class="text-textone font-semibold text-1xl sm:text-4xl md:text-6xl lg:text-8xl">Om Chick Bukan Ayam Crispy
                            Biasa !!</h1>
                    </div>
                    <div class="mt-5 mb-5">
                        <a href="#" class="rounded-md bg-bgtwo text-white font-semibold py-2 px-2 text-xs sm:text-sm md:text-sm lg:text-sm">Lihat
                            selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10">
        <div class="container mx-auto">
            <div class="justify-center text-center">
                <h2 class="text-4xl font-semibold mb-5">Tentang Kami</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, cupiditate voluptates? Quod,
                    recusandae. Eius a
                    porro voluptate, quod inventore neque atque mollitia saepe minus, nostrum reprehenderit facilis
                    odit
                    facere iusto.
                </p>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10 bg-bgfour">
        <div class="container mx-auto">
            <div class="justify-center text-center">
                <h2 class="text-4xl font-semibold mb-5">Produk Kami</h2>
                <div class="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in menus" :key="rows.name" class="px-2 py-2">
                        <img :src="rows.images" :title="rows.name">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
                <a href="/produk" target="_blank"
                    class="rounded-md bg-bgtwo text-white font-semibold pt-2 pb-2 px-3">Lihat Semua Menu</a>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10 bg-bgthree">
        <div class="container mx-auto">
            <div class="justify-center text-center">
                <h2 class="text-4xl font-semibold mb-5 text-white">Kunjungi Instagram Kami</h2>
                <a href="https://www.instagram.com/omchick_crispy" target="_blank"
                    class="rounded-md bg-bgtwo text-white font-semibold pt-2 pb-2 px-3">Ikuti
                    @omchick_crispy</a>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10 bg-bgone">
        <div class="container mx-auto">
            <div class="text-center">
                <h2 class="text-4xl font-semibold mb-5">Yukk Kenal Lebih Jauh</h2>
                <div class="flex items-center justify-center">
                    <YoutubeVue3 ref="youtube" :videoid="play.video_id" :loop="play.loop" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const menus = [{
            images: './../../menus/food/crispy/paket_om_1.png',
            name: 'Paket Om 1',
        },
        {
            images: './../../menus/food/geprek/mie_geprek.png',
            name: 'Mie Geprek',
        },
        {
            images: './../../menus/food/saos/crispy_saos_keju.png',
            name: 'Crispy Saos Keju',
        },
        {
            images: './../../menus/food/bakar_penyet/paket_ayam_bakar.png',
            name: 'Paket Ayam Bakar',
        },
    ]
</script>

<script>
    import {
        YoutubeVue3
    } from 'youtube-vue3';

    export default {
        name: 'App',
        data() {
            return {
                play: {
                    video_id: "K17df81RL9Y",
                    loop: 1
                },
            }
        },
        components: {
            YoutubeVue3,
        },
    }
</script>