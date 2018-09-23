import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator.vue', () => {
    it('divides 6 and 3', () => {
        const wrapper = shallowMount(Calculator);
        wrapper.vm.divide();
        let result = wrapper.vm.operator(6,3);
        expect(result).toBe(2);
    });
});