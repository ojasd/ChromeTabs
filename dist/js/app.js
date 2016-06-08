// Declare the chromeTabsApp module and its dependency 'ui.bootstrap'
var app = angular.module('chromeTabsApp', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
    .controller('AppCtrl', ['$scope', function ($scope) {
        // Tab counter
        var counter = 1;
        // Array to store the tabs
        $scope.tabs = [];

        // Add tab to the end of the array
        var addTab = function () {
            $scope.tabs.push({ title: 'Tab ' + counter, content: 'Tab ' + counter });
            counter++;
            $scope.tabs[$scope.tabs.length - 1].active = true;
        };

        // Remove tab by index
        var removeTab = function (event, index) {
            event.preventDefault();
            event.stopPropagation();
            $scope.tabs.splice(index, 1);
        };

        // Initialize the scope functions
        $scope.addTab    = addTab;
        $scope.removeTab = removeTab;

        // For demonstration added 5 tabs
        for (var i = 0; i < 5; i++) {
            addTab();
        }
    }])
    .directive('tabHighlight', [function () {
        return {
            restrict: 'A',
            link: function (scope, element) {

                var x, y, initial_background = '#c3d5e6';

                element
                    .removeAttr('style')
                    .mousemove(function (e) {
                        // Add highlight effect on inactive tabs
                        if(!element.hasClass('active'))
                        {
                            x = e.pageX - this.offsetLeft;
                            y = e.pageY - this.offsetTop;

                            // Set the background when mouse moves over inactive tabs
                            element
                                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
                        }
                    })
                    .mouseout(function () {
                        // Return the inital background color of the tab
                        element.removeAttr('style');
                    });
            }
        };
    }]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIHRoZSBjaHJvbWVUYWJzQXBwIG1vZHVsZSBhbmQgaXRzIGRlcGVuZGVuY3kgJ3VpLmJvb3RzdHJhcCdcclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjaHJvbWVUYWJzQXBwJywgWyd1aS5ib290c3RyYXAnXSk7XHJcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxyXG5hcHBcclxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgLy8gVGFiIGNvdW50ZXJcclxuICAgICAgICB2YXIgY291bnRlciA9IDE7XHJcbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHRhYnNcclxuICAgICAgICAkc2NvcGUudGFicyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGFiIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XHJcbiAgICAgICAgdmFyIGFkZFRhYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRhYnMucHVzaCh7IHRpdGxlOiAnVGFiICcgKyBjb3VudGVyLCBjb250ZW50OiAnVGFiICcgKyBjb3VudGVyIH0pO1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICRzY29wZS50YWJzWyRzY29wZS50YWJzLmxlbmd0aCAtIDFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRhYiBieSBpbmRleFxyXG4gICAgICAgIHZhciByZW1vdmVUYWIgPSBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAkc2NvcGUudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xyXG4gICAgICAgICRzY29wZS5hZGRUYWIgICAgPSBhZGRUYWI7XHJcbiAgICAgICAgJHNjb3BlLnJlbW92ZVRhYiA9IHJlbW92ZVRhYjtcclxuXHJcbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkZWQgNSB0YWJzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgYWRkVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pXHJcbiAgICAuZGlyZWN0aXZlKCd0YWJIaWdobGlnaHQnLCBbZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB4LCB5LCBpbml0aWFsX2JhY2tncm91bmQgPSAnI2MzZDVlNic7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgaGlnaGxpZ2h0IGVmZmVjdCBvbiBpbmFjdGl2ZSB0YWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGUucGFnZVggLSB0aGlzLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gZS5wYWdlWSAtIHRoaXMub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgYmFja2dyb3VuZCB3aGVuIG1vdXNlIG1vdmVzIG92ZXIgaW5hY3RpdmUgdGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAnLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJy13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb3VzZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgaW5pdGFsIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
