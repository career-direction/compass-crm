export function validateEmail(email: string): string | null {
  if (!email) {
    return 'メールアドレスを入力してください';
  }
  
  const emailRegex = /^\S+@\S+$/;
  if (!emailRegex.test(email)) {
    return '正しいメールアドレスを入力してください';
  }
  
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) {
    return 'パスワードを入力してください';
  }
  
  if (password.length < 8) {
    return 'パスワードは8文字以上で入力してください';
  }
  
  return null;
}

export function validatePasswordConfirmation(password: string, confirmPassword: string): string | null {
  if (!confirmPassword) {
    return 'パスワード確認を入力してください';
  }
  
  if (password !== confirmPassword) {
    return 'パスワードが一致しません';
  }
  
  return null;
}

export function validateName(name: string, fieldName: string): string | null {
  if (!name) {
    return `${fieldName}を入力してください`;
  }
  
  if (name.length < 2) {
    return `${fieldName}は2文字以上で入力してください`;
  }
  
  return null;
}