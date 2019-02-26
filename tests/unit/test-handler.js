'use strict';

const base = require('../test-base');
const handler = require('../../dist/handler.js');
const chai = require('chai');
const expect = chai.expect;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        saveProcessEnv();

        const result = await handler.handle(base.getEvent(), base.getContext());

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');
        let response = result.body;
        expect(response).to.be.an('string');
        expect(response).to.be.equal("Hello World. Environment variable Foo = \"BAR\"");
    });
});

function saveProcessEnv() {
    process.env.FOO = "BAR";
}
