<template>
    <div>
        <audio controls :src="blobData" id="audioPlayer"></audio>
    </div>
</template>

<script>
export default {
    name: 'PlaySong',
    props: {
        audioData: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            blobData: '' 
        }
    },
    created() {
        this.blobData = this.createAudioBlob(this.audioData);
    },
    methods: {
        createAudioBlob(base64Data) {
            const binaryString = atob(base64Data);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: 'audio/mpeg' });
            return URL.createObjectURL(blob);
        }
    }
}
</script>

<style>
</style>
