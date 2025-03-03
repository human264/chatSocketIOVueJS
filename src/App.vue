<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'

import {ref} from 'vue'
import axios from "axios";
import {io} from "socket.io-client";

</script>

<template>
  <div class="container">
    <router-view/>
  </div>

</template>

