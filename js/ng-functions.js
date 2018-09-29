angular.module('myApp', ['angularCroppie']).controller('mainCtrl', function ($scope) {
    $scope.EduQualList = [];
    $scope.ProQualList = [];
    $scope.keySkillList = [];
    $scope.cropped = {
        image: 'img/user.png'
    };

    $scope.imagestyle = {
        "background-image": "url({{cropped.image}})"
    }

    
    $('#inputUploadProfile').on('change', function () {
        var input = this;

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.$apply(function () {
                    $scope.cropped.source = e.target.result;
                });
            }
            reader.readAsDataURL(input.files[0]);
        }
    });

    $scope.SkillAdd = function () {
        if ($scope.skillInput == "" || $scope.skillLvlInput == "") {
            return;
        } else {
            $scope.keySkillList.push({
                ID : $scope.id,
                Skill: $scope.skillInput,
                Level: $scope.skillLvlInput
            });
        }
        $scope.skillInput = "";
        $scope.id++;
    }

    $scope.SkillRemove = function(t) {
        var oldList = $scope.keySkillList;
        $scope.keySkillList = [];
        angular.forEach(oldList, function(x) {
            if (x.ID!=t) $scope.keySkillList.push(x);
        });
    };


    $scope.EduQualAdd = function () {
        if ($scope.schoolInput == "" || $scope.SchoolExperienceInput == "") {
            return;
        } else {
            $scope.EduQualList.push({
                ID : $scope.id,
                School: $scope.schoolInput,
                EduSummary: $scope.SchoolExperienceInput
            });
        }
        $scope.schoolInput = "";
        $scope.SchoolExperienceInput = "";
        $scope.id++;
    };

    
    $scope.EduRemove = function(t) {
        var oldList = $scope.EduQualList;
        $scope.EduQualList = [];
        angular.forEach(oldList, function(x) {
            if (x.ID!=t) $scope.EduQualList.push(x);
        });
    };

    $scope.ProQualAdd = function () {
        if ($scope.CompanyInput == "" || $scope.DesignationInput == "" || $scope.CompanyExperienceInput == "") {
            return;
        } else {
            $scope.ProQualList.push({
                ID : $scope.id,
                Company: $scope.CompanyInput,
                Designation: $scope.DesignationInput,
                Experience: $scope.CompanyExperienceInput
            });
        }
        $scope.CompanyInput = "";
        $scope.DesignationInput = "";
        $scope.CompanyExperienceInput = "";
        $scope.id++;
    };

    $scope.ProRemove = function(t) {
        var oldList = $scope.ProQualList;
        $scope.ProQualList = [];
        angular.forEach(oldList, function(x) {
            if (x.ID!=t) $scope.ProQualList.push(x);
        });
    };

});