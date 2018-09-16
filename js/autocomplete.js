$(document).ready(function () {
    $('input#autocomplete-company').autocomplete({
        data: {
            "IFS": 'img/companies/ifs.png',
            "WSO2": 'img/companies/wso2.svg',
            "Google": 'img/companies/google.png'
        },
    });
    $('input#autocomplete-position').autocomplete({
        data: {
            "CEO": null,
            "Manager": null,
            "Senior Software Engineer": null,
            "Junior Software Engineer": null,
            "Associate Software Engineer": null,
            "Project Lead": null,
            "Business Analysist": null,
            "Intern": null
        },
    });
    $('input#autocomplete-school').autocomplete({
        data: {
            "Royal College, Colombo 07.": null,
            "Vishaka Vidyalaya, Colombo.": null,
            "Ananda College, Colombo 10.": null,
            "Nalanda College, Colombo 10.": null
        },
    });
    $('input#autocomplete-stream').autocomplete({
        data: {
            "Physical Science": null,
            "Bio Science": null,
            "Information & Communication Technology": null,
            "Art": null,
            "Commerce": null,
            "Bio Technology": null,
            "Engineering Technology": null
        },
    });
});