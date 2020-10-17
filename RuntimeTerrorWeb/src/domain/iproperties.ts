import { IPhotos } from './iphotos';

export interface IProperties {
    propertyId: number;
    propertyType: string;
    area: string;
    postedBy: string;
    address: string;
    ownerName: string;
    costPerDay: string;
    isOccupied: string;
    occupiedBy: string;
    propertyPhotos: IPhotos[];
}
