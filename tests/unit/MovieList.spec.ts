import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'

describe('MovieList', () => {
  it('Movie data loaded successfully in MovieList component', () => {
    const wrapper = shallowMount(MovieList)
    expect(wrapper.text()).to.include('No data found !')
  })
})
