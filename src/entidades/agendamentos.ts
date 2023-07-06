export interface AgendamentosProps{
    paciente: string
    dataInicio: Date
    horarioInicial: string
    horarioFinal: string
}

export class Agendamentos{
   private propriedades: AgendamentosProps

   get paciente () {
    return this.propriedades.paciente
   }

   get dataInicio () {
    return this.propriedades.dataInicio
   }

   get horarioInicial () {
    return this.propriedades.horarioInicial
   }

   get horarioFinal () {
    return this.propriedades.horarioFinal
   }

   constructor(propriedades: AgendamentosProps){
    const {dataInicio, horarioInicial, horarioFinal} = propriedades
     
    
    if (horarioFinal < horarioInicial){
        throw new Error('Horário Inválido')
    }

    this.propriedades = propriedades
   }
}