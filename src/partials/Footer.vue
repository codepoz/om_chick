<template>
    <section class="pt-5 pb-5">
        <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-4">
                <div class="pt-5 pb-5">
                    <div class="py-2 flex items-center justify-center">
                        <img src="./../assets/images/logo.png" alt="logo" width="150">
                    </div>
                </div>
                <div class="pt-5 pb-5">
                    <h2 class="font-semibold text-2xl text-center text-textone">Hubungi Kami</h2>
                    <div class="py-2 flex items-center justify-center">
                        <div class="grid gap-2 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
                            <a v-for="row in contact" :key="row.icon" :href="row.href" target="_blank"
                                class="text-4xl">
                                <font-awesome-icon :icon="row.icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-5 pb-5 bg-bgfour">
        <div class="container mx-auto">
            <div class="py-2 flex items-center justify-center">
                <p class="text-center text-gray-500">
                    &copy; 2022 Omchick Crispy Chicken.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
    const contact = [{
            icon: 'fa-brands fa-instagram',
            href: 'https://www.instagram.com/omchick_crispy',
        },
        {
            icon: 'fa-brands fa-facebook',
            href: 'https://web.facebook.com/omchick_crispy',
        },
        {
            icon: 'fa-brands fa-whatsapp',
            href: 'https://wa.me/6285242907595',
        },
        {
            icon: 'fa-solid fa-envelope',
            href: '',
        },
    ]
</script>