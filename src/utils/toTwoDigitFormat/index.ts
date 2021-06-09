export const toTwoDigitFormat = (date: number) => {
    const hours = new Date(date);
    const timeOptions = { hour: "2-digit", minute: "2-digit" } as const;
    return Intl.DateTimeFormat('ru', timeOptions).format(hours);
}