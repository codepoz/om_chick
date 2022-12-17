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
            <div class="justify-center">
                <h2 class="font-semibold mb-5 text-center text-2xl lg:text-4xl">Tentang Kami</h2>

                <div class="gap-4 grid lg:grid-cols-2">
                    <div class="mx-2 my-2">
                        <div class="relative slide">
                            <div
                                class="carousel-indicators absolute bottom-0 flex bg-yellow-100 h-24 w-full justify-center items-center">
                                <ol class="z-50 flex w-4/12 justify-center">
                                    <li v-for="(img, i) in images" :key="i"
                                        class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2">
                                    </li>
                                </ol>
                            </div>
                            <div class="carousel-inner relative overflow-hidden w-full">
                                <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i"
                                    :class="`${active === i ? 'active' : 'left-full'}`"
                                    class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
                                    <img class="block w-full" :src="img" alt="First slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mx-2 my-2">
                        <p class="text-textone font-bold text-lg text-justify">
                            Om Chick Crispy Chicken merupakan salah satu rumah makan yang menyediakan banyak varian ayam
                            crispy (original, geprek dan saos)dengan cita rasa yang khas dan harga terjangkau bagi semua
                            kalangan masyarakat yang telah teruji hingga puluhan tahun.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10 bg-bgfour">
        <div class="container mx-auto">
            <div class="justify-center text-center">
                <h2 class="font-semibold mb-5 text-2xl lg:text-4xl">Menu Kami</h2>
                <div class="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in menus" :key="rows.name" class="px-2 py-2">
                        <img :src="rows.images" :title="rows.name">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
                <a href="/menu" class="rounded-md bg-bgtwo text-white font-semibold pt-2 pb-2 px-3">Lihat Semua Menu</a>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10 bg-bgthree">
        <div class="container mx-auto">
            <div class="justify-center text-center">
                <h2 class="font-semibold mb-5 text-white text-2xl lg:text-4xl">Kunjungi Instagram Kami</h2>
                <a href="https://www.instagram.com/omchick_crispy" target="_blank" class="rounded-md bg-bgtwo text-white font-semibold pt-2 pb-2 px-3">Ikuti @omchick_crispy</a>
            </div>
        </div>
    </section>

    <section class="pt-10 pb-10 bg-bgone">
        <div class="container mx-auto">
            <div class="text-center">
                <h2 class="font-semibold mb-5 text-2xl lg:text-4xl">Yukk Kenal Lebih Jauh</h2>
                <div class="flex items-center justify-center">
                    <YoutubeVue3 ref="youtube" :videoid="play.video_id" :loop="play.loop" />
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .left-full {
        left: -100%;
    }

    .carousel-item {
        float: left;
        position: relative;
        display: block;
        width: 100%;
        margin-right: -100%;
        backface-visibility: hidden;
    }

    .carousel-item.active {
        left: 0;
    }
</style>

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
                images: [
                    "./slide/slide_1.jpg",
                    "./slide/slide_2.jpg",
                    "./slide/slide_3.jpg",
                ],
                active: 0
            }
        },
        components: {
            YoutubeVue3,
        },
        mounted() {
            let i = 0;
            setInterval(() => {
                if (i > this.images.length - 1) {
                    i = 0;
                }
                this.active = i;
                i++;
            }, 3000);
        }
    }
</script>