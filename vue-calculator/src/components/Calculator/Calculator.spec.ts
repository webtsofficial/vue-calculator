import { shallowMount } from "@vue/test-utils";
import Calculator from "/src/components/Calculator/Calculator.vue";

describe("Calculator.vue", () => {
    it('should divide 9 and 5', () => {
        const wrapper = shallowMount(Calculator);
    });
});