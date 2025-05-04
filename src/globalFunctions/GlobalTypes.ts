export interface registertype {
    user: null,
    isLoading: boolean,
    error:  string | null,
    success: boolean,
}

export interface registerFormType {
    username: string,
    email: string,
    password: string,
    confirm_password: string,
    work_experience: string,
}

export interface toastFunction {
    message: string,
    type: string
}