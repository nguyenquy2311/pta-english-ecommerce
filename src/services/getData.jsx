export function getCoursesData(){
    return  fetch('../../../mockdata/courses_data.json')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.log(error);
        });
}

export function getReasonData(){
    return fetch('../../../mockdata/reasons_data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        })
}

export function getResultData(){
    return fetch('../../../mockdata/results_data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        }) 
}