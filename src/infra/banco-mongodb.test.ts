import {describe, test, expect} from 'vitest'
import { BancoMongoDB } from './banco-mongodb'

describe('BancoMongoDB teste', ()=>{
  test('BancoMongoDB', ()=>{
    const bancoMongoDB = new BancoMongoDB()
    expect(bancoMongoDB).toBeDefined()
})
    test('deve salvar um filme', ()=>{
        const bancoMongoDB = new BancoMongoDB()
    })
})
