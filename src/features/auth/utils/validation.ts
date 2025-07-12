// Pure validation logic functions
export function isValidEmail(email: string): boolean {
  if (!email) return false;

  // 基本的な長さチェック（320文字はRFC 5321の制限）
  if (email.length > 320) return false;

  // @が1つだけ存在することを確認
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return false;

  // @で分割してローカル部とドメイン部を取得
  const parts = email.split('@');
  const localPart = parts[0];
  const domainPart = parts[1];

  // ローカル部とドメイン部が存在することを確認
  if (!localPart || !domainPart) return false;

  // ローカル部の長さチェック（64文字制限）
  if (localPart.length > 64) return false;

  // ローカル部の妥当性チェック
  const localRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  if (!localRegex.test(localPart)) return false;

  // ローカル部の先頭末尾にピリオドがないことを確認
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false;

  // ローカル部に連続するピリオドがないことを確認
  if (localPart.includes('..')) return false;

  // ドメイン部の妥当性チェック
  const domainRegex =
    /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!domainRegex.test(domainPart)) return false;

  // ドメイン部にピリオドが含まれていることを確認（TLDが必要）
  if (!domainPart.includes('.')) return false;

  // ドメイン部の先頭末尾にピリオドがないことを確認
  if (domainPart.startsWith('.') || domainPart.endsWith('.')) return false;

  // ドメイン部に連続するピリオドがないことを確認
  if (domainPart.includes('..')) return false;

  return true;
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

export function isPasswordMatching(
  password: string,
  confirmPassword: string
): boolean {
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
  NAME_TOO_SHORT: (fieldName: string) =>
    `${fieldName}は2文字以上で入力してください`,
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

export function validatePasswordConfirmation(
  password: string,
  confirmPassword: string
): string | null {
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
