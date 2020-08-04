describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

it('should update a server Table', function(){
  submitServerInfo();
  updateServerTable();
  
  let serverNewTr = document.querySelectorAll('#serverTable tbody tr td');

  expect(serverNewTr.length).toEqual(3);
  expect(serverNewTr[0].innerText).toEqual('Alice');
  expect(serverNewTr[1].innerText).toEqual('$0.00');
  expect(serverNewTr[2].innerText).toEqual('X');

})



  afterEach(function() {
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
