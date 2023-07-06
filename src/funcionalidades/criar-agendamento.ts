import { Agendamentos } from "../entidades/agendamentos"
import { AgendamentosRepositorio } from "../repositorios/repositorio-agendamento"


interface CRequest{
    paciente: string,
    dataInicio: Date,
    horarioInicial: string,
    horarioFinal: string
}

type CResponse = Agendamentos


export class CriarAgendamento{
    constructor(
        private agendamentoRepositorio: AgendamentosRepositorio
    ){}

    async execute({
        paciente, 
        dataInicio, 
        horarioInicial,
        horarioFinal
    }: CRequest): Promise<CResponse>{
        const procuraConflitoAgendamento = await this.agendamentoRepositorio.procuraConflitoAgendamento(
            dataInicio,
            horarioInicial,
            horarioFinal
        )

        if (procuraConflitoAgendamento){
            throw new Error ('Outro agendamento na mesma data')
        }

        const agendamento = new Agendamentos({
            paciente,
            dataInicio,
            horarioInicial,
            horarioFinal
        })

        await this.agendamentoRepositorio.criar(agendamento)
        
        return agendamento 
    }
}