import {createLocalVue, mount} from '@vue/test-utils'
import ItemPage from './../src/components/ItemPage'
import VueRouter from "vue-router";
import axios from "axios";

describe('Item Page', () => {
    let wrapper = null;

    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter({
            route: { path: '/bikes/:id', name: 'comparison', component: ItemPage },
            mode: 'abstract'
        });

        router.push({ name: 'comparison', params: { id: 3 } })

        wrapper = mount(ItemPage, {
            router,
            localVue
        })

        jest.resetModules();
        jest.clearAllMocks();
    });

    it('loads item page using id route param', async () => {
        await wrapper.vm.getComparisons();
        expect(axios.get).toBeCalledWith("/api/bikes/3")
        expect(wrapper.text()).toContain('VITUS')
    });

    it('computes dictionary of colors and sizes', async () => {
        await wrapper.vm.getComparisons();
        expect(Object.keys(wrapper.vm.colorSizes)).toHaveLength(1);
        expect(wrapper.vm.colorSizes["Anthracite"].size).toBe(6);
    });

    it('select color generates adds sizes options', async () => {
        await wrapper.vm.getComparisons();
        const options = wrapper.find('select').findAll('option')
        await options.at(0).setSelected()

        expect(wrapper.find('option:checked').element.value).toBe('Anthracite')
        expect(wrapper.vm.color).toBe('Anthracite')
        expect(wrapper.findAll('select').at(1).findAll('option')).toHaveLength(6)
    });
})