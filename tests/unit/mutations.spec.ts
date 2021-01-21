import { expect } from 'chai'
import { mutations } from '@/store/mutations'
import { state } from '@/store/state'

describe('mutations', () => {
    it('Favourite added successfully', () => {
      const data = {
        title: 'Dummy movie',
        year: 2021,
        imdbId: 'fg990'
      }
      mutations.SET_FAVOURITES(state, data)
      expect(state.favourites.length).to.equal(1)
    })
  })