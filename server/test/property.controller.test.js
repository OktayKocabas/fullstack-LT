let chai = require("chai");
const should = chai.should();
let chaiHttp = require("chai-http");
let app = require("../index");

chai.use(chaiHttp);

describe("Property", () => {
  describe("/GET property", () => {
    it("it should GET all the properties", done => {
      chai
        .request(app)
        .get("/property")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("maxValue");
          res.body.should.have.property("property");
          done();
        });
    });
  });
});
