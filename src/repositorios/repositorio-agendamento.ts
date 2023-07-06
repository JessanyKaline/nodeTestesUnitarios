import { Agendamentos } from '../entidades/agendamentos'

export interface AgendamentosRepositorio {
  criar(agendamento: Agendamentos): Promise<void>
  salvar(agendamento: Agendamentos): Promise<void>
  procuraConflitoAgendamento(
    dataInicio: Date,
    horarioInicio: string,
    horarioFinal: string
  ): Promise<Agendamentos | null>
}
