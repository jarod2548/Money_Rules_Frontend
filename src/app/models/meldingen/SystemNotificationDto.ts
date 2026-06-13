export class SystemNotificationDto {
  constructor(
    public budgetID: string,
    public budgetNaam: string,
    public overschredenAantal: number
  ) {}

  static fromJson(json: any): SystemNotificationDto {
    return new SystemNotificationDto(
      json.budgetID,
      json.budgetNaam,
      json.overschredenAantal
    );
  }
}