<template>
  <div>
    <h3>MQTT Example</h3>
    <button class="btn btn-primary" @click="doPublish">doPublish</button>
    
  </div>
</template>

<script>
import mqtt from "mqtt";

export default {
  data() {
    return {
      connection: {
        host: "localhost",
        //port: 9001,
        endpoint: "/",
        clean: true, // Reserved session
        // connectTimeout: 4000, // Time out
        // reconnectPeriod: 4000, // Reconnection interval
        // Certification Information
        // clientId: 'mqttjs_3be2c321',
        // username: 'emqx_test',
        // password: 'emqx_test',
      },
      subscription: {
        topic: "mytopic",
        qos: 0,
      },
      publish: {
        topic: "topic/browser",
        qos: 0,
        payload: '{ "msg": "Hello, I am browser." }',
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
    };
  },
  mounted(){
      console.log('mounted...')

      this.createConnection()
  },
  methods: {
    // Create connection
    createConnection() {
      console.log("start createConnection...");
      // Connect string, and specify the connection method used through protocol
      // ws unencrypted WebSocket connection
      // wss encrypted WebSocket connection
      // mqtt unencrypted TCP connection
      // mqtts encrypted TCP connection
      // wxs WeChat mini app connection
      // alis Alipay mini app connection

      //const { host, port, endpoint, ...options } = this.connection
      const { ...options } = this.connection;

      //const connectUrl = `ws://${host}:${port}${endpoint}`
      // 1883 9001
      const connectUrl = "ws://localhost:9001/";
      console.log("connectUrl:" + connectUrl);
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", (e) => {
        console.log("Connection succeeded!" + JSON.stringify(e));
        this.doSubscribe()
        this.doSubscribe2()        
      });
      this.client.on("error", (error) => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        console.log(`Received message ${message} from topic ${topic}`);
      });
    },
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doSubscribe2() {
      this.client.subscribe('mytopic2', 0, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe2 to topics res", res);
      });
    },
    doPublish(){
        console.log('doPublish')
    }  
  },
};
</script>
