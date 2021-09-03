import moment from 'moment';

export const DateFormatter= (date,format ="YYYY-MM-DD")=>{
    return moment(date).format(format);
}