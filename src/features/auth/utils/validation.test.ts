import { describe, it, expect } from 'vitest';
import { isValidEmail, validateEmail, ERROR_MESSAGES } from './validation';

describe('isValidEmail', () => {
  it('空文字の場合はfalseを返す', () => {
    // Arrange
    const email = '';

    // Act
    const result = isValidEmail(email);

    // Assert
    expect(result).toBe(false);
  });

  it('nullまたはundefinedの場合はfalseを返す', () => {
    // Arrange & Act & Assert
    expect(isValidEmail(null as any)).toBe(false);
    expect(isValidEmail(undefined as any)).toBe(false);
  });

  it('有効なメールアドレスの場合はtrueを返す', () => {
    // Arrange
    const validEmails = [
      'test@example.com',
      'user.name@domain.co.jp',
      'user+tag@example.org',
      'user123@example-domain.com',
      'test.email+tag@example.com',
      'a@b.co',
      'user_name@example.com',
      'user-name@example.com',
      'test123@example123.com'
    ];

    validEmails.forEach(email => {
      // Act
      const result = isValidEmail(email);

      // Assert
      expect(result).toBe(true);
    });
  });

  it('無効なメールアドレスの場合はfalseを返す', () => {
    // Arrange
    const invalidEmails = [
      'plainaddress',
      '@missingdomain.com',
      'missing@.com',
      'missing@domain',
      'spaces @example.com',
      'user@',
      '@domain.com',
      'user..name@example.com',
      'user@domain..com',
      '.user@example.com',
      'user.@example.com',
      'user@.example.com',
      'user@example.',
      'user name@example.com',
      'user@ex ample.com'
    ];

    invalidEmails.forEach(email => {
      // Act
      const result = isValidEmail(email);

      // Assert
      expect(result).toBe(false);
    });
  });

  it('メールアドレスが320文字を超える場合はfalseを返す', () => {
    // Arrange
    const longDomain = 'a'.repeat(250) + '.com';
    const longEmail = 'test@' + longDomain;

    // Act
    const result = isValidEmail(longEmail);

    // Assert
    expect(result).toBe(false);
  });

  it('ローカル部が64文字を超える場合はfalseを返す', () => {
    // Arrange
    const longLocalPart = 'a'.repeat(65);
    const email = longLocalPart + '@example.com';

    // Act
    const result = isValidEmail(email);

    // Assert
    expect(result).toBe(false);
  });

  it('ローカル部が64文字ちょうどの場合はtrueを返す', () => {
    // Arrange
    const localPart = 'a'.repeat(64);
    const email = localPart + '@example.com';

    // Act
    const result = isValidEmail(email);

    // Assert
    expect(result).toBe(true);
  });

  it('特殊文字を含む有効なメールアドレスの場合はtrueを返す', () => {
    // Arrange
    const specialCharEmails = [
      'test.email@example.com',
      'test+tag@example.com',
      'test_underscore@example.com',
      'test-hyphen@example.com',
      'test123@example.com',
      'user!#$%&*+-/=?^_`{|}~@example.com'
    ];

    specialCharEmails.forEach(email => {
      // Act
      const result = isValidEmail(email);

      // Assert
      expect(result).toBe(true);
    });
  });
});

describe('validateEmail', () => {
  it('空文字の場合は必須エラーメッセージを返す', () => {
    // Arrange
    const email = '';

    // Act
    const result = validateEmail(email);

    // Assert
    expect(result).toBe(ERROR_MESSAGES.EMAIL_REQUIRED);
  });

  it('スペースのみの場合は必須エラーメッセージを返す', () => {
    // Arrange
    const email = '   ';

    // Act
    const result = validateEmail(email);

    // Assert
    expect(result).toBe(ERROR_MESSAGES.EMAIL_REQUIRED);
  });

  it('無効なメールアドレスの場合は無効エラーメッセージを返す', () => {
    // Arrange
    const email = 'invalid-email';

    // Act
    const result = validateEmail(email);

    // Assert
    expect(result).toBe(ERROR_MESSAGES.EMAIL_INVALID);
  });

  it('有効なメールアドレスの場合はnullを返す', () => {
    // Arrange
    const email = 'test@example.com';

    // Act
    const result = validateEmail(email);

    // Assert
    expect(result).toBe(null);
  });
});