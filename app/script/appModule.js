var bomApp = angular.module('bomApp', ['ngRoute']);
		
		
bomApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
               
               $routeProvider
               .when('/home', {
            	   templateUrl: 'app/view/home_page.html'
               })
               /*.when('/home/part',{
            	   templateUrl: 'app/js/bom/bom_part_demo.html',
           	    controller: 'BomPpartDemoCtrl'
               })*/;
               
               $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('!');
        }]);
data = {};
data.statuses = {
		'All materials' : {
			count : 0,
			clickAction : "tileClick(key)",
			order : '1'
		},
		'Materials without prices' : {
			count : 0,
			clickAction : "tileClick(key)",
			order : '2'
		},
		'Materials without splits' : {
			count : 15,
			clickAction : "tileClick(key)",
			order : 3
		},
		'New materials' : {
			count : 0,
			clickAction : "tileClick(key)",
			order : 4
		},
		'Materials with expiring prices' : {
			count : 12,
			clickAction : "tileClick(key)",
			order : 5
		},
		'Engineering changes' : {
			count : 2,
			clickAction : "tileClick(key)",
			order : 6
		}
	};


var supplierNames = [ 'JCN Technologies', 'Software House International', '1-800-Flowers.com', 'LanSoft Technologies',
		'Papyrus Corporation', 'Mantell Office', 'John Woodman' ];
var catNames = [ 'Main Catalog', 'Office Supplies', 'Flowers Catalog', 'iPhone Catalog', 'SoftWare Catalog',
		'School Supplies' ];
var versions = [ 'V1', 'V2', 'V3', 'V4', 'V5' ];
var statuses = [ 'Activated', 'Deactivated', 'In Approval', 'Previewing', 'Deleted' ];
var dates = [ '01/21/2015 12:34 PM', '02/21/2014 10:34 AM', '05/21/2013 09:34 PM' ];

function getRandom(len) {
	return Math.floor(Math.random() * len);
}

var curLel = -1;
var levelNodes = [0, 0, 0];
var maxLel = 4;
var maxNode = 3;
var levelStep = 3;

bomApp.directive('fileModel', [ '$parse', function($parse) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function() {
				scope.$apply(function() {
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
} ]);

bomApp.constant('PartOwnerEditSchema', {
  type: 'object',
  properties: {
    owner: { type: 'string',
             "x-schema-form": {
                    "notitle": true,
                    "fieldHtmlClass": "typeahead",
                    "placeholder": "Please input name here..."
                }
    },
  }
});


bomApp.filter('bomHtmlFilter', function($sce) {
    return function(val) {
        if (val && typeof val != 'string') {
            val = val.toString();
        }
        return $sce.trustAsHtml(val);
    };
});