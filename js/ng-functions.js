angular.module('myApp', ['angularCroppie']).controller('mainCtrl', function ($scope) {
    $scope.EduQualList = [];
    $scope.ProQualList = [];
    $scope.keySkillList = [];
    $scope.cropped = {
        image: 'img/user.png'
    };
    
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
                Skill: $scope.skillInput,
                Level: $scope.skillLvlInput
            });
        }
        $scope.skillInput = "";
        $scope.skillLvlInput = "";
    }


    $scope.EduQualAdd = function () {
        if ($scope.schoolInput == "" || $scope.SchoolExperienceInput == "") {
            return;
        } else {
            $scope.EduQualList.push({
                School: $scope.schoolInput,
                EduSummary: $scope.SchoolExperienceInput
            });
        }
        $scope.schoolInput = "";
        $scope.SchoolExperienceInput = "";
    };

    $scope.ProQualAdd = function () {
        if ($scope.CompanyInput == "" || $scope.DesignationInput == "" || $scope.CompanyExperienceInput == "") {
            return;
        } else {
            $scope.ProQualList.push({
                Company: $scope.CompanyInput,
                Designation: $scope.DesignationInput,
                Experience: $scope.CompanyExperienceInput
            });
        }
        $scope.CompanyInput = "";
        $scope.DesignationInput = "";
        $scope.CompanyExperienceInput = "";
    };


});