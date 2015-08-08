'use strict';

angular.module('MyApp')
/*
Post Factory
*/
  .factory('Posts', function($http) {
    return{
      get: function(){
        return $http.get('http://jsonplaceholder.typicode.com/posts');
      },
      getOne: function(id){
        return $http.get('http://jsonplaceholder.typicode.com/posts/' + id);
      }
    }
  })
/*
Comments Factory
*/
  .factory('Comments', function($http){
    return{
      get: function(){
        return $http.get('http://jsonplaceholder.typicode.com/comments')
      },
      getOne: function(id){
        return $http.get('http://jsonplaceholder.typicode.com/comments?postId='+id);
      }
    }
  })
  .factory('DropDown', function(){
    return{
      getStates: function(){
        var states = ['AL - Alabama',
        'AK - Alaska',
        'AZ - Arizona',
        'AR - Arkansas',
        'CA - California',
        'CO - Colorado',
        'CT - Connecticut',
        'DE - Delaware',
        'FL - Florida',
        'GA - Georgia',
        'HI - Hawaii',
        'ID - Idaho',
        'IL - Illinois',
        'IN - Indiana',
        'IA - Iowa',
        'KS - Kansas',
        'KY - Kentucky',
        'LA - Louisiana',
        'ME - Maine',
        'MD - Maryland',
        'MA - Massachusetts',
        'MI - Michigan',
        'MS - Mississippi',
        'MO - Missouri',
        'MT - Montana',
        'NE - Nebraska',
        'NV - Nevada',
        'NH - New Hampshire',
        'NJ - New Jersey',
        'NM - New Mexico',
        'NY - New York',
        'NC - North Carolina',
        'ND - North Dakota',
        'OH - Ohio',
        'OK - Oklahoma',
        'PA - Pennsylvania',
        'RI - Rhode Island',
        'SC - South Carolina',
        'SD - South Dakota',
        'TN - Tennessee',
        'TX - Texas',
        'UT - Utah',
        'VT - Vermont',
        'VA - Virginia',
        'WA - Washington',
        'WV - West Virginia',
        'WI - Wisconsin',
        'WY - Wyoming'];
        return states;
      },
      getCities: function(city){
        var cities = {
          'AK - Alaska': ['Anchorage',
                        'Fairbanks',
                        'Juneau',
                        'Badger',
                        'Knik-Fairview',
                        'College',
                        'Tanaina',
                        'Lakes',
                        'Sitka',
                        'Ketchikan',
                        'Wasilla']
        }
        return cities[city];
      }
    }
  })
  .factory('Users', function($http){
        return{
          get: function(){
            return $http.get('http://jsonplaceholder.typicode.com/users');
          }
        }
  })
