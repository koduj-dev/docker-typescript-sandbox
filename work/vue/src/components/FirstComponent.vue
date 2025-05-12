<script setup lang="ts">

import {reactive, type Ref, ref, watchEffect} from "vue";
import { onMounted, onUnmounted, computed } from "vue";
import type {BoxEmitsSetInputsPayload, PersonForm} from "@/types";
import SecondComponent from "@/components/SecondComponent.vue";
import ThirdComponent from "@/components/ThirdComponent.vue";

const numberArray: Ref<number[]> = ref([1,2,3,4,5]);
const url: string = "http://odkazjinam.cz";

const inputValue: Ref<string> = ref("");
const inputValue2: Ref<string> = ref("");

const joinedValues: Ref<string> = computed(() => {
  return inputValue.value + inputValue2.value;
});

const person: PersonForm = reactive({
  name: "",
  age: 0,
});

/**
watch(joinedValues, (newVal, oldVal) => {
  console.warn(newVal, oldVal);
}); */

watchEffect(() => {
  console.error(": ", joinedValues.value);
});

function onButtonClick(): void {
  numberArray.value.push(6);
  numberArray.value.push(7);
  numberArray.value.push(8);
}

onMounted((): void => {
  console.warn("iam mounted...");
})

onUnmounted(() => {
  console.warn("unmounted...");
})

function onClearInputs(): void {
  inputValue.value = "";
  inputValue2.value = "";
}

function onSetInputs(payload: BoxEmitsSetInputsPayload): void {
  inputValue.value = payload.value1;
  inputValue2.value = payload.value2;
}

</script>

<template>
  <div>
    <div>Moje první komponenta</div>

    <ThirdComponent v-model="person" />
    <ThirdComponent v-model="person" />

    <div>
      Jméno: {{ person.name }}<br/>
      Věk: {{ person.age }}
    </div>

    <SecondComponent
      :title="inputValue"
      :content="inputValue2"
      @clearInputs="onClearInputs"
      @setInputs="onSetInputs"
    />

    <div v-text="'Můj text'" />
    <div>{{ 'Můj další text' }}</div>

    <div v-html="'<strong>Text</strong>'" />
    <div>{{ '<strong>Text</strong>' }}</div>

    <div v-show="true">Jsem vidět.</div>
    <div v-show="false">Nejsem vidět.</div>

    <div v-if="false">Jsem vidět s IF.</div>
    <div v-else-if="true && false">Když se splní...</div>
    <div v-else>Nejsem vidět s IF.</div>

    <div v-for="(number, index) in numberArray" :key="index">
      Aktuální číslo {{ number }} je na indexu {{ index }}
    </div>

    <a href="http://mujdokaz.cz">Test </a>
    <a :href="url">Další link</a>

    <div>
      <div>{{ inputValue }}</div>
      <input v-model="inputValue" />

      <div>{{ inputValue2 }}</div>
      <input v-model="inputValue2" />

      <div>{{ joinedValues }}</div>
    </div>

    <button @click.stop="onButtonClick">Moje tlačítko</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
  padding: 5px;
}
</style>
