import {expect} from 'chai';
import AppHeader from "@/components/AppHeader.vue";
import {mount} from '@vue/test-utils';
import {WishListItem} from "@/interfaces/WishListItem";


describe('AppHeader.vue', () => {

    const createWrapper = (wishListOverrides = {}) => {
        const $store = {
            state: {
                wishList: {
                    items: [],
                    ...wishListOverrides
                }
            }
        };
        return mount(AppHeader, {
            global: {
                mocks: {
                    $store
                }
            },
        });
    };

    it('Has a company logo', () => {

        const wrapper = createWrapper();

        const selector = '.logo';
        expect(wrapper.get(selector)).to.exist;

    });

    it('Has a favorites button, containing a badge with the amount of wish list items', () => {

        const list: WishListItem[] = [{
            quantity: 3,
            product: {
                "id": 1,
                "title": "My Title",
                "description": "A description of a product",
                "imagePath": "https://dummyimage.com/450x200/DD0/fff",
                "price": {
                    "symbol": "$",
                    "value": 5.00
                }
            }
        }];

        const wrapper = createWrapper({
            items: list,
        });

        const selector = '.favorites-button';
        expect(wrapper.get(selector)).to.exist;

        const badge = '.badge.count';
        expect(wrapper.get(badge).text()).to.contain('3');

    });

})
