<template>
    <section class="pt-10 pb-10">
        <div class="container mx-auto">
            <div class="px-5">
                <h1 class="mb-5 text-4xl text-center font-bold">Lokasi Kami</h1>

                <GMapMap :center="center" :zoom="5" map-type-id="terrain" style="height: 50vw">
                    <GMapCluster :zoomOnClick="true">
                        <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                            :draggable="true" @click="center = m.position" />
                    </GMapCluster>
                </GMapMap>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 0.5165801528896011, lng: 115.6041611046815 },
            markers: [
                {
                    position: {
                        lat: 51.093048,
                        lng: 6.84212,
                    },
                },
                {
                    position: {
                        lat: 51.198429,
                        lng: 6.69529,
                    },
                },
                {
                    position: {
                        lat: 51.165218,
                        lng: 7.067116,
                    },
                },
                {
                    position: {
                        lat: 51.09256,
                        lng: 6.84074,
                    },
                },
            ],
        };
    },
};
</script>