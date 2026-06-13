export class BudgetMelding {
  constructor(
    public budgetID: string,
    public budgetNaam: string,
    public overschredenAantal: number
  ) {}

  static fromJson(json: any): BudgetMelding {
    return new BudgetMelding(
      json.budgetID,
      json.budgetNaam,
      json.overschredenAantal
    );
  }
}