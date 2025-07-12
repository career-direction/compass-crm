// Pure validation logic functions
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^\S+@\S+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

export function isPasswordMatching(password: string, confirmPassword: string): boolean {
  return password === confirmPassword;
}

export function isValidName(name: string): boolean {
  return name.length >= 2;
}

export function isEmpty(value: string): boolean {
  return !value || value.trim().length === 0;
}

// Error message constants
export const ERROR_MESSAGES = {
  EMAIL_REQUIRED: 'メールアドレスを入力してください',
  EMAIL_INVALID: '正しいメールアドレスを入力してください',
  PASSWORD_REQUIRED: 'パスワードを入力してください',
  PASSWORD_TOO_SHORT: 'パスワードは8文字以上で入力してください',
  PASSWORD_CONFIRMATION_REQUIRED: 'パスワード確認を入力してください',
  PASSWORD_MISMATCH: 'パスワードが一致しません',
  NAME_REQUIRED: (fieldName: string) => `${fieldName}を入力してください`,
  NAME_TOO_SHORT: (fieldName: string) => `${fieldName}は2文字以上で入力してください`,
} as const;

// Validation functions with error messages for form integration
export function validateEmail(email: string): string | null {
  if (isEmpty(email)) {
    return ERROR_MESSAGES.EMAIL_REQUIRED;
  }
  
  if (!isValidEmail(email)) {
    return ERROR_MESSAGES.EMAIL_INVALID;
  }
  
  return null;
}

export function validatePassword(password: string): string | null {
  if (isEmpty(password)) {
    return ERROR_MESSAGES.PASSWORD_REQUIRED;
  }
  
  if (!isValidPassword(password)) {
    return ERROR_MESSAGES.PASSWORD_TOO_SHORT;
  }
  
  return null;
}

export function validatePasswordConfirmation(password: string, confirmPassword: string): string | null {
  if (isEmpty(confirmPassword)) {
    return ERROR_MESSAGES.PASSWORD_CONFIRMATION_REQUIRED;
  }
  
  if (!isPasswordMatching(password, confirmPassword)) {
    return ERROR_MESSAGES.PASSWORD_MISMATCH;
  }
  
  return null;
}

export function validateName(name: string, fieldName: string): string | null {
  if (isEmpty(name)) {
    return ERROR_MESSAGES.NAME_REQUIRED(fieldName);
  }
  
  if (!isValidName(name)) {
    return ERROR_MESSAGES.NAME_TOO_SHORT(fieldName);
  }
  
  return null;
}