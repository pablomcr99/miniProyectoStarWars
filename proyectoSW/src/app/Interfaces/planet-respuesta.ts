import { Planet } from './i-planet';

export interface PlanetRespuesta {
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}
