export interface IDevice {
    id: number;
    title?: string;
    lat: number;
    lng: number;
    active?: boolean;
    distance?: number;
}