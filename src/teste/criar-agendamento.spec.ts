import { describe, it, expect } from 'vitest'
import { CriarAgendamento } from '../funcionalidades/criar-agendamento'
import { Agendamentos } from '../entidades/agendamentos'
import { getFuturaData } from './utils/data-futura'
import { InMemoriaAgendamentosRepositorio } from '../repositorios/in-memoria/in-memoria-agendamentos'

describe('Criar Agendamento', () => {
  it('deveria ser possivel criar um agendamento', () => {
    const dataInicio = getFuturaData('2023-05-28')
    const horarioInicial = '09:00'
    const horarioFinal = '10:00'

    const agendamentoRepositorio = new InMemoriaAgendamentosRepositorio()
    const criarAgendamento = new CriarAgendamento(agendamentoRepositorio)

    expect(
      criarAgendamento.execute({
        paciente: 'Caroline de Melo',
        dataInicio,
        horarioInicial,
        horarioFinal,
      })
    ).resolves.toBeInstanceOf(Agendamentos)
  })
})

it('Não quero criar agendamento na mesma data', async () => {
  const dataInicio = getFuturaData('2023-06-25')
  const horarioInicial = '09:00'
  const horarioFinal = '10:00'

  const agendamentoRepositorio = new InMemoriaAgendamentosRepositorio()
  const criarAgendamento = new CriarAgendamento(agendamentoRepositorio)

  await criarAgendamento.execute({
    paciente: 'Ana Pereira',
    dataInicio,
    horarioInicial,
    horarioFinal,
  })

  expect(
    criarAgendamento.execute({
      paciente: 'Ana Pereira',
      dataInicio,
      horarioInicial,
      horarioFinal,
    })).rejects.toBeInstanceOf(Error)
})
