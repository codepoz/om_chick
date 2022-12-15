<template>
    <section>
        <div class="pt-10 pb-10 bg-bgthree">
            <div class="container mx-auto">
                <div class="justify-center text-center">
                    <h2 class="text-4xl font-semibold mb-5 text-white">Kunjungi Instagram Kami</h2>
                    <a href="https://www.instagram.com/omchick_crispy" target="_blank" class="rounded-md bg-bgtwo text-white font-semibold pt-2 pb-2 px-2">Ikuti
                        @omchick_crispy</a>
                </div>
            </div>
        </div>
        <div class="pt-10 pb-10 bg-bgone">
            <div class="container mx-auto">
                <div class="text-center">
                    <h2 class="text-4xl font-semibold mb-5">Yukk Kenal Lebih Jauh</h2>
                    <div class="flex items-center justify-center">
                        <YoutubeVue3 ref="youtube" :videoid="play.video_id" :loop="play.loop" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {
        YoutubeVue3
    } from 'youtube-vue3';

    export default {
        name: 'App',
        data() {
            return {
                play: {
                    video_id: "3P1CnWI62Ik",
                    loop: 1
                },
            }
        },
        components: {
            YoutubeVue3,
        },
    }
</script>