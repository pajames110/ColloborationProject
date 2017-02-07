app.controller("chatController",function($scope,$http,ChatService,$rootScope)
		{
	console.log("in side chat ")
	$rootScope.userforum=true;
	$rootScope.userjobs=true;
	$rootScope.adminblog=false;
	$rootScope.adminforum=false;
	$rootScope.register=false;
	$rootScope.home=false;
	$rootScope.addjobs=false;
	$rootScope.login=false;
	$rootScope.jobs=false;
	$rootScope.blogs=true;
	$rootScope.allblogs=true;
	$rootScope.chat=true;
	$rootScope.friendslist=true;
	$rootScope.logout=true;
	console.log("in chat  controller");
	$scope.messages = [];
	  $scope.message = "";
	  $scope.max = 140;
	  
	  $scope.addMessage = function() {
		  console.log("in addmessage fn");
	    ChatService.send($scope.message);
	    $scope.message = "";
	  };

	  ChatService.receive().then(null, null, function(message) {
		  console.log("inside recieeve:"+message);
		  console.log("inside recieeve:"+$scope.message);
	    $scope.messages.push(message);
	  });
	}
		);

app.service("ChatService", function($q, $timeout) {
    
    var service = {}, listener = $q.defer(), socket = {
      client: null,
      stomp: null
    }, messageIds = [];
    
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/CollaborationBackend/chat";
    service.CHAT_TOPIC = "/topic/message";
    service.CHAT_BROKER = "/app/chat";
    
    service.receive = function() {
      return listener.promise;
    };
    
    service.send = function(message) {
    	console.log("in send function");
      var id = Math.floor(Math.random() * 1000000);
      socket.stomp.send(service.CHAT_BROKER, {
        priority: 9
      }, JSON.stringify({
        message: message,
        id: id
      }));
      messageIds.push(id);
    };
    
    var reconnect = function() {
      $timeout(function() {
        initialize();
      }, this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) {
      var message = JSON.parse(data), out = {};
      out.message = message.message;
      out.username = message.username;
      out.time = new Date(message.time);
      if (_.contains(messageIds, message.id)) {
        out.self = true;
        messageIds = _.remove(messageIds, message.id);
      }
      return out;
    };
    
    var startListener = function() {
      socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() {
      socket.client = new SockJS(service.SOCKET_URL);
      socket.stomp = Stomp.over(socket.client);
      socket.stomp.connect({}, startListener);
      socket.stomp.onclose = reconnect;
    };
    
    initialize();
    return service;
  });


