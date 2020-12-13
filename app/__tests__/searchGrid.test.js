import { shallowMount, createLocalVue  } from '@vue/test-utils'
import VueRouter from 'vue-router'
import SearchGrid from './../src/components/SearchGrid'
import axios from 'axios'

describe('Search page', () => {
    let wrapper = null;

    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter();

        wrapper = shallowMount(SearchGrid, {
            router,
            localVue
        })
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('calls axios with default params', async () => {
        await wrapper.vm.getRoadBikes();
        expect(axios.get).toBeCalledWith("/api/bikes", {
            "params": {
                "numItems": 24,
                "offset": 0,
                "search": undefined
            }
        })
        expect(wrapper.text()).toContain('FUJI')
        expect(wrapper.vm.totalBikes).toBe(26)
        expect(wrapper.vm.currentPage).toBe(1)
    });

    it('updates query and axios call on search input change', async () => {
        await wrapper.findComponent({ref: "searchQuery"}).setValue("cann")
        expect(wrapper.vm.searchQuery).toBe("cann")
        expect(axios.get).toBeCalledWith("/api/bikes", {
            "params": {
                "numItems": 24,
                "offset": 0,
                "search": "cann"
            }
        })
    });

    it('loads second page', async () => {
        await wrapper.findComponent({ref: "button2"}).trigger("click")
        expect(axios.get).toBeCalledWith("/api/bikes", {
            "params": {
                "numItems": 24,
                "offset": 24,
                "search": ""
            }
        })
        expect(wrapper.vm.currentPage).toBe(2)
    });
})