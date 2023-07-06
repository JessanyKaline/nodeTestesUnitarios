import { Agendamentos } from './../entidades/agendamentos'
import {expect, test} from 'vitest'


test('criar agendamento', () => {
    const agendamento = new Agendamentos({
        paciente: 'Caroline de Melo',
        dataInicio: new Date(),
        horarioInicial:'09:10',
        horarioFinal: '10:00'
    })

    expect(agendamento).toBeInstanceOf(Agendamentos)
    expect(agendamento.paciente).toEqual('Caroline de Melo')
})

test('comparacao horario final e inicial', () => {
   const horarioInicial = '10:10'
   const horarioFinal= '10:00'

   //horarioFinal.setDate(horarioFinal.getDate()+1)

   expect(()=>{
    return new Agendamentos({
        paciente: 'Caroline de Melo',
        dataInicio: new Date(),
        horarioInicial,
        horarioFinal
   })  

    })
})