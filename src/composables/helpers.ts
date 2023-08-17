export const genID = () => {
    return "plf-id" + Math.random().toString(16).slice(2)
}

export const dateFormat = (dateString: any, dateStyle:any = 'short') => {
    try{
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('pt-BR', {dateStyle}).format(date);
    }catch(error){
        console.log('FORMATO DE DATA INVÁLIDO');
        return null;
    }
}