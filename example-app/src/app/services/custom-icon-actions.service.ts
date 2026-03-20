import { Injectable } from '@angular/core';
import { FieldActionContext, FieldActionService } from '@preforms/angular/core/services';
import { generatePassword } from '../utils/generate-password';

@Injectable({ providedIn: 'root' })
export class CustomFieldActionService extends FieldActionService {
  override execute(action: string, ctx: FieldActionContext) {
    if (action === 'generatePassword') {
      const newPwd = generatePassword(12, {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
      });
      ctx.control.setValue(newPwd);

      return;
    }

    super.execute(action, ctx);
  }
}
