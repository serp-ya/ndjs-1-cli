/*
* Main function of Date output formatting
* @param{date} - required - incoming date, Date instance
* @return - Date instance
*/
const formatOutputDate = date => date.toISOString();

/*
* Change incoming date with add and sub modes. In sub mode by default
* @params{inputDate} - required - incoming date, Date instance
* @params{inputDate} - required - changes parameters,
* { d?: number, date?: number, m?: number, month?: number, y?: number, year?: number }
* @params{inputDate} - optional - add mode toggle parameter, boolean
* @return - new changed date, Date instance
*/
const changeDate = (inputDate, params, addMode) => {
    const mode = addMode ? 1 : -1;
    const { d = 0, date = 0, m = 0, month = 0, y = 0, year = 0 } = params;
    const currentYear = inputDate.getFullYear();
    const currentMonth = inputDate.getMonth();
    const currentDate = inputDate.getDate();

    return new Date(
        currentYear + (mode * (y || year)),
        currentMonth + (mode * (m || month)),
        currentDate + (mode * (d || date)),
    );
};

module.exports = {
    changeDate,
    formatOutputDate,
};