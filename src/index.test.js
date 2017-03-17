
var expect = require('chai').expect;
var numberplates = require("./index");

describe('norwegian numberplates', function() {
    it('UF12345 should be valid numberplate',function() {
        numberplates.validate("UF56180",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })
    it('Special (Electric) EL12345 numberplate should be valid',function() {
        numberplates.validate("EL12345",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })
    it('Special (Electric) EK12345 numberplate should be valid',function() {
        numberplates.validate("EK12345",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })
    it('Special (Hydrogen) HY12345 numberplate should be valid',function() {
        numberplates.validate("HY12345",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })
    it('Special(Gass) GA12345 numberplate should be valid ',function() {
        numberplates.validate("GA12345",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })
    it('UF123456 should NOT be valid numberplate',function() {
        numberplates.validate("UF123456",function(err,data) {
            expect(data.valid).to.be.false;
        })
    })
    it('UI12345 should NOT be valid numberplate',function() {
        numberplates.validate("UI12345",function(err,data) {
            expect(data.valid).to.be.false;
        })
    })
    it('UM12345 should NOT be valid numberplate',function() {
        numberplates.validate("UM12345",function(err,data) {
            expect(data.valid).to.be.false;
        })
    })
    it('UO12345 should NOT be valid numberplate',function() {
        numberplates.validate("UO12345",function(err,data) {
            expect(data.valid).to.be.false;
        })
    })
    it('UQ12345 should NOT be valid numberplate',function() {
        numberplates.validate("UQ12345",function(err,data) {
            expect(data.valid).to.be.false;
        })
    })
    it('Veteran numberplate T12345 should be valid',function() {
        numberplates.validate("T12345",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })
    it('Motorcycle numberplate AA1234 should be valid',function() {
        numberplates.validate("AA1234",function(err,data) {
            expect(data.valid).to.be.true;
        })
    })

});