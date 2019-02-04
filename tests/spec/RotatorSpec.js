describe("Rotator", function() {
  var rotator;

  beforeEach(function() {
    rotator = new Rotator();
  });

  it("should be able to atach to a element", function() {
    rotator.attach('foo');
    expect(player.element).toEqual('foo');
  });

});
