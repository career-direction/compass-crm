import { describe, test, expect } from 'vitest';
import { GraphQLResolveInfo, FieldNode, SelectionSetNode } from 'graphql';
import { getSelectFields, getIncludeFields } from './utils';

describe('GraphQLユーティリティ関数', () => {
  describe('getSelectFields', () => {
    test('基本的なフィールド選択を正しく抽出する', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      // Act
      const result = getSelectFields(mockInfo as GraphQLResolveInfo);

      // Assert
      expect(result).toEqual({
        id: true,
        email: true,
        name: true,
      });
    });

    test('選択セットが存在しない場合は空オブジェクトを返す', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hello' },
            selectionSet: undefined,
          } as FieldNode,
        ],
      };

      // Act
      const result = getSelectFields(mockInfo as GraphQLResolveInfo);

      // Assert
      expect(result).toEqual({});
    });

    test('fieldNodesが存在しない場合は空オブジェクトを返す', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [],
      };

      // Act
      const result = getSelectFields(mockInfo as GraphQLResolveInfo);

      // Assert
      expect(result).toEqual({});
    });
  });

  describe('getIncludeFields', () => {
    test('リレーションフィールドが要求された場合のみincludeオブジェクトを生成する', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'user' } },
                { kind: 'Field', name: { kind: 'Name', value: 'profile' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nonRelation' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      const relationMap = {
        user: true,
        profile: true,
        sessions: { include: { items: true } },
      };

      // Act
      const result = getIncludeFields(mockInfo as GraphQLResolveInfo, relationMap);

      // Assert
      expect(result).toEqual({
        user: true,
        profile: true,
      });
    });

    test('リレーションフィールドが要求されない場合は空オブジェクトを返す', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      const relationMap = {
        user: true,
        profile: true,
        sessions: true,
      };

      // Act
      const result = getIncludeFields(mockInfo as GraphQLResolveInfo, relationMap);

      // Assert
      expect(result).toEqual({});
    });

    test('選択セットが存在しない場合は空オブジェクトを返す', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hello' },
            selectionSet: undefined,
          } as FieldNode,
        ],
      };

      const relationMap = {
        user: true,
        profile: true,
      };

      // Act
      const result = getIncludeFields(mockInfo as GraphQLResolveInfo, relationMap);

      // Assert
      expect(result).toEqual({});
    });

    test('複雑なリレーションマップでも正しく動作する', () => {
      // Arrange
      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sessions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'client' } },
                { kind: 'Field', name: { kind: 'Name', value: 'trainer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'items' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      const relationMap = {
        client: {
          include: {
            user: true,
            profile: true,
          },
        },
        trainer: {
          include: {
            user: true,
            profile: true,
          },
        },
        items: true,
      };

      // Act
      const result = getIncludeFields(mockInfo as GraphQLResolveInfo, relationMap);

      // Assert
      expect(result).toEqual({
        client: {
          include: {
            user: true,
            profile: true,
          },
        },
        trainer: {
          include: {
            user: true,
            profile: true,
          },
        },
        items: true,
      });
    });
  });
});
