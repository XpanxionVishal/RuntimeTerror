import { IPhotos } from './iphotos';

export interface IProperties {
    propertyId: number;
    propertyType: string;
    propertyTypeId: number;
    area: string;
    areaId: number;
    postedBy: string;
    postedByUserId: number;
    address: string;
    ownerName: string;
    costPerDay: number;
    isOccupied: boolean;
    occupiedBy: string;
    propertyPhotos: IPhotos[];
}
