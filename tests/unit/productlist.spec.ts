import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProductList from "@/components/ProductList.vue";
import {Product} from "@/interfaces/Product";

describe('ProductList.vue', () => {

  const createWrapper = (propsOverrides = {}) => {
    const list: Product[] = [];
    return shallowMount(ProductList, {
      props: {
        list,
        ...propsOverrides,
      },
    });
  };

  it('Shows a placeholder if product list is empty', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).to.contain('No products found');
  });

  it('Renders products if list is not empty', () => {

    const list: Product[] = [{
      "id": 1,
      "title": "My Title",
      "description": "A description of a product",
      "imagePath": "https://dummyimage.com/450x200/DD0/fff",
      "price": {
        "symbol": "$",
        "value": 5.00
      }
    }];

    const wrapper = createWrapper({
      list: list
    });

    const selector = "ul.product-list > li"
    expect(wrapper.get(selector)).to.exist;

  });

});
