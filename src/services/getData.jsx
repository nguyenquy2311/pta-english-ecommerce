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