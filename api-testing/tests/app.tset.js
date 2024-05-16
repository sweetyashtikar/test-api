const request = require('supertest');
const app = require('../app');

describe('API Test Scenarios', () => {
  // Positive scenario: Test successful user retrieval
  it('should return user details for valid user ID', async () => {
    const response = await request(app).get('/api/users/123'); // Replace '123' with a valid user ID from your MongoDB database
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('name');
  });

  // Negative scenario: Test user not found
  it('should return error for invalid user ID', async () => {
    const response = await request(app).get('/api/users/invalid'); // Assuming 'invalid' is an invalid user ID
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'User not found' });
  });
});
