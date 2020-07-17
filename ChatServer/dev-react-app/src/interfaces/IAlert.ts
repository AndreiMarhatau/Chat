export interface IAlert {
    type: AlertType,
    text: string
}

export enum AlertType{
    info = 'info',
    warning = 'warning',
    error = 'error',
    success = 'success'
}
