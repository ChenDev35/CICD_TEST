import { expect } from 'chai';

describe('Array', ()=> {
    describe('#sort', ()=>{
        it('Should sort array by name', ()=>{
            var names = ['Dani', 'Moshe', 'Adam']
            expect(names.sort()).to.be.eql(['Adam', 'Dani', 'Moshe'])
        });
    });
});
