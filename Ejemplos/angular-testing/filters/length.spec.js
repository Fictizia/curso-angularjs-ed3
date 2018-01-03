describe('length filter', function() {
  beforeEach(module('app'));

  var $filter, length;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  beforeEach(function(){
    length = $filter('length');
  });

  it('Shall return 0 when given null', function() {
    expect(length(null)).toEqual(0);
  });

  it('Shall return the correct value when given a string of chars', function() {
    expect(length('angular')).toEqual(7);
  });

  it('Shall return 0 when given []', function() {
    expect(length([])).toEqual(0);
  });

//  it('Shall return 0 when given {}', function() {
//    expect(length({})).toEqual(0);
//  });
});