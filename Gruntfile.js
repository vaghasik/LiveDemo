module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Tasks
		serve: {
			options: {
				port: 9001
			}
		},
		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded',
		        sourcemap: 'none'
		      },
		      files: {                         // Dictionary of files
		       // 'WebContent/bom/app/css/bomPartdashboard.css': 'WebContent/bom/app/bom_part_dashboard_scss/main.scss' // 'destination': 'source'
		    	  'app/css/main.css': 'app/scss/main.scss'
		      }
		    }
		  }
		});
	
	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('appServe', ['serve']);//serve
	//http://localhost:9000/app/index.html#/about
	//http://localhost:9000/test/WebContent/index.html#/dms
	grunt.registerTask('sass2css', ['sass']);
	
};