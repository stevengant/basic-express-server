'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {

  it('handles bad route', async () => {
    const response = await mockRequest.get('/foo');

    expect(response.status).toEqual(404);
  });

  // it('handles bad method', async () => {
  //   const response = await mockRequest.
  // })

  it('handles no name entered', async () => {
    const response = await mockRequest.get('/person?name=');

    expect(response.status).toEqual(500);
 
  });

  it('handles name provided', async () => {
    const response = await mockRequest.get('/person?name=steve');

    expect(response.status).toEqual(200);

  });

  it('handles route with query param', async () => {
    const response = await mockRequest.get('/person').query({name: 'Steve'});

    expect(response.body.person).toEqual(mockRequest.body.person);
  });

});