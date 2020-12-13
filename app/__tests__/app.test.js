import { mount} from '@vue/test-utils'
import App from './../src/App.vue'
import axios from 'axios'

describe('App', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(App)
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('renders search page on start', async () => {
        expect(wrapper.html()).toContain('searchBar')
    });
})