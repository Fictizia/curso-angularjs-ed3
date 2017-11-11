describe('length filter', function() {
  beforeEach(module('app'));

  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('Shall return 0 when given null', function() {
    var length = $filter('length');
    expect(length(null)).toEqual(0);
  });

  it('Shall return the correct value when given a string of chars', function() {
    var length = $filter('length');
    expect(length('angular')).toEqual(7);
  });
});