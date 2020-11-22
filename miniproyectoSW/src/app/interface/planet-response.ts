import { Planet } from './planet-interface';

export interface PlanetRespuesta {
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}
