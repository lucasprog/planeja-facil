import {mount} from "@vue/test-utils";

import { expect, test, describe  } from 'vitest'

import PlButton from '../../src/components/Libraries/PlButton.vue'

describe('PlButton.vue', () => {
  test('renders PlButton it`s correct', () => {
    const msg = 'new message'
    const wrapper = mount(PlButton, {
      type: 'default', 
      nativeType: 'submit',
      content: "msg"
    })
    expect(wrapper.find("button").exists()).toBe(true);
  })
})
