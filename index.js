'use strict';

module.exports = {
  // name: require('./package').name
  name: 'my-first-addon',
  contentFor: function(type, config){
  	console.log('inside index.js.... type',type, config.environment);
  	if (type === "head") {
  		return '';
  		// return '<script src="https://fast.wistia.com/assets/external/E-v1.js"></script>';	
  	} else if (type === 'head-footer') {
  		return '';
  	} else if (type === 'body') {
  		return '';
  	} else if (type === 'body-footer') {
  		if (config.environment === 'test') {
  			return '';
  		} else {
  			console.log('inside type === body-footer => index.js....');
  		    return '<script src="https://fast.wistia.com/assets/external/E-v1.js"></script>';
  		}
  	}
  }
};
