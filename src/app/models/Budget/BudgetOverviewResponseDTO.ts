import { BudgetIndelingResponseDTO } from "./BudgetIndelingResponseDTO";
import { BudgetResponseDTO } from "./BudgetResponseDTO";

export interface BudgetOverviewResponseDTO {
    budgetDTO : BudgetResponseDTO;
    indelingen : BudgetIndelingResponseDTO[];
    totaalUitgave : number;
}