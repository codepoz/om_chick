<template>
    <section class="pt-10 pb-10">
        <div class="container mx-auto">
            <h1 class="text-4xl text-center font-bold">Menu Kami</h1>

            <!-- begin:: bakar penyet -->
            <div class="px-5 py-7">
                <h2 class="font-bold mb-5 text-center text-2xl">Bakar Penyet</h2>

                <div class="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in bakar_penyet" :key="rows.name"
                        class="px-2 py-2 my-auto rounded-md hover:shadow-xl hover:duration-500">
                        <img :src="rows.images" :title="rows.name"
                            class="py-2 mx-auto transition ease-in hover:-translate-y-1 hover:scale-110 duration-200">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-center text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end:: bakar penyet -->
            <!-- begin:: crispy -->
            <div class="px-5 py-7">
                <h2 class="font-bold mb-5 text-center text-2xl">Crispy</h2>

                <div class="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in crispy" :key="rows.name"
                        class="px-2 py-2 my-auto rounded-md hover:shadow-xl hover:duration-500">
                        <img :src="rows.images" :title="rows.name"
                            class="py-2 mx-auto transition ease-in hover:-translate-y-1 hover:scale-110 duration-200">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-center text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end:: crispy -->
            <!-- begin:: geprek -->
            <div class="px-5 py-7">
                <h2 class="font-bold mb-5 text-center text-2xl">Bakar Penyet</h2>

                <div class="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in geprek" :key="rows.name"
                        class="px-2 py-2 my-auto rounded-md hover:shadow-xl hover:duration-500">
                        <img :src="rows.images" :title="rows.name"
                            class="py-2 mx-auto transition ease-in hover:-translate-y-1 hover:scale-110 duration-200">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-center text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end:: geprek -->
            <!-- begin:: saos -->
            <div class="px-5 py-7">
                <h2 class="font-bold mb-5 text-center text-2xl">Crispy</h2>

                <div class="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in crispy" :key="rows.name"
                        class="px-2 py-2 my-auto rounded-md hover:shadow-xl hover:duration-500">
                        <img :src="rows.images" :title="rows.name"
                            class="py-2 mx-auto transition ease-in hover:-translate-y-1 hover:scale-110 duration-200">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-center text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end:: saos -->
            <!-- begin:: drink -->
            <div class="px-5 py-7">
                <h2 class="font-bold mb-5 text-center text-2xl">Crispy</h2>

                <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="rows in drink" :key="rows.name"
                        class="px-2 py-2 my-auto rounded-md hover:shadow-xl hover:duration-500">
                        <img :src="rows.images" :title="rows.name"
                            class="py-2 mx-auto transition ease-in hover:-translate-y-1 hover:scale-110 duration-200">
                        <div class="px-6 py-4">
                            <p class="font-semibold text-lg text-center text-textone">{{ rows.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end:: drink -->
        </div>
    </section>
</template>

<script setup>
    const bakar_penyet = [{
            images: './../../menus/food/bakar_penyet/paket_ayam_bakar.png',
            name: 'Paket Ayam Bakar',
        },
        {
            images: './../../menus/food/bakar_penyet/paket_ayam_penyet.png',
            name: 'Paket Ayam Penyet',
        },
    ]

    const crispy = [{
            images: './../../menus/food/crispy/paket_om_1.png',
            name: 'Paket Om 1',
        },
        {
            images: './../../menus/food/crispy/paket_om_2.png',
            name: 'Paket Om 2',
        },
        {
            images: './../../menus/food/crispy/paket_om_3.png',
            name: 'Paket Om 3',
        },
    ]

    const geprek = [{
            images: './../../menus/food/geprek/crispy_geprek.png',
            name: 'Crispy Geprek',
        },
        {
            images: './../../menus/food/geprek/geprek_bakar.png',
            name: 'Geprek Bakar',
        },
        {
            images: './../../menus/food/geprek/geprek_keju.png',
            name: 'Geprek Keju',
        },
        {
            images: './../../menus/food/geprek/geprek_moza.png',
            name: 'Geprek Moza',
        },
        {
            images: './../../menus/food/geprek/mie_geprek.png',
            name: 'Mie Geprek',
        },
    ]

    const saos = [{
            images: './../../menus/food/saos/crispy_asam_manis.png',
            name: 'Crispy Asam Manis',
        },
        {
            images: './../../menus/food/saos/crispy_extra_pedas.png',
            name: 'Crispy Extra Pedas',
        },
        {
            images: './../../menus/food/saos/crispy_lada_hitam.png',
            name: 'Crispy Lada Hitam',
        },
        {
            images: './../../menus/food/saos/crispy_rica_rica.png',
            name: 'Crispy Rica-rica',
        },
        {
            images: './../../menus/food/saos/scrispy_saos_keju.png',
            name: 'Crispy Saos Keju',
        },
        {
            images: './../../menus/food/saos/scrispy_super_pedas.png',
            name: 'Crispy Super Pedas',
        },
    ]

    const drink = [{
            images: './../../menus/drink/air_botol.png',
            name: 'Air Botol',
        },
        {
            images: './../../menus/drink/air_gelas.png',
            name: 'Air Gelas',
        },
        {
            images: './../../menus/drink/es_teh.png',
            name: 'Es Teh',
        },
        {
            images: './../../menus/drink/green_tea.png',
            name: 'Green Tea',
        },
        {
            images: './../../menus/drink/thai_tea.png',
            name: 'Thai Tea',
        },
        {
            images: './../../menus/drink/lemon_tea.png',
            name: 'Lemon Tea',
        },
        {
            images: './../../menus/drink/jeruk_manis.png',
            name: 'Jeruk Manis',
        },
        {
            images: './../../menus/drink/jus_alpukat.png',
            name: 'Jus Alpukat',
        },
        {
            images: './../../menus/drink/jus_apel.png',
            name: 'Jus Apel',
        },
        {
            images: './../../menus/drink/jus_buah_naga.png',
            name: 'Jus Buah Naga',
        },
        {
            images: './../../menus/drink/jus_lemon.png',
            name: 'Jus Lemon',
        },
        {
            images: './../../menus/drink/jus_melon.png',
            name: 'Jus Melon',
        },
        {
            images: './../../menus/drink/jus_sirsak.png',
            name: 'Jus Sirsak',
        },
    ]
</script>