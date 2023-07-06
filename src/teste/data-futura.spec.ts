import {expect,test} from 'vitest'
import {getFuturaData} from './utils/data-futura'

test('Espero criar data futura', ()=>{
    const ano = new Date().getFullYear()

    expect(getFuturaData(`${ano}-05-28`).getFullYear()).toEqual(2024)
})