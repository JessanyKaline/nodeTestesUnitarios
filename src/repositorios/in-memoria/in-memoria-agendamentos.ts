import { Agendamentos } from '../../entidades/agendamentos'
import { AgendamentosRepositorio } from '../repositorio-agendamento'

export class InMemoriaAgendamentosRepositorio
  implements AgendamentosRepositorio
{
  public itens: Agendamentos[] = []

  async criar(agendamento: Agendamentos): Promise<void> {
    this.itens.push(agendamento)
  }

  async salvar(agendamento: Agendamentos): Promise<void> {}

  async procuraConflitoAgendamento(
    dataInicio: Date,
    horarioInicial: string,
    horarioFinal: string
  ): Promise<Agendamentos | null> {
    const procuraConflito = this.itens.find((agendamento) => {
      return (
        agendamento.dataInicio.getTime() === dataInicio.getTime() &&
        (agendamento.horarioInicial === agendamento.horarioInicial &&
          agendamento.horarioFinal === agendamento.horarioFinal)
      )
    })

    if (!procuraConflito) {
      return null
    }

    return procuraConflito
  }
}
