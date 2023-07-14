import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PageTitle from '../PageTitle.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(PageTitle, { props: { msg: 'Reading List' } })
    expect(wrapper.text()).toContain('Reading List')
  })
})
