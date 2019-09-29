export class Utente {
    address: string;
    averagePrice: number;
    averageRating: number;
    clientsPref: Map<string,boolean>;
    cookingTypes: string[];
    email: string;
    id: string;
    isClosedToday: boolean;
    latitude: number;
    longitude: number;
    name: string;
    phone: string;
    photo: string;
    photoBig: string;
    ratingsNumber: number;
    tassello: string;
    timetable: Timetable[];

}

export interface DinnerSchedule {
    endTime: number;
    startTime: number;
}

export interface LunchSchedule {
    endTime: number;
    startTime: number;
}

export interface Timetable {
    day: string;
    dinnerSchedule: DinnerSchedule;
    lunchSchedule: LunchSchedule;
}