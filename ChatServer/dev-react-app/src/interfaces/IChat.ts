export interface IChat{
  id: number;
  ownerId: number;
  message: string;
  date: Date;
  pending: boolean;
  trackId: number;
}