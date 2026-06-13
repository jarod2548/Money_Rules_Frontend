import { BudgetMelding } from "./BudgetMelding";
import { SystemNotificationDto } from "./SystemNotificationDto";

export interface BudgetMeldingMessage {
  type: 'budget-melding';
  data: BudgetMelding;
}


export interface SystemNotification {
  type: 'system-notification';
  data: SystemNotificationDto;
}

export type SSEMessage =
  | BudgetMeldingMessage
  | SystemNotification;