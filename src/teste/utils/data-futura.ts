import {setYear, parseISO} from 'date-fns'

/**
 * Recebe '2023-05-28' retorna '2024-05-28'
 * @param data 
 */
export function getFuturaData(data: string): Date {
    return setYear(parseISO(data), new Date().getUTCFullYear()+1)

}