'use strict';

app.factory('projectService',
    function ($http, baseServiceUrl, authService) {

        function getAllProjects(success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'projects',
                headers: authService.getAuthHeaders()
            };

            $http(request).success(function (data) {
                success(data);

            }).error(error);
        }

        return {
            getAllProjects: getAllProjects
        }
    }
);
