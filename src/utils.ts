export const dateStringToDate = (dateString: string) =>  {
//10/08/2018
const dateParts = dateString.split('/')
.map((value:string):number => {
    return parseInt(value);
});
// new Date(2020,0,1); ==> Wed Jan 01 2020 00:00:00
return new Date(dateParts[2],dateParts[1]-1,dateParts[0]);
}