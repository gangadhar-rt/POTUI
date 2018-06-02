import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedModule } from '../../shared/shared.module';
import { EnrollmentTabComponent } from './employee/tabs/enrollment-tab/enrollment-tab.component';
import { EmpServiceHistoryTabComponent } from './employee/tabs/emp-service-history-tab/emp-service-history-tab.component';
import { ChargeOutRatesTabComponent } from './employee/tabs/charge-out-rates-tab/charge-out-rates-tab.component';
import { RegularPayableRatesTabComponent } from './employee/tabs/regular-payable-rates-tab/regular-payable-rates-tab.component';
import { NonRegularPayableRatesTabComponent } from './employee/tabs/non-regular-payable-rates-tab/non-regular-payable-rates-tab.component';
import { PayDeductionsTabComponent } from './employee/tabs/pay-deductions-tab/pay-deductions-tab.component';
import { BankAccountDetailsTabComponent } from './employee/tabs/bank-account-details-tab/bank-account-details-tab.component';
import { SuperProvidentTabComponent } from './employee/tabs/super-provident-tab/super-provident-tab.component';
import { MedicalHistroyTabComponent } from './employee/tabs/medical-histroy-tab/medical-histroy-tab.component';
import { LeaveandAttendanceTabComponent } from './employee/tabs/leaveand-attendance-tab/leaveand-attendance-tab.component';
import { EmployeeContactDetailsTabComponent } from './employee/tabs/employee-contact-details-tab/employee-contact-details-tab.component';
import { NokdetailsTabComponent } from './employee/tabs/nokdetails-tab/nokdetails-tab.component';
import { RequestforTransferTabComponent } from './employee/tabs/requestfor-transfer-tab/requestfor-transfer-tab.component';
import { ApprovalforTransferTabComponent } from './employee/tabs/approvalfor-transfer-tab/approvalfor-transfer-tab.component';
import { LeaveRequestTabComponent } from './employee/tabs/leave-request-tab/leave-request-tab.component';
import { LeaveApprovalTabComponent } from './employee/tabs/leave-approval-tab/leave-approval-tab.component';
import { PlantequipComponent } from './plantequip/plantequip.component';
import { MaterialsComponent } from './materials/materials.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ResourcesRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ResourcesComponent, EmployeeComponent, EnrollmentTabComponent, EmpServiceHistoryTabComponent,
    ChargeOutRatesTabComponent, RegularPayableRatesTabComponent, NonRegularPayableRatesTabComponent,
    PayDeductionsTabComponent, BankAccountDetailsTabComponent, SuperProvidentTabComponent,
    MedicalHistroyTabComponent, LeaveandAttendanceTabComponent, EmployeeContactDetailsTabComponent,
    NokdetailsTabComponent, RequestforTransferTabComponent, ApprovalforTransferTabComponent,
     LeaveRequestTabComponent, LeaveApprovalTabComponent, PlantequipComponent, MaterialsComponent,
      FixedAssetsComponent]
})
export class ResourcesModule { }
