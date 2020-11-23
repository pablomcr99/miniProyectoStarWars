import { Films } from './film-interface';

export interface FilmResponse {
    count: number;
    next: string;
    previous?: any;
    results: Films[];
}
