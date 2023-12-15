import { graphql } from 'graphql';
import schema from '../graphql/schemas';

describe('User tests', () => {
  test('Get users', async () => {});

  test('Create user', async () => {
    const createUserTest = `#graphql
    mutation {
      createUser(input: {name: "Jezreel de Andrade", username: "woragis", email: "jezreel.veloso@gmail.com", password: "2004"}) {
        name
        username
        email
        password
      }
    }
  `;
    const usersResult = await graphql(schema, createUserTest);
    const { data } = usersResult;
    expect(data).toEqual({ id: '1', name: 'John Doe' });
  });

  test('Get user', async () => {});
  test('Update user', async () => {});
  test('Delete user', async () => {});
});

describe('Product tests', () => {
  test('Get Products', async () => {});
  test('Get Product', async () => {});
  test('Add Product', async () => {});
  test('Edit Product', async () => {});
  test('Delete Product', async () => {});
});

describe('Review Tests', () => {
  test('Get Product Reviews', async () => {});
  test('Get Product Review', async () => {});
  test('Add Product Review', async () => {});
  test('Edit Product Review', async () => {});
  test('Delete Product Review', async () => {});
});
