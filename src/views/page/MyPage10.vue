<template>
  <div class="row">
    <h4>Http Live Streaming Example</h4>
    <p>
      htttp://localhsot:8080/sample01/sample.m3u8 hls.jsを利用してアクセスする
    </p>
    <video
      style="height:400px"
      class="row col-12"
      id="video"
      controls
      muted
      autoplay
      playsinline
      loop
    ></video>
    <button class="btn btn-primary mt-2 mr-auto ml-auto" @click="this.videoPlay">
      reload and video play again
    </button>
  </div>
</template>

<script>
import Hls from "hls.js";

export default {
  data: () => {
    return {
      hls: new Hls(),
    };
  },
  mounted: function () {
    this.videoPlay();
  },
  methods: {
    videoPlay() {
      const video = document.getElementById("video");
      //const videoUrl ="http://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
      //別のサーバーへアクセスする場合は、CORSの設定が必要になります。
      //const videoUrl = "http://localhost:8080/sample01/sample.m3u8";
      //const videoUrl = "https://my-vod-example.s3-ap-northeast-1.amazonaws.com/sample01/sample.m3u8";
      const videoUrl = "https://my-vod-example.s3-ap-northeast-1.amazonaws.com/sample02/IMG_8355.m3u8";

      if (Hls.isSupported()) {
        //this.hls = new Hls();
        this.hls.loadSource(videoUrl);
        this.hls.attachMedia(video);
        video.play();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoUrl;
        video.addEventListener("canplay", () => {
          video.play();
        });
      }
    },
  },
};
</script>