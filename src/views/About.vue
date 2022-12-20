<template>
    <section class="pt-10 pb-10">
        <div class="container mx-auto">
            <div class="px-5">
                <h1 class="mb-5 text-4xl text-center font-bold">Tentang Kami</h1>

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
                            crispy (original, geprek dan saos) dengan cita rasa yang khas dan harga terjangkau bagi
                            semua
                            kalangan masyarakat yang telah teruji hingga puluhan tahun.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                images: [
                    "./slide/slide_1.jpg",
                    "./slide/slide_2.jpg",
                    "./slide/slide_3.jpg",
                    "./slide/slide_5.jpg",
                    "./slide/slide_4.jpg",
                ],
                active: 0
            }
        },
        components: {},
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