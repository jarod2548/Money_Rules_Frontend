export interface TransactieResponseDTO{
    id :string;
    beschrijving : string;
    aantal : number;
    datum : string;
    categorieNaam? : string;
}